import React from "react";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onStartLearning: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartLearning }) => {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-20 mb-12 border-t border-white/5 z-10 text-center">
      
      {/* Background soft glow bubble */}
      <div className="absolute w-64 h-64 rounded-full bg-teal-500/5 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
          Ready to enter your <br />
          <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent font-display">
            learning world?
          </span>
        </h2>
        
        <p className="text-xs text-slate-450 leading-relaxed max-w-sm">
          Join VidyaAI and experience personalized learning designed to foster deep understanding instead of rote memorization.
        </p>

        <button
          onClick={onStartLearning}
          className="mt-2 py-4 px-10 bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-400 hover:to-teal-500 text-slate-950 font-extrabold rounded-2xl shadow-xl hover:scale-[1.01] transition flex items-center gap-2 cursor-pointer uppercase tracking-wider text-sm"
        >
          <span>Start Learning</span>
          <ArrowRight className="w-4 h-4 stroke-[3px]" />
        </button>

        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block mt-4">
          Learn it. Explain it. Apply it. Grow.
        </span>

      </div>

    </section>
  );
};
