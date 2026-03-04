import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// We fallback to checking both standard NEXT_PUBLIC and standard backend GEMINI_API_KEY
const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
    if (!apiKey) {
        return NextResponse.json(
            { error: "API Key Gemini belum dikonfigurasi di file .env.local" },
            { status: 500 }
        );
    }

    try {
        const body = await req.json();
        const { messages, mode } = body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
        }

        const latestMessage = messages[messages.length - 1].content;
        const history = messages.slice(0, -1).map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }],
        }));

        let modelName = "gemini-2.5-flash";
        let systemInstructionText = "Anda adalah Elysian Assistant, sebuah AI Agent profesional yang dirancang untuk membantu pengguna dengan analisis bisnis, pemrograman, dan penugasan strategis tingkat enterprise. Berikan jawaban komprehensif menggunakan Bahasa Indonesia jika tidak diminta selain itu.";

        if (mode === 'planning') {
            modelName = "gemini-2.5-pro";
            systemInstructionText = "Anda adalah arsitek sistem dan planner strategis dari Elysian. Buatkan roadmap yang sangat terstruktur, praktis, dan profesional. Pisahkan menggunakan bullet point.";
        } else if (mode === 'workflow') {
            systemInstructionText = "Anda adalah Workflow Automation Specialist dari Elysian Corp. Berikan langkah-langkah otomatisasi yang efektif.";
        }

        const fullHistory = [
            { role: 'user', parts: [{ text: `INTRUKSI SISTEM: ${systemInstructionText}` }] },
            { role: 'model', parts: [{ text: "Mengerti." }] },
            ...history
        ];

        const model = genAI.getGenerativeModel({
            model: modelName,
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 8192,
            }
        });

        const chat = model.startChat({ history: fullHistory });
        const result = await chat.sendMessage(latestMessage);
        const responseText = result.response.text();

        return NextResponse.json({ reply: responseText });
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan saat menghubungi layanan AI: " + error.message },
            { status: 500 }
        );
    }
}
