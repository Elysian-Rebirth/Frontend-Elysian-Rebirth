/**
 * src/queries/tenant.queries.ts
 *
 * Tenant Query Layer
 * Policy: staleTime Infinity — tenants never change mid-session
 */

import { useQuery } from '@tanstack/react-query';
import { fetchTenants, fetchTenantById } from '@/services/tenant.service';

export const tenantKeys = {
    all: ['tenants'] as const,
    list: () => [...tenantKeys.all, 'list'] as const,
    detail: (id: string) => [...tenantKeys.all, 'detail', id] as const,
};

/**
 * useTenants — List available tenants
 * Policy: Infinity staleTime — tenant data is effectively static within a session
 */
export function useTenants() {
    return useQuery({
        queryKey: tenantKeys.list(),
        queryFn: fetchTenants,
        staleTime: Infinity,   // Never refetch during session
        gcTime: Infinity,      // Keep in cache for entire session lifetime
    });
}

/**
 * useTenantDetail — Single tenant by ID
 */
export function useTenantDetail(id: string) {
    return useQuery({
        queryKey: tenantKeys.detail(id),
        queryFn: () => fetchTenantById(id),
        enabled: !!id,
        staleTime: Infinity,
        gcTime: Infinity,
    });
}
