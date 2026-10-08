import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Mail, Phone, MapPin, Globe, ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { COMPANY_INFO, STANDARDS_DATA, GLOBAL_COUNTRIES } from '../data/ocpData';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="relative bg-[#070a12] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout banner inside footer */}
        <div className="glass-card rounded-2xl p-8 mb-16 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#131b2e] via-[#101728] to-[#131b2e]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Management System Consulting</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Ready to elevate your business compliance to International Standards?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Join 32+ leading enterprises in Pakistan & Middle East certified through Orient Consultant Pakistan.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="whitespace-nowrap px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center space-x-2"
          >
            <span>Request Fast Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Global Footprint */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-0.5">
                <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-mono">OCP</span>
                <p className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">Orient Consultant Pakistan</p>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_INFO.aboutShort}
            </p>

            <div className="pt-2">
              <h5 className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-2 flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Operational Footprint</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {GLOBAL_COUNTRIES.map((c) => (
                  <span key={c.name} className="px-2 py-0.5 rounded text-[11px] bg-slate-900 border border-slate-800 text-slate-300" title={c.role}>
                    {c.flag} {c.name.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Key ISO Standards */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 border-l-2 border-amber-500 pl-3">
              Popular ISO Certifications
            </h4>
            <ul className="space-y-2 text-xs">
              {STANDARDS_DATA.slice(0, 8).map((std) => (
                <li key={std.code}>
                  <Link 
                    to="/standards" 
                    className="hover:text-amber-400 transition-colors flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500/60 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    <span><strong className="text-slate-200">{std.code}:</strong> {std.title.split('-')[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 border-l-2 border-amber-500 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors flex items-center space-x-2"><span>About Orient Consultant</span></Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center space-x-2"><span>Consultancy & Training Services</span></Link></li>
              <li><Link to="/standards" className="hover:text-amber-400 transition-colors flex items-center space-x-2"><span>17+ ISO Compliance Standards</span></Link></li>
              <li><Link to="/training" className="hover:text-amber-400 transition-colors flex items-center space-x-2"><span>Corporate Training Courses</span></Link></li>
              <li><Link to="/clients" className="hover:text-amber-400 transition-colors flex items-center space-x-2"><span>Valued Client Portfolio (32+)</span></Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center space-x-2"><span>Contact Karachi Office</span></Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Details */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 border-l-2 border-amber-500 pl-3">
              Head Office Contact
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-amber-400 font-semibold hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {COMPANY_INFO.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block text-slate-300 hover:text-amber-400 transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}?text=Hello%20Orient%20Consultant%20Pakistan,%20I%20want%20to%20inquire%20about%20ISO%20Certification`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/30 transition-colors font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Orient Consultant Pakistan (OCP). All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300">Privacy Policy</span>
            <span className="hover:text-slate-300">Terms of Service</span>
            <span className="hover:text-slate-300">ISO Accreditation Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
