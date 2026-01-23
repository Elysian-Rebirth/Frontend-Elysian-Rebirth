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
