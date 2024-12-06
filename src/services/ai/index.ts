import { AI_CONFIG } from './config';
import { formatPrompt } from './prompts';

export async function generateAIResponse(message: string): Promise<string> {
  try {
    const endpoint = `${AI_CONFIG.ENDPOINT}/${AI_CONFIG.MODEL}:generateContent?key=${AI_CONFIG.API_KEY}`;
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: formatPrompt(message) }]
        }],
        generationConfig: AI_CONFIG.GENERATION_CONFIG
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate response');
    }

    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text;
    
    // Remove any remaining special characters or formatting
    text = text.replace(/[\*\#\_\~\`\[\]\(\)\{\}]/g, '');
    text = text.replace(/\n+/g, ' ').trim();
    
    return text;
  } catch (error) {
    console.error('AI response error:', error);
    throw new Error('I apologize, but I am having trouble responding right now. Please try again.');
  }
}