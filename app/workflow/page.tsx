'use client';

import { Protected } from '@/components/Protected';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent } from '@/ui/primitives/card';
import { Button } from '@/ui/primitives/button';
import { Plus, Workflow, GitBranch, Database, Bot } from 'lucide-react';
import { toast } from 'sonner';

export default function WorkflowPage() {
    const handleCreateWorkflow = () => {
        toast.info('Workflow Builder coming soon!', {
            description: 'This feature is currently under development.'
        });
    };

    return (
        <Protected requiredRoles={['admin', 'editor']}>
            <div className="space-y-6">
                <PageHeader
                    title="Workflow Builder"
                    subtitle="AI Process Orchestration & Automation."
                />

                <Card className="min-h-[60vh] flex flex-col items-center justify-center border-dashed border-2 bg-muted/10">
                    <CardContent className="text-center space-y-6 pt-6">
                        <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <Workflow className="h-10 w-10 text-primary" />
                        </div>

                        <div className="space-y-2 max-w-md mx-auto">
                            <h3 className="text-xl font-semibold">Workflow Canvas</h3>
                            <p className="text-muted-foreground">
                                Visual workflow builder is currently being upgraded.
                                We are integrating a new node-based engine for better performance.
                            </p>
                        </div>

                        <Button size="lg" onClick={handleCreateWorkflow} className="gap-2">
                            <Plus className="h-4 w-4" />
                            Create New Workflow
                        </Button>

                        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto w-full">
                            <FeatureCard
                                icon={<Bot className="h-5 w-5 text-purple-400" />}
                                title="LLM Orchestration"
                                description="Chain multiple AI models together for complex reasoning tasks."
                            />
                            <FeatureCard
                                icon={<Database className="h-5 w-5 text-blue-400" />}
                                title="RAG Integration"
                                description="Connect your knowledge base sources directly into the workflow."
                            />
                            <FeatureCard
                                icon={<GitBranch className="h-5 w-5 text-green-400" />}
                                title="Conditional Logic"
                                description="Add branching paths based on AI outputs or user inputs."
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Protected>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
            <div className="mb-2">{icon}</div>
            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
        </div>
    );
}
