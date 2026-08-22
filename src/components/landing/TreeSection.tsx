import React, { useState } from "react";
import { TreePine, HelpCircle, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const TreeSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(3);

  const stages = [
    { id: 0, name: "Seed", desc: "A spark of curiosity is planted." },
    { id: 1, name: "Stem", desc: "First connection made with a concept." },
    { id: 2, name: "Branches", desc: "Reasoning and logic pathways establish." },
    { id: 3, name: "Leaves", desc: "Explanation skills sprout and extend." },
    { id: 4, name: "Flowers", desc: "Ability to transfer concept to new scenarios." },
    { id: 5, name: "Mature Tree", desc: "True mastery achieved. Ready for the next topic!" }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      {/* Background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-emerald-500/5 blur-[90px] bottom-12 right-12 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Long-Term Growth</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
            Your knowledge has roots.
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto lg:mx-0" />
          
          <p className="text-sm text-slate-400 leading-relaxed">
            The Growth Tree represents accumulated mastery. Rather than artificial scoreboards or point systems (XP), milestones are measured by the health of your learning ecosystem.
          </p>

          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Every meaningful learning milestone becomes part of your growing knowledge base.
          </p>

          {/* Interactive controls */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Click a stage to grow the tree:</span>
            <div className="grid grid-cols-3 gap-2">
              {stages.map((stg) => (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition cursor-pointer ${
                    activeStage === stg.id
                      ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-300"
                      : "bg-slate-900/40 border-white/5 text-slate-450 hover:text-slate-200"
                  }`}
                >
                  {stg.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Showcase Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-md shadow-2xl flex flex-col items-center justify-between min-h-[360px]">
            
            {/* SVG Tree representation */}
            <div className="flex-1 flex items-center justify-center h-52">
              <svg className="w-56 h-56 drop-shadow-[0_10px_20px_rgba(16,185,129,0.15)]" viewBox="0 0 200 200">
                {/* Soil Ground */}
                <ellipse cx="100" cy="180" rx="55" ry="10" fill="#1e293b" opacity="0.8" />
                <ellipse cx="100" cy="180" rx="40" ry="6" fill="#0f172a" />

                {/* Stage 0: Seed */}
                {activeStage === 0 && (
                  <motion.circle 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    cx="100" cy="178" r="4.5" fill="#d97706" 
                  />
                )}

                {/* Stage 1+: Stem */}
                {activeStage >= 1 && (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                    d="M100,180 Q100,145 98,115"
                    fill="none" stroke="#78350f" strokeWidth="5.5" strokeLinecap="round"
                  />
                )}

                {/* Stage 2+: Branches */}
                {activeStage >= 2 && (
                  <>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      d="M99,142 Q85,125 75,120"
                      fill="none" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      d="M99,132 Q115,115 125,110"
                      fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round"
                    />
                  </>
                )}

                {/* Stage 3+: Leaves */}
                {activeStage >= 3 && (
                  <g>
                    {/* Left Leaves */}
                    <motion.path
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      d="M75,120 C65,110 65,130 75,120 Z M70,115 C60,105 60,125 70,115 Z"
                      fill="#10b981"
                    />
                    {/* Center Canopy */}
                    <motion.path
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay: 0.4 }}
                      d="M98,115 C85,95 115,95 98,115 Z M93,105 C80,85 110,85 93,105 Z"
                      fill="#059669"
                    />
                    {/* Right Leaves */}
                    <motion.path
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay: 0.5 }}
                      d="M125,110 C135,100 135,120 125,110 Z M120,105 C130,95 130,115 120,105 Z"
                      fill="#34d399"
                    />
                  </g>
                )}

                {/* Stage 4+: Flowers */}
                {activeStage >= 4 && (
                  <g>
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      cx="93" cy="93" r="4.5" fill="#f43f5e"
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      cx="72" cy="113" r="4" fill="#ec4899"
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                      cx="122" cy="103" r="4" fill="#ec4899"
                    />
                  </g>
                )}

                {/* Stage 5: Gold Glow / Golden Apples */}
                {activeStage >= 5 && (
                  <g>
                    <motion.circle
                      initial={{ scale: 0, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      cx="102" cy="85" r="5" fill="#fbbf24"
                    />
                    <motion.circle
                      initial={{ scale: 0, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      cx="80" cy="100" r="5" fill="#fbbf24"
                    />
                    <motion.circle
                      initial={{ scale: 0, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      cx="115" cy="95" r="5" fill="#fbbf24"
                    />
                  </g>
                )}
              </svg>
            </div>

            {/* Stage description card */}
            <div className="w-full text-center border-t border-white/5 pt-4 mt-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-900/60 shadow">
                {stages[activeStage].name}
              </span>
              <p className="text-xs text-slate-350 leading-normal mt-2.5">
                {stages[activeStage].desc}
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
