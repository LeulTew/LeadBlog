import React from 'react';
import { User, Mail, Github, Send } from 'lucide-react';
import { Theme } from '@/types';

interface FooterProps {
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`mt-16 pt-12 pb-8 border-t ${theme.border} flex flex-col items-center justify-center text-center space-y-8`}>
       <div className="flex flex-col items-center gap-3">
          <div className="bg-neutral-200 dark:bg-neutral-800 p-3 rounded-full">
            <User className={`w-6 h-6 ${theme.textMuted}`} />
          </div>
          <div>
            <span className={`text-base font-bold ${theme.textMain} block`}>Leul T Agonafer</span>
            <span className={`text-xs ${theme.textMuted} uppercase tracking-widest`}>Dev & Gym Goer</span>
          </div>
       </div>

       <div className="flex gap-8 md:gap-12">
          <a href="mailto:Leulman2@gmail.com" className={`group flex flex-col items-center gap-2 ${theme.textMuted} hover:${theme.textMain} transition-colors`}>
            <div className={`p-3 rounded-full border ${theme.border} group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all`}>
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide">Email</span>
          </a>

          <a href="https://www.linkedin.com/in/leul-t-agonafer-861bb3336/" target="_blank" rel="noopener noreferrer" className={`group flex flex-col items-center gap-2 ${theme.textMuted} hover:${theme.textMain} transition-colors`}>
            <div className={`p-3 rounded-full border ${theme.border} group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all`}>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide">LinkedIn</span>
          </a>

          <a href="https://github.com/LeulTew" target="_blank" rel="noopener noreferrer" className={`group flex flex-col items-center gap-2 ${theme.textMuted} hover:${theme.textMain} transition-colors`}>
            <div className={`p-3 rounded-full border ${theme.border} group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all`}>
              <Github className="w-5 h-5" />
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide">GitHub</span>
          </a>

          <a href="https://t.me/fabbin" target="_blank" rel="noopener noreferrer" className={`group flex flex-col items-center gap-2 ${theme.textMuted} hover:${theme.textMain} transition-colors`}>
            <div className={`p-3 rounded-full border ${theme.border} group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all`}>
              <Send className="w-5 h-5" />
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide">Telegram</span>
          </a>
       </div>

       <div className={`text-xs ${theme.textMuted} max-w-md mx-auto leading-relaxed`}>
         © 2025. Data consolidated from independent lab reports. <br/>
         This site is for informational purposes only and does not constitute medical advice.
       </div>
    </footer>
  );
};
