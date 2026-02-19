// Enterprise Dashboard Shell
// Implements strict 12-column grid architecture as requested by Technical Advisor

'use client';

import { Suspense } from 'react';
import { Home, Calendar, Download } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useTranslation } from '@/hooks/useTranslation';

// Queries
import { useDashboardStats, useChartData, useActivityFeed } from '@/queries/dashboard.queries';
import { useWorkflows } from '@/queries/workflow.queries';

// Enterprise Components
import { PrimaryKpiCard } from './enterprise/PrimaryKpiCard';
import { TokenUsageChartCard, ChartDataPoint } from './enterprise/TokenUsageChartCard';
import { SystemHealthCard } from './enterprise/SystemHealthCard';
import { MasterPipelineTable, PipelineRow } from './enterprise/MasterPipelineTable';
import { AiCopilotWidget } from './enterprise/AiCopilotWidget';
import { PriorityActionQueue, ActionItem } from './enterprise/PriorityActionQueue';
// New "Expansion" Components
import { CostForecaster } from './enterprise/CostForecaster';
import { LatencyMonitor } from './enterprise/LatencyMonitor';
import { AuditLogWidget } from './enterprise/AuditLogWidget';
import type { CostMetric, LatencyMetric, AuditLog } from '@/types/api-responses';

interface DashboardShellProps {
    initialStatusFilter?: string;
}

export function DashboardShell({ initialStatusFilter = 'all' }: DashboardShellProps) {
    const { t } = useTranslation();
    const user = useAuthStore(state => state.user);

    // Data Hooks
    const { data: stats, isLoading: statsLoading } = useDashboardStats();
    const { data: chartData, isLoading: chartLoading } = useChartData();
    const { data: activities, isLoading: activitiesLoading } = useActivityFeed();
    const { data: pipelines, isLoading: pipelinesLoading } = useWorkflows({ status: initialStatusFilter });

    // Transform Data
    const chartPoints: ChartDataPoint[] = (chartData ?? []).map(d => ({
        day: d.day,
        tokens: d.tokens,
        projected: d.projected,
    }));

    const activityItems: ActionItem[] = (activities ?? []).map(a => ({
        id: a.id,
        title: a.title,
        description: a.description,
        timestamp: a.timestamp,
        type: 'system', // Mock type mapping
        priority: 'medium', // Mock priority
    }));

    const pipelineRows: PipelineRow[] = (pipelines ?? []).map(p => ({
        id: p.id,
        name: p.name,
        status: p.status,
        lastRun: p.lastRun,
        type: 'RAG Pipeline' // Mock
    }));

    // Mock Enterprise Data (In real app, fetch via React Query)
    const costData: CostMetric[] = Array.from({ length: 14 }, (_, i) => ({
        date: `Oct ${i + 1}`,
        amount: Math.floor(Math.random() * 500) + 100,
        currency: 'USD',
        budget: 5000,
        projected: 3500 + (i * 150)
    }));

    const latencyData: LatencyMetric[] = Array.from({ length: 24 }, (_, i) => ({
        timestamp: `${i}:00`,
        p95: 150 + Math.random() * 50,
        p99: 300 + Math.random() * 200,
        errors: 0
    }));

    const auditLogs: AuditLog[] = [
        { id: '1', user: { name: 'Alice Admin', email: 'alice@elysian.com' }, action: 'Updated API Key', target: 'Prod-Key-01', timestamp: new Date().toISOString(), status: 'success' },
        { id: '2', user: { name: 'Bob DevOps', email: 'bob@elysian.com' }, action: 'Rollback Pipeline', target: 'RAG-Flow-v2', timestamp: new Date(Date.now() - 3600000).toISOString(), status: 'success' },
        { id: '3', user: { name: 'Charlie Sec', email: 'charlie@elysian.com' }, action: 'Force Rotate', target: 'Db-Creds', timestamp: new Date(Date.now() - 7200000).toISOString(), status: 'failure' },
    ];

    return (
        <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
            {/* Header Section */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Overview</h1>
                    <p className="text-sm text-slate-500">Welcome back, {user?.name || 'Admin'}. Here is your platform status.</p>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>Last 30 Days</span>
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            {/* Main Enterprise 12-Column Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 xl:gap-8">

                {/* ========================================== */}
                {/* LEFT COLUMN: MAIN ANALYTICS (Span 8 cols)  */}
                {/* ========================================== */}
                <div className="flex min-w-0 flex-col space-y-6 lg:col-span-7 xl:col-span-8">

                    {/* 1. Primary KPIs (Row of 3 or 4 small cards) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <PrimaryKpiCard
                            label="Total Documents"
                            value={(stats?.docs ?? 0).toLocaleString()}
                            delta={12}
                            isLoading={statsLoading}
                        />
                        <PrimaryKpiCard
                            label="API Calls"
                            value={(stats?.apiCalls ?? 0).toLocaleString()}
                            delta={-2.4}
                            isLoading={statsLoading}
                        />
                        <PrimaryKpiCard
                            label="Active Pipelines"
                            value={stats?.activePipelines ?? 0}
                            delta={5}
                            isLoading={statsLoading}
                        />
                    </div>

                    {/* 2. Secondary Analytics (Two charts side-by-side) */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Token Usage Area Chart */}
                        <div className="w-full min-w-0">
                            <TokenUsageChartCard data={chartPoints} isLoading={chartLoading} />
                        </div>

                        {/* System Health Radial */}
                        <div className="w-full min-w-0">
                            <SystemHealthCard isLoading={statsLoading} />
                        </div>
                    </div>

                    {/* 3. Cost Forecaster (Full Width) */}
                    <div className="w-full min-w-0">
                        <CostForecaster data={costData} isLoading={statsLoading} />
                    </div>

                    {/* 4. Latency Monitor (Full Width) */}
                    <div className="w-full min-w-0">
                        <LatencyMonitor data={latencyData} isLoading={statsLoading} />
                    </div>

                    {/* 5. Main Pipeline Table (Full width) */}
                    <div className="w-full">
                        <MasterPipelineTable
                            pipelines={pipelineRows}
                            isLoading={pipelinesLoading}
                            activeTab={initialStatusFilter}
                        />
                    </div>

                    {/* 6. Audit Logs (Full Width) */}
                    <div className="w-full">
                        <AuditLogWidget logs={auditLogs} isLoading={statsLoading} />
                    </div>

                </div>

                {/* ========================================== */}
                {/* RIGHT COLUMN: ASSISTANT & TASKS (Span 4 cols) */}
                {/* ========================================== */}
                <div className="flex w-full flex-col space-y-6 lg:col-span-5 xl:col-span-4 sticky top-6 self-start h-[calc(100vh-2rem)] overflow-y-auto no-scrollbar pb-6">

                    {/* 1. AI Assistant Widget (Persistent, highly prominent) */}
                    <div className="shrink-0">
                        <AiCopilotWidget />
                    </div>

                    {/* 2. Activity / Priority Queue */}
                    <div className="shrink-0">
                        <PriorityActionQueue actions={activityItems} isLoading={activitiesLoading} />
                    </div>

                </div>
            </div>
        </div>
    );
}

// Re-export as a Server Component compatible export 
// (though it's 'use client', it's safe to be rendered by Page)
