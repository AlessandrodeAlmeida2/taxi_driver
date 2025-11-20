import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToAssistant } from '../services/geminiService';

export const GeminiPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Eu sou o assistente virtual da Família Silva. Posso sugerir roteiros de vinhos, cafés ou passeios pela cidade. Como posso ajudar no seu planejamento hoje?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToAssistant(userMessage.text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Desculpe, tive um problema técnico. Por favor, tente novamente ou chame no WhatsApp.',
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
          <Sparkles className="text-indigo-600 h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">
          Concierge Virtual Inteligente
        </h2>
        <p className="mt-4 text-lg text-slate-500">
          Não sabe onde ir? Pergunte ao nosso assistente com inteligência artificial. Peça sugestões de vinícolas românticas, passeios para família ou onde almoçar.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="bg-indigo-600 p-4 flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="text-white h-5 w-5" />
          </div>
          <div>
            <h3 className="text-white font-medium">Assistente de Roteiros</h3>
            <p className="text-indigo-200 text-xs">Online agora • Powered by Gemini</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-slate-200' : 'bg-indigo-100'
                }`}>
                  {msg.role === 'user' ? <User size={16} className="text-slate-600" /> : <Bot size={16} className="text-indigo-600" />}
                </div>
                
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-primary-500 text-white rounded-tr-none'
                      : msg.isError 
                        ? 'bg-red-50 text-red-600 border border-red-200 rounded-tl-none'
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%] gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Loader2 size={16} className="text-indigo-600 animate-spin" />
                </div>
                <div className="bg-white text-slate-500 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-xs flex items-center">
                  Escrevendo roteiro...
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 border-t border-slate-200">
          <div className="flex items-end gap-2 bg-slate-100 rounded-xl p-2 border border-slate-200 focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400 transition-all">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ex: Quero visitar uma vinícola que sirva almoço..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 placeholder-slate-400 resize-none py-2 px-3 min-h-[44px] max-h-32"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`p-2 rounded-lg flex-shrink-0 transition-colors ${
                isLoading || !input.trim()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-primary-500 hover:bg-primary-600 text-white shadow-sm'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-center text-xs text-slate-400 mt-2">
            A IA pode cometer erros. Confirme detalhes com o motorista.
          </p>
        </div>
      </div>
    </div>
  );
};