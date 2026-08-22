import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Sparkles, Star } from 'lucide-react';

export default function WhyVidyaAI() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 }
    }
  };

  const comparisons = [
    {
      feature: 'Teaching Pace',
      traditional: 'Fixed class pace (students get left behind)',
      vidya: 'Fully adaptive pace (waits until you understand)',
    },
    {
      feature: 'Attention',
      traditional: '1 teacher for 40+ students',
      vidya: 'Undivided 1:1 active attention',
    },
    {
      feature: 'Availability',
      traditional: 'Scheduled hours (usually 1-2 hours/week)',
      vidya: '24/7 availability, whenever curiosity strikes',
    },
    {
      feature: 'Explanations',
      traditional: 'Single explanation method for everyone',
      vidya: 'Tailored explanations (visual, textual, analogies)',
    },
    {
      feature: 'Affordability',
      traditional: 'Lakhs spent per year on tuition fees',
      vidya: 'Highly affordable (free to start learning)',
    },
  ];

  return (
    <section id="why-vidya-ai" className="py-24 bg-[#fafaff] relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-[20%] left-[-15%] w-96 h-96 bg-brand-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
            Feature Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            A personal tutor shouldn't be a <span className="text-gradient">luxury.</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto"
        >
          
          {/* Traditional Tuition Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🏫</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Traditional Tuition</h3>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Group classes & Centers</p>
                </div>
              </div>

              <div className="space-y-5 border-t border-slate-100 pt-6">
                {comparisons.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="bg-red-50 text-red-500 p-0.5 rounded-full mt-0.5 shrink-0 h-5 w-5 flex items-center justify-center">
                      <X className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.feature}</h4>
                      <p className="text-slate-600 text-sm font-semibold mt-0.5">{item.traditional}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-rose-500 bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span className="text-xs font-bold leading-tight">Students often feel hesitant to ask questions or clear doubts in front of a class.</span>
            </div>
          </motion.div>

          {/* VIDYA-AI Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-indigo-600 to-brand-600 text-white rounded-3xl p-8 shadow-xl shadow-brand-500/25 border border-brand-500 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Visual background pattern/glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-xl text-white">
                    <Sparkles className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">VIDYA-AI AI Tutor</h3>
                    <p className="text-[10px] text-indigo-200 font-semibold uppercase tracking-wider">Continuous Personal Coach</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-white/20 border border-white/20 text-[10px] font-extrabold rounded-full tracking-wider uppercase">
                  Highly Recommended
                </span>
              </div>

              <div className="space-y-5 border-t border-white/10 pt-6">
                {comparisons.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="bg-emerald-500/20 text-emerald-300 p-0.5 rounded-full mt-0.5 shrink-0 h-5 w-5 flex items-center justify-center border border-emerald-500/20">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-wider">{item.feature}</h4>
                      <p className="text-white text-sm font-semibold mt-0.5">{item.vidya}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2.5 text-brand-100 bg-white/5 p-4 rounded-2xl border border-white/5">
              <Star className="h-5 w-5 shrink-0 text-amber-300 fill-current" />
              <span className="text-xs font-bold leading-tight">Builds confidence: students can ask infinitely many doubts in a judgment-free zone.</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
