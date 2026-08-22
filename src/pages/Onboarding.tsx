import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  BookOpen,
  GraduationCap,
  Languages,
  Target,
  Compass,
  Cpu,
  Atom,
  Calculator,
  Globe2,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export interface OnboardingData {
  class_level: number;
  language: string;
  topic: string;
  goal?: string;
  subject?: string;
}

interface OnboardingProps {
  onComplete?: (data: OnboardingData) => void;
  onBack?: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete, onBack }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [classLevel, setClassLevel] = useState<number>(5);
  const [language, setLanguage] = useState<string>("en");
  const [subject, setSubject] = useState<string>("Mathematics");
  const [topic, setTopic] = useState<string>("Fractions");
  const [customTopicInput, setCustomTopicInput] = useState<string>("");
  const [goal, setGoal] = useState<string>("visual");

  const gradeCategories = [
    { name: "Primary School", grades: [1, 2, 3, 4, 5], icon: "🌱", color: "from-emerald-500 to-teal-600" },
    { name: "Middle School", grades: [6, 7, 8], icon: "🌿", color: "from-blue-500 to-indigo-600" },
    { name: "High School", grades: [9, 10, 11, 12], icon: "🌳", color: "from-purple-500 to-violet-600" }
  ];

  const subjects = [
    { id: "Mathematics", label: "Mathematics", icon: Calculator, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { id: "Science", label: "Science", icon: Atom, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "AI & Tech", label: "AI & Coding", icon: Cpu, color: "text-purple-600 bg-purple-50 border-purple-200" },
    { id: "General", label: "All Subjects", icon: Globe2, color: "text-amber-600 bg-amber-50 border-amber-200" },
  ];

  const topicPresetsBySubject: { [key: string]: string[] } = {
    "Mathematics": ["Fractions", "Decimals", "Percentages", "Algebra", "Geometry", "Trigonometry", "Probability"],
    "Science": ["Photosynthesis", "Solar System", "Atoms & Molecules", "Force & Motion", "Human Anatomy", "Cell Biology"],
    "AI & Tech": ["Machine Learning", "Python Basics", "Neural Networks", "Data Structures", "Algorithms"],
    "General": ["Critical Thinking", "World Geography", "Environmental Science", "Financial Literacy"]
  };

  const languages = [
    { code: "en", name: "English", sub: "Global", flag: "🇬🇧" },
    { code: "te", name: "తెలుగు", sub: "Telugu", flag: "🇮🇳" },
    { code: "hi", name: "हिन्दी", sub: "Hindi", flag: "🇮🇳" },
    { code: "ta", name: "தமிழ்", sub: "Tamil", flag: "🇮🇳" },
    { code: "es", name: "Español", sub: "Spanish", flag: "🇪🇸" },
  ];

  const goals = [
    {
      id: "visual",
      title: "Visual Understanding",
      desc: "Interactive diagrams, models & intuition building",
      icon: Compass,
      badge: "Recommended"
    },
    {
      id: "mastery",
      title: "Deep Concept Mastery",
      desc: "Teach-the-AI mode & cross-concept transfer challenges",
      icon: Sparkles,
      badge: "Deep Learning"
    },
    {
      id: "speed",
      title: "Quick Revision & Quiz",
      desc: "Rapid diagnostic questions with instant AI guidance",
      icon: Zap,
      badge: "Speed"
    }
  ];

  const activeTopicDisplay = customTopicInput.trim() || topic;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      const finalData: OnboardingData = {
        class_level: classLevel,
        language,
        topic: activeTopicDisplay,
        goal,
        subject
      };

      // Save to sessionStorage so it persists during the session
      sessionStorage.setItem("vidya_onboarding", JSON.stringify(finalData));

      if (onComplete) {
        onComplete(finalData);
      } else {
        navigate("/learning", { state: finalData });
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      if (onBack) {
        onBack();
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaff] text-slate-900 font-sans flex flex-col items-center justify-center relative overflow-hidden px-4 py-10 selection:bg-brand-500/25 selection:text-brand-900">
      
      {/* Dynamic ambient gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-brand-300/20 to-indigo-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-emerald-300/20 to-cyan-200/20 blur-[130px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Main Container Card */}
      <div className="w-full max-w-2xl rounded-[32px] border border-slate-200/80 bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(79,70,229,0.08)] relative z-10 flex flex-col justify-between min-h-[580px]">
        
        {/* Top Header & Progress Bar */}
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-slate-900 block leading-tight">
                  VIDYA-AI Setup
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  Personalize your adaptive learning journey
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-50 border border-brand-100 rounded-full text-brand-700 font-bold text-xs">
              <span>Step {step} of 4</span>
            </div>
          </div>

          {/* Stepper Indicator Bar */}
          <div className="grid grid-cols-4 gap-2 w-full pt-1">
            {[
              { num: 1, label: "Grade" },
              { num: 2, label: "Topic" },
              { num: 3, label: "Preferences" },
              { num: 4, label: "Launch" }
            ].map((s) => (
              <div key={s.num} className="flex flex-col gap-1">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step >= s.num ? "bg-gradient-to-r from-brand-600 to-indigo-600" : "bg-slate-100"
                  }`}
                />
                <span className={`text-[10px] font-semibold text-center ${step === s.num ? "text-brand-600 font-bold" : "text-slate-600"}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Step Content */}
        <div className="flex-1 py-6 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* ==================================================== */}
            {/* STEP 1: GRADE / CLASS SELECTION                      */}
            {/* ==================================================== */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                    Which Class / Grade are you in?
                  </h3>
                  <p className="text-sm text-slate-700">
                    VIDYA-AI will calibrate explanations, visual models, and vocabulary to your level.
                  </p>
                </div>

                {/* Grade Categories */}
                <div className="space-y-4">
                  {gradeCategories.map((category) => (
                    <div key={category.name} className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <span>{category.icon}</span> {category.name}
                        </span>
                        <span className="text-[10px] text-slate-600 font-semibold">
                          Grades {category.grades[0]} - {category.grades[category.grades.length - 1]}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
                        {category.grades.map((grade) => (
                          <button
                            key={grade}
                            type="button"
                            onClick={() => setClassLevel(grade)}
                            className={`py-3 px-2 rounded-xl font-bold border text-sm transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                              classLevel === grade
                                ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white border-transparent shadow-md shadow-brand-500/25 scale-[1.03]"
                                : "bg-white border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50"
                            }`}
                          >
                            <span className="text-xs font-medium opacity-80">Class</span>
                            <span className="text-base font-extrabold">{grade}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-brand-50/60 border border-brand-100/80 text-center">
                  <span className="text-xs font-semibold text-brand-700">
                    Selected: <strong className="font-bold">Class {classLevel}</strong> ({classLevel <= 5 ? "Primary School" : classLevel <= 8 ? "Middle School" : "High School"})
                  </span>
                </div>
              </motion.div>
            )}

            {/* ==================================================== */}
            {/* STEP 2: TOPIC SELECTION & CUSTOM INPUT               */}
            {/* ==================================================== */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-5"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                    What topic do you want to master?
                  </h3>
                  <p className="text-sm text-slate-700">
                    Pick a popular curriculum topic or type any custom topic of your choice.
                  </p>
                </div>

                {/* Subject Selector Tabs */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {subjects.map((sub) => {
                    const Icon = sub.icon;
                    const isSelected = subject === sub.id;
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => {
                          setSubject(sub.id);
                          const firstTopic = topicPresetsBySubject[sub.id]?.[0];
                          if (firstTopic && !customTopicInput) {
                            setTopic(firstTopic);
                          }
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Preset Topic Pills */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 text-center">
                    Popular Topics in {subject}
                  </span>
                  <div className="flex flex-wrap gap-2 justify-center max-h-28 overflow-y-auto p-1">
                    {(topicPresetsBySubject[subject] || topicPresetsBySubject["Mathematics"]).map((p) => {
                      const isSelected = !customTopicInput && topic.toLowerCase() === p.toLowerCase();
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setTopic(p);
                            setCustomTopicInput("");
                          }}
                          className={`py-2 px-3.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white border-transparent shadow-sm scale-[1.02] font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:border-brand-200 hover:bg-white"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Topic Input Section */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                      Or Type Any Custom Topic:
                    </span>
                    {customTopicInput && (
                      <span className="text-[10px] text-brand-600 font-bold uppercase tracking-wider">Custom Topic Active</span>
                    )}
                  </label>
                  
                  <div className="relative">
                    <input
                      type="text"
                      value={customTopicInput}
                      onChange={(e) => setCustomTopicInput(e.target.value)}
                      placeholder="e.g., Photosynthesis, Fractions, Trigonometry, Python Basics..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 shadow-sm transition"
                    />
                    {customTopicInput && (
                      <button
                        type="button"
                        onClick={() => setCustomTopicInput("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold px-2 py-1 bg-slate-100 rounded-lg"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-800">
                    Topic Ready: <strong>{activeTopicDisplay || "Fractions"}</strong> for Class {classLevel}
                  </span>
                </div>
              </motion.div>
            )}

            {/* ==================================================== */}
            {/* STEP 3: LANGUAGE & LEARNING GOAL                     */}
            {/* ==================================================== */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                    Learning Language & Style
                  </h3>
                  <p className="text-sm text-slate-700">
                    VIDYA-AI speaks your native language and adapts to your pacing style.
                  </p>
                </div>

                {/* Language Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Languages className="w-4 h-4 text-brand-500" />
                    Preferred Language:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => setLanguage(lang.code)}
                        className={`p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                          language === lang.code
                            ? "bg-brand-50/80 border-brand-500 text-brand-900 shadow-sm"
                            : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2 text-left">
                          <span className="text-xl">{lang.flag}</span>
                          <div>
                            <span className="text-xs font-bold block">{lang.name}</span>
                            <span className="text-[10px] text-slate-600">{lang.sub}</span>
                          </div>
                        </div>
                        {language === lang.code && (
                          <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Learning Goal / Style */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-brand-500" />
                    Learning Mode / Goal:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {goals.map((g) => {
                      const Icon = g.icon;
                      const isSelected = goal === g.id;
                      return (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setGoal(g.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                            isSelected
                              ? "bg-indigo-50/80 border-indigo-500 text-indigo-950 shadow-sm"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className={`p-2 rounded-xl ${isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? "bg-indigo-200/60 text-indigo-800" : "bg-slate-100 text-slate-500"}`}>
                              {g.badge}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs font-bold block">{g.title}</span>
                            <span className="text-[10px] text-slate-600 leading-tight block mt-0.5">{g.desc}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ==================================================== */}
            {/* STEP 4: SUMMARY & LAUNCH                             */}
            {/* ==================================================== */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6 items-center text-center"
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-brand-500/25">
                  <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-brand-600">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                    Your Learning World is Ready!
                  </h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto">
                    We've calibrated VIDYA-AI for your grade, topic, and preferred learning language.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="w-full max-w-md p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200/80 text-left space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-xs border-b border-slate-200/60 pb-2">
                    <span className="text-slate-600 font-medium">Student Level:</span>
                    <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      Class {classLevel}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs border-b border-slate-200/60 pb-2">
                    <span className="text-slate-600 font-medium">Subject & Topic:</span>
                    <span className="font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200 capitalize">
                      {activeTopicDisplay || "Fractions"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs border-b border-slate-200/60 pb-2">
                    <span className="text-slate-600 font-medium">Instruction Language:</span>
                    <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 uppercase">
                      {languages.find((l) => l.code === language)?.name || "English"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Growth Engine:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      💧 Water Orb & 🌳 Growth Tree
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Footer Navigation */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-2">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-bold px-4 py-3 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{step === 1 ? "Exit to Home" : "Back"}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-7 py-3.5 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-extrabold rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
          >
            <span>{step === 4 ? "Enter My Learning World" : "Continue"}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Onboarding;
