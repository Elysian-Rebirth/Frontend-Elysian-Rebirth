import type { Metadata } from 'next/client';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { APP_NAME } from '@/lib/config';
import {
    TelemetryProvider,
    I18nProvider,
    PermissionsProvider,
    FeatureFlagsProvider,
    XErrorBoundary
} from '@enterprise-ai/x';
import { OfflineBanner } from '@/components/OfflineBanner';
import { SessionTimeoutWarning } from '@/components/SessionTimeoutWarning';
import { CrashRecoveryProvider } from '@/components/CrashRecoveryProvider';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: `${APP_NAME} - Enterprise AI Platform`,
    description: 'Open LLM application devops platform for enterprise scenarios',
    keywords: 'AI, Enterprise, LLM, RAG, Workflow, Document Processing',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={inter.className}>
                <XErrorBoundary>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                        <TelemetryProvider enabled={false}>
                            <I18nProvider defaultLocale="en">
                                <PermissionsProvider permissions={['admin', 'editor']}>
                                    <FeatureFlagsProvider flags={{ advancedMode: true }}>
                                        <CrashRecoveryProvider>
                                            <OfflineBanner />
                                            <SessionTimeoutWarning />
                                            {children}
                                            <Toaster theme="dark" position="top-right" />
                                        </CrashRecoveryProvider>
                                    </FeatureFlagsProvider>
                                </PermissionsProvider>
                            </I18nProvider>
                        </TelemetryProvider>
                    </ThemeProvider>
                </XErrorBoundary>
            </body>
        </html>
    );
}
