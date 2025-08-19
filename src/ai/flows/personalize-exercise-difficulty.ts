// This is a server-side file.
'use server';

/**
 * @fileOverview This file defines a Genkit flow to personalize exercise difficulty based on user performance.
 *
 * - personalizeExerciseDifficulty - A function that adjusts exercise difficulty based on user performance.
 * - PersonalizeExerciseDifficultyInput - The input type for the personalizeExerciseDifficulty function.
 * - PersonalizeExerciseDifficultyOutput - The return type for the personalizeExerciseDifficulty function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeExerciseDifficultyInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  exerciseType: z.string().describe('The type of exercise (e.g., grammar, vocabulary).'),
  exerciseDifficulty: z.string().describe('The current difficulty level of the exercise (e.g., easy, medium, hard).'),
  userPerformance: z.number().describe('The user\u2019s performance on the exercise (e.g., percentage correct).'),
});
export type PersonalizeExerciseDifficultyInput = z.infer<typeof PersonalizeExerciseDifficultyInputSchema>;

const PersonalizeExerciseDifficultyOutputSchema = z.object({
  newExerciseDifficulty: z.string().describe('The new difficulty level of the exercise (e.g., easy, medium, hard).'),
  reason: z.string().describe('The reason for adjusting the difficulty level.'),
});
export type PersonalizeExerciseDifficultyOutput = z.infer<typeof PersonalizeExerciseDifficultyOutputSchema>;

export async function personalizeExerciseDifficulty(input: PersonalizeExerciseDifficultyInput): Promise<PersonalizeExerciseDifficultyOutput> {
  return personalizeExerciseDifficultyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeExerciseDifficultyPrompt',
  input: {schema: PersonalizeExerciseDifficultyInputSchema},
  output: {schema: PersonalizeExerciseDifficultyOutputSchema},
  prompt: `You are an AI that personalizes exercise difficulty based on user performance.

  Based on the user's performance on the previous exercise, you will determine the new difficulty level for the next exercise.

  Here's the user's information:
  - User ID: {{{userId}}}
  - Exercise Type: {{{exerciseType}}}
  - Current Exercise Difficulty: {{{exerciseDifficulty}}}
  - User Performance: {{{userPerformance}}}%

  Consider these factors when determining the new difficulty level:
  - If the user's performance is above 80%, increase the difficulty level.
  - If the user's performance is between 50% and 80%, maintain the current difficulty level.
  - If the user's performance is below 50%, decrease the difficulty level.

  Respond with the new difficulty level and a brief explanation of why you adjusted it.

  The new difficulty level must be one of: easy, medium, hard.
  The response must contain only the new difficulty level and explanation.`,
});

const personalizeExerciseDifficultyFlow = ai.defineFlow(
  {
    name: 'personalizeExerciseDifficultyFlow',
    inputSchema: PersonalizeExerciseDifficultyInputSchema,
    outputSchema: PersonalizeExerciseDifficultyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
