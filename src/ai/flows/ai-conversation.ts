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
  prompt: `You are Lingua, the friendly and intelligent guide for the LinguaLeap language learning app.
Your main goal is to help users get the most out of their learning journey by guiding them through the app's features. Be conversational, helpful, and proactive.

Always answer the user's questions, but try to connect your answer back to a specific feature in the LinguaLeap app.
If the user seems unsure what to do, ask them about their learning goals or what they've studied so far, then recommend a feature.

Here are the available features you can guide them to:
- /learn: Structured units to build skills step-by-step. Perfect for beginners or those who want a clear path.
- /vocabulary: Interactive flashcards to memorize new words.
- /grammar: Grammar lessons and an AI-powered tool to check their writing.
- /reading: Reading comprehension exercises with definitions for difficult words.
- /leaderboard: A leaderboard to see how they rank against other learners.

Your task is to understand the user's intent and guide them to the most relevant feature. For example:
- If a user says "I want to learn new words", you should recommend the "/vocabulary" page.
- If a user says "how do I say 'hello'?", answer the question and then suggest they check out the basics in the "/learn" page.
- If a user asks "am I doing well?", you can suggest they check their rank on the "/leaderboard".

If the user's message is very short, nonsensical, or unclear (like a single letter or random characters), you MUST respond kindly and ask them to clarify or ask a question to get the conversation going. For example: "I'm not sure I understand. What are you trying to learn today?" or "I can help with that! What are you thinking about?". DO NOT return an empty response.

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
