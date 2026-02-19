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
    // Detail fields (populated when fetching single workflow)
    nodes?: unknown[];
    edges?: unknown[];
    // OCC: version hash/ETag from server, used for conflict detection
    version?: string;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
 * Fetch a single workflow by ID (with nodes & edges)
 * Endpoint: GET /api/v1/workflows/:id
 */
export async function fetchWorkflowById(id: string): Promise<Workflow> {
    const response = await http.get<{ status: string; data: Workflow }>(`/api/v1/workflows/${id}`);
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
 * Save (update) a workflow with OCC (Optimistic Concurrency Control)
 * Sends expectedVersion — backend returns 409 Conflict if version mismatch.
 * Endpoint: PUT /api/v1/workflows/:id
 */
export async function saveWorkflow(data: {
    id: string;
    nodes: unknown[];
    edges: unknown[];
    expectedVersion: string;
}): Promise<Workflow> {
    const response = await http.put<{ status: string; data: Workflow }>(
        `/api/v1/workflows/${data.id}`,
        {
            nodes: data.nodes,
            edges: data.edges,
            expected_version: data.expectedVersion,
        }
    );
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
    return { executionId: response.data.execution_id };
}

/**
 * Get execution details
 * Endpoint: GET /api/v1/executions/:id
 */
export async function getExecution(id: string): Promise<Execution> {
    const response = await http.get<{ status: string; data: Execution }>(`/api/v1/executions/${id}`);
    return response.data;
}

