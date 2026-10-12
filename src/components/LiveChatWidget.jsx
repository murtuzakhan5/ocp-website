import React, { useState } from 'react';
import { 
  MessageSquare, X, Send, Phone, Mail, CheckCircle2, Bot, Sparkles, ExternalLink, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/ocpData';

export default function LiveChatWidget({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Assalam-o-Alaikum! 👋 Welcome to Orient Consultant Pakistan (OCP). How can we assist you with ISO Certification, Audit Preparation, or Technical Training?'
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const targetPhone = "+923172768613";
  const targetEmail = "info@ocp.com";

  const quickOptions = [
    '💬 Chat on WhatsApp',
    '📋 Request ISO Proposal',
    '📞 Direct Phone Call',
    '✉️ Send Official Email'
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    if (text.includes('WhatsApp')) {
      window.open(`https://wa.me/923172768613?text=Hello%20Orient%20Consultant%20Pakistan,%20I%20need%20ISO%20Consultation%20and%20Audit%20Support`, '_blank');
      return;
    }

    if (text.includes('Email')) {
      window.location.href = `mailto:${targetEmail}?subject=ISO%20Inquiry%20-%20Orient%20Consultant%20Pakistan`;
      return;
    }

    if (text.includes('Call')) {
      window.location.href = `tel:${targetPhone}`;
      return;
    }

    if (text.includes('Proposal')) {
      setIsOpen(false);
      if (onOpenQuote) onOpenQuote();
      return;
    }

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');

    // Automated bot responses
    setTimeout(() => {
      let replyText = `Thank you for your message! Our lead ISO consultant is available right now. You can reach us directly on WhatsApp/Call at ${targetPhone} or email us at ${targetEmail}.`;
      
      if (text.toLowerCase().includes('iso') || text.toLowerCase().includes('audit') || text.toLowerCase().includes('training')) {
        replyText = `We specialize in ISO 9001, 14001, 45001, 22000, Halal, FSC, and Client Audit Preparation (Pharma & FMCG). You can chat with our team on WhatsApp at ${targetPhone} for immediate assistance!`;
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: replyText }
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Trigger Button with WhatsApp Brand Accent */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500 text-slate-950 shadow-2xl shadow-emerald-500/30 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Open Chat Support"
        >
          <MessageSquare className="w-6 h-6 text-slate-950" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0b0f19] animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0b0f19]"></span>
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
            💬 Live Support: +92 317 2768613
          </span>
        </button>
      )}

      {/* Chat Drawer Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-[#0f172a] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px] animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0b0f19] to-[#131b2e] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                  <span>OCP Support Desk</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-normal">Active</span>
                </h4>
                <p className="text-[11px] text-amber-400 font-mono">{targetPhone}</p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Direct Connect Actions Bar */}
          <div className="px-3 py-2 bg-[#090d18] border-b border-slate-800/80 flex items-center justify-between text-xs gap-2">
            <a
              href={`https://wa.me/923172768613?text=Hello%20Orient%20Consultant%20Pakistan`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-semibold text-center flex items-center justify-center space-x-1 transition-colors"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${targetPhone}`}
              className="flex-1 py-1.5 px-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold text-center flex items-center justify-center space-x-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
            <a
              href={`mailto:${targetEmail}`}
              className="flex-1 py-1.5 px-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 font-semibold text-center flex items-center justify-center space-x-1 transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>Email</span>
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#070a12]/60 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-semibold rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md'
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
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/40 text-[11px] text-amber-300 font-medium transition-colors text-left"
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
              placeholder="Ask question or message..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-amber-500 focus:outline-none"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold hover:from-amber-300 hover:to-orange-400 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
