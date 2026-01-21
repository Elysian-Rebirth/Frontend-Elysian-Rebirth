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

// Mock Types - Replace with actual types from @/types later
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

// Mock Data for Phase 1
const MOCK_WORKFLOWS: Workflow[] = [
    {
        id: 'pipe_001',
        name: 'Customer Support RAG Indexing',
        status: 'processing',
        progress: 67,
        eta: '2 min remaining',
        lastUpdated: new Date(Date.now() - 30000).toISOString(),
        createdAt: new Date().toISOString(),
    },
    {
        id: 'pipe_002',
        name: 'Product Documentation Update',
        status: 'queued',
        lastUpdated: new Date(Date.now() - 120000).toISOString(),
        createdAt: new Date().toISOString(),
    },
    {
        id: 'pipe_003',
        name: 'Weekly Knowledge Refresh',
        status: 'completed',
        progress: 100,
        lastUpdated: new Date(Date.now() - 300000).toISOString(),
        createdAt: new Date().toISOString(),
    },
];

const DELAY = 800; // Simulate network latency

/**
 * Fetch all workflows
 * Endpoint: GET /api/v1/workflows
 */
export async function fetchWorkflows(): Promise<Workflow[]> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, DELAY));

    // In real app: return api.get('/workflows').then(r => r.data)
    return MOCK_WORKFLOWS;
}

/**
 * Create a new workflow
 * Endpoint: POST /api/v1/workflows
 */
export async function createWorkflow(data: Partial<Workflow>): Promise<Workflow> {
    await new Promise((resolve) => setTimeout(resolve, DELAY));

    const newWorkflow: Workflow = {
        id: `wf-${Math.random().toString(36).substr(2, 9)}`,
        name: data.name || 'Untitled Workflow',
        status: 'draft',
        createdAt: new Date().toISOString(),
        ...data,
    };

    return newWorkflow;
}

/**
 * Delete a workflow
 * Endpoint: DELETE /api/v1/workflows/:id
 */
export async function deleteWorkflow(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    // In real app: await api.delete(`/workflows/${id}`)
    console.log(`[Mock] Deleted workflow ${id}`);
}
