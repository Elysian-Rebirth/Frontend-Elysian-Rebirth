'use client';

import { AuditLogEntry } from "@/types/admin";
import { AuditDiffViewer } from "@/components/admin/audit/AuditDiffViewer";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ghost, MapPin, Monitor } from "lucide-react";
import { format } from "date-fns";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GlassCard } from "@/components/ui/GlassCard";

const MOCK_LOGS: AuditLogEntry[] = [
    {
        id: "log_001",
        actor: { name: "Budi Santoso", email: "budi@acme.com", role: "Manager", impersonatorName: "Super Admin" },
        action: "UPDATE_LIMIT",
        resource: "Subscription Plan",
        timestamp: "2024-03-10T08:32:00Z", // UTC
        ipAddress: "103.25.1.42",
        location: "Jakarta, ID",
        status: "Success",
        changes: {
            before: { limit: 1000, plan: "Free" },
            after: { limit: 50000, plan: "Pro" }
        }
    },
    {
        id: "log_002",
        actor: { name: "System", email: "bot@elysian.com", role: "System" },
        action: "AUTO_SUSPEND",
        resource: "Tenant: Umbrella Corp",
        timestamp: "2024-03-09T14:15:00Z",
        ipAddress: "Internal",
        location: "AWS-East",
        status: "Success",
        changes: {
            before: { status: "Active" },
            after: { status: "Suspended", reason: "Payment Failed" }
        }
    },
    {
        id: "log_003",
        actor: { name: "Sarah Connor", email: "sarah@cyberdyne.ai", role: "Admin" },
        action: "DELETE_MODEL",
        resource: "Cyberdyne-T800-v1",
        timestamp: "2024-03-08T09:00:00Z",
        ipAddress: "192.168.1.1",
        location: "Los Angeles, US",
        status: "Failure"
    }
];

export default function AuditLogsPage() {
    // Determine User's Timezone for display
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return new Intl.DateTimeFormat('en-ID', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        }).format(date);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Forensic Audit Logs</h1>
                    <p className="text-muted-foreground">Trace every action. Immutable security records.</p>
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                    Viewing in: {userTimeZone}
                </Badge>
            </div>

            <div className="rounded-md border bg-card">
                <Table className="compact-table">
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Actor</TableHead>
                            <TableHead>Action</TableHead>
                            <TableHead>Resource</TableHead>
                            <TableHead>Context (IP/Loc)</TableHead>
                            <TableHead className="text-right">Evidence</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {MOCK_LOGS.map(log => (
                            <TableRow key={log.id}>
                                {/* Timezone Critical Display */}
                                <TableCell className="whitespace-nowrap font-mono text-xs text-muted-foreground">
                                    {formatDate(log.timestamp)}
                                </TableCell>

                                {/* Actor with Impersonator Warning */}
                                <TableCell>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">{log.actor.name}</span>
                                            {log.actor.impersonatorName && (
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Badge variant="destructive" className="h-5 px-1 bg-amber-600 hover:bg-amber-700 text-[10px] gap-1">
                                                                <Ghost className="h-3 w-3" />
                                                                IMPERSONATED
                                                            </Badge>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Real Actor: <b>{log.actor.impersonatorName}</b> using Ghost Mode</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            )}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{log.actor.email}</span>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Badge variant={log.status === 'Success' ? 'secondary' : 'destructive'} className="text-[10px] mr-2">
                                        {log.status.toUpperCase()}
                                    </Badge>
                                    <span className="font-medium text-sm">{log.action}</span>
                                </TableCell>

                                <TableCell className="text-sm text-slate-500">{log.resource}</TableCell>

                                <TableCell>
                                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Monitor className="h-3 w-3" /> {log.ipAddress}
                                        </div>
                                        {log.location && (
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" /> {log.location}
                                            </div>
                                        )}
                                    </div>
                                </TableCell>

                                <TableCell className="text-right">
                                    {log.changes ? (
                                        <AuditDiffViewer log={log} />
                                    ) : (
                                        <span className="text-xs text-muted-foreground italic">No data diff</span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
