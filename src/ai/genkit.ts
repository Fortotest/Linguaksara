import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {next} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI(),
    next({
      // The Next.js plugin needs to know the directory where flows are defined.
      flowsDir: 'src/ai/flows',
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
