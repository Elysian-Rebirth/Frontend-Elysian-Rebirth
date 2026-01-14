import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  theme?: {
    primaryColor: string;
    darkMode: boolean;
  };
  features?: string[];
}

interface TenantState {
  currentTenant: Tenant | null;
  availableTenants: Tenant[];
  setTenant: (tenant: Tenant) => void;
  switchTenant: (tenantId: string) => void;
  loadTenants: () => Promise<void>;
}

export const useTenantStore = create<TenantState>()(
  persist(
    (set, get) => ({
      currentTenant: null,
      availableTenants: [],

      setTenant: (tenant) => set({ currentTenant: tenant }),

      switchTenant: (tenantId) => {
        const tenant = get().availableTenants.find((t) => t.id === tenantId);
        if (tenant) {
          set({ currentTenant: tenant });
        }
      },

      loadTenants: async () => {
        // Mock tenants - in production, fetch from API
        const mockTenants: Tenant[] = [
          {
            id: 'tenant-1',
            name: 'Acme Corp',
            slug: 'acme',
            theme: { primaryColor: '#1890ff', darkMode: true },
          },
          {
            id: 'tenant-2',
            name: 'TechStart Inc',
            slug: 'techstart',
            theme: { primaryColor: '#52c41a', darkMode: false },
          },
        ];

        set({
          availableTenants: mockTenants,
          currentTenant: mockTenants[0],
        });
      },
    }),
    {
      name: 'tenant-storage',
    }
  )
);
