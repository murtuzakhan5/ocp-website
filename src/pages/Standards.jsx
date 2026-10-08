import React, { useState } from 'react';
import { 
  ShieldCheck, Search, Filter, CheckCircle2, ArrowRight, X, Award, ChevronRight 
} from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import { STANDARDS_DATA } from '../data/ocpData';

export default function Standards({ onOpenQuote }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalStandard, setActiveModalStandard] = useState(null);

  const categories = ['All', 'Quality Management', 'Health & Safety', 'Food Safety', 'Social Compliance', 'Medical & Healthcare', 'Sustainability & Packaging'];

  const filteredStandards = STANDARDS_DATA.filter((std) => {
    const matchesSearch = std.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          std.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          std.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || std.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-16 pb-20 overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-[#070a12] border-b border-amber-500/10">
        <HoneycombCanvas interactive={false} density={50} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>17+ Comprehensive Standards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            List Of Standards (1)
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Orient Consultant Pakistan (OCP) is committed to provide Consultancy & Training Services for international standards.
          </p>
        </div>
      </section>

      {/* Controls Bar: Search & Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
          
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search standard (e.g., 9001, HACCP, Halal)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-400 flex items-center justify-between">
          <span>Showing <strong className="text-amber-400 font-mono">{filteredStandards.length}</strong> of 17 International Standards</span>
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-amber-400 hover:underline">Clear Search</button>
          )}
        </div>
      </section>

      {/* Standards Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStandards.map((std) => (
            <div 
              key={std.code}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {std.code}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    {std.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {std.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {std.description}
                </p>

                {std.benefits && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400">Key Benefits:</span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {std.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                          <span className="truncate">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalStandard(std)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                >
                  <span>Detailed Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300"
                >
                  Request Audit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* MODAL POPUP FOR DETAILED STANDARD VIEW */}
      {activeModalStandard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#0f172a] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-100 shadow-2xl">
            <button 
              onClick={() => setActiveModalStandard(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {activeModalStandard.code}
              </span>
              <h3 className="text-2xl font-bold text-white">{activeModalStandard.title}</h3>
              <p className="text-xs text-amber-400 font-semibold">{activeModalStandard.category}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModalStandard.description}
            </p>

            {activeModalStandard.benefits && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Implementation Advantages:</h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {activeModalStandard.benefits.map((b, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setActiveModalStandard(null)}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalStandard(null);
                  onOpenQuote();
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400"
              >
                Inquire Proposal for {activeModalStandard.code}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
