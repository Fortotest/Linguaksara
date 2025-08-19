/**
 * @fileOverview Genkit configuration file.
 */
import {googleAI} from '@genkit-ai/googleai';
import {genkit} from 'genkit';
import * as firebase from '@genkit-ai/firebase';
import * as next from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
    (firebase as any).firebase(),
    (next as any).next(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
});
