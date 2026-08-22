import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

export default function StudentComparison() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 }
    }
  };

  const pathItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    })
  };

  return (
    <section id="demo" className="py-24 bg-[#fafaff] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 bg-brand-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
            Real-time Personalization
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Same topic. Different students.<br />
            <span className="text-gradient">Different learning paths.</span>
          </h2>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            VIDYA-AI doesn't teach everyone the same way. It shifts focus in real-time depending on the student's conceptual readiness.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Student A Card - Ananya */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Student Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 font-bold text-lg border border-rose-100">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Ananya</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-500 font-semibold">Topic:</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded">Fractions</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold rounded-full">
                Needs Support
              </span>
            </div>

            {/* Core Issue Alert */}
            <div className="bg-rose-50/70 border border-rose-100/50 rounded-2xl p-4 mb-6 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h4 className="text-sm font-bold text-rose-900">Concept Weakness Detected</h4>
                <p className="text-xs text-rose-700 mt-0.5">Confuses numerator & denominator in fractional layouts.</p>
              </div>
            </div>

            {/* VIDYA-AI Responds Journey */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">VIDYA-AI Responds:</h4>
              <div className="space-y-3 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-rose-100">
                {[
                  { title: 'Simple concept explanation', desc: 'Breaks down terms with visual fruit slices.' },
                  { title: 'Interactive visual example', desc: 'Allows dragging blocks to match fractions.' },
                  { title: 'Easy practice checks', desc: 'Validates concepts with simple visual answers.' },
                  { title: 'Recheck understanding', desc: 'Asks Aarav to explain numerator vs denominator.' }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={pathItemVariants}
                    className="flex items-start gap-4 relative z-10"
                  >
                    <div className="w-[36px] h-[36px] bg-white border-2 border-rose-300 rounded-full flex items-center justify-center font-bold text-xs text-rose-500 shadow-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex-1 hover:bg-slate-100/50 transition-colors">
                      <h5 className="text-sm font-bold text-slate-800 leading-none">{step.title}</h5>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress Progression */}
            <div className="border-t border-slate-100 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Lesson Progress Mastery</span>
                <span className="text-sm font-extrabold text-slate-800 flex items-center gap-1">
                  <span className="text-rose-500">42%</span>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                  <span className="text-brand-600">57%</span>
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="h-full bg-rose-400 rounded-l-full" style={{ width: '42%' }} />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '15%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-rose-400 to-brand-500" 
                />
              </div>
            </div>
          </motion.div>

          {/* Student B Card - Arjun */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Student Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 font-bold text-lg border border-emerald-100">
                  B
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Arjun</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-500 font-semibold">Topic:</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded">Fractions</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold rounded-full">
                Ready for Challenge
              </span>
            </div>

            {/* Core Issue Alert */}
            <div className="bg-emerald-50/70 border border-emerald-100/50 rounded-2xl p-4 mb-6 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-900">Basics Verified</h4>
                <p className="text-xs text-emerald-700 mt-0.5">Strong fundamentals. 100% score on introductory quiz.</p>
              </div>
            </div>

            {/* VIDYA-AI Responds Journey */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">VIDYA-AI Responds:</h4>
              <div className="space-y-3 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-emerald-100">
                {[
                  { title: 'Skip introductory basics', desc: 'Skips basic lessons to avoid boredom.' },
                  { title: 'Equivalent fractions challenge', desc: 'Introduces equations like a/b = c/d.' },
                  { title: 'Real-world word problems', desc: 'Asks to compute remaining pizza portions in recipes.' },
                  { title: 'Advanced challenge unlock', desc: 'Loads algebraic fractions quiz problems.' }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={pathItemVariants}
                    className="flex items-start gap-4 relative z-10"
                  >
                    <div className="w-[36px] h-[36px] bg-white border-2 border-emerald-300 rounded-full flex items-center justify-center font-bold text-xs text-emerald-500 shadow-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex-1 hover:bg-slate-100/50 transition-colors">
                      <h5 className="text-sm font-bold text-slate-800 leading-none">{step.title}</h5>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress Progression */}
            <div className="border-t border-slate-100 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Lesson Progress Mastery</span>
                <span className="text-sm font-extrabold text-slate-800 flex items-center gap-1">
                  <span className="text-emerald-500">81%</span>
                  <ArrowRight className="h-3 w-3 text-slate-400" />
                  <span className="text-brand-600">91%</span>
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="h-full bg-emerald-400 rounded-l-full" style={{ width: '81%' }} />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-emerald-400 to-brand-500" 
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Visual Callout Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-50/50 border border-indigo-100/40 rounded-2xl">
            <Sparkles className="h-4.5 w-4.5 text-brand-600" />
            <span className="text-sm font-bold text-indigo-950">Same tutor. Different learning paths.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
