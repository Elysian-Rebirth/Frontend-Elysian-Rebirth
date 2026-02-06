/**
 * src/services/workflow.service.ts
 * 
 * Pure HTTP Service Layer
 * Responsibilities:
 * - Direct API calls (REST/GraphQL)
 * - Type definitions for API responses
 * - Error throwing (no swallowing)
 * - No React hooks or state
 */

import { http } from '@/lib/http';

export interface Workflow {
    id: string;
    name: string;
    status: 'active' | 'draft' | 'archived' | 'processing' | 'completed' | 'queued' | 'failed';
    lastRun?: string;
    createdAt: string;
    progress?: number;
    eta?: string;
    lastUpdated?: string;
}

export interface ExecutionLog {
    id?: number;
    nodeId?: string;
    level: string;
    message: string;
    timestamp?: string;
}

export interface Execution {
    id: string;
    workflowId: string;
    status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
    startTime: string;
    endTime?: string;
    logs?: ExecutionLog[];
    results?: Record<string, any>;
}

/**
 * Fetch all workflows
 * Endpoint: GET /api/v1/workflows
 */
export async function fetchWorkflows(): Promise<Workflow[]> {
    const response = await http.get<{ status: string; data: Workflow[] }>('/api/v1/workflows');
    return response.data;
}

/**
 * Create a new workflow
 * Endpoint: POST /api/v1/workflows
 */
export async function createWorkflow(data: Partial<Workflow>): Promise<Workflow> {
    const response = await http.post<{ status: string; data: Workflow }>('/api/v1/workflows', data);
    return response.data;
}

/**
 * Delete a workflow
 * Endpoint: DELETE /api/v1/workflows/:id
 */
export async function deleteWorkflow(id: string): Promise<void> {
    await http.delete(`/api/v1/workflows/${id}`);
}

/**
 * Trigger workflow execution
 * Endpoint: POST /api/v1/workflows/:id/execute
 */
export async function executeWorkflow(id: string): Promise<{ executionId: string }> {
    const response = await http.post<{ status: string; data: { execution_id: string } }>(`/api/v1/workflows/${id}/execute`);
    // Backend returns snake_case execution_id, mapping to camelCase if strictly needed or just returning raw
    return { executionId: response.data.execution_id };
}

/**
 * Get execution details (polling)
 * Endpoint: GET /api/v1/executions/:id
 */
export async function getExecution(id: string): Promise<Execution> {
    const response = await http.get<{ status: string; data: Execution }>(`/api/v1/executions/${id}`);
    return response.data;
}
