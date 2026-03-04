import { create } from 'zustand';
import { User } from '@/lib/sdk/schemas/auth.schema';

interface AuthState {
    user: Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'role'> | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    isLoadingSession: boolean;
    login: (user: Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'role'>, accessToken?: string) => void;
    logout: () => void;
    setLoadingSession: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoadingSession: true, // Default true while checking HttpOnly cookie via /me
    login: (user, accessToken) => set({ user, accessToken: accessToken || null, isAuthenticated: true }),
    logout: () => set({ user: null, accessToken: null, isAuthenticated: false }),
    setLoadingSession: (isLoadingSession) => set({ isLoadingSession }),
}));
