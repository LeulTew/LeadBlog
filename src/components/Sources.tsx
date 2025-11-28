import React, { useState } from 'react';
import { BookOpen, ChevronUp, ChevronDown, Leaf, ExternalLink, Beaker } from 'lucide-react';
import { SOURCES } from '@/data/leadData';
import { Theme } from '@/types';

interface SourcesProps {
  theme: Theme;
  isDarkMode: boolean;
}

export const Sources: React.FC<SourcesProps> = ({ theme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl border ${theme.border} overflow-hidden ${theme.bgCard} transition-colors duration-300`}>
       <button 
         onClick={() => setIsOpen(!isOpen)}
         className={`w-full flex items-center justify-between p-4 ${isDarkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-50'} transition-colors`}
       >
          <div className="flex items-center gap-3">
            <BookOpen className={`w-5 h-5 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <div className="text-left">
              <h3 className={`font-bold text-sm md:text-lg ${theme.textMain}`}>Scientific References & Sources</h3>
              <p className={`text-xs md:text-base ${theme.textMuted}`}>List of Papers Used (2020-2025)</p>
            </div>
          </div>
          {isOpen ? <ChevronUp className={`w-5 h-5 ${theme.textMuted}`} /> : <ChevronDown className={`w-5 h-5 ${theme.textMuted}`} />}
       </button>

       {isOpen && (
         <div className={`border-t ${theme.border} p-6 space-y-8`}>
           {/* Ethiopian Studies */}
           <div>
             <h4 className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted} mb-4 flex items-center gap-2`}>
               <Leaf className="w-3 h-3" /> Ethiopian Agriculture Studies
             </h4>
             <div className="grid md:grid-cols-2 gap-6">
               {SOURCES.ethiopia.map((source, i) => (
                 <div key={i} className="space-y-2">
                   <h5 className={`text-sm md:text-lg font-semibold ${theme.textMain}`}>{source.title}</h5>
                   <div className="flex flex-col gap-1">
                     {source.links.map((link, j) => (
                       <a key={j} href={link} target="_blank" rel="noopener noreferrer" className={`text-xs md:text-base flex items-center gap-1 hover:underline ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                         <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                         View Paper {j + 1}
                       </a>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
           </div>
           <div className={`border-t ${theme.border}`} />
           {/* Protein Studies */}
           <div>
             <h4 className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted} mb-4 flex items-center gap-2`}>
               <Beaker className="w-3 h-3" /> Protein Powder Analysis
             </h4>
             <div className="grid md:grid-cols-2 gap-6">
               {SOURCES.protein.map((source, i) => (
                 <div key={i} className="space-y-2">
                   <h5 className={`text-sm md:text-lg font-semibold ${theme.textMain}`}>{source.title}</h5>
                   <div className="flex flex-col gap-1">
                     {source.links.map((link, j) => (
                       <a key={j} href={link} target="_blank" rel="noopener noreferrer" className={`text-xs md:text-base flex items-center gap-1 hover:underline ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                         <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                         View Source {j + 1}
                       </a>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       )}
    </div>
  );
};
