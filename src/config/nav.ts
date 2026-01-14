export interface NavItem {
    key: string;
    label: string;
    href: string;
    icon: string;
    roles?: string[];
}

export const mainNav: NavItem[] = [
    { key: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { key: 'chat', label: 'Chat', href: '/chat', icon: 'chat' },
    { key: 'knowledge', label: 'Knowledge Base', href: '/knowledge', icon: 'Book', roles: ['admin', 'editor'] },
    { key: 'editor', label: 'Document Editor', href: '/editor', icon: 'FileText' },
    { key: 'workflow', label: 'Workflow', href: '/workflow', icon: 'Workflow' },
    { key: 'settings', label: 'Settings', href: '/settings', icon: 'Settings' },
];

export const userNav: NavItem[] = [
    { key: 'profile', label: 'Profile', href: '/profile', icon: 'person' },
    { key: 'logout', label: 'Logout', href: '/login', icon: 'logout' },
];
