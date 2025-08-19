/**
 * @fileOverview Genkit API route handler.
 */
import {next} from '@genkit-ai/next';
import config from '@/ai/config';
import '@/ai/flows/ai-conversation';
import '@/ai/flows/ai-conversation-grammar-suggestions';
import '@/ai/flows/grammar-correction';

export const {GET, POST} = next({config});
