import React, { useState, useEffect } from 'react';

export default function LogoLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Elegant quick load duration
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070a12] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Glowing Logo Icon */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 blur-xl animate-pulse" />
          <img 
            src="/ocp-icon.png" 
            alt="OCP Icon" 
            className="w-20 h-24 object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.6)] animate-bounce duration-1000"
          />
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-black tracking-tight text-white font-mono">OCP</span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
          </div>
          <p className="text-xs tracking-[0.25em] uppercase font-bold text-slate-300">
            Orient Consultant Pakistan
          </p>
          <p className="text-[10px] text-amber-400/80 font-medium tracking-wider">
            Your Partner in Compliance and Business Excellence
          </p>
        </div>

        {/* Sleek loading bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full animate-marquee" />
        </div>
      </div>
    </div>
  );
}
