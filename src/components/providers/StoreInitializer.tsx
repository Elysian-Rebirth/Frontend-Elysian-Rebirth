'use client';

import { useRef } from 'react';
import { useAuthStore } from '@/store/authStore';
import { User } from '@/lib/sdk/schemas/auth.schema';

interface StoreInitializerProps {
    user: Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'role'>;
    accessToken?: string;
}

/**
 * StoreInitializer is strictly a vessel intended to catch user data 
 * fetched by a Server Component (SSR) and immediately inject it into 
 * the singleton Zustand memory store during the initial Client Component mount.
 * 
 * This obliterates the Client-Side Waterfall by rendering the UI fully authenticated on Frame 1.
 */
export function StoreInitializer({ user, accessToken }: StoreInitializerProps) {
    const initialized = useRef(false);

    if (!initialized.current) {
        // Only hydrate from SSR if the store is completely empty (fresh full-page load)
        // If it's already authenticated, it means this is a client-side soft navigation
        // and Next.js might be feeding us stale Router Cache props. Client memory wins.
        if (!useAuthStore.getState().isAuthenticated) {
            useAuthStore.getState().login(user, accessToken);
            useAuthStore.getState().setLoadingSession(false);
        }
        initialized.current = true;
    }

    // It renders nothing. It strictly operates on memory.
    return null;
}
