'use client';

import { useQueryState } from 'nuqs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function AgentConfigSlideOver() {
    // URL state binding: /settings/ai/agents?agent=dart-ai
    const [agentId, setAgentId] = useQueryState('agent');

    const isOpen = !!agentId;

    const handleClose = () => {
        setAgentId(null);
    };

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            {/* We don't need a trigger here because it's controlled by the URL */}
            <SheetContent
                side="right"
                className="w-full sm:w-[450px] md:w-[600px] p-0 flex flex-col bg-slate-50 dark:bg-[#060D18] sm:max-w-none border-l border-slate-200/60 dark:border-slate-800/60"
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#0B1120]">
                    <SheetHeader className="text-left space-y-0">
                        <SheetTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                            Agent Configuration
                        </SheetTitle>
                        <SheetDescription className="text-xs">
                            ID: {agentId} {/* Wait for actual data fetching in real app */}
                        </SheetDescription>
                    </SheetHeader>
                    <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-full">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                        {/* Placeholder for complex agent config form */}
                        <div className="p-4 bg-white dark:bg-[#0B1120] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">Instructions</h4>
                            <p className="text-sm text-slate-500">
                                This section would contain the detailed prompt engineering and tool bindings for the selected agent.
                                The state is securely deep-linked. E.g., sharing the URL `?agent={agentId}` will open this exact drawer directly.
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-[#0B1120] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">Available Skills</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    Google Calendar Integration
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    Linear Issue Sync
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#0B1120] flex justify-end gap-3">
                    <Button variant="outline" onClick={handleClose}>Cancel</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
