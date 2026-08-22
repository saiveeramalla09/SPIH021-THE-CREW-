import React from "react";
import { ArrowDown, ArrowRight, XCircle, CheckCircle, HelpCircle, RefreshCw } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">The Problem</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
          Students don't need more answers. <br />
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            They need better understanding.
          </span>
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Traditional platforms treat learning like a conveyor belt of questions and grades. VidyaAI transforms learning into an interactive conversation that adapts to how a student thinks.
        </p>
      </div>

      {/* Grid of Contrasting Visual Flows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Flow 1: Traditional Learning */}
        <div className="p-8 rounded-3xl border border-rose-500/10 bg-rose-950/5 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-rose-500/5 blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 mb-6 text-rose-400">
              <XCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Traditional LMS & ChatGPT Wrappers</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {[
                { label: "Question", detail: "A static question is displayed." },
                { label: "Answer", detail: "Student selects an option or writes a quick answer." },
                { label: "Score", detail: "AI says Correct (+10) or Incorrect (-10)." },
                { label: "Next Chapter", detail: "Student moves on with gaps in knowledge." }
              ].map((step, idx) => (
                <div key={step.label}>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-950/40 border border-white/5">
                    <span className="text-slate-600 text-xs font-bold w-6 text-right mt-0.5">0{idx + 1}</span>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">{step.label}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                  {idx < 3 && (
                    <div className="flex justify-center my-1.5 text-rose-500/30">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-rose-400/60 text-center mt-6 italic">
            Focuses on correctness. Leaves misconceptions unaddressed.
          </p>
        </div>

        {/* Flow 2: VidyaAI Loop */}
        <div className="p-8 rounded-3xl border border-teal-500/20 bg-teal-950/5 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 mb-6 text-teal-400">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest">The VidyaAI Experience</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {[
                { label: "Question", detail: "Diagnoses what the student understands." },
                { label: "Student Thinking", detail: "Tutor studies the reasoning, not just the option chosen." },
                { label: "Understanding Detected", detail: "Flags misconceptions (e.g. denominator confusion)." },
                { label: "Teaching Adapts", detail: "Dynamically drops into visual or guided explanations." },
                { label: "Student Explains", detail: "Student teaches the concept to prove mastery." },
                { label: "Knowledge Grows", detail: "Water rises and the learning tree flourishes." }
              ].map((step, idx) => (
                <div key={step.label}>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-950/60 border border-teal-500/10 glow-teal/5">
                    <span className="text-teal-500 text-xs font-bold w-6 text-right mt-0.5">0{idx + 1}</span>
                    <div>
                      <h4 className="text-xs font-extrabold text-teal-300 uppercase tracking-wider">{step.label}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                  {idx < 5 && (
                    <div className="flex justify-center my-1 text-teal-500/30">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-emerald-400/80 text-center mt-6 font-semibold">
            Focuses on understanding. Fosters critical reasoning skills.
          </p>
        </div>

      </div>

    </section>
  );
};
