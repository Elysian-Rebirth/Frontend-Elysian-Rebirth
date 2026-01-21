/**
 * src/queries/workflow.queries.ts
 * 
 * Query Layer
 * Responsibilities:
 * - Define Query Keys (Hierarchical & Deterministic)
 * - Wrap useQuery (Thin Hook)
 * - Configure Cache Policy (StaleTime, Retry)
 * - connect Service Layer
 */

import { useQuery } from '@tanstack/react-query';
import { fetchWorkflows } from '@/services/workflow.service';

// Enterprise Query Key Factory
// Rules:
// 1. Hierarchical (All -> List -> Detail)
// 2. Deterministic (Same params = Same key)
export const workflowKeys = {
    all: ['workflows'] as const,
    lists: () => [...workflowKeys.all, 'list'] as const,
    detail: (id: string) => [...workflowKeys.all, 'detail', id] as const,
};

/**
 * useWorkflows Hook
 * Fetches list of workflows.
 * 
 * Policy:
 * - StaleTime: 30 seconds (Data considered fresh for 30s)
 * - Retry: 1 (Retry once on failure before showing error)
 */
export function useWorkflows() {
    return useQuery({
        queryKey: workflowKeys.lists(),
        queryFn: fetchWorkflows,
        staleTime: 30 * 1000,
        retry: 1,
        // Note: No 'select' or business logic here. Pure data fetching.
    });
}
