import React from "react";
import type { SkillProgressMap } from "../../types/learning";
import { Sparkles } from "lucide-react";

interface SkillProgressProps {
  skills: SkillProgressMap;
}

export const SkillProgress: React.FC<SkillProgressProps> = ({ skills }) => {
  
  // Renders a radial circle chart
  const renderSkillRing = (name: string, value: number, colorClass: string, strokeColor: string) => {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value * circumference);
    const displayPercentage = Math.round(value * 100);

    return (
      <div 
        key={name}
        className="flex flex-col items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition duration-300"
      >
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Trail Circle */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              className="stroke-slate-300"
              strokeWidth="3.5"
              fill="transparent"
            />
            {/* Animated Front Ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke={strokeColor}
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-slate-800">
              {displayPercentage}%
            </span>
          </div>
        </div>
        
        <span className="text-[10px] md:text-xs font-semibold text-slate-600 capitalize">
          {name}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3 text-slate-600 text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-4 h-4 text-amber-500 fill-amber-300" />
        <span>Skill Mastery</span>
      </div>
      
      {/* Grid of skill arcs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {renderSkillRing("comparison", skills.comparison || 0, "text-sky-400", "#0ea5e9")}
        {renderSkillRing("addition", skills.addition || 0, "text-purple-400", "#a855f7")}
        {renderSkillRing("simplification", skills.simplification || 0, "text-emerald-400", "#10b981")}
        {renderSkillRing("reasoning", skills.reasoning || 0, "text-amber-400", "#f59e0b")}
      </div>
    </div>
  );
};
export default SkillProgress;
