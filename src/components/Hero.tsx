import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <div className={`relative ${isDarkMode ? 'bg-neutral-900' : 'bg-emerald-950'} text-white overflow-hidden`}>
       {/* Abstract Pattern Background */}
       <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
           <circle cx="20" cy="20" r="15" fill="currentColor" />
           <circle cx="80" cy="80" r="25" fill="currentColor" />
       </svg>
       
       <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/50 bg-emerald-900/30 text-emerald-300 text-[10px] font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
             <ShieldCheck className="w-3 h-3" /> 2025 Investigative Report
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8">
             Your <span className="text-rose-400 relative inline-block">
               Gomen
               <svg className="absolute w-full h-2 bottom-0 left-0 text-rose-500/50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none"/></svg>
             </span> Has More <span className="inline-flex items-center gap-2">
                Lead
                <svg viewBox="0 0 26 24" fill="none" className="w-11 h-10 md:w-18 md:h-16 inline-block text-white">
                  <rect x="2" y="2" width="22" height="20" stroke="currentColor" strokeWidth="1.5" rx="2"/>
                  <text x="5" y="11" fontSize="9" fontWeight="bold" textAnchor="start" fill="currentColor" fontFamily="Arial, sans-serif" letterSpacing="0.5">Pb</text>
                  <text x="5" y="19" fontSize="5" fontWeight="300" textAnchor="start" fill="currentColor" fontFamily="Arial, sans-serif" letterSpacing="1">82</text>
                </svg>
              </span> <br className="hidden lg:block"/> Than My <span className="text-emerald-400">Protein Powder</span> <br/>
             <span className="text-neutral-200 text-2xl md:text-5xl block mt-4 font-bold tracking-tight">– And I’ve Got Receipts.</span>
          </h1>

          <p className="text-base md:text-xl text-emerald-100/80 font-medium leading-relaxed max-w-3xl mx-auto">
             We compared independent lab tests of Ethiopian city-grown vegetables against popular protein powders. The results might change how you break your fast.
          </p>
       </div>
    </div>
  );
};
