'use client';

import { useEffect, useState } from 'react';

export function MockProvider({ children }: { children: React.ReactNode }) {
    const [mockingEnabled, setMockingEnabled] = useState(false);

    useEffect(() => {
        // Only enable MSW in development or when explicitly requested
        // In this project context, we always want it for the "fake" backend
        async function enableApiMocking() {
            if (process.env.NODE_ENV === 'development' || true) {
                const { initMocks } = await import('@/mocks');
                await initMocks();
                setMockingEnabled(true);
            }
        }

        enableApiMocking();
    }, []);

    if (!mockingEnabled && process.env.NODE_ENV === 'development') {
        return null; // Don't render anything until MSW is ready in dev
    }

    return <>{children}</>;
}
