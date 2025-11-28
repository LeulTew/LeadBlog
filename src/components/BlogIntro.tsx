import React from 'react';
import { Theme } from '@/types';

interface BlogIntroProps {
  theme: Theme;
  isDarkMode: boolean;
}

export const BlogIntro: React.FC<BlogIntroProps> = ({ theme, isDarkMode }) => {
  return (
    <section className={`max-w-3xl mx-auto py-8 md:py-12 px-2 font-serif ${theme.textMain}`}>
      <div className="space-y-8 text-lg md:text-xl leading-relaxed font-medium">
        <p style={{ color: isDarkMode ? '#e5e5e5' : '#555555' }}>
          <span className="font-bold text-4xl md:text-5xl float-left mr-3 mt-[-10px] font-serif">I</span>
          f you’re anything like me, you’ve probably spent an embarrassing amount of time staring at a tub of protein powder in a Bole pharmacy, wondering if it’s the real deal.
        </p>
        
        <p style={{ color: isDarkMode ? '#e5e5e5' : '#555555' }}>
          We all know the drill. You walk into a shop, spot a tub of <em>Gold Standard</em> that looks slightly... off. Maybe the label is faded. Maybe the price is too good to be true. You buy it anyway, go home, and pray you aren&apos;t drinking chalk dust mixed with cocoa powder.
        </p>

        <p style={{ color: isDarkMode ? '#e5e5e5' : '#555555' }}>
          We stress about &quot;fake&quot; supplements constantly. We worry about what&apos;s in those unmarked bags at Mercato. We treat our post-workout shake like a chemistry experiment gone wrong.
        </p>

        <div className="relative py-10 px-8 my-10 rounded-xl" style={{ backgroundColor: isDarkMode ? '#171717' : 'transparent' }}>
          <span className="absolute top-0 left-0 text-6xl font-serif opacity-50" style={{ color: isDarkMode ? '#064e3b' : '#555555' }}>“</span>
          <p className="relative z-10 text-2xl md:text-3xl font-serif italic text-center leading-normal font-bold" style={{ color: isDarkMode ? '#f5f5f5' : '#555555' }}>
            Is this safe? Is this clean? Am I poisoning myself for gains?
          </p>
          <span className="absolute bottom-0 right-0 text-6xl font-serif opacity-50 leading-[0]" style={{ color: isDarkMode ? '#064e3b' : '#555555' }}>”</span>
        </div>

        <p style={{ color: isDarkMode ? '#e5e5e5' : '#555555' }}>
          But here is the irony that no one talks about: while we were busy playing detective with our whey protein, we completely ignored the real danger sitting on our dinner plates.
        </p>

        <p style={{ color: isDarkMode ? '#e5e5e5' : '#555555' }}>
          <span className="font-bold px-1 rounded" style={{ backgroundColor: isDarkMode ? 'rgba(6, 78, 59, 0.3)' : 'rgba(16, 185, 129, 0.15)', color: isDarkMode ? '#34d399' : '#047857' }}>It turns out, the &quot;natural&quot; food is the problem.</span>
        </p>

        <p style={{ color: isDarkMode ? '#e5e5e5' : '#555555' }}>
          I dug into independent lab reports from 2020 to 2025, comparing lead levels in Ethiopian vegetables against international standards for protein powder. The results? Let&apos;s just say you might want to rethink that side of Gomen.
        </p>
      </div>
    </section>
  );
};
