import { motion } from 'framer-motion';
import { Brain, Target, Lightbulb, Globe, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function FeaturesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 }
    },
  };

  return (
    <section id="features" className="py-24 bg-[#fafaff] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
            Supercharged Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Everything a <span className="text-gradient">personal tutor</span> should do.
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          
          {/* Card 1: Adaptive Learning */}
          <motion.div 
            variants={cardVariants}
            className="bg-white border border-slate-100 hover:border-brand-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="bg-brand-50 text-brand-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Learn at your level</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                VIDYA-AI adjusts lesson difficulty based on your performance. If you're struggling, it slows down and provides hints. If you're ready, it moves ahead.
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mt-4">
              <div className="flex justify-between items-center relative py-4">
                {/* Connecting Line */}
                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[3px] bg-slate-200" />
                <div className="absolute left-4 right-1/2 top-1/2 -translate-y-1/2 h-[3px] bg-brand-500" />
                
                {/* Step 1 */}
                <div className="z-10 flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    Easy
                  </div>
                </div>

                {/* Step 2 */}
                <div className="z-10 flex flex-col items-center gap-1.5 relative">
                  {/* Floating Marker */}
                  <div className="absolute -top-7 px-2 py-0.5 bg-brand-600 text-[9px] text-white font-extrabold rounded-md shadow-sm animate-bounce">
                    Your Level
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center border-4 border-white shadow-md">
                    Medium
                  </div>
                </div>

                {/* Step 3 */}
                <div className="z-10 flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-white text-slate-400 font-bold text-xs flex items-center justify-center border-2 border-slate-200">
                    Hard
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Personalized Teaching */}
          <motion.div 
            variants={cardVariants}
            className="bg-white border border-slate-100 hover:border-brand-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Your learning path is unique</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                VIDYA-AI tracks strengths, mistakes, and gaps in real-time, tailoring next concepts accordingly instead of forcing a fixed classroom schedule.
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mt-4 space-y-3.5">
              {/* Path Student A */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 w-16 uppercase">Student A:</span>
                <div className="flex items-center gap-1.5 flex-1">
                  <span className="px-2 py-1 bg-slate-200 text-slate-600 rounded-lg text-[10px] font-semibold">Basics</span>
                  <ChevronRight className="h-3 w-3 text-slate-400" />
                  <span className="px-2 py-1 bg-brand-100 text-brand-700 rounded-lg text-[10px] font-bold">Practice</span>
                  <ChevronRight className="h-3 w-3 text-slate-400" />
                  <span className="px-2 py-1 bg-violet/10 text-violet rounded-lg text-[10px] font-bold">Remediation</span>
                </div>
              </div>

              {/* Path Student B */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 w-16 uppercase">Student B:</span>
                <div className="flex items-center gap-1.5 flex-1">
                  <span className="px-2 py-1 bg-slate-200 text-slate-600 rounded-lg text-[10px] font-semibold">Basics</span>
                  <ChevronRight className="h-3 w-3 text-slate-400" />
                  <span className="px-2 py-1 bg-blue/10 text-blue rounded-lg text-[10px] font-bold">Challenge</span>
                  <ChevronRight className="h-3 w-3 text-slate-400" />
                  <span className="px-2 py-1 bg-indigo-600 text-white rounded-lg text-[10px] font-bold">Advanced</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Understand, Don't Memorize */}
          <motion.div 
            variants={cardVariants}
            className="bg-white border border-slate-100 hover:border-brand-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="bg-violet/10 text-violet w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">We care about understanding</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Instead of just marking answers true or false, VIDYA-AI asks "Why?" questions. This guarantees your child actually grasps the conceptual foundation.
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mt-4">
              <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-slate-200 text-slate-600 rounded-xl">
                    <HelpCircle className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase mt-1">Question</span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-300" />

                <div className="flex flex-col items-center">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase mt-1">Answer ✓</span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-300" />

                <div className="flex flex-col items-center">
                  <div className="p-2 bg-brand-50 text-brand-600 rounded-xl border border-brand-100 font-bold text-[10px] w-9 h-9 flex items-center justify-center">
                    Why?
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase mt-1">Check</span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-300" />

                <div className="flex flex-col items-center">
                  <div className="p-2 bg-gradient-to-tr from-brand-600 to-indigo-500 text-white rounded-xl shadow-sm">
                    <Lightbulb className="h-4.5 w-4.5 fill-current" />
                  </div>
                  <span className="text-[9px] font-bold text-brand-600 uppercase mt-1">Mastery</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Learn in Your Language */}
          <motion.div 
            variants={cardVariants}
            className="bg-white border border-slate-100 hover:border-brand-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="bg-blue/10 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Learn in the language you understand</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                VIDYA-AI natively supports instruction in English and regional languages, eliminating linguistic barriers to core science and math concepts.
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mt-4">
              <div className="flex justify-between items-center gap-3">
                <div className="flex flex-wrap gap-2 max-w-[200px]">
                  <span className="px-3 py-1.5 bg-white border border-slate-100 text-slate-700 font-semibold rounded-xl text-xs shadow-sm">
                    English
                  </span>
                  <span className="px-3 py-1.5 bg-brand-50 border border-brand-100 text-brand-700 font-bold rounded-xl text-xs shadow-sm">
                    हिन्दी
                  </span>
                  <span className="px-3 py-1.5 bg-white border border-slate-100 text-slate-700 font-semibold rounded-xl text-xs shadow-sm">
                    తెలుగు
                  </span>
                </div>
                
                {/* Translator Visual */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-2xl p-2.5 shadow-sm">
                  <span className="text-base">🤖</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase leading-none">
                    Multi-lingual<br />Tutor Mode
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
