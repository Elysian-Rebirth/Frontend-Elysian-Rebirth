'use client';

import { Protected } from '@/components/auth/Protected';

import { DashboardShell } from '@/components/dashboard/DashboardShell';


export default function DashboardPage() {
    return (
        <Protected>
            <DashboardShell stats={null} />
        </Protected>
    );
}
