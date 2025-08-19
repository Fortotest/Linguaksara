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
  prompt: `You are a friendly and encouraging language learning assistant. 
Your goal is to help users practice their fluency by having a natural conversation.
Adapt your language to the language the user is writing in.

If the user's message is very short, nonsensical, or unclear (like a single letter or random characters), respond kindly and ask them to clarify or ask a question to get the conversation going. For example: "I'm not sure I understand. Could you tell me more?" or "That's an interesting start! What are you thinking about?".

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
