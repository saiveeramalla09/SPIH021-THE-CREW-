import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { TutorMessage as MessageType } from "../../types/learning";
import { Sparkles, BrainCircuit } from "lucide-react";

interface TutorMessageProps {
  message: MessageType | null;
  loading: boolean;
  responseType: string | null;
}

export const TutorMessage: React.FC<TutorMessageProps> = ({ message, loading, responseType }) => {
  const [typedText, setTypedText] = useState("");

  // Typing effect when message text changes
  useEffect(() => {
    if (!message) {
      setTypedText("");
      return;
    }
    
    setTypedText("");
    let i = 0;
    const txt = message.text;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + txt.charAt(i));
      i++;
      if (i >= txt.length) {
        clearInterval(interval);
      }
    }, 15); // Adjust typing speed

    return () => clearInterval(interval);
  }, [message]);

  const getBorderColor = () => {
    switch (responseType) {
      case "correct":
      case "mastery":
        return "border-emerald-300/40 bg-emerald-50";
      case "wrong":
      case "misconception":
        return "border-rose-300/40 bg-rose-50";
      case "partial":
      case "guidance":
        return "border-amber-300/40 bg-amber-50";
      default:
        return "border-slate-200 bg-white";
    }
  };

  return (
    <div className={`relative flex gap-3 p-4 md:p-5 rounded-2xl border backdrop-blur transition-all duration-500 ${getBorderColor()}`}>
      
      {/* Robot Tutor Avatar */}
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 shadow-md text-white">
        {loading ? (
          <BrainCircuit className="w-5 h-5 animate-pulse" />
        ) : (
          <Sparkles className="w-5 h-5" />
        )}
      </div>

      {/* Message content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
          {loading ? "VidyaAI is thinking..." : "VidyaAI Tutor"}
        </span>
        
        {loading ? (
          <div className="flex flex-col gap-2 py-1">
            <div className="h-3 bg-slate-300 rounded-full w-3/4 animate-pulse" />
            <div className="h-3 bg-slate-300 rounded-full w-1/2 animate-pulse" />
          </div>
        ) : (
          <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">
            {typedText}
          </p>
        )}
      </div>

    </div>
  );
};
export default TutorMessage;
