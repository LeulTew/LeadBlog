import React from 'react';
import { Info, ShieldCheck, CheckCircle, AlertTriangle } from 'lucide-react';

interface RiskBadgeProps {
  risk: string;
  isDark: boolean;
  compact?: boolean;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ risk, isDark, compact = false }) => {
  let colorClass = isDark ? "bg-neutral-800 text-neutral-300 border-neutral-700" : "bg-gray-100 text-gray-800 border-gray-200";
  let Icon = Info;

  if (risk.includes("Extremely Low")) {
    colorClass = isDark ? "bg-emerald-950/50 text-emerald-400 border-emerald-900" : "bg-emerald-50 text-emerald-700 border-emerald-200";
    Icon = ShieldCheck;
  } else if (risk.includes("Very Low")) {
    colorClass = isDark ? "bg-green-950/50 text-green-400 border-green-900" : "bg-green-50 text-green-700 border-green-200";
    Icon = CheckCircle;
  } else if (risk === "Low") {
    colorClass = isDark ? "bg-cyan-950/50 text-cyan-400 border-cyan-900" : "bg-cyan-50 text-cyan-700 border-cyan-200";
    Icon = CheckCircle;
  } else if (risk.includes("Moderate")) {
    colorClass = isDark ? "bg-amber-950/50 text-amber-400 border-amber-900" : "bg-yellow-50 text-yellow-700 border-yellow-200";
    Icon = AlertTriangle;
  } else if (risk.includes("High")) {
    colorClass = isDark ? "bg-rose-950/50 text-rose-400 border-rose-900" : "bg-rose-50 text-rose-700 border-rose-200";
    Icon = AlertTriangle;
  }

  return (
    <span className={`inline-flex items-center gap-1 whitespace-nowrap ${compact ? 'px-1.5 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'} rounded-full font-medium border ${colorClass}`}>
      <Icon className={compact ? "w-3 h-3" : "w-3.5 h-3.5"} />
      {risk}
    </span>
  );
};
