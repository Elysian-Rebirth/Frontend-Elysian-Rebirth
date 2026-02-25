import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchWorkflows, getExecution, executeWorkflow, Workflow, Execution } from '@/services/workflow.service';
import { TimelineAgentTask, AgentTaskStatus as GanttTaskStatus } from '@/components/workstreams/TimelineGantt';
import { PipelineAgentTask, AgentTaskStatus as PipelineTaskStatus } from '@/components/workstreams/AgentTaskCard';
import { addHours, subHours } from 'date-fns';

// Keys
export const WORKSTREAM_KEYS = {
    all: ['workstreams'] as const,
    active: ['workstreams', 'active'] as const,
    executions: (workflowId: string) => ['executions', workflowId] as const,
};

// Map backend Workflow status to our granular AI Agent Pipeline stages
const mapStatusToPipelineStage = (status: Workflow['status']): PipelineTaskStatus => {
    switch (status) {
        case 'queued':
        case 'processing': return 'data_ingestion';
        case 'active': return 'processing';
        case 'completed': return 'completed';
        case 'failed': return 'final_review';
        default: return 'data_ingestion'; // fallback
    }
};

const mapStatusToGanttStatus = (status: Workflow['status']): TimelineAgentTask['status'] => {
    switch (status) {
        case 'queued': return 'pending';
        case 'processing': return 'ingesting';
        case 'active': return 'processing';
        case 'completed': return 'completed';
        case 'failed': return 'failed';
        default: return 'pending';
    }
};

/**
 * Fetch active workflows and map them to PipelineBoard and TimelineGantt formats
 */
export function useActiveWorkstreams() {
    return useQuery({
        queryKey: WORKSTREAM_KEYS.active,
        queryFn: async () => {
            const workflows = await fetchWorkflows();

            // Filter to only items that aren't archived/draft for the active board
            const activeWorkflows = workflows.filter(w => !['archived', 'draft'].includes(w.status));

            const today = new Date();

            const boardData: PipelineAgentTask[] = activeWorkflows.map(w => ({
                id: w.id,
                title: w.name,
                description: `Workflow ID: ${w.id}`,
                status: mapStatusToPipelineStage(w.status) as any, // type map
                model: 'Elysian Core Engine',
                tokensUsed: Math.floor(Math.random() * 50000) + 5000, // mock metrics
                startDate: new Date(w.createdAt),
                tag: 'System',
            }));

            const ganttData: TimelineAgentTask[] = activeWorkflows.map(w => {
                // Simulate durations for the Gantt based on status
                const isDone = w.status === 'completed' || w.status === 'failed';
                const startDate = new Date(w.createdAt);
                const endDate = isDone && w.lastUpdated ? new Date(w.lastUpdated) : addHours(startDate, 6);

                return {
                    id: w.id,
                    name: w.name,
                    status: mapStatusToGanttStatus(w.status),
                    startDate,
                    endDate,
                    progressPct: w.progress || (isDone ? 100 : Math.floor(Math.random() * 60) + 10)
                }
            });

            return { boardData, ganttData, raw: activeWorkflows };
        },
        // Poll every 10 seconds for real-time updates as requested by Senior Engineer
        refetchInterval: 10000,
    });
}

/**
 * Optimistic Mutation for moving tasks between pipeline stages
 */
export function useMoveWorkstreamStage() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, newStatus }: { id: string, newStatus: PipelineTaskStatus }) => {
            // In a real app, this would hit a PUT/PATCH endpoint like updateWorkflowStatus
            // For now, we simulate the network delay
            return new Promise((resolve) => setTimeout(resolve, 500));
        },
        onMutate: async ({ id, newStatus }) => {
            await queryClient.cancelQueries({ queryKey: WORKSTREAM_KEYS.active });
            const previousData = queryClient.getQueryData(WORKSTREAM_KEYS.active);

            // Optimistically update
            queryClient.setQueryData(WORKSTREAM_KEYS.active, (old: any) => {
                if (!old) return old;
                return {
                    ...old,
                    boardData: old.boardData.map((task: PipelineAgentTask) =>
                        task.id === id ? { ...task, status: newStatus } : task
                    )
                };
            });

            return { previousData };
        },
        onError: (err, newTodo, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(WORKSTREAM_KEYS.active, context.previousData);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: WORKSTREAM_KEYS.active });
        }
    });
}
