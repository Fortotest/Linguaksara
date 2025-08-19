'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing grammar suggestions in the AI conversation chatbot.
 *
 * - aiConversationGrammarSuggestions - A function that provides alternative sentence suggestions to improve speaking skills.
 * - AiConversationGrammarSuggestionsInput - The input type for the aiConversationGrammarSuggestions function.
 * - AiConversationGrammarSuggestionsOutput - The return type for the aiConversationGrammarSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiConversationGrammarSuggestionsInputSchema = z.object({
  text: z.string().describe('The user input text to be analyzed.'),
});
export type AiConversationGrammarSuggestionsInput = z.infer<typeof AiConversationGrammarSuggestionsInputSchema>;

const AiConversationGrammarSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of alternative sentence suggestions.'),
});
export type AiConversationGrammarSuggestionsOutput = z.infer<typeof AiConversationGrammarSuggestionsOutputSchema>;

export async function aiConversationGrammarSuggestions(input: AiConversationGrammarSuggestionsInput): Promise<AiConversationGrammarSuggestionsOutput> {
  return aiConversationGrammarSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiConversationGrammarSuggestionsPrompt',
  input: {schema: AiConversationGrammarSuggestionsInputSchema},
  output: {schema: AiConversationGrammarSuggestionsOutputSchema},
  prompt: `You are an AI-powered language learning assistant that provides grammar suggestions and alternative sentence structures to users.

  Given the following sentence, please provide three alternative sentence suggestions that are grammatically correct and improve the overall clarity and fluency:

  Sentence: {{{text}}}

  Suggestions:`, // Added a clear prompt for generating alternative sentence suggestions
});

const aiConversationGrammarSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiConversationGrammarSuggestionsFlow',
    inputSchema: AiConversationGrammarSuggestionsInputSchema,
    outputSchema: AiConversationGrammarSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
