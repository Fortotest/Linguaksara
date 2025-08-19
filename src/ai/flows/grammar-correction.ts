
'use server';
/**
 * @fileOverview Grammar correction AI agent.
 *
 * - correctGrammar - A function that handles the grammar correction process.
 * - CorrectGrammarInput - The input type for the correctGrammar function.
 * - CorrectGrammarOutput - The return type for the correctGrammar function.
 */

import {z} from 'genkit';
import {ai} from '../config';
import { gemini15Flash } from '@genkit-ai/googleai';

const CorrectGrammarInputSchema = z.object({
  text: z.string().describe('The text to be corrected.'),
});
export type CorrectGrammarInput = z.infer<typeof CorrectGrammarInputSchema>;

const CorrectionSchema = z.object({
    type: z.string().describe("The type of error (e.g., 'Grammar', 'Spelling', 'Capitalization')."),
    originalText: z.string().describe("The snippet of the original text containing the error."),
    explanation: z.string().describe("A clear explanation of why this is an error."),
    suggestion: z.string().describe("The suggested replacement for the incorrect part."),
});

const CorrectGrammarOutputSchema = z.object({
  correctedText: z.string().describe('The fully corrected version of the text.'),
  corrections: z.array(CorrectionSchema).describe('A list of detailed corrections for each error found.'),
});
export type CorrectGrammarOutput = z.infer<typeof CorrectGrammarOutputSchema>;

export async function correctGrammar(input: CorrectGrammarInput): Promise<CorrectGrammarOutput> {
  return correctGrammarFlow(input);
}

const prompt = ai.definePrompt({
  name: 'correctGrammarPrompt',
  model: gemini15Flash,
  input: {schema: CorrectGrammarInputSchema},
  output: {schema: CorrectGrammarOutputSchema},
  prompt: `You are an expert English grammar and spelling assistant for language learners.
Analyze the following text and identify all errors. For each error, provide a detailed breakdown.
Your task is to populate the 'corrections' array and provide the final 'correctedText'.

Here are the rules for each correction object:
1.  'type': Categorize the error. Use simple categories like "Grammar", "Spelling", "Capitalization", "Punctuation".
2.  'originalText': Provide a small snippet of the original text that contains the error.
3.  'explanation': Clearly and simply explain *why* it is an error. For grammar, state the rule. For spelling, mention it's a typo.
4.  'suggestion': Provide the correct word or phrase.

After identifying all errors, provide the final, fully corrected sentence in the 'correctedText' field.

**SPECIAL RULE: Handling Non-English Input**
If the user's text is not in English (e.g., it's in Indonesian), you must handle it gracefully.
- Do not try to find grammar/spelling errors.
- Create ONE correction object.
- Set 'type' to 'Language'.
- For 'explanation', state that the input seems to be in another language and provide the English translation. For example: "Kata 'kucing' adalah Bahasa Indonesia. Dalam bahasa Inggris, itu adalah 'cat'."
- For 'suggestion', provide a simple, correct English sentence using the translated word. For example: "A cat is cute."
- For 'correctedText', provide the same suggested English sentence.

Example for Non-English Input:
Input: "kucing"
Expected Output:
{
  "correctedText": "A cat is cute.",
  "corrections": [
    {
      "type": "Language",
      "originalText": "kucing",
      "explanation": "Kata 'kucing' adalah Bahasa Indonesia. Dalam bahasa Inggris, itu adalah 'cat'.",
      "suggestion": "A cat is cute."
    }
  ]
}

Example for English Input: "i is happyy becaus i learn english"
Expected Output:
{
  "correctedText": "I am happy because I learn English.",
  "corrections": [
    {
      "type": "Capitalization",
      "originalText": "i is",
      "explanation": "The pronoun 'I' should always be capitalized. Sentences should also begin with a capital letter.",
      "suggestion": "I"
    },
    {
      "type": "Grammar",
      "originalText": "i is happyy",
      "explanation": "The verb 'is' does not agree with the subject 'I'. The correct verb to use with 'I' is 'am'.",
      "suggestion": "am"
    },
    {
      "type": "Spelling",
      "originalText": "is happyy becaus",
      "explanation": "There is a spelling mistake in the word 'happyy'.",
      "suggestion": "happy"
    },
    {
      "type": "Spelling",
      "originalText": "happyy becaus i",
      "explanation": "There is a spelling mistake in the word 'becaus'.",
      "suggestion": "because"
    }
  ]
}

Now, analyze this text:
Text: {{{text}}}`,
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
