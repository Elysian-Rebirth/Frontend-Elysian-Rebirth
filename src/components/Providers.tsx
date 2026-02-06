'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { ThemeProvider } from 'next-themes';
import { TelemetryProvider } from '@/components/providers/TelemetryProvider';
import { I18nProvider, Locale } from '@/components/providers/I18nProvider';
import { PermissionsProvider } from '@/components/providers/PermissionsProvider';
import { FeatureFlagsProvider } from '@/components/providers/FeatureFlagsProvider';
import { OfflineBanner } from '@/components/OfflineBanner';
import { SessionTimeoutWarning } from '@/components/SessionTimeoutWarning';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';

import { GlobalCommandDialog } from '@/components/command/GlobalCommandDialog';

import { QueryProvider } from '@/components/providers/QueryProvider';
import { MockProvider } from '@/components/providers/MockProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [locale, setLocale] = React.useState<Locale>('id');

    // Only allow dark mode on the specific landing page root '/'
    // All other pages (Dashboard, Settings, Chat, Auth, etc.) are forced to Light Mode
    const isLandingPage = pathname === '/';

    return (
        <MockProvider>
            <QueryProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme={isLandingPage ? 'system' : 'light'}
                    enableSystem={isLandingPage}
                    disableTransitionOnChange
                    storageKey={isLandingPage ? 'landing-theme' : 'elysian-theme'}
                >
                    <TelemetryProvider onEvent={() => { }}>
                        <I18nProvider locale={locale} onLocaleChange={setLocale}>
                            <PermissionsProvider permissions={['admin', 'editor']} roles={['admin']}>
                                <FeatureFlagsProvider flags={{ advancedMode: true }}>
                                    <SidebarProvider>
                                        <OfflineBanner />
                                        <SessionTimeoutWarning />
                                        <GlobalCommandDialog />
                                        <div className="pb-0">
                                            <SmoothScroll>
                                                {children}
                                            </SmoothScroll>
                                        </div>
                                        <Toaster />
                                        <SonnerToaster />

                                        {/* Hide Bottom Nav on Auth Pages and Landing Page */}
                                        {/* Mobile Bottom Nav Removed as requested */}
                                        {/* {!['/login', '/register', '/forgot-password', '/'].includes(pathname) && (
                                            <MobileBottomNav />
                                        )} */}
                                        {pathname === '/' && <SiteFooter />}
                                    </SidebarProvider>
                                </FeatureFlagsProvider>
                            </PermissionsProvider>
                        </I18nProvider>
                    </TelemetryProvider>
                </ThemeProvider>
            </QueryProvider>
        </MockProvider >
    );
}
