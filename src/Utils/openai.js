import OpenAI from 'openai';
import { GEMINI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: GEMINI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;