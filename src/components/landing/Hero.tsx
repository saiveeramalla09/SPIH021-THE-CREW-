import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroPreview } from "./HeroPreview";

interface HeroProps {
  onStartLearning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
      
      {/* Left Column: Premium Headline & Copy */}
      <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold self-center lg:self-start">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest text-[10px]">Personal Learning • Adaptive AI</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-100">
          Don't just learn. <br />
          <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Understand.
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
          VidyaAI learns how you learn — adapting explanations, questions, and challenges around your understanding, not just your answers.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button 
            onClick={onStartLearning}
            className="w-full sm:w-auto py-4 px-8 bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-400 hover:to-teal-500 text-slate-950 font-extrabold rounded-2xl shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01] transition flex items-center justify-center gap-2.5 cursor-pointer text-sm uppercase tracking-wider"
          >
            <span>Enter My Learning World</span>
            <ArrowRight className="w-4 h-4 text-slate-950 stroke-[3px]" />
          </button>
          
          <a 
            href="#problem" 
            className="w-full sm:w-auto py-4 px-8 bg-slate-900/60 hover:bg-slate-900 border border-white/5 text-slate-300 hover:text-slate-100 font-bold rounded-2xl text-center text-sm transition"
          >
            See How It Works
          </a>
        </div>

        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">
          Your personal learning world that grows with you
        </p>
      </div>

      {/* Right Column: Immersive Living Preview */}
      <div className="lg:col-span-6 w-full flex items-center justify-center">
        <HeroPreview />
      </div>

    </section>
  );
};
