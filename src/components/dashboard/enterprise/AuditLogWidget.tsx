'use client';

import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import type { AuditLog } from '@/types/api-responses';

interface AuditLogWidgetProps {
    logs: AuditLog[];
    isLoading?: boolean;
}

export function AuditLogWidget({ logs, isLoading }: AuditLogWidgetProps) {
    if (isLoading) {
        return <Skeleton className="h-[400px] w-full rounded-2xl" />;
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col h-full max-h-[500px]">
            <div className="border-b border-slate-100 p-4 bg-slate-50/50">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-slate-500" />
                    Security Audit
                </h3>
            </div>

            <div className="overflow-y-auto p-0">
                <ul className="divide-y divide-slate-100">
                    {logs.map((log) => (
                        <li key={log.id} className="p-4 hover:bg-slate-50/50 transition-colors">
                            <div className="flex items-start gap-3">
                                {/* Avatar / Status Indicator */}
                                <div className="relative shrink-0">
                                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 border border-slate-200">
                                        {log.user.avatar ? (
                                            <img src={log.user.avatar} alt={log.user.name} className="h-full w-full rounded-full" />
                                        ) : (
                                            log.user.name.charAt(0)
                                        )}
                                    </div>
                                    <div className={cn(
                                        "absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white flex items-center justify-center",
                                        log.status === 'success' ? "bg-emerald-500" : "bg-rose-500"
                                    )}>
                                        {log.status === 'success' ? (
                                            <CheckCircle className="h-2 w-2 text-white" />
                                        ) : (
                                            <AlertTriangle className="h-2 w-2 text-white" />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between mb-0.5">
                                        <p className="text-xs font-semibold text-slate-900 truncate">
                                            {log.action}
                                        </p>
                                        <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">
                                            {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate">
                                        by <span className="font-medium text-slate-700">{log.user.name}</span>
                                    </p>
                                    <div className="mt-1.5 flex items-center gap-2">
                                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600 font-mono border border-slate-200">
                                            {log.target}
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-slate-100 p-3 bg-slate-50/30 text-center">
                <button className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
                    View Full Audit Log
                </button>
            </div>
        </div>
    );
}
