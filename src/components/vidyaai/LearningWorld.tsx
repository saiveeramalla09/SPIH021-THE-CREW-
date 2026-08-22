import React, { useState, useEffect } from "react";
import { useLearningWorld } from "../../hooks/useLearningWorld";
import { StudentContext } from "./StudentContext";
import { GrowthTree } from "./GrowthTree";
import { WaterOrb } from "./WaterOrb";
import { SkillProgress } from "./SkillProgress";
import { TutorMessage } from "./TutorMessage";
import { QuestionCard } from "./QuestionCard";
import { AnswerInput } from "./AnswerInput";
import { TeachMe } from "./TeachMe";
import { TransferChallenge } from "./TransferChallenge";
import { LearningTwin } from "./LearningTwin";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { Play, RotateCcw, BrainCircuit, Sparkles, BookOpen, SlidersHorizontal, ArrowLeft, Droplets, TreePine } from "lucide-react";
import { motion } from "framer-motion";

interface LearningWorldProps {
  initialClassLevel?: number;
  initialLanguage?: string;
  initialTopic?: string;
  initialGoal?: string;
  onExit?: () => void;
  onConfigure?: () => void;
}

export const LearningWorld: React.FC<LearningWorldProps> = ({
  initialClassLevel = 5,
  initialLanguage = "en",
  initialTopic = "Fractions",
  initialGoal = "visual",
  onExit,
  onConfigure
}) => {
  const {
    sessionId,
    student,
    topic,
    skills,
    water,
    tree,
    currentInteraction,
    recentHistory,
    tutorMessage,
    responseType,
    learningEvaluation,
    loading,
    error,
    activeHint,
    initiateSession,
    submitAnswer,
    requestHint,
    resetSession
  } = useLearningWorld();

  // Auto-initiate session on mount if parameters change
  useEffect(() => {
    initiateSession(initialLanguage, initialTopic, initialClassLevel, initialGoal);
  }, [initialLanguage, initialTopic, initialClassLevel, initialGoal, initiateSession]);

  const [selectedLanguage, setSelectedLanguage] = useState<string>(initialLanguage);
  const [customTopic, setCustomTopic] = useState<string>(initialTopic);

  // Filter out any duplicate misconceptions
  const activeMisconceptions = learningEvaluation?.misconception 
    ? [learningEvaluation.misconception] 
    : [];

  return (
    <div className="min-h-screen w-full bg-[#fafaff] text-slate-900 flex flex-col font-sans overflow-x-hidden selection:bg-brand-500/25 selection:text-brand-900">
      
      {/* Immersive background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-300/10 blur-[120px] top-12 left-10" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-emerald-300/10 blur-[130px] bottom-12 right-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Global Top Navbar */}
      <header className="relative w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between z-20 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent block leading-tight">
              VIDYA-AI
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase hidden sm:block">
              Cognitive Learning Engine
            </span>
          </div>
        </div>

        {/* Center/Right Context & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {sessionId && (
            <StudentContext student={student} topic={topic} />
          )}

          {/* Change Topic / Settings */}
          {onConfigure && (
            <button
              onClick={onConfigure}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/80 hover:bg-brand-50 border border-slate-200 text-slate-700 hover:text-brand-700 text-xs font-bold transition cursor-pointer"
              title="Change Topic or Grade"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Change Topic</span>
            </button>
          )}

          {/* Exit Button */}
          <button
            onClick={() => {
              resetSession();
              onExit?.();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-600 hover:text-rose-600 text-xs font-bold transition cursor-pointer"
            title="Exit Learning World"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exit</span>
          </button>
        </div>
      </header>

      {/* Core Body Container */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:p-6 z-10 flex flex-col justify-start">
        {!sessionId && !loading ? (
          
          /* ==================================================== */
          /* INTRO SPLASH SCREEN FALLBACK                         */
          /* ==================================================== */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg mx-auto my-auto p-8 rounded-3xl bg-white/90 border border-slate-200 shadow-xl text-center flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-300/40 flex items-center justify-center text-brand-600">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Enter Your Learning World
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Welcome to VidyaAI. Together we will study {customTopic || "Fractions"}, track your understanding, and nourish your personal learning tree!
              </p>
            </div>

            {/* Language Selector */}
            <div className="w-full flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 text-left">
                Choose Language
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { code: "en", name: "English" },
                  { code: "te", name: "తెలుగు" },
                  { code: "hi", name: "हिंदी" }
                ].map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                      selectedLanguage === lang.code
                        ? "bg-brand-500/10 border-brand-500 text-brand-700 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Input */}
            <div className="w-full flex flex-col gap-2 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Topic to Learn
              </span>
              <input
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="e.g. Fractions, Photosynthesis, Algebra..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-brand-500 transition"
              />
            </div>

            <button
              onClick={() => initiateSession(selectedLanguage, customTopic, initialClassLevel, initialGoal)}
              className="w-full py-4 bg-gradient-to-r from-brand-600 to-indigo-600 text-white rounded-2xl font-bold uppercase tracking-wider shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Start Learning {customTopic || "Fractions"}</span>
            </button>
          </motion.div>
          
        ) : (
          
          /* ==================================================== */
          /* FULL LEARNING WORLD ECOSYSTEM DASHBOARD              */
          /* ==================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT COLUMN: Interaction & Tutor Dialogue (lg:span-7) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              
              {/* Tutor Dialog panel with glowing speech */}
              <TutorMessage 
                message={tutorMessage} 
                loading={loading} 
                responseType={responseType} 
              />

              {/* Interactive panel container */}
              <div className="p-5 sm:p-7 rounded-[32px] bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col gap-5">
                {error ? (
                  <ErrorState message={error} onRetry={() => initiateSession(student.language, topic, student.class_level)} />
                ) : (
                  <>
                    {/* Render visual prompt based on active response status */}
                    {currentInteraction && currentInteraction.type === "transfer_challenge" ? (
                      <TransferChallenge question={currentInteraction} topic={topic} />
                    ) : (
                      <QuestionCard question={currentInteraction} />
                    )}

                    {/* Teach Me descriptive score results if applicable */}
                    {responseType === "teach_me" && learningEvaluation && (
                      <TeachMe evaluation={learningEvaluation} />
                    )}

                    {/* Question inputs (choices or description details) */}
                    {currentInteraction ? (
                      <AnswerInput
                        question={currentInteraction}
                        onSubmit={submitAnswer}
                        onRequestHint={requestHint}
                        activeHint={activeHint}
                        loading={loading}
                      />
                    ) : (
                      !loading && (
                        <div className="py-10 text-center flex flex-col items-center gap-3">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                            <BookOpen className="w-7 h-7" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-800">Mastery Session Complete!</h4>
                          <p className="text-xs text-slate-500 max-w-sm">
                            You've successfully explored the core concepts for <strong>{topic}</strong>. Your learning tree and hydration levels are thriving!
                          </p>
                          {onConfigure && (
                            <button
                              onClick={onConfigure}
                              className="mt-2 px-5 py-2.5 bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider cursor-pointer shadow-md"
                            >
                              Explore Another Topic
                            </button>
                          )}
                        </div>
                      )
                    )}

                    {loading && !currentInteraction && <LoadingState />}
                  </>
                )}
              </div>

              {/* Collapsible Learning Twin Panel */}
              <LearningTwin 
                skills={skills} 
                misconceptions={activeMisconceptions} 
                topic={topic}
              />

            </div>

            {/* RIGHT COLUMN: Visual Indicators (lg:span-5) */}
            {/* Highlights the Growth Tree & Water Reservoir Ecosystem */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Dynamic Growth Tree Visualizer */}
              <div className="w-full">
                <GrowthTree treeState={tree} />
              </div>

              {/* Water Reservoir Card */}
              <div className="w-full p-5 rounded-[32px] bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col items-center">
                <WaterOrb waterState={water} />
              </div>

              {/* Skill Mastery Gauges */}
              <div className="w-full">
                <SkillProgress skills={skills} />
              </div>

            </div>

          </div>
        )}
      </main>
    </div>
  );
};

export default LearningWorld;
