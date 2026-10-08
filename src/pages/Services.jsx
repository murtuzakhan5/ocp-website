import React, { useState } from 'react';
import { 
  Briefcase, GraduationCap, ClipboardCheck, Cpu, CheckCircle2, ArrowRight, ShieldCheck, ChevronRight 
} from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import { SERVICES_DATA } from '../data/ocpData';

export default function Services({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('consultancy');

  const activeService = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  const iconsMap = {
    consultancy: Briefcase,
    training: GraduationCap,
    auditing: ClipboardCheck,
    'system-support': Cpu
  };

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#070a12] border-b border-amber-500/10">
        <HoneycombCanvas interactive={false} density={50} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Consultancy, Training, Auditing & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our Professional Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive Management System solutions tailored to ISO, Halal, Food Safety, Health & Safety, and Social Compliance standards.
          </p>
        </div>
      </section>

      {/* Main Service Navigator Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-wrap justify-center gap-3 border-b border-slate-800 pb-4">
          {SERVICES_DATA.map((srv) => {
            const IconComp = iconsMap[srv.id] || Briefcase;
            const isActive = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center space-x-2.5 transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#131b2e] to-[#0b0f19] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-white">
                {activeService.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeService.shortDesc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Key Scope & Deliverables:
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {activeService.details.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all flex items-center space-x-2"
              >
                <span>Request Inquiry for {activeService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Box */}
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
              Why Partner With OCP?
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold shrink-0">1</span>
                <div>
                  <strong className="text-white">Customized Solutions:</strong> We avoid template solutions. SOPs and systems are designed specifically for your factory or workplace.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold shrink-0">2</span>
                <div>
                  <strong className="text-white">Hands-on Corporate Trainers:</strong> Interactive training consisting of presentation, mock audits, assignments, and practical role play.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold shrink-0">3</span>
                <div>
                  <strong className="text-white">Middle East & Global Presence:</strong> Local insights in Pakistan combined with international operational experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO CERTIFICATION METHODOLOGY ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-white">
            Our 5-Step ISO Implementation Roadmap
          </h2>
          <p className="text-sm text-slate-300">
            A proven structured pathway from diagnostic gap evaluation to successful third-party certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Gap Analysis", desc: "Evaluate existing systems against target ISO standard." },
            { step: "02", title: "System Design", desc: "Draft policies, SOPs, manuals & risk registers." },
            { step: "03", title: "Implementation", desc: "Train departmental teams & deploy procedures." },
            { step: "04", title: "Pre-Audit", desc: "Conduct internal audit & management review (MRM)." },
            { step: "05", title: "Certification", desc: "Guide through final audit & achieve ISO certification." }
          ].map((item) => (
            <div key={item.step} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
              <span className="text-2xl font-black font-mono text-amber-500/40">{item.step}</span>
              <h3 className="text-white font-bold text-base">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
