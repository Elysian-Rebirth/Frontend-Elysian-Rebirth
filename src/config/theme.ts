import type { ThemeConfig } from 'antd';

export const darkTheme: ThemeConfig = {
    token: {
        colorPrimary: '#195de6',
        colorBgBase: '#111621',
        colorBgContainer: '#1c2536',
        colorBorder: '#2d3b55',
        colorText: '#ffffff',
        colorTextSecondary: '#93a5c8',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        borderRadius: 8,
    },
    components: {
        Layout: {
            headerBg: '#111722',
            bodyBg: '#0d121b',
            siderBg: '#111722',
        },
        Menu: {
            darkItemBg: '#111722',
            darkItemSelectedBg: '#195de6',
            darkItemHoverBg: 'rgba(255, 255, 255, 0.05)',
        },
        Card: {
            colorBgContainer: 'rgba(30, 41, 59, 0.4)',
        },
        Button: {
            primaryShadow: '0 0 15px rgba(50, 17, 212, 0.5)',
        },
    },
};

export const lightTheme: ThemeConfig = {
    token: {
        colorPrimary: '#195de6',
        colorBgBase: '#f6f6f8',
        colorBgContainer: '#ffffff',
        colorBorder: '#e5e7eb',
        colorText: '#1f2937',
        colorTextSecondary: '#6b7280',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        borderRadius: 8,
    },
};
