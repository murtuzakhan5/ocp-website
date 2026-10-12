import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Globe, Menu, X, ArrowRight, Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/ocpData';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'ISO Standards', path: '/standards' },
    { name: 'Training Courses', path: '/training' },
    { name: 'Audit Experience', path: '/#audit-experience' },
    { name: 'Valued Clients', path: '/clients' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/95 backdrop-blur-md border-b border-amber-500/15">
      {/* Top bar info */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-[#070a12] text-xs text-slate-400 border-b border-slate-800/60">
        <div className="flex items-center space-x-6">
          <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-medium text-slate-300">{COMPANY_INFO.email}</span>
          </a>
          <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-semibold text-amber-400">{COMPANY_INFO.phone}</span>
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo with official OCP hexagon icon */}
          <Link to="/" className="flex items-center space-x-3 group py-2 shrink-0">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-2xl bg-amber-500/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/ocp-icon.png" 
                alt="Orient Consultant Pakistan Logo" 
                className="relative h-11 sm:h-13 w-auto object-contain drop-shadow-[0_4px_12px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline space-x-1.5">
                <span className="text-2xl font-black tracking-tight text-white font-mono leading-none">OCP</span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-bold text-slate-300 mt-0.5 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                Orient Consultant Pakistan
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items (Fixed: strictly single-line whitespace-nowrap) */}
          <nav className="hidden xl:flex items-center space-x-1.5 shrink-0">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 whitespace-nowrap inline-block"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap inline-block ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>

          {/* Mid-Desktop Nav Items (1024px to 1279px) with slightly more compact padding */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1 shrink-0">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 whitespace-nowrap inline-block"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-2 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap inline-block ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>

          {/* CTA & Mobile menu button */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>Get Certified</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            item.path.startsWith('/#') ? (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {item.name}
              </a>
            ) : (
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
            )
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
