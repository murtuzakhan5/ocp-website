import React from 'react';

export default function KineticTicker() {
  const tickerItems = [
    { text: "ISO 9001 EXCELLENCE", style: "outline" },
    { text: "COMPLIANCE DRIVEN", style: "orange" },
    { text: "32+ VALUED CLIENTS", style: "amber" },
    { text: "GLOBAL ACCREDITATION", style: "white" },
    { text: "ZERO NON-CONFORMITY", style: "outline" },
    { text: "ISO 14001 & 45001", style: "pink" },
    { text: "MIDDLE EAST & AFRICA", style: "white" },
    { text: "GFSI & HACCP APPROVED", style: "amber" },
    { text: "PROVEN AUDIT RESULTS", style: "orange" }
  ];

  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  const getStyleClass = (style) => {
    switch (style) {
      case 'outline':
        return 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.4)] hover:[-webkit-text-stroke:1.5px_#f59e0b]';
      case 'orange':
        return 'text-orange-500 font-extrabold drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]';
      case 'amber':
        return 'text-amber-400 font-extrabold drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]';
      case 'pink':
        return 'text-rose-500 font-extrabold';
      case 'white':
      default:
        return 'text-white font-extrabold';
    }
  };

  return (
    <div className="relative py-12 my-8 overflow-hidden bg-[#070a12] border-y border-amber-500/20">
      
      {/* Angled Marquee Container matching reference design */}
      <div className="-rotate-2 scale-105 transform origin-center py-4 bg-gradient-to-r from-[#0d1322] via-[#151e34] to-[#0d1322] border-y border-amber-500/30 shadow-2xl">
        
        <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 shrink-0">
              <span className={`text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-wider transition-all duration-300 ${getStyleClass(item.style)}`}>
                {item.text}
              </span>
              
              {/* Glowing Dot separator matching reference screenshot */}
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_10px_#f59e0b] inline-block shrink-0"></span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
