'use server';
/**
 * @fileOverview This file defines a Genkit flow for handling the AI conversation chatbot.
 *
 * - aiConversation - A function that generates a response from the AI based on the conversation history.
 * - AiConversationInput - The input type for the aiConversation function.
 * - AiConversationOutput - The return type for the aiConversation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

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
  prompt: `You are a friendly and encouraging language learning assistant. Your goal is to help users practice their speaking and fluency by having a conversation with them.

Respond to the user's last message, keeping the conversation flowing naturally.
- Engage with what they are saying.
- Ask questions to encourage them to talk more.
- Adapt your language to the language the user is writing in (e.g., if they write in Indonesian, respond in Indonesian).

Conversation History:
{{#each messages}}
{{#if (eq role 'user')}}
User: {{{text}}}
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
    const {output} = await prompt(input);
    return output!;
  }
);
