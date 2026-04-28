import { http } from '@/lib/http';
import { User } from '@/lib/sdk/schemas/auth.schema';

export interface UpdateUserDTO {
    name?: string;
    avatar_url?: string;
}

export interface UpdateUserResponse {
    message: string;
    user: {
        id: string;
        email: string;
        name: string;
        avatar_url?: string;
        is_active: boolean;
        created_at: string;
    };
}

export const userService = {
    /**
     * Updates the authenticated user's profile
     */
    updateProfile: async (data: UpdateUserDTO): Promise<UpdateUserResponse> => {
        return http.put<UpdateUserResponse>('/api/v1/users/me', data);
    },

    /**
     * Gets the current authenticated user's fresh data from the backend
     */
    getMe: async (): Promise<{ status: string; data: User }> => {
        return http.get<{ status: string; data: User }>('/api/v1/users/me');
    }
};
