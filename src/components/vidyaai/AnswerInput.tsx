import React, { useState, useEffect } from "react";
import type { QuestionData } from "../../data/mockLearning";
import { HelpCircle, Mic, ArrowRight, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AnswerInputProps {
  question: QuestionData | null;
  onSubmit: (answer: string) => void;
  onRequestHint: () => void;
  activeHint: string | null;
  loading: boolean;
}

export const AnswerInput: React.FC<AnswerInputProps> = ({
  question,
  onSubmit,
  onRequestHint,
  activeHint,
  loading
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textAnswer, setTextAnswer] = useState<string>("");
  const [showMicOverlay, setShowMicOverlay] = useState<boolean>(false);

  // Reset inputs when question changes
  useEffect(() => {
    setSelectedOption(null);
    setTextAnswer("");
    setShowMicOverlay(false);
  }, [question]);

  if (!question) return null;

  const isMultipleChoice = !!question.options && question.options.length > 0;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (isMultipleChoice) {
      if (selectedOption) {
        onSubmit(selectedOption);
      }
    } else {
      if (textAnswer.trim()) {
        onSubmit(textAnswer);
      }
    }
  };

  // Simulates speech-to-text input for children
  const handleMicClick = () => {
    setShowMicOverlay(true);
    setTimeout(() => {
      // Simulate speaking a strong explanation
      setTextAnswer("Half is larger because the same whole is divided into two parts instead of four, so each half is larger.");
      setShowMicOverlay(false);
    }, 2500);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      {/* Options or Text Area */}
      {isMultipleChoice ? (
        <div className="grid grid-cols-2 gap-3">
          {question.options?.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedOption(option)}
              className={`p-4 text-sm md:text-base font-bold rounded-2xl border transition duration-300 shadow-sm cursor-pointer ${
                selectedOption === option
                  ? "bg-brand-500 border-brand-400 text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="relative">
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder="Type your explanation..."
            rows={3}
            className="w-full p-4 text-sm md:text-base bg-slate-50 text-slate-900 placeholder-slate-400 rounded-2xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none resize-none shadow-sm"
          />
          <button
            type="button"
            onClick={handleMicClick}
            className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 border border-slate-300 text-slate-600 cursor-pointer transition duration-300"
            title="Speak answer"
          >
            <Mic className="w-4 h-4 text-brand-500" />
          </button>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex justify-between items-center gap-3">
        <button
          type="button"
          onClick={onRequestHint}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 hover:border-slate-300 cursor-pointer transition duration-300"
        >
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>Need a Hint?</span>
        </button>

        <button
          type="submit"
          disabled={loading || (isMultipleChoice ? !selectedOption : !textAnswer.trim())}
          className={`flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition duration-300 cursor-pointer ${
            loading || (isMultipleChoice ? !selectedOption : !textAnswer.trim())
              ? "bg-slate-200 border border-slate-300 text-slate-400 cursor-not-allowed"
              : "bg-brand-600 border border-brand-500 text-white shadow-md hover:shadow-brand-600/20 hover:scale-[1.02]"
          }`}
        >
          <span>{loading ? "Analyzing..." : "Submit Answer"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hint Alert Display */}
      <AnimatePresence>
        {activeHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-medium text-amber-900 leading-relaxed shadow-sm"
          >
            💡 <span className="font-semibold text-amber-700">Hint: </span> {activeHint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speech Recognition Overlay Modal */}
      <AnimatePresence>
        {showMicOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-6 backdrop-blur-[2px]"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-sm w-full flex flex-col items-center gap-6 text-center shadow-2xl">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-[20px] animate-ping" />
                <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400 animate-pulse text-white">
                  <Volume2 className="w-8 h-8 text-sky-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-100">VidyaAI is Listening...</h4>
                <p className="text-xs text-slate-400 mt-2">Speak your math explanation clearly now.</p>
              </div>
              <div className="text-xs text-sky-400 italic font-medium">
                "Half is larger because..."
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </form>
  );
};
export default AnswerInput;
