import { ActionCenterClient } from '@/components/action-center/ActionCenterClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Action Center | Elysian Rebirth',
    description: 'Human-in-the-Loop AI Action Queue and Approvals',
};

export default function ActionCenterPage() {
    return <ActionCenterClient />;
}
