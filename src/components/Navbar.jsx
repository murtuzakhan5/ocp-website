import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Phone, Mail, MapPin, Globe, Menu, X, ArrowRight, ChevronDown, Award
} from 'lucide-react';
import { COMPANY_INFO, GLOBAL_COUNTRIES } from '../data/ocpData';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'ISO Standards', path: '/standards' },
    { name: 'Training Courses', path: '/training' },
    { name: 'Valued Clients', path: '/clients' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-amber-500/10">
      {/* Top bar info */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-[#070a12] text-xs text-slate-400 border-b border-slate-800/60">
        <div className="flex items-center space-x-6">
          <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>{COMPANY_INFO.emails[0]}</span>
          </a>
          <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <div className="flex items-center space-x-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Gulshan-e-Iqbal, Karachi, Pakistan</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-slate-400">
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-300 font-medium">Serving:</span>
            <span className="text-amber-400">PK | UAE | KSA | Qatar | Oman | Iraq</span>
          </div>
          <button 
            onClick={onOpenQuote}
            className="text-amber-400 hover:text-amber-300 font-medium hover:underline flex items-center space-x-1"
          >
            <span>Fast Audit Inquiry</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-black tracking-tight text-white font-mono">OCP</span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 -mt-1 group-hover:text-amber-400 transition-colors">
                Orient Consultant Pakistan
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile menu button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Award className="w-4 h-4" />
              <span>Get Certified</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300"
            >
              <Award className="w-4 h-4" />
              <span>Get Free ISO Consultation</span>
            </button>
            <div className="text-center text-xs text-slate-400">
              📞 Direct Call: <span className="text-amber-400 font-semibold">{COMPANY_INFO.phone}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
