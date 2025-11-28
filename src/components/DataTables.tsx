import React, { useState, useMemo } from 'react';
import { Search, TrendingDown } from 'lucide-react';
import { DATA_SOURCE } from '@/data/leadData';
import { RiskBadge } from './RiskBadge';
import { VisualBar } from './VisualBar';
import { Theme } from '@/types';

interface DataTablesProps {
  theme: Theme;
  isDarkMode: boolean;
}

export const DataTables: React.FC<DataTablesProps> = ({ theme, isDarkMode }) => {
  const [filter, setFilter] = useState('all'); 
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    return DATA_SOURCE.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.notes.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (!matchesSearch) return false;

      if (filter === 'all') return true;
      if (filter === 'plant') return item.type === 'plant';
      if (filter === 'whey') return item.type === 'whey';
      if (filter === 'veg') return item.type === 'veg';
      if (filter === 'safe') return item.risk.includes('Low');
      if (filter === 'risky') return item.risk.includes('High') || item.risk.includes('Moderate');
      
      return true;
    });
  }, [filter, searchTerm]);

  const maxMeanVal = 0.6; 

  return (
    <div className="space-y-6">
        {/* Hero Data Card */}
        <section className={`${theme.bgCard} rounded-xl p-6 border ${theme.border} relative overflow-hidden transition-colors duration-300`}>
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none ${isDarkMode ? 'bg-emerald-900' : 'bg-emerald-200'}`} />
          
          <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-xs">
                <TrendingDown className="w-4 h-4" />
                Key Takeaway
              </div>
              <h2 className={`text-2xl font-bold leading-tight ${theme.textMain}`}>
                Shimbra & Pharmacy Whey are safer than city greens.
              </h2>
              <p className={`${theme.textMuted} text-sm leading-relaxed max-w-xl`}>
                Tested imports (Gold Standard, Dymatize) and local dry grains (Teff, Chickpeas) contain 10–100× less lead than leafy greens grown with Akaki river water.
              </p>
            </div>
            
            <div className={`grid grid-cols-2 gap-3`}>
                <div className={`p-3 rounded-lg border ${theme.border} ${isDarkMode ? 'bg-neutral-950/50' : 'bg-neutral-50'}`}>
                    <div className="text-emerald-500 font-bold text-sm mb-1">SAFE TO EAT</div>
                    <ul className={`text-xs space-y-1 ${theme.textMuted}`}>
                        <li>• Teff / Injera</li>
                        <li>• Shimbra / Kolo</li>
                        <li>• Dymatize / ON Whey</li>
                    </ul>
                </div>
                <div className={`p-3 rounded-lg border ${theme.border} ${isDarkMode ? 'bg-neutral-950/50' : 'bg-neutral-50'}`}>
                    <div className="text-rose-500 font-bold text-sm mb-1">LIMIT INTAKE</div>
                    <ul className={`text-xs space-y-1 ${theme.textMuted}`}>
                        <li>• City Gomen</li>
                        <li>• Bulk Unlabeled Powder</li>
                        <li>• Irrigated Lettuce</li>
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* --- Table Controls --- */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sticky top-16 z-20 ${theme.bgCard} p-3 rounded-xl border ${theme.border} shadow-lg shadow-black/5`}>
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-1 w-full lg:w-auto no-scrollbar">
            {[
              { id: 'all', label: 'All Foods' },
              { id: 'plant', label: 'Staples & Grains' },
              { id: 'veg', label: 'Vegetables' },
              { id: 'whey', label: 'Supplements' },
              { id: 'safe', label: '✔ Safe List' },
              { id: 'risky', label: '⚠ High Risk' },
            ].map(btn => (
                <button 
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-semibold transition-all border border-transparent ${filter === btn.id ? theme.btnActive : theme.btnInactive}`}
                >
                  {btn.label}
                </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${theme.textMuted}`} />
            <input 
              type="text" 
              placeholder="Search (e.g., Shiro, Gold Standard)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${theme.inputBg} ${theme.border} ${theme.textMain}`}
            />
          </div>
        </div>

        {/* --- Main Data Table --- */}
        <div className={`${theme.bgCard} border ${theme.border} rounded-xl overflow-hidden transition-colors duration-300`}>
          <div className={`hidden md:grid grid-cols-12 gap-4 p-4 border-b ${theme.border} ${isDarkMode ? 'bg-neutral-950/30' : 'bg-neutral-50/80'} text-[11px] font-bold ${theme.textMuted} uppercase tracking-wider`}>
            <div className="col-span-4 pl-2">Item Name</div>
            <div className="col-span-3">Lead Level (mg/kg)</div>
            <div className="col-span-2">Risk Assessment</div>
            <div className="col-span-3">Notes</div>
          </div>

          <div className={`divide-y ${theme.divider}`}>
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <div key={idx} className={`group ${theme.hoverBg} transition-colors`}>
                  {/* Desktop Row */}
                  <div className="hidden md:grid grid-cols-12 gap-6 p-6 items-center">
                    <div className="col-span-4 flex items-center gap-4 pl-2">
                      <div className={`p-3 rounded-xl ${
                        item.type === 'whey' 
                          ? (isDarkMode ? 'bg-cyan-950/50 text-cyan-400' : 'bg-cyan-50 text-cyan-600') 
                          : item.type === 'veg'
                            ? (isDarkMode ? 'bg-rose-950/50 text-rose-400' : 'bg-rose-50 text-rose-600')
                            : (isDarkMode ? 'bg-emerald-950/50 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className={`font-bold text-lg ${theme.textMain}`}>{item.name}</div>
                        <div className={`text-sm ${theme.textMuted}`}>{item.category}</div>
                      </div>
                    </div>
                    <div className="col-span-3 pr-6">
                      <div className={`font-mono text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>{item.level}</div>
                      <VisualBar value={item.valMean} max={maxMeanVal} isDark={isDarkMode} />
                    </div>
                    <div className="col-span-2">
                      <RiskBadge risk={item.risk} isDark={isDarkMode} />
                    </div>
                    <div className={`col-span-3 text-sm ${theme.textMuted} leading-relaxed`}>
                      {item.notes}
                    </div>
                  </div>

                  {/* Mobile Row */}
                  <div className="md:hidden p-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                           item.type === 'whey' 
                           ? (isDarkMode ? 'bg-cyan-950/50 text-cyan-400' : 'bg-cyan-50 text-cyan-600') 
                           : item.type === 'veg'
                             ? (isDarkMode ? 'bg-rose-950/50 text-rose-400' : 'bg-rose-50 text-rose-600')
                             : (isDarkMode ? 'bg-emerald-950/50 text-emerald-400' : 'bg-emerald-50 text-emerald-600')
                        }`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className={`font-bold text-sm ${theme.textMain}`}>{item.name}</h3>
                          <p className={`text-[10px] ${theme.textMuted}`}>{item.category}</p>
                        </div>
                      </div>
                      <RiskBadge risk={item.risk} isDark={isDarkMode} />
                    </div>
                    
                    <div className={`p-3 rounded-lg border ${theme.border} ${isDarkMode ? 'bg-neutral-950/30' : 'bg-neutral-50/50'}`}>
                       <div className="flex justify-between items-center mb-1">
                          <span className={`text-[10px] font-bold ${theme.textMuted} uppercase`}>Lead Level</span>
                          <span className={`font-mono text-xs ${theme.textMain}`}>{item.level}</span>
                       </div>
                       <VisualBar value={item.valMean} max={maxMeanVal} isDark={isDarkMode} />
                    </div>
                    <p className={`text-xs ${theme.textMuted}`}>
                       {item.notes}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className={`p-12 text-center ${theme.textMuted}`}>
                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No results found.</p>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};
