/**
 * @fileOverview Genkit configuration file.
 */
import {googleAI} from '@genkit-ai/googleai';
import {genkit} from 'genkit';
import {firebasePlugin} from '@genkit-ai/firebase/plugin';
import {next} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
    firebasePlugin(),
    next(),
  ],
  logLevel: 'debug',
  flowStateStore: 'firebase',
  traceStore: 'firebase',
});
