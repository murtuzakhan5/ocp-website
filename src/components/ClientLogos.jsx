import React from 'react';
import { 
  Building2, Box, ShieldCheck, Heart, Zap, Cpu, Flame, Compass, Globe, Anchor, Package, Layers, Droplet
} from 'lucide-react';

export default function ClientLogoBadge({ client }) {
  const { name, sector, id } = client;

  // Custom brand colors and logo icons per sector/client
  const getBrandDesign = (id, sector) => {
    switch (sector) {
      case 'Textile & Apparel':
        return {
          bg: 'bg-emerald-950/40',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400',
          badgeColor: 'bg-emerald-500/20 text-emerald-300',
          icon: Layers
        };
      case 'Packaging & Printing':
        return {
          bg: 'bg-amber-950/40',
          border: 'border-amber-500/30',
          text: 'text-amber-400',
          badgeColor: 'bg-amber-500/20 text-amber-300',
          icon: Package
        };
      case 'Healthcare & Diagnostics':
        return {
          bg: 'bg-rose-950/40',
          border: 'border-rose-500/30',
          text: 'text-rose-400',
          badgeColor: 'bg-rose-500/20 text-rose-300',
          icon: Heart
        };
      case 'Food & Agriculture':
        return {
          bg: 'bg-yellow-950/40',
          border: 'border-yellow-500/30',
          text: 'text-yellow-400',
          badgeColor: 'bg-yellow-500/20 text-yellow-300',
          icon: Droplet
        };
      case 'Energy & Infrastructure':
        return {
          bg: 'bg-blue-950/40',
          border: 'border-blue-500/30',
          text: 'text-blue-400',
          badgeColor: 'bg-blue-500/20 text-blue-300',
          icon: Zap
        };
      default:
        return {
          bg: 'bg-purple-950/40',
          border: 'border-purple-500/30',
          text: 'text-purple-400',
          badgeColor: 'bg-purple-500/20 text-purple-300',
          icon: Building2
        };
    }
  };

  const style = getBrandDesign(id, sector);
  const IconComp = style.icon;

  return (
    <div className={`p-4 rounded-2xl border ${style.border} ${style.bg} backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center space-x-3.5 group`}>
      
      {/* Styled Brand Logo Icon Graphic */}
      <div className={`w-11 h-11 rounded-xl bg-slate-900 border ${style.border} flex items-center justify-center ${style.text} shrink-0 group-hover:rotate-6 transition-transform shadow-md`}>
        <IconComp className="w-5 h-5" />
      </div>

      <div className="space-y-0.5 overflow-hidden">
        <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
          {name}
        </h4>
        <div className="flex items-center space-x-2">
          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${style.badgeColor}`}>
            {sector.split(' ')[0]}
          </span>
          <span className="text-[10px] text-slate-400">ID #{id}</span>
        </div>
      </div>

    </div>
  );
}
