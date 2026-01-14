'use client';

import { Skeleton } from '@/ui/primitives/skeleton';
import { Card, CardContent } from '@/ui/primitives/card';

export function DashboardSkeleton() {
    return (
        <div className="p-6 space-y-6">
            <Skeleton className="h-8 w-[300px]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="pt-6">
                        <Skeleton className="h-4 w-24 mb-4" />
                        <Skeleton className="h-8 w-32" />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <Skeleton className="h-4 w-24 mb-4" />
                        <Skeleton className="h-8 w-32" />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <Skeleton className="h-4 w-24 mb-4" />
                        <Skeleton className="h-8 w-32" />
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardContent className="pt-6 space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                </CardContent>
            </Card>
        </div>
    );
}

export function ChatSkeleton() {
    return (
        <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-[200px]" />

            <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </div>

            <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>

            <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                </div>
            </div>
        </div>
    );
}

export function EditorSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 h-screen">
            <div className="space-y-2">
                {Array.from({ length: 20 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                ))}
            </div>
            <Skeleton className="h-[80vh] w-full rounded-lg" />
        </div>
    );
}

export function KnowledgeSkeleton() {
    return (
        <div className="p-6 space-y-4">
            <Card>
                <CardContent className="pt-6 space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6 space-y-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
