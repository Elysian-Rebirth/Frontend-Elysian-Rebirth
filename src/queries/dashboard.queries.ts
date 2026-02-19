/**
 * dashboard.queries.ts — React Query hooks for dashboard data
 *
 * All dashboard data fetching lives here.
 * DashboardShell calls these hooks and passes results as props.
 * Presentation components never call these directly.
 */
import { useQuery } from '@tanstack/react-query';
import { http } from '@/lib/http';

// ── Stats (Zone A — KPI Metric Cards) ──

export interface DashboardStats {
    docs: number;
    apiCalls: number;
    errorRate: number;
    successRate: number;
    growth: number;
    // Delta fields for comparison
    previousDocs?: number;
    previousApiCalls?: number;
    activePipelines?: number;
    previousActivePipelines?: number;
}

export function useDashboardStats() {
    return useQuery({
        queryKey: ['dashboard', 'stats'],
        queryFn: async () => {
            const response = await http.get<{ status: string; data: DashboardStats }>('/api/dashboard/stats');
            return response.data;
        },
        staleTime: 30_000,
    });
}

// ── Chart Data (Zone B — Analytics Chart) ──

export interface ChartDataPoint {
    day: string;
    tokens: number;
    projected?: number;
}

export function useChartData() {
    return useQuery({
        queryKey: ['dashboard', 'chart'],
        queryFn: async () => {
            const response = await http.get<{ status: string; data: ChartDataPoint[] }>('/api/dashboard/chart');
            return response.data;
        },
        staleTime: 30_000,
    });
}

// ── Activity Feed (Zone C — Priority Tasks) ──

export interface ActivityItem {
    id: string;
    type: 'pipeline' | 'knowledge' | 'chat' | 'system';
    title: string;
    description: string;
    timestamp: string;
    status?: string;
}

export function useActivityFeed() {
    return useQuery({
        queryKey: ['dashboard', 'activity'],
        queryFn: async () => {
            const response = await http.get<{ status: string; data: ActivityItem[] }>('/api/dashboard/activity');
            return response.data;
        },
        staleTime: 30_000,
    });
}

// ── Pipelines (Zone E — Pipeline Table, kept for backward compat) ──

export interface Pipeline {
    id: string;
    name: string;
    status: 'active' | 'paused' | 'failed';
    lastRun: string;
    accuracy: string;
}

export function useActivePipelines() {
    return useQuery({
        queryKey: ['dashboard', 'pipelines'],
        queryFn: async () => {
            const response = await http.get<{ status: string; data: Pipeline[] }>('/api/dashboard/pipelines');
            return response.data;
        },
        staleTime: 30_000,
    });
}
