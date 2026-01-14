export type AuthProvider = 'password' | 'google' | 'azure' | 'okta';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    roles: string[];
    tenantId?: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    provider?: AuthProvider;
}

export interface LoginCredentials {
    email: string;
    password: string;
    provider?: AuthProvider;
}

export interface LoginResponse {
    user: User;
    token: string;
    refreshToken?: string;
    expiresIn: number;
}

export interface OAuthConfig {
    clientId: string;
    redirectUri: string;
    scope: string;
}
