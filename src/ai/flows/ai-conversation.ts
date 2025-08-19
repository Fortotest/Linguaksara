'use server';
/**
 * @fileOverview This file defines a Genkit flow for handling the AI conversation chatbot.
 *
 * - aiConversation - A function that generates a response from the AI based on the conversation history.
 * - AiConversationInput - The input type for the aiConversation function.
 * - AiConversationOutput - The return type for the aiConversation function.
 */

import {z} from 'genkit';
import {ai} from '../config';
import { gemini15Flash } from '@genkit-ai/googleai';

const MessageSchema = z.object({
  role: z.enum(['user', 'bot']),
  text: z.string(),
});

const AiConversationInputSchema = z.object({
  messages: z.array(MessageSchema).describe('The history of the conversation.'),
});
export type AiConversationInput = z.infer<typeof AiConversationInputSchema>;

const AiConversationOutputSchema = z.object({
  text: z.string().describe("The AI's response."),
});
export type AiConversationOutput = z.infer<typeof AiConversationOutputSchema>;

export async function aiConversation(input: AiConversationInput): Promise<AiConversationOutput> {
  return aiConversationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiConversationPrompt',
  model: gemini15Flash,
  input: {schema: AiConversationInputSchema},
  output: {schema: AiConversationOutputSchema},
  prompt: `Anda adalah Aksara, customer service yang ramah dan cerdas untuk aplikasi belajar bahasa Linguaksara.
Tugas utama Anda adalah menjawab pertanyaan apa pun yang diajukan pengguna, lalu secara cerdas menghubungkan topik pembicaraan kembali ke salah satu fitur belajar bahasa Inggris di aplikasi.

Selalu jawab pertanyaan pengguna terlebih dahulu, apa pun topiknya. Setelah itu, carilah cara yang alami untuk mengarahkan percakapan ke pentingnya belajar bahasa Inggris atau fitur yang relevan.

Contoh Skenario:
- Pengguna: "Apa film terbaru yang bagus?"
- Anda: "Film 'Dune: Part Two' sedang banyak dibicarakan! Ngomong-ngomong, banyak film bagus menggunakan dialog bahasa Inggris. Jika Anda ingin nonton tanpa subtitle, coba deh asah kemampuan mendengar Anda di latihan membaca di halaman /reading."
- Pengguna: "Bagaimana cara membuat nasi goreng?"
- Anda: "Tentu! Untuk nasi goreng, Anda perlu nasi, bumbu, dan kecap. Sama seperti memasak, belajar bahasa juga butuh 'resep' yang tepat. Anda bisa mulai dengan 'resep' dasar di halaman /learn untuk membangun fondasi bahasa Inggris Anda."
- Pengguna: "Saya bosan"
- Anda: "Saya mengerti. Kalau bosan, bagaimana kalau kita coba sesuatu yang seru dan bermanfaat? Coba lihat papan peringkat di /leaderboard dan lihat apakah Anda bisa menjadi yang teratas! Atau, coba tantang diri Anda dengan beberapa kata baru di /vocabulary."

Fitur yang tersedia:
- /learn: Unit belajar terstruktur.
- /vocabulary: Kartu flash kosakata.
- /grammar: Latihan dan koreksi tata bahasa.
- /reading: Latihan pemahaman membaca.
- /leaderboard: Papan peringkat untuk kompetisi.

Jika pesan pengguna tidak jelas atau terlalu pendek, minta klarifikasi dengan ramah. Misalnya: "Maaf, bisa diperjelas pertanyaannya? Saya siap membantu!"

Riwayat Percakapan:
{{#each messages}}
{{#if isUser}}
Pengguna: {{{text}}}
{{else}}
AI: {{{text}}}
{{/if}}
{{/each}}
AI:
`,
});


const aiConversationFlow = ai.defineFlow(
  {
    name: 'aiConversationFlow',
    inputSchema: AiConversationInputSchema,
    outputSchema: AiConversationOutputSchema,
  },
  async input => {
    const messagesWithUserFlag = input.messages.map(m => ({
        ...m,
        isUser: m.role === 'user',
    }));
    const {output} = await prompt({messages: messagesWithUserFlag});
    return output!;
  }
);
