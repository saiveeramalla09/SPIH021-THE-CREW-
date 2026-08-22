import React from "react";
import { Compass, Gamepad2, Brain, Network, Award } from "lucide-react";
import { motion } from "framer-motion";

export const FutureVision: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      {/* Label indicator */}
      <div className="flex justify-center mb-4">
        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
          Where VidyaAI can go next
        </span>
      </div>

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
          From learning concepts <br />
          <span className="bg-gradient-to-r from-amber-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent font-display">
            to building a future.
          </span>
        </h2>
        <p className="text-sm text-slate-450 leading-relaxed">
          VidyaAI is designed to grow beyond individual questions. A student's Learning Twin can eventually connect knowledge, skills, interests, and long-term career goals.
        </p>
      </div>

      {/* Grid of Interests Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
        
        {/* Left Side: Evolving Career Goal Profile */}
        <div className="p-6 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-500/5 blur-[50px] pointer-events-none" />
          
          <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Gamepad2 className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Student Career Aspiration</h4>
              <p className="text-sm font-extrabold text-slate-200 uppercase tracking-wider">Game Developer</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { skillName: "Programming", level: 65, color: "bg-amber-500" },
              { skillName: "Logic", level: 75, color: "bg-teal-500" },
              { skillName: "Mathematics", level: 85, color: "bg-emerald-500" },
              { skillName: "Design", level: 45, color: "bg-sky-500" },
              { skillName: "Project Experience", level: 50, color: "bg-indigo-500" }
            ].map((item) => (
              <div key={item.skillName} className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-950/40 border border-white/5">
                <span className="font-semibold text-slate-350">{item.skillName}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-1.5 rounded-full bg-slate-900 border border-white/5 overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.level}%` }} />
                  </div>
                  <span className="font-extrabold text-slate-400 w-8 text-right">{item.level}%</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Flow descriptions */}
        <div className="flex flex-col gap-6 text-left">
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
              <Network className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Curriculum Mapping</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Instead of isolated courses, topics are connected dynamically to construct path maps directly heading to high-value skills.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Brain className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Interest Integration</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                AI contextualizes explanations with real interests. If a student loves space exploration, fractions are explained using planetary weight distributions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Award className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Evolving Portfolio</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                The Learning Twin compiles a verified credentials map demonstrating a student's critical reasoning, problem-solving, and transfer capability.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
