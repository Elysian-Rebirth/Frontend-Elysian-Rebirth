import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/ui/primitives/card';
import { Label } from '@/ui/primitives/label';
import { Slider } from '@/ui/primitives/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/primitives/select';
import { Settings2 } from 'lucide-react';

interface RagConfigProps {
    chunkSize: number;
    overlap: number;
    onChunkSizeChange: (value: number) => void;
    onOverlapChange: (value: number) => void;
    embeddingModel: string;
}

export function RagConfig({ chunkSize, overlap, onChunkSizeChange, onOverlapChange, embeddingModel }: RagConfigProps) {
    return (
        <Card className="bg-card/50 border-border">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-primary" />
                    RAG Configuration
                </CardTitle>
                <CardDescription>
                    Adjust how documents are processed and indexed.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label>Chunk Size</Label>
                        <span className="text-sm text-muted-foreground">{chunkSize} tokens</span>
                    </div>
                    <Slider
                        value={[chunkSize]}
                        onValueChange={(val) => onChunkSizeChange(val[0])}
                        min={128}
                        max={2048}
                        step={128}
                        className="w-full"
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label>Chunk Overlap</Label>
                        <span className="text-sm text-muted-foreground">{overlap} tokens</span>
                    </div>
                    <Slider
                        value={[overlap]}
                        onValueChange={(val) => onOverlapChange(val[0])}
                        min={0}
                        max={512}
                        step={16}
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Embedding Model</Label>
                    <Select defaultValue={embeddingModel} disabled>
                        <SelectTrigger>
                            <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="text-embedding-3-small">text-embedding-3-small</SelectItem>
                            <SelectItem value="text-embedding-3-large">text-embedding-3-large</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}
