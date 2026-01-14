'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useTenantStore, type Tenant } from '@/store/tenantStore';

interface TenantContextValue {
  currentTenant: Tenant | null;
  switchTenant: (tenantId: string) => void;
  availableTenants: Tenant[];
}

const TenantContext = createContext<TenantContextValue | null>(null);

export function TenantProvider({ children }: { children: ReactNode }) {
  const { currentTenant, availableTenants, switchTenant, loadTenants } = useTenantStore();

  useEffect(() => {
    loadTenants();
  }, [loadTenants]);

  return (
    <TenantContext.Provider value={{ currentTenant, availableTenants, switchTenant }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within TenantProvider');
  }
  return context;
}
