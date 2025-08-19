'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing grammar suggestions in the AI conversation chatbot.
 *
 * - aiConversationGrammarSuggestions - A function that provides alternative sentence suggestions to improve speaking skills.
 * - AiConversationGrammarSuggestionsInput - The input type for the aiConversationGrammarSuggestions function.
 * - AiConversationGrammarSuggestionsOutput - The return type for the aiConversationGrammarSuggestions function.
 */

import {defineFlow, definePrompt, z} from 'genkit';

const AiConversationGrammarSuggestionsInputSchema = z.object({
  text: z.string().describe('The user input text to be analyzed.'),
});
export type AiConversationGrammarSuggestionsInput = z.infer<typeof AiConversationGrammarSuggestionsInputSchema>;

const AiConversationGrammarSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of up to three alternative sentence suggestions.'),
});
export type AiConversationGrammarSuggestionsOutput = z.infer<typeof AiConversationGrammarSuggestionsOutputSchema>;

export async function aiConversationGrammarSuggestions(input: AiConversationGrammarSuggestionsInput): Promise<AiConversationGrammarSuggestionsOutput> {
  return aiConversationGrammarSuggestionsFlow(input);
}

const prompt = definePrompt({
  name: 'aiConversationGrammarSuggestionsPrompt',
  input: {schema: AiConversationGrammarSuggestionsInputSchema},
  output: {schema: AiConversationGrammarSuggestionsOutputSchema},
  prompt: `You are a language learning assistant. Provide up to three alternative, grammatically correct sentence suggestions for the user's text to improve clarity and fluency.

Sentence: {{{text}}}`,
});

const aiConversationGrammarSuggestionsFlow = defineFlow(
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
