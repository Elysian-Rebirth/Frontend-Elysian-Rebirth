/**
 * DashboardShell.tsx — Container Component (Data Orchestration)
 *
 * Architecture:
 * - This is the ONLY component that calls React Query hooks
 * - All data is passed DOWN to presentation components via typed props
 * - Progressive Rendering: each component gets its own isLoading,
 *   fast APIs render immediately, slow ones load independently
 * - Pipeline tab filter is URL-driven via searchParams
 */
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Home } from 'lucide-react';

// Data hooks
import { useDashboardStats, useChartData, useActivityFeed } from '@/queries/dashboard.queries';
import { useWorkflows } from '@/queries/workflow.queries';
import { useAuthStore } from '@/store/authStore';
import { useTranslation } from '@/hooks/useTranslation';

// Presentation components (progressive rendering — each has own skeleton)
import { MetricCard } from './MetricCard';
import { AnalyticsChart } from './AnalyticsChart';
import { PriorityTasks } from './PriorityTasks';
import { AiChatWidget } from './AiChatWidget';
import { PipelineTable } from './PipelineTable';
import type { PipelineRow } from './PipelineTable';
import type { ChartDataPoint } from './AnalyticsChart';
import type { ActivityItem } from './PriorityTasks';

// Onboarding widget (kept from previous design)
import { OnboardingWidget } from '@/components/onboarding/OnboardingWidget';

// Inner component that uses useSearchParams (must be wrapped in Suspense)
function DashboardContent() {
    const { t } = useTranslation();
    const searchParams = useSearchParams();
    const statusFilter = searchParams.get('status') ?? 'all';

    // ── Auth State (for greeting) ──
    const user = useAuthStore(state => state.user);

    // ── Data Hooks (independent — each renders progressively) ──
    const { data: stats, isLoading: statsLoading } = useDashboardStats();
    const { data: chartData, isLoading: chartLoading } = useChartData();
    const { data: activities, isLoading: activitiesLoading } = useActivityFeed();
    const { data: pipelines, isLoading: pipelinesLoading } = useWorkflows({ status: statusFilter });

    // ── Derive KPI deltas ──
    const docsCount = stats?.docs ?? 0;
    const prevDocs = stats?.previousDocs ?? 0;
    const docsDelta = docsCount - prevDocs;

    const apiCallsCount = stats?.apiCalls ?? 0;
    const prevApiCalls = stats?.previousApiCalls ?? 0;
    const apiDelta = apiCallsCount - prevApiCalls;

    const pipelineCount = stats?.activePipelines ?? (pipelines?.length ?? 0);
    const prevPipelines = stats?.previousActivePipelines ?? 0;
    const pipelineDelta = pipelineCount - prevPipelines;

    // ── Transform data for presentation components ──
    const chartPoints: ChartDataPoint[] = (chartData ?? []).map(d => ({
        day: d.day,
        tokens: d.tokens,
        projected: d.projected,
    }));

    const activityItems: ActivityItem[] = (activities ?? []).map(a => ({
        id: a.id,
        type: a.type,
        title: a.title,
        description: a.description,
        timestamp: a.timestamp,
        status: a.status,
    }));

    const pipelineRows: PipelineRow[] = (pipelines ?? []).map(p => ({
        id: p.id,
        name: p.name,
        status: p.status,
        lastRun: p.lastRun,
    }));

    return (
        <>
            <OnboardingWidget />

            <div className="w-full overflow-hidden p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">
                {/* ── Header ── */}
                <div id="dashboard-header" className="pt-2 md:pt-0">
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                        <Home className="w-4 h-4" />
                        <span>/</span>
                        <span>{t.dashboard.breadcrumb}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                        {t.dashboard.heading}
                    </h1>
                    <p className="text-sm md:text-base text-slate-400 mt-1">
                        {t.dashboard.description}
                    </p>
                </div>

                {/* ── 2-Column Layout ── */}
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">

                    {/* ── Main Content Column ── */}
                    <div className="space-y-6 min-w-0">

                        {/* Zone A: KPI Metric Cards (3 cards) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <MetricCard
                                label="Docs Indexed"
                                value={docsCount}
                                previousValue={prevDocs}
                                delta={docsDelta}
                                isLoading={statsLoading}
                            />
                            <MetricCard
                                label="API Calls"
                                value={apiCallsCount.toLocaleString()}
                                previousValue={prevApiCalls.toLocaleString()}
                                delta={apiDelta}
                                isLoading={statsLoading}
                            />
                            <MetricCard
                                label="Active Pipelines"
                                value={pipelineCount}
                                previousValue={prevPipelines}
                                delta={pipelineDelta}
                                isLoading={statsLoading}
                            />
                        </div>

                        {/* Zone B: Analytics Chart */}
                        <AnalyticsChart
                            data={chartPoints}
                            isLoading={chartLoading}
                        />

                        {/* Zone E: Pipeline Table (URL-driven tab filters) */}
                        <PipelineTable
                            pipelines={pipelineRows}
                            isLoading={pipelinesLoading}
                        />
                    </div>

                    {/* ── Right Sidebar Column ── */}
                    <div className="space-y-6 min-w-0">
                        {/* Zone C: Priority Tasks / Activity Feed */}
                        <PriorityTasks
                            activities={activityItems}
                            isLoading={activitiesLoading}
                        />

                        {/* Zone D: AI Chat Widget */}
                        <AiChatWidget
                            userName={user?.name}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

// ── Exported Shell (wraps inner content in Suspense for useSearchParams) ──
export function DashboardShell() {
    return (
        <Suspense fallback={null}>
            <DashboardContent />
        </Suspense>
    );
}
