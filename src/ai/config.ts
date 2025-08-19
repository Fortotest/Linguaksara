/**
 * @fileOverview Genkit configuration file.
 */
import {googleAI} from '@genkit-ai/googleai';
import {genkit} from 'genkit';
import {firebase} from '@genkit-ai/firebase';
import {next} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
    firebase(),
    next(),
  ],
  logLevel: 'debug',
  flowStateStore: 'firebase',
  traceStore: 'firebase',
});
