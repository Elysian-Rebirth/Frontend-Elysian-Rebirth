'use client';

import { Protected } from '@/components/Protected';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/primitives/card';
import { Button } from '@/ui/primitives/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/primitives/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/primitives/accordion';
import { Badge } from '@/ui/primitives/badge';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { telemetry } from '@/lib/telemetry';
import { toast } from 'sonner';

export default function DebugConsolePage() {
    const [tokenUsage] = useState({
        chat: 12450,
        rag: 3200,
        workflow: 5600,
        total: 21250,
    });

    const [systemPrompts] = useState([
        {
            id: '1',
            type: 'chat',
            model: 'gpt-4',
            systemMessage: 'You are a helpful enterprise AI assistant...',
            userPrompt: 'Explain RAG to me',
            sanitizedPrompt: 'Explain RAG to me',
            tokens: 145,
            latency: 1234,
        },
        {
            id: '2',
            type: 'rag',
            model: 'text-embedding-3-small',
            systemMessage: 'N/A',
            userPrompt: 'enterprise security best practices',
            sanitizedPrompt: 'enterprise security best practices',
            tokens: 89,
            latency: 234,
        },
    ]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard');
        telemetry.track('user.debug', { action: 'copy_debug_info' });
    };

    return (
        <Protected requiredRoles={['admin']}>
            <div className="space-y-6">
                <PageHeader
                    title="AI Debug Console"
                    subtitle="Inspect prompts, token usage, and model performance."
                />

                <Tabs defaultValue="tokens" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="tokens">Token Usage</TabsTrigger>
                        <TabsTrigger value="prompts">Prompt Inspector</TabsTrigger>
                        <TabsTrigger value="events">Telemetry Events</TabsTrigger>
                    </TabsList>

                    <TabsContent value="tokens">
                        <Card>
                            <CardHeader>
                                <CardTitle>Token Metrics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <MetricCard title="Chat Tokens" value={tokenUsage.chat} />
                                    <MetricCard title="RAG Tokens" value={tokenUsage.rag} />
                                    <MetricCard title="Workflow Tokens" value={tokenUsage.workflow} />
                                    <MetricCard title="Total Tokens" value={tokenUsage.total} className="text-blue-500" />
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-medium mb-4">Cost Estimate</h4>
                                    <MetricCard
                                        title="Estimated Cost (GPT-4)"
                                        value={`$${(tokenUsage.total * 0.00003).toFixed(4)}`}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="prompts">
                        <Accordion type="single" collapsible className="w-full">
                            {systemPrompts.map((prompt) => (
                                <AccordionItem key={prompt.id} value={prompt.id}>
                                    <AccordionTrigger>
                                        <div className="flex items-center gap-4 text-sm">
                                            <Badge variant="outline">{prompt.type}</Badge>
                                            <Badge variant="secondary">{prompt.model}</Badge>
                                            <span className="text-muted-foreground">{prompt.tokens} tokens</span>
                                            <span className="text-muted-foreground">{prompt.latency}ms</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-4 pt-4">
                                        <div className="space-y-2">
                                            <h5 className="text-sm font-medium">System Message</h5>
                                            <div className="relative bg-muted p-3 rounded-md font-mono text-xs">
                                                {prompt.systemMessage}
                                                <Button size="icon" variant="ghost" className="absolute top-1 right-1 h-6 w-6" onClick={() => copyToClipboard(prompt.systemMessage)}>
                                                    <Copy className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="text-sm font-medium">User Prompt</h5>
                                            <div className="relative bg-muted p-3 rounded-md font-mono text-xs">
                                                {prompt.userPrompt}
                                                <Button size="icon" variant="ghost" className="absolute top-1 right-1 h-6 w-6" onClick={() => copyToClipboard(prompt.userPrompt)}>
                                                    <Copy className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>

                    <TabsContent value="events">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Events</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {telemetry.getEvents().slice(-10).reverse().map((event, idx) => (
                                        <AccordionItem key={idx} value={`event-${idx}`}>
                                            <AccordionTrigger>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <Badge variant={event.type === 'error.occurred' ? 'destructive' : 'outline'}>
                                                        {event.type}
                                                    </Badge>
                                                    <span className="text-muted-foreground">
                                                        {new Date(event.timestamp).toLocaleString()}
                                                    </span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <pre className="bg-muted p-4 rounded-md overflow-auto text-xs font-mono">
                                                    {JSON.stringify(event.payload, null, 2)}
                                                </pre>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Protected>
    );
}

function MetricCard({ title, value, className }: { title: string, value: string | number, className?: string }) {
    return (
        <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className={`text-2xl font-bold ${className || ''}`}>{value}</p>
        </div>
    );
}
