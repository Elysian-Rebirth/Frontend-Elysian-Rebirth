'use client';

import { Protected } from '@/components/Protected';
import { useEffect, useState } from 'react';
import { apiClient, type EditorDocument } from '@/lib/apiClient';
import { DocumentEditor } from '@/components/editor/DocumentEditor';
import { AiActionBar } from '@/components/editor/AiActionBar';
import { VersionHistory } from '@/components/editor/VersionHistory';
import { useMediaQuery } from 'react-responsive';
import { PageHeader } from '@/components/PageHeader';

export default function EditorPage() {
    const [document, setDocument] = useState<EditorDocument | null>(null);
    const [content, setContent] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        apiClient.getEditorDocument('doc-1').then((doc) => {
            setDocument(doc);
            setContent(doc.content);
        });
    }, []);

    const handleSave = async () => {
        if (document) {
            const updated = await apiClient.saveEditorDocument(document.id, content);
            setDocument(updated);
        }
    };

    const handleAiAction = (action: string) => {
        console.log('AI Action:', action);
        // In real app: call AI service
    };

    const versionHistory = [
        {
            id: '1',
            type: 'ai' as const,
            label: 'AI Draft Generated',
            timestamp: new Date(),
        },
        {
            id: '2',
            type: 'human' as const,
            label: 'Manual Edit by User',
            timestamp: new Date(Date.now() - 86400000),
        },
    ];

    if (!document) return null;

    return (
        <Protected requiredRoles={['admin', 'editor']}>
            <div className="flex flex-col h-full bg-background">
                <div className="p-6 pb-2">
                    <PageHeader
                        title="Document Editor"
                        subtitle="Human-in-the-Loop editing with AI assistance."
                    />
                </div>

                <div className="flex-1 min-h-0 relative">
                    <DocumentEditor
                        document={document}
                        content={content}
                        onChange={setContent}
                        onSave={handleSave}
                        pdfUrl={document.pdfUrl}
                        isMobile={isMobile}
                    />

                    <VersionHistory versions={versionHistory} />
                </div>

                <AiActionBar
                    actions={['rewrite', 'summarize', 'translate']}
                    onAction={handleAiAction}
                />
            </div>
        </Protected>
    );
}
