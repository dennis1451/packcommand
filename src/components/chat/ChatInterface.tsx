import React, { useState, useRef, useEffect } from 'react';
import { Send, Dog, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Pack Commander, your professional dog training assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (userInput: string): string => {
    const responses = [
      "That's a great question about dog training! Based on my experience, consistency and positive reinforcement are key.",
      "I understand your concern. Many dog owners face similar challenges. Let's break this down step by step.",
      "Training takes time and patience. Here's what I recommend for your situation...",
      "That's actually a common behavior issue. Here's a proven approach to address it...",
      "Excellent question! The key to success with this training technique is timing and consistency."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-4 border-b border-sand-200 bg-forest-50">
        <div className="flex items-center space-x-3">
          <Dog className="h-8 w-8 text-forest-600" />
          <div>
            <h2 className="text-lg font-semibold text-pine-800">Pack Commander</h2>
            <p className="text-sm text-stone-600">Professional Training Assistant</p>
          </div>
        </div>
        <button className="p-2 hover:bg-sand-100 rounded-full transition-colors">
          <ChevronDown className="h-5 w-5 text-stone-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-forest-500 text-white'
                  : 'bg-sand-50 text-stone-800'
              }`}
            >
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex justify-start"
            >
              <div className="bg-sand-50 p-3 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-forest-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-forest-500 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-forest-500 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-sand-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Pack Commander about dog training..."
            className="flex-1 p-2 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2 bg-forest-500 text-white rounded-lg hover:bg-forest-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}