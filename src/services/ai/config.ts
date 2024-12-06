export const AI_CONFIG = {
  API_KEY: import.meta.env.VITE_GOOGLE_AI_API_KEY,
  MODEL: 'gemini-pro',
  ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models',
  GENERATION_CONFIG: {
    temperature: 0.7,
    maxOutputTokens: 50,
    topK: 1,
    topP: 0.8
  }
};