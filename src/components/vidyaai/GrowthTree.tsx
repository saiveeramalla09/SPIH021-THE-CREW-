import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Sparkles, Sprout, Award, Leaf } from "lucide-react";
import type { TreeState } from "../../types/learning";

interface GrowthTreeProps {
  treeState: TreeState;
}

export const GrowthTree: React.FC<GrowthTreeProps> = ({ treeState }) => {
  const { stage, growth, event } = treeState;
  const controls = useAnimation();

  // Trigger animations based on stage and growth events
  useEffect(() => {
    if (event === "milestone" || event === "flower_bloom") {
      controls.start({
        scale: [1, 1.08, 0.98, 1.03, 1],
        filter: [
          "drop-shadow(0 0 0px rgba(16,185,129,0))",
          "drop-shadow(0 0 25px rgba(16,185,129,0.7))",
          "drop-shadow(0 10px 20px rgba(16,185,129,0.15))"
        ],
        transition: { duration: 1.6, ease: "easeInOut" }
      });
    } else if (event === "new_leaf" || event === "new_branch") {
      controls.start({
        scale: [1, 1.04, 1],
        transition: { duration: 0.8, ease: "easeOut" }
      });
    } else {
      controls.start({
        scale: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [stage, event, controls]);

  const stagesInfo = [
    { name: "Golden Seed", desc: "Planting foundational intuition", badge: "Stage 0", icon: "🌱", color: "from-amber-500 to-yellow-600" },
    { name: "Emerald Sprout", desc: "First insights breaking ground", badge: "Stage 1", icon: "🌿", color: "from-emerald-500 to-teal-600" },
    { name: "Branching Sapling", desc: "Connecting related concepts", badge: "Stage 2", icon: "🌳", color: "from-teal-600 to-cyan-600" },
    { name: "Leafy Canopy", desc: "Solid conceptual retention", badge: "Stage 3", icon: "🍃", color: "from-emerald-600 to-green-700" },
    { name: "Blossoming Tree", desc: "Mastery & teach-back capability", badge: "Stage 4", icon: "🌸", color: "from-pink-500 to-rose-600" },
    { name: "Bodhi of Knowledge", desc: "Complete domain mastery achieved", badge: "Stage 5", icon: "✨", color: "from-amber-400 to-emerald-500" }
  ];

  const currentStageInfo = stagesInfo[Math.min(stage, stagesInfo.length - 1)];

  return (
    <div className="relative flex flex-col items-center justify-between w-full min-h-[360px] md:min-h-[420px] bg-gradient-to-b from-white via-emerald-50/40 to-teal-50/60 rounded-[32px] border border-emerald-200/60 shadow-[0_15px_40px_rgba(16,185,129,0.08)] overflow-hidden p-5 md:p-6">
      
      {/* Decorative ambient background light */}
      <div className="absolute w-64 h-64 rounded-full bg-emerald-400/15 blur-[90px] -z-10 bottom-6 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-cyan-300/15 blur-[80px] -z-10 top-4 right-4 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Top Stage Bar */}
      <div className="w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
            <Sprout className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-800 block leading-tight">
              Personal Learning Tree
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Grows dynamically with your reasoning
            </span>
          </div>
        </div>

        {/* Stage Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-emerald-200/80 rounded-full shadow-sm">
          <span className="text-xs">{currentStageInfo.icon}</span>
          <span className="text-xs font-extrabold text-emerald-800">
            {currentStageInfo.badge}: {currentStageInfo.name}
          </span>
        </div>
      </div>

      {/* SVG Canvas for Organic Procedural Tree */}
      <div className="relative w-full flex-1 flex items-center justify-center my-2 select-none">
        
        {/* Divine Halo ring for Stage 4+ */}
        {stage >= 4 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute w-60 h-60 rounded-full border border-amber-300/40 bg-amber-400/5 blur-[2px] pointer-events-none"
          />
        )}

        <motion.svg
          animate={controls}
          viewBox="0 0 240 240"
          className="w-56 h-56 md:w-72 md:h-72 drop-shadow-[0_12px_24px_rgba(16,185,129,0.15)] overflow-visible"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="soilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="50%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#5c2606" />
            </linearGradient>

            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <linearGradient id="leafGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <linearGradient id="rootWaterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* ==================================================== */}
          {/* BASE SOIL & ROOT SYSTEM                              */}
          {/* ==================================================== */}
          <g>
            {/* Ground mound */}
            <ellipse cx="120" cy="210" rx="75" ry="14" fill="url(#soilGradient)" />
            <ellipse cx="120" cy="208" rx="65" ry="10" fill="#334155" />
            <ellipse cx="120" cy="206" rx="45" ry="6" fill="#1e293b" />

            {/* Glowing Root Hydration Filaments (absorbing water from orb) */}
            <motion.path
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              d="M120,208 Q105,218 90,222 M120,208 Q135,218 150,222 M120,210 Q120,224 118,228"
              stroke="url(#rootWaterGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ==================================================== */}
          {/* STAGE 0: GOLDEN SEED                                 */}
          {/* ==================================================== */}
          {stage === 0 && (
            <g>
              <motion.ellipse
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2 }}
                cx="120" cy="204" rx="14" ry="7"
                fill="#fbbf24"
                className="filter blur-[3px]"
              />
              <motion.path
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                d="M114,204 C114,198 126,198 126,204 C126,210 114,210 114,204 Z"
                fill="#d97706"
                stroke="#fef3c7"
                strokeWidth="1.5"
              />
            </g>
          )}

          {/* ==================================================== */}
          {/* STAGE 1+: SHOOT / MAIN TRUNK                         */}
          {/* ==================================================== */}
          {stage >= 1 && (
            <g className="tree-sway">
              {/* Trunk */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                d={
                  stage === 1
                    ? "M120,206 Q118,180 120,160"
                    : "M116,206 C116,180 114,150 118,125 C122,150 124,180 124,206 Z"
                }
                fill={stage === 1 ? "none" : "url(#trunkGrad)"}
                stroke={stage === 1 ? "#10b981" : "#5c2606"}
                strokeWidth={stage === 1 ? "5" : "1.5"}
                strokeLinecap="round"
              />

              {/* Stage 1 Sprout leaves */}
              {stage === 1 && (
                <g>
                  {/* Left tender leaf */}
                  <motion.path
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3 }}
                    d="M120,162 C108,155 105,142 114,142 C120,142 120,155 120,162 Z"
                    fill="url(#leafGrad1)"
                  />
                  {/* Right tender leaf */}
                  <motion.path
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.5 }}
                    d="M120,162 C132,155 135,142 126,142 C120,142 120,155 120,162 Z"
                    fill="url(#leafGrad2)"
                  />
                </g>
              )}
            </g>
          )}

          {/* ==================================================== */}
          {/* STAGE 2+: SPREADING BRANCHES                         */}
          {/* ==================================================== */}
          {stage >= 2 && (
            <g className="tree-sway">
              {/* Lower Left Branch */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.0, delay: 0.2 }}
                d="M117,165 Q95,150 82,142"
                fill="none"
                stroke="url(#trunkGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Lower Right Branch */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.0, delay: 0.35 }}
                d="M119,155 Q145,140 158,132"
                fill="none"
                stroke="url(#trunkGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Upper Center-Left Branch */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.0, delay: 0.5 }}
                d="M118,135 Q102,115 95,95"
                fill="none"
                stroke="url(#trunkGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Upper Center-Right Branch */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.0, delay: 0.65 }}
                d="M118,130 Q135,110 142,95"
                fill="none"
                stroke="url(#trunkGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
          )}

          {/* ==================================================== */}
          {/* STAGE 3+: LUSH FOLIAGE CANOPY CLUSTERS               */}
          {/* ==================================================== */}
          {stage >= 3 && (
            <g className="tree-sway">
              {/* Left Foliage Cloud */}
              <motion.path
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.3 }}
                d="M82,142 C65,130 65,155 78,160 C90,165 95,148 82,142 Z M72,135 C58,122 58,145 70,150 C80,154 85,140 72,135 Z"
                fill="url(#leafGrad1)"
              />

              {/* Right Foliage Cloud */}
              <motion.path
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.45 }}
                d="M158,132 C175,120 175,145 162,150 C150,155 145,138 158,132 Z M168,125 C182,112 182,135 170,140 C160,144 155,130 168,125 Z"
                fill="url(#leafGrad2)"
              />

              {/* Main Crown Center Dome */}
              <motion.path
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.6 }}
                d="M118,100 C85,75 80,120 100,128 C120,135 145,135 148,118 C155,95 138,75 118,100 Z"
                fill="url(#leafGrad3)"
              />

              {/* Top Peak Canopy Layer */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.7 }}
                cx="118" cy="85" r="28"
                fill="url(#leafGrad1)"
              />
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.8 }}
                cx="98" cy="98" r="22"
                fill="url(#leafGrad2)"
              />
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.9 }}
                cx="138" cy="95" r="24"
                fill="url(#leafGrad3)"
              />
            </g>
          )}

          {/* ==================================================== */}
          {/* STAGE 4+: BLOSSOMING FLOWERS & WISDOM FRUIT          */}
          {/* ==================================================== */}
          {stage >= 4 && (
            <g className="tree-sway">
              {/* Pink Blossom Flowers */}
              {[
                { cx: 85, cy: 110, r: 4.5 },
                { cx: 118, cy: 75, r: 5 },
                { cx: 145, cy: 105, r: 4.5 },
                { cx: 68, cy: 138, r: 4 },
                { cx: 165, cy: 128, r: 4 },
                { cx: 105, cy: 115, r: 4.5 },
                { cx: 132, cy: 85, r: 4 }
              ].map((flower, idx) => (
                <g key={idx}>
                  {/* Flower Petal Halo */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 2, repeat: Infinity }}
                    cx={flower.cx} cy={flower.cy} r={flower.r + 2}
                    fill="#f472b6" opacity="0.3"
                  />
                  {/* Flower Core */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                    cx={flower.cx} cy={flower.cy} r={flower.r}
                    fill="#ec4899"
                  />
                  <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.4} fill="#fef08a" />
                </g>
              ))}

              {/* Golden Wisdom Fruits for Stage 5 */}
              {stage >= 5 && (
                <>
                  {[
                    { cx: 95, cy: 90 },
                    { cx: 135, cy: 75 },
                    { cx: 122, cy: 110 }
                  ].map((fruit, idx) => (
                    <motion.g
                      key={`fruit-${idx}`}
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.2, type: "spring" }}
                    >
                      <circle cx={fruit.cx} cy={fruit.cy} r="6" fill="#f59e0b" />
                      <circle cx={fruit.cx - 1.5} cy={fruit.cy - 1.5} r="2" fill="#fef3c7" />
                    </motion.g>
                  ))}
                </>
              )}
            </g>
          )}

          {/* ==================================================== */}
          {/* FLOATING KNOWLEDGE PARTICLES / SPORES               */}
          {/* ==================================================== */}
          {stage >= 2 && (
            <g className="pointer-events-none">
              <circle cx="95" cy="110" r="1.5" fill="#fbbf24" className="canopy-particle" style={{ animationDelay: "0.2s" }} />
              <circle cx="140" cy="95" r="2" fill="#34d399" className="canopy-particle" style={{ animationDelay: "1.8s" }} />
              <circle cx="118" cy="70" r="1.5" fill="#38bdf8" className="canopy-particle" style={{ animationDelay: "3.2s" }} />
              <circle cx="75" cy="140" r="1.2" fill="#fbbf24" className="canopy-particle" style={{ animationDelay: "2.4s" }} />
              <circle cx="160" cy="130" r="1.5" fill="#a78bfa" className="canopy-particle" style={{ animationDelay: "4.1s" }} />
            </g>
          )}
        </motion.svg>

      </div>

      {/* Bottom Stage Progress Bar & Milestone Info */}
      <div className="w-full flex flex-col gap-2 z-10">
        
        {/* Growth Bar */}
        <div className="w-full flex items-center justify-between text-[11px] font-bold text-slate-700 mb-0.5">
          <span className="flex items-center gap-1 text-emerald-800">
            <Leaf className="w-3 h-3 text-emerald-600" />
            {currentStageInfo.desc}
          </span>
          <span className="font-extrabold text-emerald-700">
            Level {stage} / 5
          </span>
        </div>

        {/* Segmented Progress Tracker */}
        <div className="grid grid-cols-5 gap-1.5 w-full">
          {stagesInfo.slice(1).map((stg, i) => {
            const isCompleted = stage > i;
            const isCurrent = stage === i + 1;
            return (
              <div key={stg.name} className="flex flex-col gap-1">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isCompleted
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm"
                      : isCurrent
                      ? "bg-gradient-to-r from-amber-400 to-emerald-400 animate-pulse"
                      : "bg-slate-200/80"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Live Milestone Toast */}
        <AnimatePresence>
          {event && event !== "none" && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              className="mt-1 p-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <Award className="w-3.5 h-3.5 text-yellow-300" />
              <span>Tree Growth Event: {event.replace("_", " ").toUpperCase()}!</span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};

export default GrowthTree;
