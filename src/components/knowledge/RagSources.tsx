import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/ui/primitives/card';
import { Button } from '@/ui/primitives/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/primitives/table';
import { Badge } from '@/ui/primitives/badge';
import { Database, Upload, File as FileIcon, Trash2 } from 'lucide-react';
import { FileUpload } from '@/components/FileUpload';
import type { RagSource } from '@/lib/apiClient';

interface RagSourcesProps {
    sources: RagSource[];
    onUpload: (file: File) => Promise<void>;
}

export function RagSources({ sources, onUpload }: RagSourcesProps) {
    return (
        <Card className="bg-card/50 border-border">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-indigo-400" />
                        Knowledge Sources
                    </CardTitle>
                    <CardDescription>
                        Manage documents indexed in your vector database.
                    </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => document.getElementById('file-upload-trigger')?.click()}>
                    <Upload className="mr-2 h-4 w-4" />
                    Add Source
                </Button>
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    <FileUpload
                        onUpload={onUpload}
                        accept={{ 'application/pdf': ['.pdf'], 'text/plain': ['.txt', '.md'] }}
                    />
                </div>

                <div className="rounded-md border border-border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Added</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sources.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                                        No sources added yet.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                sources.map((source) => (
                                    <TableRow key={source.id}>
                                        <TableCell className="font-medium flex items-center gap-2">
                                            <FileIcon className="h-4 w-4 text-blue-400" />
                                            {source.name}
                                        </TableCell>
                                        <TableCell>{source.type}</TableCell>
                                        <TableCell>
                                            <Badge variant={source.status === 'ready' ? 'default' : 'secondary'}
                                                className={source.status === 'ready' ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20' : ''}>
                                                {source.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{new Date(source.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-500">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
