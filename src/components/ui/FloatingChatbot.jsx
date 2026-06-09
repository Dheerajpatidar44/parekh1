import React from 'react';
import { MessageSquareText } from 'lucide-react';

const FloatingChatbot = () => {
  return (
    <button
      className="fixed bottom-24 right-6 bg-brand-maroon text-white p-4 rounded-full shadow-lg hover:bg-red-900 hover:-translate-y-1 transition-all z-50 flex items-center justify-center"
      aria-label="Open Chatbot"
      onClick={() => alert('Chatbot opened!')}
    >
      <MessageSquareText className="h-8 w-8" />
    </button>
  );
};

export default FloatingChatbot;
