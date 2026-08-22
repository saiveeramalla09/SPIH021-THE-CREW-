import React from "react";
import { ArrowRight, Compass, Sparkles, BookOpen } from "lucide-react";

export const TransferSection: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Concept Transfer</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
          Knowing it isn't enough. <br />
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Use it.
          </span>
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Memorizing formulas doesn't translate to real life. VidyaAI constantly tests your knowledge in diverse, practical contexts to verify you can apply it.
        </p>
      </div>

      {/* Visual Context Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto items-center">
        
        {/* Step 1: Learn */}
        <div className="p-5 rounded-2xl bg-slate-900/30 border border-white/5 text-center flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <BookOpen className="w-5.5 h-5.5" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Concept Phase</h4>
            <span className="text-[9px] text-teal-400 font-bold uppercase block mt-0.5">Pizza Fractions</span>
          </div>
          <div className="p-3.5 bg-slate-950/60 border border-white/5 rounded-xl w-full text-[10px] text-slate-400 leading-relaxed italic">
            "Dividing a circle slices (1/2 vs 1/4) of pizza."
          </div>
        </div>

        {/* Transition arrow 1 */}
        <div className="hidden md:flex justify-center text-teal-500/30">
          <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
        </div>

        {/* Step 2: Transfer context */}
        <div className="p-5 rounded-2xl bg-slate-900/30 border border-white/5 text-center flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
            <Compass className="w-5.5 h-5.5" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Transfer Phase</h4>
            <span className="text-[9px] text-amber-400 font-bold uppercase block mt-0.5">Recipe Scaling</span>
          </div>
          <div className="p-3.5 bg-slate-950/60 border border-white/5 rounded-xl w-full text-[10px] text-slate-400 leading-relaxed italic">
            "Scaling a recipe from 1/4 cup sugar to 1/2 cup."
          </div>
        </div>

        {/* Transition arrow 2 */}
        <div className="hidden md:flex justify-center text-amber-500/30">
          <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
        </div>

        {/* Step 3: Real world challenge */}
        <div className="p-5 rounded-2xl bg-teal-950/5 border border-teal-500/20 text-center flex flex-col items-center gap-3 md:col-span-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-5.5 h-5.5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Application Goal</h4>
            <span className="text-[9px] text-emerald-400 font-bold uppercase block mt-0.5">Real-World Problem Solving</span>
          </div>
          <div className="p-4 bg-slate-950/60 border border-white/5 rounded-xl w-full text-[11px] text-slate-300 leading-relaxed">
            "You have 1/4 liter milk and your friend has 1/2 liter. If a recipe needs 3/4 liter total, do you both have enough?"
          </div>
        </div>

      </div>

      <div className="max-w-xl mx-auto text-center mt-12">
        <p className="text-xs text-slate-450 leading-relaxed">
          VidyaAI changes the context to discover whether the student actually understands the concept, preventing artificial mastery based on visual layouts alone.
        </p>
      </div>

    </section>
  );
};
