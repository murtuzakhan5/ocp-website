import React from 'react';
import { 
  Globe, ShieldCheck, Award, Users, CheckCircle2, Target, Eye, Sparkles, Building2, MapPin 
} from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import { COMPANY_INFO, GLOBAL_COUNTRIES } from '../data/ocpData';

export default function AboutUs({ onOpenQuote }) {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-[#070a12] border-b border-amber-500/10">
        <HoneycombCanvas interactive={false} density={50} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile & Global Footprint</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About Orient Consultant Pakistan
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            {COMPANY_INFO.tagline}
          </p>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-white">
                Leading Management System & Business Consulting Organization
              </h2>
              <p className="text-amber-400 text-sm font-semibold">
                Serving Pakistan, Middle East & Africa since 2012
              </p>
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Orient Consultant Pakistan (OCP) is a premier management system consultancy and technical training provider operating across Pakistan, United Arab Emirates (U.A.E), Iraq, Saudi Arabia, Oman, Qatar, Bahrain, Sudan, Afghanistan, and surrounding regions.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              We specialize in end-to-end ISO management system implementation, lead auditor training, food safety HACCP systems, occupational health & safety compliance, environmental management, social accountability (SA8000, Sedex/BSCI), and medical device regulatory standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">100% Audit Guarantee</h4>
                  <p className="text-xs text-slate-400">Pre-audit diagnostic assurance</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">International Standard</h4>
                  <p className="text-xs text-slate-400">GFSI & ISO aligned framework</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Showcase */}
          <div className="glass-card p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#131b2e] to-[#0e1424] space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-amber-400" />
              <span>Our Vision & Mission</span>
            </h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-400 text-sm">Corporate Mission</h4>
                <p className="leading-relaxed">
                  To empower organizations to achieve international benchmark standards in quality, safety, environment, and social accountability through pragmatic consulting and transformative technical training.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-400 text-sm">Corporate Vision</h4>
                <p className="leading-relaxed">
                  To be the most trusted and valued management systems consulting firm across South Asia, Middle East, and Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>International Network</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Countries & Regions We Serve
          </h2>
          <p className="text-sm text-slate-300">
            Orient Consultant Pakistan delivers consulting and training across major global hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GLOBAL_COUNTRIES.map((country) => (
            <div 
              key={country.name}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center space-x-4"
            >
              <div className="text-3xl">{country.flag}</div>
              <div>
                <h4 className="text-white font-bold text-sm">{country.name}</h4>
                <p className="text-xs text-slate-400">{country.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white">Our Core Pillars</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Integrity & Ethics", desc: "Absolute transparency and confidential handler of client operational data." },
            { title: "Technical Excellence", desc: "Consultants with 15+ years hands-on lead auditor experience." },
            { title: "Client Partnership", desc: "Customized solutions designed for your specific industry workflow." },
            { title: "Continual Support", desc: "Ongoing post-audit support for surveillance and recertifications." }
          ].map((v, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base">{v.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
