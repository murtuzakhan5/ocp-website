import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, ArrowRight, CheckCircle2, Globe, Users, 
  BookOpen, Star, Sparkles, Building2, ChevronRight, Zap, Calculator,
  TrendingUp, Headphones, Layers
} from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import AuditPreparationClients from '../components/AuditPreparationClients';
import { 
  COMPANY_INFO, STANDARDS_DATA, CLIENTS_DATA, SERVICES_DATA, 
  TESTIMONIALS_DATA 
} from '../data/ocpData';

export default function Home({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [calcStandard, setCalcStandard] = useState('ISO 9001');
  const [calcEmployees, setCalcEmployees] = useState(25);

  const getEstimatedDuration = (employees) => {
    if (employees < 20) return "3 to 4 Weeks";
    if (employees < 100) return "4 to 6 Weeks";
    return "6 to 10 Weeks";
  };

  const categories = ['All', 'Quality Management', 'Health & Safety', 'Food Safety', 'Social Compliance'];

  const filteredStandards = activeCategory === 'All' 
    ? STANDARDS_DATA.slice(0, 8) 
    : STANDARDS_DATA.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase())).slice(0, 8);

  return (
    <div className="space-y-24 pb-16 overflow-hidden">

      {/* HERO SECTION WITH HONEYCOMB CANVAS ANIMATION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-500/10 overflow-hidden">
        
        {/* HONEYCOMB CANVAS BACKDROP ("Honey ka chatta" interactive grid) */}
        <HoneycombCanvas interactive={true} density={42} />

        {/* Ambient Gradient Flares */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-amber-500/10 backdrop-blur-md animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Leading Management System & ISO Consulting Firm</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Your Partner in <br />
            <span className="gold-gradient-text">Compliance & Business Excellence</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            Orient Consultant Pakistan (OCP) empowers leading organizations across <strong className="text-amber-400">Pakistan, U.A.E, Saudi Arabia, Qatar, Oman, Iraq, Sudan & Afghanistan</strong> with world-class ISO Certification, Consultancy, Auditing & Technical Training.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-500/25 flex items-center justify-center space-x-3 text-base group"
            >
              <Award className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Get ISO Certification Proposal</span>
              <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/standards"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 text-base backdrop-blur-md"
            >
              <span>Explore 17+ ISO Standards</span>
              <ChevronRight className="w-5 h-5 text-amber-400" />
            </Link>
          </div>

          {/* Key highlights pill ticker */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>GFSI & ISO Compliant Frameworks</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>32+ Valued Corporate Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Middle East & Africa Operations</span>
            </div>
          </div>

        </div>
      </section>


      {/* STATS COUNTER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Corporate Clients Certified", value: "32+", icon: Building2, desc: "Textiles, Packaging, Healthcare & Energy" },
            { label: "ISO & Compliance Standards", value: "17+", icon: ShieldCheck, desc: "ISO 9001, 14001, 45001, Halal, FSC, SA8000" },
            { label: "International Locations", value: "9+", icon: Globe, desc: "Pakistan, UAE, KSA, Qatar, Oman & Beyond" },
            { label: "Corporate Audits & Trainings", value: "500+", icon: Award, desc: "Classroom, Mock Audits & Certifications" }
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx} 
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 relative overflow-hidden group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-amber-400 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* NEW SECTION: CLIENT AUDIT PREPARATION EXPERIENCE (25 FMCG & PHARMA LEADERS) */}
      <AuditPreparationClients onOpenQuote={onOpenQuote} />


      {/* SERVICES SUMMARY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Core Consultancy & Training Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From initial gap diagnostics to pre-audit readiness and post-certification support, Orient Consultant Pakistan provides end-to-end expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div 
              key={srv.id}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-0.5 shadow-lg shadow-amber-500/10">
                  <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center text-amber-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {srv.shortDesc}
                </p>
                <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  {srv.details.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/services"
                className="pt-4 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 group"
              >
                <span>Learn More Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>


      {/* FEATURED STANDARDS SHOWCASE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>International Certifications</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              List Of Standards Covered
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Select standard category to inspect ISO framework specifications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStandards.map((std) => (
            <div 
              key={std.code}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {std.code}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    {std.category.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white line-clamp-2">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium">✓ Audit Ready</span>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/standards"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 text-sm font-bold text-white transition-colors"
          >
            <span>View Complete 17+ List of Standards</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>


      {/* INTERACTIVE ISO TIMELINE & COST CALCULATOR WIDGET */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#131b2e] to-[#0e1424] space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Certification Estimator</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Estimate Certification Implementation Timeline
              </h3>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              100% Free Consultation Guarantee
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  1. Target ISO / Compliance Standard
                </label>
                <select
                  value={calcStandard}
                  onChange={(e) => setCalcStandard(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                >
                  {STANDARDS_DATA.map(s => (
                    <option key={s.code} value={s.code}>{s.code} - {s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 uppercase mb-2">
                  <span>2. Total Workforce / Employees:</span>
                  <span className="text-amber-400 font-mono text-sm">{calcEmployees} Staff</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={calcEmployees}
                  onChange={(e) => setCalcEmployees(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Small Unit (5)</span>
                  <span>Mid Enterprise (150)</span>
                  <span>Large Industrial (500+)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] border border-amber-500/20 space-y-5 text-center md:text-left">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Implementation Duration:</span>
                <div className="text-3xl font-black text-amber-400 font-mono">
                  {getEstimatedDuration(calcEmployees)}
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between">
                  <span>Gap Analysis Audit:</span>
                  <span className="text-emerald-400 font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Documentation & SOPs:</span>
                  <span className="text-emerald-400 font-semibold">Tailored</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Staff Training Workshops:</span>
                  <span className="text-emerald-400 font-semibold">Interactive</span>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-md"
              >
                Request Custom Quote for {calcStandard}
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* VALUED CLIENTS INFINITE MARQUEE */}
      <section className="space-y-8 py-8 border-y border-slate-800/80 bg-[#070a12]/80">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Building2 className="w-4 h-4" />
            <span>Trusted By 32+ Industry Leaders</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Our Valued Corporate Clientele
          </h2>
        </div>

        {/* Marquee Track */}
        <div className="relative overflow-hidden py-4">
          <div className="animate-marquee flex space-x-6">
            {[...CLIENTS_DATA, ...CLIENTS_DATA].map((client, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 text-slate-200 text-xs font-semibold whitespace-nowrap flex items-center space-x-2 shrink-0 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>{client.name}</span>
                <span className="text-[10px] text-slate-400 font-normal px-2 py-0.5 rounded bg-slate-800">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/clients" className="text-xs font-bold text-amber-400 hover:underline">
            View All 32+ Valued Client Portfolio →
          </Link>
        </div>
      </section>


      {/* TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            What Our Clients Say About OCP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.designation}, <strong className="text-amber-400">{t.company}</strong></p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900 text-amber-300 border border-slate-800">
                  {t.standard}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
