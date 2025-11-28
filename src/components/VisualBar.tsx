import React from 'react';

interface VisualBarProps {
  value: number;
  max: number;
  isDark: boolean;
}

export const VisualBar: React.FC<VisualBarProps> = ({ value, max, isDark }) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  let barColor = "bg-emerald-500";
  if (percentage > 20) barColor = "bg-cyan-500";
  if (percentage > 40) barColor = "bg-amber-500";
  if (percentage > 70) barColor = "bg-rose-600";

  return (
    <div 
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemax={max} 
      className={`w-full h-1.5 rounded-full overflow-hidden mt-2 ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}
    >
      <div 
        className={`h-full ${barColor} transition-all duration-500`} 
        style={{ width: `${Math.max(percentage, 2)}%` }}
      />
    </div>
  );
};
