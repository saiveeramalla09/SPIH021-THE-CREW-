import React from "react";
import type { QuestionData } from "../../data/mockLearning";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: QuestionData | null;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  if (!question) return null;

  const renderVisualExplanation = () => {
    if (question.visualContent !== "half_vs_quarter") return null;

    return (
      <div className="flex flex-col gap-4 mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <span className="text-[10px] uppercase font-bold text-brand-600 tracking-wider">
          Visual Model Comparison
        </span>
        
        {/* Block A: 1/2 (Half) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>Half Block (1/2)</span>
            <span>50% filled</span>
          </div>
          <div className="relative h-10 w-full rounded-lg bg-slate-100 border border-slate-300 overflow-hidden flex">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-brand-500 to-brand-400 border-r border-brand-300/30 flex items-center justify-center text-xs font-bold text-white shadow-inner"
            >
              1/2
            </motion.div>
            <div className="w-1/2 h-full border-l border-dashed border-slate-300" />
          </div>
        </div>

        {/* Block B: 1/4 (Quarter) */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>Quarter Block (1/4)</span>
            <span>25% filled</span>
          </div>
          <div className="relative h-10 w-full rounded-lg bg-slate-100 border border-slate-300 overflow-hidden flex">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 border-r border-indigo-300/30 flex items-center justify-center text-xs font-bold text-white shadow-inner"
            >
              1/4
            </motion.div>
            <div className="w-1/4 h-full border-r border-dashed border-slate-300" />
            <div className="w-1/4 h-full border-r border-dashed border-slate-300" />
            <div className="w-1/4 h-full" />
          </div>
        </div>
        
        <span className="text-[10px] text-center text-slate-500 italic">
          Tip: Compare the purple bar (1/2) with the indigo bar (1/4).
        </span>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col gap-2 p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"
    >
      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
        Active Question
      </span>
      <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
        {question.question}
      </h3>
      {renderVisualExplanation()}
    </motion.div>
  );
};
export default QuestionCard;
