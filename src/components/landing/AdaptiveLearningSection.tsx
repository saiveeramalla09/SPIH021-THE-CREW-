import React, { useState } from "react";
import { AlertCircle, HelpCircle, Eye, RefreshCw, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AdaptiveLearningSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Misconception Detected",
      icon: <AlertCircle className="w-5 h-5 text-rose-400" />,
      student: "1/4 is larger because 4 is bigger than 2.",
      tutor: "Flags denominator confusion: the student thinks a larger denominator makes a larger fraction.",
      badge: "Denominator misconception"
    },
    {
      title: "Visual Explanation",
      icon: <Eye className="w-5 h-5 text-sky-400" />,
      student: "Views visual parts side-by-side.",
      tutor: "Shows blocks: a block split in 2 parts (1/2) has much bigger pieces than a block split in 4 parts (1/4).",
      badge: "Spatial mapping"
    },
    {
      title: "Scaffolded Retry",
      icon: <RefreshCw className="w-5 h-5 text-amber-500 animate-spin" style={{ animationDuration: "8s" }} />,
      student: "Retries matching fractional pieces.",
      tutor: "Guides with a simpler question: 'If we share a pie with 2 friends or 4, which group gets the bigger slice?'",
      badge: "Guided question"
    },
    {
      title: "Mastery Confirmed",
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      student: "1/2 is larger because dividing into fewer pieces leaves larger parts.",
      tutor: "Confirms true cognitive understanding. Grows tree leaf and rises water level.",
      badge: "Mastery achieved"
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Adaptive Strategy</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
          Same concept. <br />
          <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent font-display">
            Different teaching.
          </span>
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          VidyaAI dynamically shifts explaining models in real-time. When a mistake occurs, the system identifies the specific conceptual gap and adapts its explanation.
        </p>
      </div>

      {/* Stepper Timeline UI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
        
        {/* Left Side: Stepper controls */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {steps.map((st, idx) => (
            <button
              key={st.title}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
                activeStep === idx
                  ? "bg-slate-900 border-amber-500/50 shadow-md shadow-amber-500/5"
                  : "bg-slate-950/20 border-white/5 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activeStep === idx ? "bg-slate-950 border border-white/10" : "bg-slate-900"
                }`}>
                  {st.icon}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">{st.title}</h4>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{st.badge}</span>
                </div>
              </div>
              <span className="text-xs font-extrabold text-slate-600">0{idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Step Display Panel */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-md shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
            <div className="absolute top-2 right-4 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              Step 0{activeStep + 1} of 04
            </div>

            <div className="flex flex-col gap-5 pt-4">
              
              {/* Student bubble */}
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Student response / Action</span>
                <div className="p-3 bg-slate-950/60 border border-white/5 rounded-2xl text-xs text-slate-350 italic">
                  "{steps[activeStep].student}"
                </div>
              </div>

              {/* Arrow transition */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              {/* AI action bubble */}
              <div className="flex flex-col gap-1 text-left">
                <span className="text-[9px] uppercase font-bold text-amber-500 tracking-wider">VidyaAI adaptation response</span>
                <div className="p-3 bg-amber-950/10 border border-amber-500/10 rounded-2xl text-xs text-amber-200 leading-normal">
                  {steps[activeStep].tutor}
                </div>
              </div>

            </div>

            <div className="mt-6 flex items-center gap-1.5 border-t border-white/5 pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Adaptation Strategy: {steps[activeStep].badge}</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
