import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { config } from './config';
import { globalDegradation } from './globalDegradation';

class HttpClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: config.api.baseURL,
            timeout: config.api.timeout,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors() {
        // Request interceptor
        this.client.interceptors.request.use(
            (config) => {
                // Add auth token if available
                const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor — detect service degradation from organic failures
        this.client.interceptors.response.use(
            (response) => {
                // Successful response → clear any degraded state for this service
                globalDegradation.clearFor(response.config.url);
                return response;
            },
            (error) => {
                const status = error.response?.status;

                if (status === 401) {
                    // Redirect to login on unauthorized
                    if (typeof window !== 'undefined') {
                        window.location.href = '/login';
                    }
                }

                // Detect service degradation from organic API failures
                if (status === 503 || status === 504 || status === 429) {
                    globalDegradation.markDegraded(error.config?.url, status);
                }

                return Promise.reject(error);
            }
        );
    }

    async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.get(url, config);
        return response.data;
    }

    async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.post(url, data, config);
        return response.data;
    }

    async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.put(url, data, config);
        return response.data;
    }

    async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.delete(url, config);
        return response.data;
    }

    async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.patch(url, data, config);
        return response.data;
    }
}

export const http = new HttpClient();
