import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Dog, Send } from 'lucide-react';
import { generateAIResponse } from '../../services/ai';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export function FloatingChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Pack Commander, your professional dog training assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await generateAIResponse(input);
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble processing your request right now. Please try again.",
        sender: 'assistant',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 p-6 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-sand-200 bg-forest-50">
              <div className="flex items-center space-x-3">
                <Dog className="h-6 w-6 text-forest-600" />
                <div>
                  <h2 className="font-semibold text-pine-800">Pack Commander</h2>
                  <p className="text-xs text-stone-600">Professional Training Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-500 hover:text-stone-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
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
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
            </div>

            <div className="p-4 border-t border-sand-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about dog training..."
                  className="flex-1 p-2 text-sm border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-2 bg-forest-500 text-white rounded-lg hover:bg-forest-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-forest-600 text-white p-4 rounded-full shadow-lg hover:bg-forest-700 transition-colors"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}