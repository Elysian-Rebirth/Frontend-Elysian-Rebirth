/**
 * src/services/chat.service.ts
 *
 * Chat Service Layer
 * Responsibilities:
 * - Direct API calls for chat/conversations
 * - Type definitions for API responses
 * - Error throwing (no swallowing)
 * - No React hooks or state
 */

import { http } from '@/lib/http';

export interface Conversation {
    id: string;
    title: string;
    lastMessage?: string;
    updatedAt: string;
    createdAt: string;
    messageCount: number;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: string;
    conversationId: string;
}

export interface SendMessagePayload {
    conversationId?: string;
    content: string;
    mode?: 'agent' | 'planning' | 'images' | 'workflow';
}

/**
 * Fetch all conversations
 * Endpoint: GET /api/v1/conversations
 */
export async function fetchConversations(): Promise<Conversation[]> {
    const response = await http.get<{ status: string; data: Conversation[] }>('/api/v1/conversations');
    return response.data;
}

/**
 * Fetch messages for a conversation
 * Endpoint: GET /api/v1/conversations/:id/messages
 */
export async function fetchMessages(conversationId: string): Promise<ChatMessage[]> {
    const response = await http.get<{ status: string; data: ChatMessage[] }>(
        `/api/v1/conversations/${conversationId}/messages`
    );
    return response.data;
}

/**
 * Send a message
 * Endpoint: POST /api/v1/chat/send
 */
export async function sendMessage(payload: SendMessagePayload): Promise<ChatMessage> {
    const response = await http.post<{ status: string; data: ChatMessage }>(
        '/api/v1/chat/send',
        payload
    );
    return response.data;
}

/**
 * Create a new conversation
 * Endpoint: POST /api/v1/conversations
 */
export async function createConversation(title?: string): Promise<Conversation> {
    const response = await http.post<{ status: string; data: Conversation }>(
        '/api/v1/conversations',
        { title: title || 'New Conversation' }
    );
    return response.data;
}
