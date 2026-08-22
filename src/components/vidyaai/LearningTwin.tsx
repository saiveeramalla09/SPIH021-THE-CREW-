import React, { useState } from "react";
import type { SkillProgressMap } from "../../types/learning";
import { Brain, Sparkles, ChevronDown, ChevronUp, AlertCircle, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LearningTwinProps {
  skills: SkillProgressMap;
  misconceptions: string[];
  topic?: string;
}

export const LearningTwin: React.FC<LearningTwinProps> = ({ skills, misconceptions, topic = "fractions" }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Derive growing areas
  const getGrowingAreas = () => {
    const list: string[] = [];
    if ((skills.comparison || 0) < 0.7) list.push(`${topic.charAt(0).toUpperCase() + topic.slice(1)} Sizes`);
    if ((skills.simplification || 0) < 0.6) list.push("Simplification");
    if ((skills.addition || 0) < 0.6) list.push("Addition");
    return list.length > 0 ? list : ["None! You are crushing it."];
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Header Toggle bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 hover:border-indigo-300 shadow-sm hover:shadow-md transition duration-300 cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-indigo-200/70 border border-indigo-300/60 flex items-center justify-center text-indigo-600">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Learning Twin Insights
            </h4>
            <span className="text-[9px] text-slate-500">
              VidyaAI's representation of your cognitive progress
            </span>
          </div>
        </div>
        <div className="text-slate-600">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded panel details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-white/60 border border-indigo-100/50 rounded-2xl">
              
              {/* Insight Text */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-indigo-50/70 border border-indigo-200/50 shadow-sm">
                <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                  Twin Insight
                </span>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                  "Visual models and real-world representations are helping you learn {topic.toLowerCase()} comparisons faster. You think visually!"
                </p>
              </div>

              {/* Growing Areas / Struggles */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/50 shadow-sm">
                <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Focus Growth Areas
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {getGrowingAreas().map((area) => (
                    <span 
                      key={area}
                      className="text-[10px] font-semibold text-amber-300 bg-amber-950/40 border border-amber-900/60 px-2 py-0.5 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cognitive State */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-slate-950/40 border border-slate-900 shadow-inner md:col-span-2">
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  Cognitive Preferences
                </span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold px-2 py-1 rounded bg-slate-900/40">
                    <span>Style:</span>
                    <span className="text-emerald-400">Visual</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold px-2 py-1 rounded bg-slate-900/40">
                    <span>Active Misconceptions:</span>
                    <span className="text-rose-400">
                      {misconceptions.length > 0 ? misconceptions[0].replace(/_/g, " ") : "None"}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
export default LearningTwin;
