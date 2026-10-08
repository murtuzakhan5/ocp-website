import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/ocpData';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS_DATA.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#131b2e] via-[#0f172a] to-[#131b2e] shadow-2xl relative overflow-hidden space-y-8">
        
        {/* Top bar with Quote Icon & Standard Badge */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Quote className="w-6 h-6" />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {current.standard}
            </span>
          </div>
        </div>

        {/* Quote text */}
        <div className="min-h-[120px] flex items-center">
          <p className="text-lg sm:text-xl text-slate-100 italic font-normal leading-relaxed">
            "{current.quote}"
          </p>
        </div>

        {/* Rating & Author details */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-1 mb-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h4 className="text-base font-bold text-white">{current.name}</h4>
            <p className="text-xs text-slate-400">
              {current.designation} — <strong className="text-amber-400 font-semibold">{current.company}</strong>
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Autoplay Progress Bar */}
        <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden">
          <div 
            key={currentIndex}
            className={`h-full bg-gradient-to-r from-amber-500 to-orange-500 ${isPaused ? 'w-full' : 'animate-progress'}`}
            style={{
              animation: isPaused ? 'none' : 'progress 5s linear infinite'
            }}
          />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-amber-400 w-8' : 'bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
