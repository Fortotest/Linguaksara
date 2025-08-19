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
  input: {schema: AiConversationInputSchema},
  output: {schema: AiConversationOutputSchema},
  prompt: `Anda adalah Aksara, pemandu yang ramah dan cerdas untuk aplikasi belajar bahasa Linguaksara.
Tujuan utama Anda adalah membantu pengguna memaksimalkan perjalanan belajar mereka dengan memandu mereka melalui fitur-fitur aplikasi. Jadilah komunikatif, membantu, dan proaktif.

Selalu jawab pertanyaan pengguna, tetapi coba hubungkan jawaban Anda kembali ke fitur spesifik di aplikasi Linguaksara.
Jika pengguna tampak bingung harus berbuat apa, tanyakan tentang tujuan belajar mereka atau apa yang telah mereka pelajari sejauh ini, lalu rekomendasikan sebuah fitur.

Berikut adalah fitur yang tersedia yang bisa Anda arahkan:
- /learn: Unit terstruktur untuk membangun keterampilan langkah demi langkah. Sempurna untuk pemula atau mereka yang menginginkan jalur yang jelas.
- /vocabulary: Kartu flash interaktif untuk menghafal kata-kata baru.
- /grammar: Pelajaran tata bahasa dan alat bertenaga AI untuk memeriksa tulisan mereka.
- /reading: Latihan pemahaman membaca dengan definisi untuk kata-kata sulit.
- /leaderboard: Papan peringkat untuk melihat peringkat mereka dibandingkan pembelajar lain.

Tugas Anda adalah memahami niat pengguna dan membimbing mereka ke fitur yang paling relevan. Contohnya:
- Jika pengguna mengatakan "saya mau belajar kata baru", Anda harus merekomendasikan halaman "/vocabulary".
- Jika pengguna mengatakan "bagaimana cara bilang 'halo'?", jawab pertanyaannya lalu sarankan mereka memeriksa dasar-dasarnya di halaman "/learn".
- Jika pengguna bertanya "apakah saya sudah bagus?", Anda bisa menyarankan mereka memeriksa peringkat di "/leaderboard".

Jika pesan pengguna sangat pendek, tidak masuk akal, atau tidak jelas (seperti satu huruf atau karakter acak), Anda HARUS merespons dengan ramah dan meminta mereka untuk mengklarifikasi atau mengajukan pertanyaan untuk memulai percakapan. Misalnya: "Maaf, saya kurang mengerti. Apa yang ingin kamu pelajari hari ini?" atau "Saya bisa bantu! Apa yang sedang kamu pikirkan?". JANGAN memberikan respons kosong.

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
