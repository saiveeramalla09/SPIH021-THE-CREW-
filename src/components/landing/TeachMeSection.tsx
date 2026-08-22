import React, { useState } from "react";
import { Mic, ArrowRight, Brain, AlertCircle, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const TeachMeSection: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [evaluation, setEvaluation] = useState<{
    understanding: string;
    reasoning: string;
    explanation: string;
    response: string;
  } | null>(null);

  const presets = [
    {
      label: "Visual Analogy",
      text: "If you divide a pizza into two halves, each slice is much larger than if you divide the same pizza into four equal quarters.",
      understanding: "Strong",
      reasoning: "Strong",
      explanation: "Strong",
      response: "Outstanding! You didn't just get the answer. You explained it using a clear, intuitive spatial analogy."
    },
    {
      label: "Weak / Formulaic",
      text: "Because 2 is smaller than 4.",
      understanding: "Weak",
      reasoning: "Weak",
      explanation: "Minimal",
      response: "You got the correct conclusion, but watch out: since 2 is smaller than 4, it means we divide the whole into fewer parts, making each part larger."
    },
    {
      label: "Mathematical Rule",
      text: "The denominator 2 is smaller, which means the whole unit is split into fewer equal parts, making the size of each part larger than 1/4.",
      understanding: "Strong",
      reasoning: "Strong",
      explanation: "Moderate",
      response: "Excellent. You explained it using correct fractional division terminology. Strong reasoning."
    }
  ];

  const handleSelectPreset = (index: number) => {
    setSelectedPreset(index);
    setTypedText(presets[index].text);
    setSubmitted(false);
    setEvaluation(null);
  };

  const handleSubmit = () => {
    if (!typedText.trim()) return;
    setSubmitted(true);
    
    // Determine which preset matches, or default to custom evaluation
    const matchedPreset = presets.find((p) => p.text === typedText) || {
      understanding: "Strong",
      reasoning: "Moderate",
      explanation: "Strong",
      response: "I understand your reasoning! You explained it clearly. Keep it up."
    };

    setTimeout(() => {
      setEvaluation({
        understanding: matchedPreset.understanding,
        reasoning: matchedPreset.reasoning,
        explanation: matchedPreset.explanation,
        response: matchedPreset.response
      });
    }, 1200);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-white/5 z-10">
      
      {/* Background radial glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[100px] top-1/2 left-0 -translate-y-1/2 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Dynamic Chat Widget */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-white/5 bg-slate-900/40 p-5 backdrop-blur-md shadow-2xl flex flex-col gap-4">
            
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Brain className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">Your Turn Mode</h4>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Active Challenge: Explain</p>
              </div>
            </div>

            {/* AI Dialog Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-6.5 h-6.5 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 flex-shrink-0 text-[10px] font-bold">
                V
              </div>
              <div className="rounded-2xl rounded-tl-none bg-slate-950/80 border border-white/5 p-3.5 text-xs text-slate-200 leading-normal flex-1">
                <p className="font-semibold text-amber-400 mb-1 text-[9px] uppercase tracking-wider">VidyaAI</p>
                Explain why 1/2 is larger than 1/4.
              </div>
            </div>

            {/* Presets Selectors */}
            <div className="flex flex-col gap-2 my-1">
              <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Select a response to test:</span>
              <div className="flex gap-2">
                {presets.map((preset, idx) => (
                  <button
                    key={preset.label}
                    onClick={() => handleSelectPreset(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-[10px] font-semibold border transition cursor-pointer ${
                      selectedPreset === idx
                        ? "bg-amber-500/15 border-amber-500/60 text-amber-300 font-bold"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="relative">
              <textarea
                value={typedText}
                onChange={(e) => {
                  setTypedText(e.target.value);
                  setSubmitted(false);
                  setEvaluation(null);
                  setSelectedPreset(null);
                }}
                placeholder="Type your explanation here, or choose a preset above..."
                className="w-full h-24 p-3 bg-slate-950/80 border border-white/5 rounded-2xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition resize-none leading-relaxed"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <button className="p-1.5 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-slate-200 transition cursor-pointer">
                  <Mic className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleSubmit}
                  className="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition cursor-pointer font-bold"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* AI Evaluation Screen */}
            <AnimatePresence>
              {submitted && !evaluation && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-2xl bg-slate-950/50 border border-white/5 flex items-center justify-center gap-2 text-xs text-slate-400 py-6"
                >
                  <RefreshIcon className="w-4 h-4 animate-spin text-amber-500" />
                  <span>Evaluating conceptual reasoning...</span>
                </motion.div>
              )}

              {evaluation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-3"
                >
                  {/* Score indicators */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "Understanding", val: evaluation.understanding },
                      { name: "Reasoning", val: evaluation.reasoning },
                      { name: "Explanation", val: evaluation.explanation }
                    ].map((metric) => (
                      <div key={metric.name} className="p-2 bg-slate-950/80 border border-white/5 rounded-xl text-center">
                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider block">{metric.name}</span>
                        <span className={`text-[11px] font-extrabold uppercase mt-0.5 block ${
                          metric.val === "Strong" 
                            ? "text-emerald-400" 
                            : metric.val === "Moderate" 
                            ? "text-sky-400" 
                            : "text-amber-500"
                        }`}>
                          {metric.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* AI Response feedback */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6.5 h-6.5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 text-[10px] font-bold">
                      ✓
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-slate-950/80 border border-white/5 p-3.5 text-xs text-slate-200 leading-normal flex-1">
                      <p className="font-semibold text-emerald-400 mb-1 text-[9px] uppercase tracking-wider">VidyaAI Evaluation</p>
                      {evaluation.response}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Active Learning</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
            What if the student had to teach the AI?
          </h2>
          <div className="h-1 w-20 bg-amber-500 rounded-full mx-auto lg:mx-0" />
          <p className="text-sm text-slate-400 leading-relaxed">
            The ultimate proof of understanding is teaching. VidyaAI prompts students to explain concepts in their own words, analyzing their analogies and semantic structure to evaluate true cognitive assimilation.
          </p>
          <div className="flex items-start gap-3 text-left bg-slate-900/40 p-4 border border-white/5 rounded-2xl">
            <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-350 leading-relaxed">
              <strong>Active Retrieval:</strong> Students shift from passive answer consumers to active conceptualizers, retaining 90% of what they explain.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

// Simple React loading spinner icon SVG helper
const RefreshIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
  </svg>
);
