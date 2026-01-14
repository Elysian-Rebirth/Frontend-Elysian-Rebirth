'use client';

import { Protected } from '@/components/Protected';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/ui/primitives/card';
import { Button } from '@/ui/primitives/button';
import { Switch } from '@/ui/primitives/switch';
import { Label } from '@/ui/primitives/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/primitives/select';
import { Separator } from '@/ui/primitives/separator';
import { Moon, Sun, Globe, Bell, Shield, Save } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [language, setLanguage] = useState('en');
    const [notifications, setNotifications] = useState(true);
    const [advancedMode, setAdvancedMode] = useState(false);

    // Prevent hydration mismatch for theme
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSave = () => {
        toast.success('Settings saved successfully');
        console.log({
            theme,
            language,
            notifications,
            advancedMode
        });
    };

    if (!mounted) {
        return null;
    }

    return (
        <Protected requiredRoles={['admin', 'editor']}>
            <div className="max-w-4xl space-y-8">
                <PageHeader
                    title="Settings"
                    subtitle="Manage your platform preferences and configurations."
                />

                <div className="grid gap-6">
                    {/* Appearance */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                                Appearance
                            </CardTitle>
                            <CardDescription>Customize the look and feel of the platform.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Dark Mode</Label>
                                <p className="text-sm text-muted-foreground">
                                    Toggle between light and dark themes.
                                </p>
                            </div>
                            <Switch
                                checked={theme === 'dark'}
                                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                            />
                        </CardContent>
                    </Card>

                    {/* Language */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5" />
                                Language & Region
                            </CardTitle>
                            <CardDescription>Set your preferred language for the interface.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Language</Label>
                                <p className="text-sm text-muted-foreground">
                                    Select your primary language.
                                </p>
                            </div>
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="id">Bahasa Indonesia</SelectItem>
                                    <SelectItem value="zh">中文</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>

                    {/* Notifications */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5" />
                                Notifications
                            </CardTitle>
                            <CardDescription>Configure how you receive alerts and updates.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Enable Notifications</Label>
                                <p className="text-sm text-muted-foreground">
                                    Receive push notifications for important events.
                                </p>
                            </div>
                            <Switch
                                checked={notifications}
                                onCheckedChange={setNotifications}
                            />
                        </CardContent>
                    </Card>

                    {/* Advanced */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5" />
                                Advanced
                            </CardTitle>
                            <CardDescription>Developer tools and experimental features.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Advanced Mode</Label>
                                <p className="text-sm text-muted-foreground">
                                    Enable debugging tools and extended metrics.
                                </p>
                            </div>
                            <Switch
                                checked={advancedMode}
                                onCheckedChange={setAdvancedMode}
                            />
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-end pt-4">
                    <Button size="lg" onClick={handleSave} className="gap-2">
                        <Save className="h-4 w-4" />
                        Save Changes
                    </Button>
                </div>
            </div>
        </Protected>
    );
}
