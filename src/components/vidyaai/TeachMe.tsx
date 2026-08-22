import React from "react";
import type { LearningEvaluation } from "../../types/learning";
import { CheckCircle2, Award, Lightbulb, BookOpenCheck } from "lucide-react";
import { motion } from "framer-motion";

interface TeachMeProps {
  evaluation: LearningEvaluation | null;
}

export const TeachMe: React.FC<TeachMeProps> = ({ evaluation }) => {
  if (!evaluation) return null;

  const { understanding, reasoning, explanation_quality } = evaluation;

  const getScoreLabel = (score: number) => {
    if (score >= 0.8) return { label: "Excellent", color: "text-emerald-600 font-bold" };
    if (score >= 0.5) return { label: "Good Thinking", color: "text-brand-600 font-bold" };
    return { label: "Needs Practice", color: "text-amber-600 font-bold" };
  };

  const getPercentageString = (val: number) => `${Math.round(val * 100)}%`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/60 flex flex-col gap-4 shadow-sm"
    >
      <div className="flex items-center gap-2">
        <Award className="w-5 h-5 text-indigo-600" />
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          AI Explanation Evaluation
        </h4>
      </div>

      {/* Evaluation stats grids */}
      <div className="grid grid-cols-3 gap-3 my-1">
        
        {/* Understanding */}
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/70 border border-slate-200/60 text-center">
          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Understanding</span>
          <span className="text-lg font-bold text-slate-900">{getPercentageString(understanding)}</span>
          <span className={`text-[10px] font-semibold ${getScoreLabel(understanding).color}`}>
            {getScoreLabel(understanding).label}
          </span>
        </div>

        {/* Reasoning */}
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/70 border border-slate-200/60 text-center">
          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Reasoning</span>
          <span className="text-lg font-bold text-slate-900">{getPercentageString(reasoning)}</span>
          <span className={`text-[10px] font-semibold ${getScoreLabel(reasoning).color}`}>
            {getScoreLabel(reasoning).label}
          </span>
        </div>

        {/* Explanation Quality */}
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/70 border border-slate-200/60 text-center">
          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Quality</span>
          <span className="text-lg font-bold text-slate-900">{getPercentageString(explanation_quality)}</span>
          <span className={`text-[10px] font-semibold ${getScoreLabel(explanation_quality).color}`}>
            {getScoreLabel(explanation_quality).label}
          </span>
        </div>

      </div>

      {/* Encouraging Feedback footer card */}
      <div className="flex gap-2.5 p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-900/30 text-xs text-indigo-200 font-medium">
        <Lightbulb className="w-4 h-4 text-indigo-400 flex-shrink-0" />
        <p className="leading-normal">
          {explanation_quality >= 0.8 
            ? "Fabulous! You explained the actual logic clearly, demonstrating you understand why the size of pieces changes based on the denominator."
            : "Nice try! To make it stronger, explain how cutting a whole bar into more equal pieces makes each individual piece smaller."}
        </p>
      </div>

    </motion.div>
  );
};
export default TeachMe;
