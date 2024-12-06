import express from 'express';
import OpenAI from 'openai';
import { auth } from '../middleware/auth.js';

const router = express.Router();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const SYSTEM_PROMPT = `You are Pack Commander, a professional dog training expert with years of experience. 
Your responses should be:
1. Professional yet friendly
2. Based on positive reinforcement techniques
3. Focused on practical, actionable advice
4. Safety-conscious and ethical
5. Tailored to the specific situation

Always consider:
- The dog's well-being and safety
- The owner's skill level
- The importance of consistency
- The need for patience in training

If you're unsure about a specific situation, recommend consulting with a local professional trainer or veterinarian.`;

router.post('/', auth, async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    res.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      message: "I apologize, but I'm having trouble processing your request right now. Please try again later." 
    });
  }
});

export { router };