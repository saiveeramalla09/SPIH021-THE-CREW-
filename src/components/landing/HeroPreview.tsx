import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, HelpCircle, MessageSquare, Check, RotateCcw } from "lucide-react";

export const HeroPreview: React.FC = () => {
  const [step, setStep] = useState(0);
  const [waterLevel, setWaterLevel] = useState(50);
  const [leavesCount, setLeavesCount] = useState(1);
  const [dialogue, setDialogue] = useState("Let's see how you think.");
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [studentActionText, setStudentActionText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Play through the demo loop automatically
  useEffect(() => {
    let t1: number, t2: number, t3: number, t4: number, t5: number, t6: number, t7: number, t8: number, t9: number, t10: number;

    const runSequence = () => {
      // Step 0: Tutor Intro
      setStep(0);
      setWaterLevel(50);
      setLeavesCount(1);
      setDialogue("Let's see how you think.");
      setShowQuestion(false);
      setSelectedOption(null);
      setStudentActionText("");
      setIsTyping(false);

      // Step 1: Show Question
      t1 = window.setTimeout(() => {
        setStep(1);
        setDialogue("Which is larger: 1/2 or 1/4?");
        setShowQuestion(true);
      }, 3000);

      // Step 2: Student selects 1/4 (Wrong - denominator misconception)
      t2 = window.setTimeout(() => {
        setStep(2);
        setSelectedOption("1/4");
      }, 5500);

      // Step 3: AI adapts, changes to visual explanation
      t3 = window.setTimeout(() => {
        setStep(3);
        setSelectedOption(null);
        setShowQuestion(false);
        setDialogue("That's okay. Let's look at the pieces.");
      }, 7500);

      // Step 4: Correct answer retry (select 1/2)
      t4 = window.setTimeout(() => {
        setStep(4);
        setShowQuestion(true);
        setSelectedOption("1/2");
      }, 10500);

      // Step 5: Understanding detected, water level rises slightly, tree leaf grows
      t5 = window.setTimeout(() => {
        setStep(5);
        setWaterLevel(58);
        setLeavesCount(2);
        setSelectedOption(null);
        setShowQuestion(false);
        setDialogue("Understanding detected! Let's explain why.");
      }, 12500);

      // Step 6: AI asks Student to explain (Teach VidyaAI)
      t6 = window.setTimeout(() => {
        setStep(6);
        setDialogue("Why is 1/2 larger than 1/4?");
        setIsTyping(true);
      }, 15000);

      // Step 7: Show Student explanation typing
      t7 = window.setTimeout(() => {
        let text = "Half a pizza has bigger slices than a quarter.";
        let current = "";
        let i = 0;
        const interval = window.setInterval(() => {
          if (i < text.length) {
            current += text[i];
            setStudentActionText(current);
            i++;
          } else {
            window.clearInterval(interval);
            setIsTyping(false);
          }
        }, 40);
      }, 16500);

      // Step 8: AI evaluates explanation and water rises significantly, second leaf appears
      t8 = window.setTimeout(() => {
        setStep(8);
        setDialogue("Perfect! You didn't just get the answer. You explained why.");
        setWaterLevel(68);
        setLeavesCount(3);
        setStudentActionText("");
      }, 21000);

      // Step 9: Transfer Challenge introduction
      t9 = window.setTimeout(() => {
        setStep(9);
        setDialogue("Now let's use fractions in a recipe.");
      }, 25000);

      // Loop back to start
      t10 = window.setTimeout(() => {
        runSequence();
      }, 29000);
    };

    runSequence();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
      clearTimeout(t10);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl border border-white/5 bg-slate-950/60 p-5 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
      
      {/* Gloss reflection overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/2 to-transparent rounded-3xl" />

      {/* Header controls */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">VidyaAI Learning World</span>
        </div>
        <button 
          onClick={() => {
            // Trigger quick restart
            setStep(0);
            setWaterLevel(50);
            setLeavesCount(1);
            setDialogue("Let's see how you think.");
            setShowQuestion(false);
            setSelectedOption(null);
            setStudentActionText("");
          }}
          className="text-slate-500 hover:text-slate-300 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main split display: Tree and Water Orb side by side */}
      <div className="grid grid-cols-2 gap-4 mb-4 items-center">
        
        {/* Living sway tree */}
        <div className="relative h-44 rounded-2xl bg-teal-950/20 border border-white/5 flex flex-col items-center justify-center p-3 overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-teal-500/5 to-transparent pointer-events-none" />
          <span className="absolute top-2 left-2 text-[9px] font-bold text-teal-500/80 uppercase tracking-wider">Growth Tree</span>
          
          <svg className="w-32 h-32" viewBox="0 0 200 200">
            {/* Ground base */}
            <ellipse cx="100" cy="170" rx="35" ry="6" fill="#1e293b" />
            
            {/* Stem */}
            <path d="M100,170 Q100,140 98,110" fill="none" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Left Branch */}
            <path d="M99,135 Q85,120 78,115" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            
            {/* Right Branch */}
            <path d="M99,128 Q115,115 122,110" fill="none" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />

            {/* Living Leaves */}
            {/* Leaf 1 (Always there) */}
            <g className="animate-pulse">
              <path d="M98,110 C88,95 108,95 98,110 Z" fill="#10b981" />
            </g>
            
            {/* Leaf 2 (Sprouts at step 5+) */}
            {leavesCount >= 2 && (
              <motion.path 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                d="M78,115 C68,105 78,125 78,115 Z" 
                fill="#34d399" 
              />
            )}
            
            {/* Leaf 3 (Sprouts at step 8+) */}
            {leavesCount >= 3 && (
              <motion.path 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                d="M122,110 C132,100 122,120 122,110 Z" 
                fill="#6ee7b7" 
              />
            )}
          </svg>
        </div>

        {/* Realistic liquid Water Orb */}
        <div className="relative h-44 rounded-2xl bg-teal-950/20 border border-white/5 flex flex-col items-center justify-center p-3 overflow-hidden">
          <span className="absolute top-2 left-2 text-[9px] font-bold text-teal-500/80 uppercase tracking-wider">Water Orb</span>
          
          {/* Glass Orb Shell */}
          <div className="relative w-28 h-28 rounded-full border border-white/10 shadow-[inset_0_4px_10px_rgba(255,255,255,0.05),0_10px_20px_rgba(13,148,136,0.15)] bg-slate-900/50 overflow-hidden flex items-center justify-center">
            
            {/* Gloss highlight */}
            <div className="absolute top-1.5 left-4 w-8 h-4 bg-gradient-to-b from-white/20 to-transparent rounded-full rotate-[-15deg] pointer-events-none z-30" />
            
            {/* Water Wave */}
            <div 
              className="absolute w-[200%] h-[200%] bg-gradient-to-b from-teal-400 to-teal-700 rounded-[38%] left-1/2 -translate-x-1/2 transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) z-10"
              style={{ 
                bottom: `calc(${waterLevel - 105}%)`,
                animation: "orb-wave-rotate 10s infinite linear"
              }}
            />
            
            {/* Water Wave Back overlay */}
            <div 
              className="absolute w-[200%] h-[200%] bg-gradient-to-b from-emerald-400/40 to-emerald-700/40 rounded-[35%] left-1/2 -translate-x-1/2 transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) z-5"
              style={{ 
                bottom: `calc(${waterLevel - 103}%)`,
                animation: "orb-wave-rotate 7s infinite linear"
              }}
            />

            {/* Level Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <span className="text-xl font-bold font-display">{waterLevel}%</span>
              <span className="text-[8px] uppercase tracking-widest text-teal-200">evidence</span>
            </div>
          </div>
        </div>

      </div>

      {/* Tutor Dialogue & Student Interaction panel */}
      <div className="flex-1 flex flex-col gap-3 justify-end min-h-[170px]">
        
        {/* Tutor bubble */}
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-shrink-0">
            <Brain className="w-4 h-4" />
          </div>
          <div className="flex-1 rounded-2xl rounded-tl-none bg-slate-900 border border-white/5 p-3.5 shadow-sm text-xs leading-relaxed text-slate-200">
            <p className="font-semibold text-teal-400 mb-1 text-[10px] uppercase tracking-wider">VidyaAI Tutor</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={dialogue}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {dialogue}
              </motion.p>
            </AnimatePresence>

            {/* Visual Misconception Analogy at Step 3 */}
            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-3 p-2 bg-slate-950/60 border border-white/5 rounded-xl flex items-center justify-around"
              >
                <div className="text-center">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold mb-1">1/2 portion</div>
                  <div className="flex gap-0.5 w-12 h-6 bg-slate-900 border border-white/10 rounded overflow-hidden">
                    <div className="w-1/2 h-full bg-teal-500" />
                    <div className="w-1/2 h-full bg-slate-800" />
                  </div>
                </div>
                <div className="text-[10px] text-teal-400 font-bold">VS</div>
                <div className="text-center">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold mb-1">1/4 portion</div>
                  <div className="flex gap-0.5 w-12 h-6 bg-slate-900 border border-white/10 rounded overflow-hidden">
                    <div className="w-1/4 h-full bg-teal-500" />
                    <div className="w-1/4 h-full bg-slate-800" />
                    <div className="w-1/4 h-full bg-slate-800" />
                    <div className="w-1/4 h-full bg-slate-800" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Student actions */}
        <div className="min-h-[50px] flex items-center justify-end">
          
          {/* Show Multiple Choice inputs */}
          {showQuestion && (
            <div className="flex gap-2.5 w-full pl-9 justify-start">
              {["1/2", "1/4"].map((opt) => (
                <button
                  key={opt}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border transition duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                    selectedOption === opt
                      ? opt === "1/2"
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                        : "bg-rose-500/20 border-rose-500 text-rose-300"
                      : "bg-slate-900/60 border-white/5 text-slate-400"
                  }`}
                  disabled
                >
                  <span>{opt}</span>
                  {selectedOption === opt && opt === "1/2" && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          )}

          {/* Show Explanation textbox typing */}
          {studentActionText && (
            <div className="w-full pl-9">
              <div className="rounded-xl border border-teal-500/30 bg-slate-900/80 p-3 text-xs text-slate-200 shadow-lg relative flex items-center justify-between">
                <span className="italic leading-normal flex-1">
                  "{studentActionText}"
                  {isTyping && <span className="w-1 h-3.5 bg-teal-400 inline-block ml-0.5 animate-pulse" />}
                </span>
                <span className="text-[9px] uppercase font-bold text-teal-400 bg-teal-950 px-2 py-0.5 rounded-full border border-teal-900/60 ml-2">
                  Student
                </span>
              </div>
            </div>
          )}

          {/* Fallback default state indicator */}
          {!showQuestion && !studentActionText && (
            <div className="text-[10px] text-slate-500 italic pr-3 uppercase tracking-wider flex items-center gap-1.5">
              <span>Awaiting evaluation</span>
              <span className="w-1 h-1.5 bg-slate-500 animate-ping rounded-full" />
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
