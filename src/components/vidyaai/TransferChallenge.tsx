import React from "react";
import type { QuestionData } from "../../data/mockLearning";
import { GlassWater, Shuffle, Info } from "lucide-react";
import { motion } from "framer-motion";

interface TransferChallengeProps {
  question: QuestionData;
  topic?: string;
}

export const TransferChallenge: React.FC<TransferChallengeProps> = ({ question, topic = "fractions" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-5 rounded-2xl bg-amber-950/10 border border-amber-500/20 flex flex-col gap-4 shadow-sm relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-24 h-24 rounded-full bg-amber-500/5 blur-2xl" />

      {/* Header Tag */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shuffle className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: "10s" }} />
          <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest">
            New Situation Challenge
          </h4>
        </div>
        <span className="text-[10px] font-bold text-amber-300 bg-amber-950 border border-amber-800/80 px-2 py-0.5 rounded-full">
          Knowledge Transfer
        </span>
      </div>

      {/* Visual recipe container */}
      <div className="flex gap-4 p-4 rounded-xl bg-slate-950/30 border border-slate-900 shadow-inner">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-amber-950/40 border border-amber-900 text-amber-400">
          <GlassWater className="w-6 h-6" />
        </div>
        <div className="flex-1 flex flex-col gap-1.5 justify-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">
            Kitchen Measurement Context
          </span>
          <p className="text-sm md:text-base font-bold text-slate-200 leading-snug">
            {question.question}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
        <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
        <span>{topic.charAt(0).toUpperCase() + topic.slice(1)} concepts aren't just for tests! See if you can apply your knowledge of sizes to a new context.</span>
      </div>

    </motion.div>
  );
};
export default TransferChallenge;
