
/**
 * @fileOverview Genkit API route handler.
 */
import {next} from '@genkit-ai/next';
import {ai} from '@/ai/config';
import '@/ai/flows/ai-conversation';
import '@/ai/flows/grammar-correction';
import '@/ai/flows/text-to-speech';

export const {GET, POST} = next({ai});
