'use client';

import { Protected } from '@/components/Protected';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/apiClient';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { KnowledgeHealth } from '@/components/dashboard/KnowledgeHealth';
import { PipelineList } from '@/components/dashboard/PipelineList';

export default function DashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [pipelines, setPipelines] = useState<any[]>([]);

    useEffect(() => {
        // Fallback data if API fails or for demo
        const mockStats = {
            totalDocs: 1250,
            totalApiCalls: 8540,
            errorRate: 0.05,
            knowledgeHealth: 98
        };
        const mockPipelines = [
            { id: '1', name: 'Document Ingestion Agent', status: 'running', lastRun: '2 mins ago' },
            { id: '2', name: 'Customer Support Rag', status: 'completed', lastRun: '1 hour ago' },
            { id: '3', name: 'Sales Analysis', status: 'idle', lastRun: '1 day ago' },
        ];

        apiClient.getDashboardStats()
            .then(setStats)
            .catch(() => setStats(mockStats)); // Fallback

        apiClient.getActivePipelines()
            .then(setPipelines)
            .catch(() => setPipelines(mockPipelines)); // Fallback
    }, []);

    return (
        <Protected>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h2>
                    <p className="text-muted-foreground">
                        Overview of your enterprise AI platform status.
                    </p>
                </div>

                <DashboardStats
                    docs={stats?.totalDocs || 0}
                    apiCalls={stats?.totalApiCalls || 0}
                    errorRate={stats?.errorRate || 0}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <PipelineList pipelines={pipelines} />

                    <KnowledgeHealth
                        health={stats?.knowledgeHealth || 0}
                        totalVectors="1.4M"
                        lastSync="Just now"
                    />
                </div>
            </div>
        </Protected>
    );
}
