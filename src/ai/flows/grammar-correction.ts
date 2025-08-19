'use server';
/**
 * @fileOverview Grammar correction AI agent.
 *
 * - correctGrammar - A function that handles the grammar correction process.
 * - CorrectGrammarInput - The input type for the correctGrammar function.
 * - CorrectGrammarOutput - The return type for the correctGrammar function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CorrectGrammarInputSchema = z.object({
  text: z.string().describe('The text to be corrected.'),
});
export type CorrectGrammarInput = z.infer<typeof CorrectGrammarInputSchema>;

const CorrectGrammarOutputSchema = z.object({
  correctedText: z.string().describe('The corrected text.'),
});
export type CorrectGrammarOutput = z.infer<typeof CorrectGrammarOutputSchema>;

export async function correctGrammar(input: CorrectGrammarInput): Promise<CorrectGrammarOutput> {
  return correctGrammarFlow(input);
}

const prompt = ai.definePrompt({
  name: 'correctGrammarPrompt',
  input: {schema: CorrectGrammarInputSchema},
  output: {schema: CorrectGrammarOutputSchema},
  prompt: `Correct the grammar and spelling of the following text:\n\n{{{text}}}`,
});

const correctGrammarFlow = ai.defineFlow(
  {
    name: 'correctGrammarFlow',
    inputSchema: CorrectGrammarInputSchema,
    outputSchema: CorrectGrammarOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
