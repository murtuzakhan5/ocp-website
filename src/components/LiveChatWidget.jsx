import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Phone, CheckCircle2, Bot, Sparkles, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/ocpData';

export default function LiveChatWidget({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Assalam-o-Alaikum! 👋 Welcome to Orient Consultant Pakistan (OCP). How can we assist you with ISO Certification or Technical Training today?'
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const quickOptions = [
    '📋 ISO 9001 / 14001 Proposal',
    '🎓 Corporate Training Details',
    '📞 Speak to Karachi Officer',
    '💬 Open WhatsApp Chat'
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');

    // Automated bot responses
    setTimeout(() => {
      let replyText = 'Thank you for your message! Our senior lead consultant Farhan Ali from Karachi office is ready to assist you.';
      
      if (text.includes('ISO') || text.includes('Proposal')) {
        replyText = 'We provide complete consultancy for ISO 9001, 14001, 45001, 22000, Halal & FSC standards. Click below to get a fast official proposal!';
      } else if (text.includes('Training')) {
        replyText = 'Our corporate training modules include Internal Auditing, Fire Safety, Health & Safety, Food Safety, and QMS/EMS courses with certificates!';
      } else if (text.includes('Call') || text.includes('Karachi')) {
        replyText = `You can call our direct helpline at ${COMPANY_INFO.phone} or visit our head office in Gulshan-e-Iqbal, Karachi.`;
      } else if (text.includes('WhatsApp')) {
        window.open(`https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}?text=Hello%20OCP,%20I%20need%20ISO%20Consultation`, '_blank');
        return;
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: replyText }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 shadow-2xl shadow-amber-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6 text-slate-950" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0b0f19] animate-pulse"></span>
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat with OCP Consultant 💬
          </span>
        </button>
      )}

      {/* Chat Drawer Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-[#0f172a] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[480px] animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-[#0b0f19] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center space-x-1">
                  <span>OCP Support Desk</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </h4>
                <p className="text-[10px] text-slate-400">Online | Karachi Head Office</p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#070a12]/50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-medium rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick Option Chips */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {quickOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSend(opt)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/40 text-[11px] text-amber-300 font-medium transition-colors text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-[#0b0f19] border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask about ISO standards..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
