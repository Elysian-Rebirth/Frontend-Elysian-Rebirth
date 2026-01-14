'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ProtectedProps {
    children: React.ReactNode;
    requiredRoles?: string[];
    fallback?: React.ReactNode;
}

export function Protected({ children, requiredRoles, fallback }: ProtectedProps) {
    const { isAuthenticated, isLoading, hasAnyRole } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            // Save intended destination
            sessionStorage.setItem('redirect_after_login', pathname);
            router.push('/login');
        }
    }, [isAuthenticated, isLoading, router, pathname]);

    // Show loading spinner while checking auth
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    // Not authenticated - redirect will happen in useEffect
    if (!isAuthenticated) {
        return null;
    }

    // Check role requirements
    if (requiredRoles && !hasAnyRole(requiredRoles)) {
        return (
            fallback || (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
                        <p className="text-muted-foreground">You don't have permission to access this page.</p>
                    </div>
                </div>
            )
        );
    }

    return <>{children}</>;
}
