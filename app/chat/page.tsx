'use client';

import { Protected } from '@/components/Protected';
import { useState, useRef, useEffect } from 'react';
import { apiClient, type ChatMessage } from '@/lib/apiClient';
import { AiMarkdown } from '@enterprise-ai/x-markdown';
import { ChatBubble } from '@/components/chat/ChatBubble';
import { ChatInput } from '@/components/chat/ChatInput';
import { ThoughtChain } from '@/components/chat/ThoughtChain';
import { Loader2 } from 'lucide-react';

export default function ChatPage() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom on new messages
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: ChatMessage = {
            id: `msg-${Date.now()}`,
            role: 'user',
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await apiClient.postChatMessage(input);
            setMessages((prev) => [...prev, response]);
        } catch (error) {
            // Handle error silently or show toast
            const errorMsg: ChatMessage = {
                id: `err-${Date.now()}`,
                role: 'assistant',
                content: "Sorry, I encountered an error processing your request.",
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Protected>
            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
                            <h3 className="text-2xl font-bold mb-2">How can I help you today?</h3>
                            <p className="max-w-md">
                                Ask me about your documents, workflows, or general inquiries.
                            </p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <ChatBubble key={msg.id} role={msg.role} timestamp={msg.timestamp}>
                                {msg.role === 'assistant' && msg.thoughts ? (
                                    <>
                                        <ThoughtChain thoughts={msg.thoughts} />
                                        <AiMarkdown content={msg.content} />
                                    </>
                                ) : (
                                    <div>{msg.content}</div>
                                )}
                            </ChatBubble>
                        ))
                    )}

                    {loading && (
                        <div className="flex gap-4 mb-6">
                            <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center">
                                <Loader2 className="h-5 w-5 text-white animate-spin" />
                            </div>
                            <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 flex items-center">
                                <span className="text-sm text-muted-foreground animate-pulse">Thinking...</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-background border-t border-border">
                    <ChatInput
                        value={input}
                        onChange={setInput}
                        onSend={handleSend}
                        disabled={loading}
                        placeholder="Type your message..."
                    />
                    <div className="text-center mt-2">
                        <span className="text-xs text-muted-foreground">
                            AI can make mistakes. Please verify important information.
                        </span>
                    </div>
                </div>
            </div>
        </Protected>
    );
}
