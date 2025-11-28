"use client";

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DataTables } from '@/components/DataTables';
import { BrandList } from '@/components/BrandList';
import { Sources } from '@/components/Sources';
import { Footer } from '@/components/Footer';
import { BlogIntro } from '@/components/BlogIntro';

export default function LeadSafetyDashboardV5() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Theme Classes (Strict Neutral for Dark Mode) ---
  const theme = {
    bgMain: isDarkMode ? "bg-neutral-950" : "bg-neutral-50",
    bgCard: isDarkMode ? "bg-neutral-900" : "bg-white",
    textMain: isDarkMode ? "text-neutral-100" : "text-neutral-900",
    textMuted: isDarkMode ? "text-neutral-400" : "text-neutral-500",
    border: isDarkMode ? "border-neutral-800" : "border-neutral-200",
    inputBg: isDarkMode ? "bg-neutral-950" : "bg-white",
    hoverBg: isDarkMode ? "hover:bg-neutral-800" : "hover:bg-neutral-50",
    divider: isDarkMode ? "divide-neutral-800" : "divide-neutral-100",
    btnActive: isDarkMode ? "bg-neutral-700 text-white" : "bg-white text-neutral-900 shadow-sm border-neutral-200",
    btnInactive: isDarkMode ? "text-neutral-500 hover:text-neutral-300" : "text-neutral-500 hover:text-neutral-900",
  };

  return (
    <div className={`min-h-screen font-sans pb-12 transition-colors duration-300 ${theme.bgMain} ${isDarkMode ? 'dark' : ''}`}>
      
      <Hero isDarkMode={isDarkMode} />

      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        <BlogIntro theme={theme} isDarkMode={isDarkMode} />

        <DataTables theme={theme} isDarkMode={isDarkMode} />

        <div className="flex flex-col gap-6">
          <BrandList theme={theme} isDarkMode={isDarkMode} />
          <Sources theme={theme} isDarkMode={isDarkMode} />
        </div>

        <Footer theme={theme} />

      </main>
    </div>
  );
}
