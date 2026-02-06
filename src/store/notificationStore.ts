import { create } from 'zustand';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    timestamp: Date;
    isRead: boolean;
    actionUrl?: string;
}

interface NotificationState {
    notifications: Notification[];
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'isRead'>) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    unreadCount: () => number;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
    notifications: [
        {
            id: '1',
            title: 'Welcome to Elysian',
            message: 'Get started by exploring your dashboard.',
            type: 'info', // Changed from 'system' to 'info' to match type definition
            timestamp: new Date(),
            isRead: false,
        }
    ],
    addNotification: (data) => set((state) => ({
        notifications: [
            {
                id: Math.random().toString(36).substring(7),
                timestamp: new Date(),
                isRead: false,
                ...data
            },
            ...state.notifications
        ]
    })),
    markAsRead: (id) => set((state) => ({
        notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, isRead: true } : n
        )
    })),
    markAllAsRead: () => set((state) => ({
        notifications: state.notifications.map((n) => ({ ...n, isRead: true }))
    })),
    unreadCount: () => get().notifications.filter((n) => !n.isRead).length
}));
