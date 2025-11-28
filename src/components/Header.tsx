import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '@/types';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  theme: Theme;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode, theme }) => {
  return (
    <header className={`${theme.bgCard} sticky top-0 z-30 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg ${isDarkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-600 text-white'} flex items-center justify-center w-8 h-8`}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="2" rx="2"/>
              <text x="12" y="10" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif">Pb</text>
              <text x="12" y="19" fontSize="5" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif">82</text>
            </svg>
          </div>
          <span className={`text-sm font-bold uppercase tracking-wide ${theme.textMain}`}>Lead Safety Monitor</span>
        </div>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-neutral-800 text-yellow-400' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
