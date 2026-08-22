import React from "react";
import { User, BrainCircuit, Activity, Compass, Flame } from "lucide-react";
import { motion } from "framer-motion";

export const LearningTwinSection: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Core Innovation</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
            An AI tutor that learns about the learner.
          </h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full mx-auto lg:mx-0" />
          <p className="text-sm text-slate-400 leading-relaxed">
            VidyaAI builds an evolving picture of how a student learns — what they understand, where they struggle, how they reason, and which explanations help them.
          </p>
          <div className="p-4.5 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-xs text-amber-300/90 leading-relaxed italic">
            "Your Learning Twin doesn't just log scores. It maps your unique conceptual landscape to make sure you never study in a way that doesn't click."
          </div>
        </div>

        {/* Right Side: Evolving Learning Twin Visual Panel */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-md shadow-2xl overflow-hidden glow-teal/5">
            
            {/* Ambient background accent glow */}
            <div className="absolute w-36 h-36 rounded-full bg-teal-500/10 blur-[60px] top-6 right-6 pointer-events-none" />
            <div className="absolute w-24 h-24 rounded-full bg-amber-500/5 blur-[50px] bottom-6 left-6 pointer-events-none" />

            {/* Header: Learning Twin Profile */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-teal-500 flex items-center justify-center text-slate-950">
                  <User className="w-5 h-5 stroke-[2.5px]" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-200 uppercase tracking-wider">LEARNING TWIN</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active ID: Student_001</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>Syncing live</span>
              </div>
            </div>

            {/* Skills Progress metrics */}
            <div className="flex flex-col gap-4 mb-6">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Topic: Fractions</h5>
              
              {[
                { name: "Comparison", level: 58, color: "from-amber-400 to-amber-600" },
                { name: "Reasoning", level: 70, color: "from-teal-400 to-teal-600" },
                { name: "Addition", level: 80, color: "from-emerald-400 to-emerald-600" }
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-slate-200">{skill.level}% Mastery</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-950 border border-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Insights panel */}
            <div className="flex flex-col gap-3">
              {/* Insight 1 */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-teal-950/10 border border-teal-500/10 glow-teal/5">
                <Compass className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Current Learning Insight</h6>
                  <p className="text-xs text-slate-300 leading-normal mt-0.5">
                    "Visual examples are helping you understand faster."
                  </p>
                </div>
              </div>

              {/* Growing Area */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-950/10 border border-amber-500/10 glow-amber/5">
                <Flame className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Target Growth Area</h6>
                  <p className="text-xs text-slate-300 leading-normal mt-0.5">
                    Simplification
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
