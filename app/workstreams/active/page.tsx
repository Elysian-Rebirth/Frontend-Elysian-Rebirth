'use client';

import { Activity, Clock, Zap, Loader2 } from 'lucide-react';
import { MetaChipsRow } from '@/components/workstreams/MetaChipsRow';

import { PipelineBoard } from '@/components/workstreams/PipelineBoard';
import { TimelineGantt } from '@/components/workstreams/TimelineGantt';
import { useActiveWorkstreams } from '@/hooks/useWorkstreams';

export default function ActiveWorkstreamsPage() {
    const { data: workstreams, isLoading, isError } = useActiveWorkstreams();

    if (isLoading) {
        return (
            <div className="w-full h-[60vh] flex flex-col items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
                <p className="text-sm text-slate-500">Initializing Core AI Engine...</p>
            </div>
        );
    }

    if (isError || !workstreams) {
        return (
            <div className="w-full h-[60vh] flex flex-col items-center justify-center">
                <p className="text-sm text-red-500">Failed to load active pipelines. Please check workflow service.</p>
            </div>
        );
    }

    // Dynamic metrics based on TanStack query data
    const globalMetrics = [
        { label: 'Active Pipelines', value: workstreams.raw.length.toString(), icon: <Activity className="h-3.5 w-3.5" /> },
        { label: 'Tokens Used (Last 24h)', value: `${(workstreams.boardData.reduce((acc, t) => acc + t.tokensUsed, 0) / 1000).toFixed(1)}k`, icon: <Zap className="h-3.5 w-3.5 text-amber-500" /> },
        { label: 'Avg Execution Time', value: '18s', icon: <Clock className="h-3.5 w-3.5 text-blue-500" /> }
    ];

    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Active Workstreams</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Monitor currently running AI agent pipelines across all tenants.
                    </p>
                </div>

                {/* Global Metrics Row using Glassmorphism */}
                <MetaChipsRow items={globalMetrics} />
            </div>

            {/* Week 2 & 3: Interactive Boards connected to workflow service */}
            <div className="mb-10 w-full animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
                <TimelineGantt tasks={workstreams.ganttData} />
            </div>

            <div className="w-full animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Operational Pipeline</h2>
                <p className="text-xs text-slate-500 mb-4">Drag and drop agents between pipeline stages. Operations execute instantly based on column context.</p>
                <PipelineBoard initialTasks={workstreams.boardData} />
            </div>
        </div>
    );
}
