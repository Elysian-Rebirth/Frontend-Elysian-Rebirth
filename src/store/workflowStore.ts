import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Node, Edge, OnNodesChange, OnEdgesChange } from 'reactflow';

interface WorkflowState {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  isDirty: boolean;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  addNode: (node: Node) => void;
  updateNode: (id: string, data: any) => void;
  deleteNode: (id: string) => void;
  setSelectedNode: (node: Node | null) => void;
  saveWorkflow: () => Promise<void>;
  loadWorkflow: (id: string) => Promise<void>;
  clearWorkflow: () => void;
}

export const useWorkflowStore = create<WorkflowState>()(
  persist(
    (set, get) => ({
      nodes: [],
      edges: [],
      selectedNode: null,
      isDirty: false,

      setNodes: (nodes) => set({ nodes, isDirty: true }),
      
      setEdges: (edges) => set({ edges, isDirty: true }),

      addNode: (node) =>
        set((state) => ({
          nodes: [...state.nodes, node],
          isDirty: true,
        })),

      updateNode: (id, data) =>
        set((state) => ({
          nodes: state.nodes.map((n) =>
            n.id === id ? { ...n, data: { ...n.data, ...data } } : n
          ),
          isDirty: true,
        })),

      deleteNode: (id) =>
        set((state) => ({
          nodes: state.nodes.filter((n) => n.id !== id),
          edges: state.edges.filter((e) => e.source !== id && e.target !== id),
          isDirty: true,
        })),

      setSelectedNode: (node) => set({ selectedNode: node }),

      saveWorkflow: async () => {
        const { nodes, edges } = get();
        // TODO: Call backend API
        console.log('Saving workflow:', { nodes, edges });
        set({ isDirty: false });
      },

      loadWorkflow: async (id) => {
        // TODO: Call backend API
        console.log('Loading workflow:', id);
      },

      clearWorkflow: () =>
        set({
          nodes: [],
          edges: [],
          selectedNode: null,
          isDirty: false,
        }),
    }),
    {
      name: 'workflow-storage',
      partialize: (state) => ({
        nodes: state.nodes,
        edges: state.edges,
      }),
    }
  )
);
