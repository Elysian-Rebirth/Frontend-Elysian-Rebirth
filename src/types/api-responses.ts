// API Response Types

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: ApiError;
    meta?: ResponseMeta;
}

export interface ApiError {
    code: string;
    message: string;
    details?: unknown;
    timestamp?: string;
}

export interface ResponseMeta {
    requestId?: string;
    timestamp: string;
    version?: string;
}

export interface PaginatedResponse<T = unknown> {
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        total: number;
        totalPages: number;
    };
}

export interface LoginResponse {
    user: {
        id: string;
        email: string;
        name: string;
        roles: string[];
    };
    token: string;
    refreshToken?: string;
    expiresIn: number;
}

export interface ChatMessageResponse {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    thoughts?: string[];
    timestamp: string;
    conversationId: string;
}

export interface RagQueryResponse {
    results: Array<{
        id: string;
        content: string;
        source: string;
        score: number;
        metadata: Record<string, unknown>;
    }>;
    total: number;
    latency: number;
}

export interface DocumentResponse {
    id: string;
    title: string;
    content: string;
    version: number;
    pdfUrl?: string;
    lastModified: string;
    author?: string;
}

export interface WorkflowExecutionResponse {
    executionId: string;
    status: 'pending' | 'running' | 'completed' | 'failed';
    progress: number;
    outputs?: Record<string, unknown>;
    error?: string;
}
