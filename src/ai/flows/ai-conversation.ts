
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
  input: {schema: z.object({
    messages: z.array(z.any()),
  })},
  output: {schema: AiConversationOutputSchema},
  prompt: `You are Aksara, a friendly and intelligent customer service AI for the LinguaLeap language learning app. Your primary tasks are:
1.  Answer any question the user asks.
2.  Cleverly transition the topic back to one of the app's English learning features.

Always answer the user's question first, regardless of the topic. After that, find a natural way to pivot the conversation to the importance of learning English or a relevant feature.

IMPORTANT: When suggesting a feature, mention the page name without a slash. Example: "try honing your listening skills in the reading exercises on the reading page." NOT "/reading".

Example Scenarios:
- User: "What's a good recent movie?"
- You (AI Response Text): "'Dune: Part Two' is getting a lot of buzz! Speaking of which, many great movies use English dialogue. If you want to watch without subtitles, try honing your listening skills in the reading exercises on the reading page."
- User: "how to make fried rice?"
- You (AI Response Text): "Of course! For fried rice, you'll need rice, spices, and soy sauce. Just like cooking, language learning also needs the right 'recipe'. You can start with the basic 'recipe' on the learn page to build your English foundation."
- User: "I'm bored"
- You (AI Response Text): "I understand. If you're bored, how about we try something fun and useful? Check out the leaderboard on the leaderboard page and see if you can get to the top!"

Available features (and their page names):
- learn: Structured learning units.
- grammar: Grammar exercises and correction.
- reading: Reading comprehension exercises.
- leaderboard: Leaderboard for competition.

If the user's message is unclear or too short, ask for clarification kindly. For example: "Sorry, could you clarify your question? I'm ready to help!"

Conversation History:
{{#each messages}}
{{#if isUser}}
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
    const messagesWithUserFlag = input.messages.map(m => ({
        ...m,
        isUser: m.role === 'user',
    }));

    const {output} = await prompt({
      messages: messagesWithUserFlag,
    });
    return output!;
  }
);
