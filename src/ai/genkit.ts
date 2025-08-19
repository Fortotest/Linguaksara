import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import next from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI(),
    next, // Correct: pass the plugin object directly
  ],
  model: 'googleai/gemini-2.0-flash',
  flowStateStore: 'firebase',
  traceStore: 'firebase',
});
