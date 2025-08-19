'use server';
/**
 * @fileOverview A Text-to-Speech (TTS) AI agent.
 *
 * - textToSpeech - A function that converts text into audible speech.
 * - TextToSpeechInput - The input type for the textToSpeech function.
 * - TextToSpeechOutput - The return type for the textToSpeech function.
 */

import {ai} from '@/ai/config';
import {z} from 'genkit';
import {TextToSpeechClient} from '@google-cloud/text-to-speech';

const TextToSpeechInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

const TextToSpeechOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

export async function textToSpeech(
  input: TextToSpeechInput
): Promise<TextToSpeechOutput> {
  return textToSpeechFlow(input);
}

const textToSpeechFlow = ai.defineFlow(
  {
    name: 'textToSpeechFlow',
    inputSchema: TextToSpeechInputSchema,
    outputSchema: TextToSpeechOutputSchema,
  },
  async input => {
    const client = new TextToSpeechClient();

    const request = {
      input: {text: input.text},
      voice: {languageCode: 'en-US'},
      audioConfig: {audioEncoding: 'LINEAR16' as const},
    };

    const [response] = await client.synthesizeSpeech(request);
    
    if (!response.audioContent) {
        throw new Error('No audio content was generated.');
    }

    const audioBase64 = Buffer.from(response.audioContent).toString('base64');
    
    return {
      audioDataUri: 'data:audio/wav;base64,' + audioBase64,
    };
  }
);