import React, { useState, useEffect } from "react";
import { Droplet, Award, RefreshCw, Compass } from "lucide-react";
import { motion } from "framer-motion";

export const WaterSection: React.FC = () => {
  const [level, setLevel] = useState(58);

  // Animate water level back and forth between 58 and 64 to show dynamic growth
  useEffect(() => {
    const interval = setInterval(() => {
      setLevel((prev) => (prev === 58 ? 64 : 58));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10 overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Living Water Orb */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-56 h-56 rounded-full border border-white/10 shadow-[inset_0_4px_20px_rgba(255,255,255,0.05),0_20px_40px_rgba(14,165,233,0.1)] bg-slate-900/60 overflow-hidden flex items-center justify-center">
            
            {/* Gloss highlight */}
            <div className="absolute top-3 left-8 w-16 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-full rotate-[-15deg] pointer-events-none z-30" />
            
            {/* Water Wave (front) */}
            <div 
              className="absolute w-[200%] h-[200%] bg-gradient-to-b from-sky-400 to-sky-700 rounded-[38%] left-1/2 -translate-x-1/2 transition-all duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1) z-10"
              style={{ 
                bottom: `calc(${level - 105}%)`,
                animation: "orb-wave-rotate 12s infinite linear"
              }}
            />
            
            {/* Water Wave (back overlay) */}
            <div 
              className="absolute w-[200%] h-[200%] bg-gradient-to-b from-sky-300/40 to-sky-600/40 rounded-[35%] left-1/2 -translate-x-1/2 transition-all duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1) z-5"
              style={{ 
                bottom: `calc(${level - 103}%)`,
                animation: "orb-wave-rotate 8s infinite linear"
              }}
            />

            {/* Bubble particles */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-40">
              <div className="orb-bubble w-2 h-2 left-[20%]" style={{ animationDelay: "0.2s", animationDuration: "5s" }} />
              <div className="orb-bubble w-1.5 h-1.5 left-[40%]" style={{ animationDelay: "1.5s", animationDuration: "6s" }} />
              <div className="orb-bubble w-2.5 h-2.5 left-[65%]" style={{ animationDelay: "0.8s", animationDuration: "4s" }} />
              <div className="orb-bubble w-1.5 h-1.5 left-[80%]" style={{ animationDelay: "2.3s", animationDuration: "5.5s" }} />
            </div>

            {/* Level Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              <span className="text-4xl font-extrabold font-display tracking-tight transition-all duration-500">
                {level}%
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200 mt-1">
                Understanding
              </span>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-4 bg-slate-900/60 border border-white/5 rounded-2xl px-5 py-2.5 shadow-md">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Growth Transition</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-400">58%</span>
              <span className="text-sky-400 font-extrabold animate-pulse">→</span>
              <span className="text-sm font-semibold text-sky-400">64%</span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Explanations */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Feedback System</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
            See understanding grow.
          </h2>
          <p className="text-sm text-slate-450 leading-relaxed">
            The Water Orb represents evidence of learning — not just correct answers. Levels adjust dynamically based on the quality of a student's explanations and reasoning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col gap-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Strong Reasoning</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Strong reasoning creates larger, more stable growth signals.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col gap-2">
              <Compass className="w-5 h-5 text-sky-400" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Partial Glimmer</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Partial understanding leads to small, encouraging progress.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col gap-2">
              <RefreshCw className="w-5 h-5 text-amber-400" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Learning Recovery</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Struggling through mistakes yields deep, high-value learning data.
              </p>
            </div>

          </div>

          <p className="text-xs text-emerald-400/90 font-semibold italic mt-1">
            ✓ Mistakes are never penalized. They are indicators showing where the AI should help next.
          </p>
        </div>

      </div>

    </section>
  );
};
