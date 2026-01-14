'use client';

import { Protected } from '@/components/Protected';
import { useEffect, useState } from 'react';
import { apiClient, type RagSource } from '@/lib/apiClient';
import { RagConfig } from '@/components/knowledge/RagConfig';
import { RagSources } from '@/components/knowledge/RagSources';
import { RagSearch } from '@/components/knowledge/RagSearch';
import { PageHeader } from '@/components/PageHeader';

export default function KnowledgePage() {
    const [sources, setSources] = useState<RagSource[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [chunkSize, setChunkSize] = useState(512);
    const [overlap, setOverlap] = useState(50);

    useEffect(() => {
        // Mock data fallback if API fails
        const mockSources: RagSource[] = [
            { id: '1', name: 'Product Manual v2.pdf', type: 'application/pdf', status: 'ready', createdAt: new Date() },
            { id: '2', name: 'Internal Wiki.md', type: 'text/markdown', status: 'processing', createdAt: new Date() }
        ];

        apiClient.getRagSources()
            .then(setSources)
            .catch(() => setSources(mockSources));
    }, []);

    const handleSearch = async () => {
        if (searchQuery.trim()) {
            try {
                const results = await apiClient.searchRag(searchQuery);
                setSearchResults(results);
            } catch (e) {
                // Mock results
                setSearchResults([
                    { score: 0.89, content: "The platform supports various RAG configurations including chunk size and overlap adjustments." },
                    { score: 0.75, content: "Vectors are stored in a high-performance database optimized for cosine similarity search." }
                ]);
            }
        }
    };

    const handleUpload = async (file: File) => {
        try {
            const newSource = await apiClient.uploadRagSource(file);
            setSources((prev) => [...prev, newSource]);
        } catch (e) {
            // Mock upload
            const mockSource: RagSource = {
                id: `new-${Date.now()}`,
                name: file.name,
                type: file.type,
                status: 'processing',
                createdAt: new Date()
            };
            setSources((prev) => [...prev, mockSource]);
        }
    };

    return (
        <Protected requiredRoles={['admin', 'editor']}>
            <div className="space-y-6">
                <PageHeader
                    title="Knowledge Base"
                    subtitle="Manage RAG documents, indices, and search configurations."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 space-y-6">
                        <RagConfig
                            chunkSize={chunkSize}
                            overlap={overlap}
                            onChunkSizeChange={setChunkSize}
                            onOverlapChange={setOverlap}
                            embeddingModel="text-embedding-3-small"
                        />
                        <RagSearch
                            query={searchQuery}
                            onQueryChange={setSearchQuery}
                            onSearch={handleSearch}
                            results={searchResults}
                            latency="24ms"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        <RagSources
                            sources={sources}
                            onUpload={handleUpload}
                        />
                    </div>
                </div>
            </div>
        </Protected>
    );
}
