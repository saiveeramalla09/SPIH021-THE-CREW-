import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Sparkles, TrendingUp, TrendingDown, Waves } from "lucide-react";
import type { WaterState } from "../../types/learning";

interface WaterOrbProps {
  waterState: WaterState;
}

export const WaterOrb: React.FC<WaterOrbProps> = ({ waterState }) => {
  const { new_level, change } = waterState;
  const [level, setLevel] = useState<number>(50);
  const [displayLevel, setDisplayLevel] = useState<number>(50);
  const [isRippling, setIsRippling] = useState<boolean>(false);

  // Smooth level interpolation & ripple effect trigger on change
  useEffect(() => {
    setLevel(new_level);
    if (change !== 0) {
      setIsRippling(true);
      const timer = setTimeout(() => setIsRippling(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [new_level, change]);

  // Animate counter number smoothly
  useEffect(() => {
    let start = displayLevel;
    const end = level;
    if (start === end) return;
    
    const stepTime = 20;
    const diff = end - start;
    const steps = 30;
    const increment = diff / steps;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      start += increment;
      if (stepCount >= steps) {
        setDisplayLevel(end);
        clearInterval(interval);
      } else {
        setDisplayLevel(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [level]);

  // Wave bottom translation formula (0% -> -102%, 100% -> -2%)
  const waveBottom = `${Math.min(100, Math.max(0, level)) - 104}%`;

  const getHydrationStatus = (lvl: number) => {
    if (lvl >= 80) return { label: "Optimal Hydration", color: "text-cyan-700 bg-cyan-50 border-cyan-200" };
    if (lvl >= 50) return { label: "Nourishing Growth", color: "text-teal-700 bg-teal-50 border-teal-200" };
    if (lvl >= 30) return { label: "Moderate Hydration", color: "text-sky-700 bg-sky-50 border-sky-200" };
    return { label: "Needs Water (Review)", color: "text-amber-700 bg-amber-50 border-amber-200" };
  };

  const status = getHydrationStatus(level);

  return (
    <div className="relative flex flex-col items-center gap-3.5 p-3 w-full">
      
      {/* Header Label */}
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
            <Droplets className="w-3 h-3 fill-cyan-500" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Understanding Reservoir
          </span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${status.color}`}>
          {status.label}
        </span>
      </div>

      {/* 3D Glass Water Sphere Vessel */}
      <div className="relative flex items-center justify-center my-1">
        
        {/* Outer Aura Glow Pulsing with Level */}
        <motion.div
          animate={{
            scale: isRippling ? [1, 1.12, 1] : [1, 1.04, 1],
            opacity: [0.35, 0.65, 0.35]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-300/20 to-teal-300/30 blur-[28px] pointer-events-none"
        />

        {/* Outer Glass Rim */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full border-2 border-white/90 shadow-[0_15px_45px_rgba(6,182,212,0.2),inset_0_2px_12px_rgba(255,255,255,0.8),inset_0_-8px_16px_rgba(6,182,212,0.3)] bg-gradient-to-br from-cyan-100/30 via-white/20 to-sky-100/40 backdrop-blur-md overflow-hidden flex items-center justify-center">
          
          {/* Glass Specular Curved Highlights */}
          <div className="absolute top-2 left-6 w-16 h-7 bg-gradient-to-b from-white/70 via-white/20 to-transparent rounded-full rotate-[-25deg] pointer-events-none z-30 filter blur-[0.5px]" />
          <div className="absolute top-4 left-10 w-4 h-2 bg-white/90 rounded-full rotate-[-20deg] pointer-events-none z-30" />
          <div className="absolute bottom-3 right-6 w-14 h-6 bg-gradient-to-t from-white/40 to-transparent rounded-full rotate-[20deg] pointer-events-none z-30" />

          {/* Glass Inner Caustic Ring */}
          <div className="absolute inset-1.5 rounded-full border border-cyan-200/50 pointer-events-none z-25" />

          {/* Fluid Container Body */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-b from-cyan-50/20 via-sky-100/10 to-cyan-200/30">
            
            {/* Back Wave (slower and lighter) */}
            <div 
              className="water-wave water-wave-back" 
              style={{ bottom: `calc(${waveBottom} + 4%)` }}
            />

            {/* Front Wave */}
            <div 
              className="water-wave" 
              style={{ bottom: waveBottom }}
            />

            {/* Rising Effervescence Bubble Particles */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              <div className="orb-bubble w-2.5 h-2.5 left-[20%]" style={{ animationDelay: "0.2s", animationDuration: "4.5s" }} />
              <div className="orb-bubble w-1.5 h-1.5 left-[38%]" style={{ animationDelay: "1.2s", animationDuration: "5.5s" }} />
              <div className="orb-bubble w-3 h-3 left-[62%]" style={{ animationDelay: "0.6s", animationDuration: "3.8s" }} />
              <div className="orb-bubble w-2 h-2 left-[78%]" style={{ animationDelay: "2.1s", animationDuration: "4.8s" }} />
              <div className="orb-bubble w-1.5 h-1.5 left-[50%]" style={{ animationDelay: "3.0s", animationDuration: "6.0s" }} />
            </div>

            {/* Ripple Shockwave Overlay on Understanding Growth */}
            <AnimatePresence>
              {isRippling && (
                <motion.div
                  initial={{ scale: 0.2, opacity: 0.8 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 m-auto w-32 h-32 rounded-full border-2 border-white pointer-events-none z-20"
                />
              )}
            </AnimatePresence>

          </div>

          {/* Core Value Overlay (Center Readout) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 select-none">
            <motion.div 
              animate={{ scale: isRippling ? [1, 1.15, 1] : 1 }}
              className="flex items-baseline gap-0.5 drop-shadow-[0_2px_8px_rgba(2,132,199,0.4)]"
            >
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">
                {displayLevel}
              </span>
              <span className="text-base sm:text-lg font-extrabold text-cyan-100">
                %
              </span>
            </motion.div>
            
            <span className="text-[10px] uppercase font-bold text-cyan-100 tracking-widest drop-shadow-[0_1px_3px_rgba(2,132,199,0.5)] flex items-center gap-1 mt-0.5">
              <Waves className="w-2.5 h-2.5" />
              Water Level
            </span>
          </div>

        </div>

      </div>

      {/* Delta Feedback Badge (+ Understanding / - Review) */}
      <div className="min-h-[28px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {change !== 0 ? (
            <motion.div
              key={change + "-" + new_level}
              initial={{ opacity: 0, y: -6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border ${
                change > 0 
                  ? "text-emerald-700 bg-emerald-50 border-emerald-200" 
                  : "text-amber-700 bg-amber-50 border-amber-200"
              }`}
            >
              {change > 0 ? (
                <>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+{change}% Understanding Gained!</span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-3.5 h-3.5 text-amber-600" />
                  <span>{change}% — Refining Concept</span>
                </>
              )}
            </motion.div>
          ) : (
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-500" />
              <span>Correct answers fill the reservoir & water the tree</span>
            </div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default WaterOrb;
