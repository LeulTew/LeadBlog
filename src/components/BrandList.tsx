import React, { useState } from 'react';
import { ShoppingBag, ChevronUp, ChevronDown } from 'lucide-react';
import { BRAND_DATA } from '@/data/leadData';
import { RiskBadge } from './RiskBadge';
import { Theme } from '@/types';

interface BrandListProps {
  theme: Theme;
  isDarkMode: boolean;
}

export const BrandList: React.FC<BrandListProps> = ({ theme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl border ${theme.border} overflow-hidden ${theme.bgCard} transition-colors duration-300`}>
       <button 
         onClick={() => setIsOpen(!isOpen)}
         className={`w-full flex items-center justify-between p-4 ${isDarkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-50'} transition-colors`}
       >
          <div className="flex items-center gap-3">
            <ShoppingBag className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
            <div className="text-left">
              <h3 className={`font-bold text-sm md:text-lg ${theme.textMain}`}>Protein Brands Sold in Ethiopia</h3>
              <p className={`text-xs md:text-base ${theme.textMuted}`}>Click to view safety details for Gold Standard, Ensure, etc.</p>
            </div>
          </div>
          {isOpen ? <ChevronUp className={`w-5 h-5 ${theme.textMuted}`} /> : <ChevronDown className={`w-5 h-5 ${theme.textMuted}`} />}
       </button>

       {isOpen && (
         <div className={`border-t ${theme.border}`}>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead className={`${isDarkMode ? 'bg-neutral-950/50' : 'bg-neutral-50'} text-[10px] uppercase font-bold ${theme.textMuted}`}>
                 <tr>
                   <th className="p-3">Brand</th>
                   <th className="p-3">Type</th>
                   <th className="p-3 hidden sm:table-cell">Availability</th>
                   <th className="p-3">Safety</th>
                 </tr>
               </thead>
               <tbody className={`divide-y ${theme.divider} text-xs`}>
                 {BRAND_DATA.map((brand, i) => (
                   <tr key={i} className={theme.hoverBg}>
                     <td className={`p-3 font-bold ${theme.textMain} md:text-base`}>
                       {brand.brand}
                       {/* Mobile Only Note */}
                       <div className={`sm:hidden font-normal mt-1 ${theme.textMuted} text-[10px]`}>{brand.availability}</div>
                       <div className={`sm:hidden font-normal mt-1 ${theme.textMuted} text-[10px] italic`}>{brand.notes}</div>
                     </td>
                     <td className={`p-3 ${theme.textMuted} md:text-base`}>{brand.type}</td>
                     <td className={`p-3 hidden sm:table-cell ${theme.textMuted} md:text-base`}>{brand.availability}</td>
                     <td className="p-3">
                       <RiskBadge risk={brand.risk} isDark={isDarkMode} compact={true} />
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       )}
    </div>
  );
};
