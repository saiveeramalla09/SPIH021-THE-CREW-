import React from "react";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";

export const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 bg-gradient-to-b from-brand-50 to-indigo-50 border border-brand-200/50 rounded-2xl p-6">
      <div className="relative">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-brand-400/20 blur-xl" 
        />
        <div className="w-12 h-12 rounded-2xl bg-brand-200/80 border border-brand-300/60 flex items-center justify-center text-brand-600">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Brain className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-sm font-bold text-slate-900">VidyaAI is Thinking...</h4>
        <p className="text-xs text-slate-600 mt-1">Analyzing understanding and reasoning</p>
      </div>
    </div>
  );
};
export default LoadingState;
