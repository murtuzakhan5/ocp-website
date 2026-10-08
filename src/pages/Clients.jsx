import React, { useState } from 'react';
import { 
  Building2, Search, Filter, ShieldCheck, Award, CheckCircle2 
} from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import { CLIENTS_DATA } from '../data/ocpData';

export default function Clients({ onOpenQuote }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = [
    'All', 
    'Textile & Apparel', 
    'Packaging & Printing', 
    'Healthcare & Diagnostics', 
    'Food & Agriculture', 
    'Energy & Infrastructure',
    'Industrial Conglomerate'
  ];

  const filteredClients = CLIENTS_DATA.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          client.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || client.sector.toLowerCase().includes(selectedSector.toLowerCase());
    return matchesSearch && matchesSector;
  });

  return (
    <div className="space-y-16 pb-20 overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#070a12] border-b border-amber-500/10">
        <HoneycombCanvas interactive={false} density={50} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>32+ Valued Organizations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our Valued Corporate Clientele
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Trusted by Leading Organizations Across Pakistan & Beyond.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search client (e.g. Zaman Textile, Aman Medical)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSector(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSector === s
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

        </div>

        <div className="text-xs text-slate-400 flex items-center justify-between">
          <span>Showing <strong className="text-amber-400 font-mono">{filteredClients.length}</strong> of 32 Verified Clients</span>
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-amber-400 hover:underline">Reset Filter</button>
          )}
        </div>
      </section>

      {/* Client Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredClients.map((client) => (
            <div 
              key={client.id}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Client #{client.id}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {client.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  {client.sector}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl border border-amber-500/30 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Join Pakistan's Most Trusted Enterprise Portfolio</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Become an ISO certified business recognized globally. Request your diagnostic consultation today.
          </p>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300"
          >
            Get Certified With OCP
          </button>
        </div>
      </section>

    </div>
  );
}
