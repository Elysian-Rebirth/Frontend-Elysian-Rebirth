export interface ApiResponse<T = any> {
    data: T;
    status: number;
    message?: string;
}

export interface ApiError {
    message: string;
    code?: string;
    details?: any;
}

export interface PaginationParams {
    page: number;
    pageSize: number;
}

export interface PaginatedResponse<T = any> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
