'use client';

import { useCrashRecovery } from '@/hooks/useCrashRecovery';
import { useEffect } from 'react';

export function CrashRecoveryProvider({ children }: { children: React.ReactNode }) {
    useCrashRecovery();
    return <>{children}</>;
}
