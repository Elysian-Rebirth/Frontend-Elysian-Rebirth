/**
 * dashboard.queries.ts — React Query hooks for dashboard data
 *
 * All dashboard data fetching lives here.
 * DashboardShell calls these hooks and passes results as props.
 * Presentation components never call these directly.
 */
import { useQuery } from '@tanstack/react-query';

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
            return {
                docs: 1284,
                apiCalls: 48200,
                errorRate: 0.08,
                successRate: 99.92,
                growth: 24,
            } as DashboardStats;
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
            return [
                { day: "Mon", tokens: 1200 },
                { day: "Tue", tokens: 3500 },
                { day: "Wed", tokens: 2100 },
                { day: "Thu", tokens: 4800 },
                { day: "Fri", tokens: 3800 },
                { day: "Sat", tokens: 1500 },
                { day: "Sun", tokens: 900 },
            ] as ChartDataPoint[];
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
            return [
                { id: '1', type: 'pipeline', title: 'Knowledge Sync', description: 'Indexed 15 new documents from Google Drive.', timestamp: '10 mins ago', status: 'completed' },
                { id: '2', type: 'system', title: 'System Upgrade', description: 'Core LLM models updated to v2.4.', timestamp: '1 hour ago', status: 'completed' },
            ] as ActivityItem[];
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
            return [
                { id: '1', name: 'Invoice Processing', status: 'active', lastRun: '2 mins ago', accuracy: '99.8%' },
                { id: '2', name: 'Contract Summary', status: 'active', lastRun: '15 mins ago', accuracy: '98.5%' },
                { id: '3', name: 'Customer Support Bot', status: 'paused', lastRun: '1 hour ago', accuracy: '94.2%' },
            ] as Pipeline[];
        },
        staleTime: 30_000,
    });
}
