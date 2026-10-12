import React, { useState } from 'react';
import { 
  Building2, Search, ShieldCheck, CheckCircle2, Award, Sparkles, Filter 
} from 'lucide-react';
import { AUDIT_PREPARATION_CLIENTS } from '../data/auditClientsData';

export default function AuditPreparationClients({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Pharmaceutical',
    'FMCG & Foods',
    'FMCG & Beverages',
    'Retail & Apparel'
  ];

  const filteredClients = AUDIT_PREPARATION_CLIENTS.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.subtext.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || client.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="audit-experience" className="relative py-20 bg-gradient-to-b from-[#070a12] via-[#0b0f19] to-[#070a12] border-y border-amber-500/20 overflow-hidden">
      
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block with User-Specified Title & Description */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-500/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Customer-Specific Compliance Benchmarks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Client Audit Preparation <span className="gold-gradient-text">Experience</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            The following is a list of clients for whom we have provided audit preparation and compliance support at various companies to help them meet customer-specific audit requirements, including audits conducted by leading pharmaceutical and FMCG companies.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search brand (e.g. Tapal, GSK, Shan, Sanofi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 25 Client Cards Grid (Logos with Brand Name underneath) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between group shadow-lg"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)'
              }}
            >
              {/* Brand Logo Emblem */}
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center p-2 mb-3.5 transition-transform duration-300 group-hover:scale-105 shadow-inner relative overflow-hidden"
                style={{
                  backgroundColor: client.bgColor,
                  border: `1.5px solid ${client.borderColor}`
                }}
              >
                {/* Subtle corner badge */}
                <div 
                  className="w-1.5 h-1.5 rounded-full absolute top-2 right-2"
                  style={{ backgroundColor: client.primaryColor }}
                />

                {/* Stylized Logo Typography Emblem */}
                <span 
                  className="text-base sm:text-lg font-black tracking-tighter uppercase font-mono"
                  style={{ color: client.textColor }}
                >
                  {client.symbol}
                </span>

                <span 
                  className="text-[9px] font-bold uppercase tracking-wider mt-0.5 opacity-90 line-clamp-1"
                  style={{ color: client.textColor }}
                >
                  {client.category.split('&')[0]}
                </span>
              </div>

              {/* Brand Name Underneath (Exact as requested) */}
              <div className="space-y-1 w-full">
                <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-400 transition-colors truncate">
                  {client.name}
                </h4>

                <p className="text-[11px] text-slate-400 line-clamp-1">
                  {client.subtext}
                </p>

                <div className="pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-center">
                  <span className="text-[10px] text-emerald-400 flex items-center space-x-1 font-medium truncate">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Audit Ready</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar & Quick Inquiry Button */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#101728] via-[#131b2e] to-[#101728] border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Preparing for a Tier-1 Pharmaceutical or FMCG Customer Audit?
              </h4>
              <p className="text-xs text-slate-300">
                Our lead consultants specialize in pre-audit gap assessments, CAPA drafting, and sterile/hygiene compliance.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="whitespace-nowrap px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-md shadow-amber-500/20"
          >
            Inquire Audit Preparation Support
          </button>
        </div>

      </div>
    </section>
  );
}
