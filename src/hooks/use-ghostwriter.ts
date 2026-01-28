import { useState, useEffect, useRef } from 'react';
import { Editor } from '@tiptap/react';
import { toast } from 'sonner';

export function useGhostwriter(editor: Editor | null, _isMobile: boolean) {
    const [suggestion, setSuggestion] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastContentRef = useRef<string>('');

    useEffect(() => {
        if (!editor) return;

        const handleUpdate = () => {
            // 1. Clear previous timer & suggestion on typing
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setSuggestion(null);

            // 2. Track content change
            const currentText = editor.getText();
            if (currentText === lastContentRef.current) return;
            lastContentRef.current = currentText;

            // 3. Start 1s Timer (Faster for Demo)
            timeoutRef.current = setTimeout(async () => {
                // Minimum context length check (Standard: 20 chars / ~3-4 words)
                if (currentText.length < 20) return;

                setIsLoading(true);
                try {
                    // Mock RAG Call - In production, replace with: await rag.generateContinuation(currentText);
                    const mockSuggestions = [
                        "... sehingga kami menyarankan untuk segera melanjutkan ke Tahap 1 implementasi.",
                        "... yang sejalan dengan target finansial kuartal ini untuk efisiensi.",
                        "... memastikan integritas data tetap terjaga di semua titik integrasi.",
                        "... dan implementasi ini mematuhi protokol keamanan terbaru perusahaan."
                    ];

                    // Simulate network delay
                    await new Promise(r => setTimeout(r, 600));

                    const randomSuggestion = mockSuggestions[Math.floor(Math.random() * mockSuggestions.length)];
                    setSuggestion(randomSuggestion);

                    // Subtle haptic feedback for mobile? (Optional)
                } catch (error) {
                    console.error("Ghostwriter failed:", error);
                } finally {
                    setIsLoading(false);
                }
            }, 1000); // 1 second pause
        };

        editor.on('update', handleUpdate);

        return () => {
            editor.off('update', handleUpdate);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [editor]);

    const acceptSuggestion = () => {
        if (!editor || !suggestion) return;

        // Insert text and add a space if needed
        editor.chain().focus().insertContent(` ${suggestion} `).run();
        setSuggestion(null);
        toast.info("Ghost text accepted", { duration: 1500 });
    };

    const discardSuggestion = () => {
        setSuggestion(null);
    };

    return {
        suggestion,
        isLoading,
        acceptSuggestion,
        discardSuggestion
    };
}
