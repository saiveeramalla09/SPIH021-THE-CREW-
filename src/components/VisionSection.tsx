import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, Layers, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function VisionSection() {
  const flowItems = [
    { label: 'Ask', icon: HelpCircle, color: 'bg-blue/10 text-blue-600' },
    { label: 'Learn', icon: BookOpen, color: 'bg-indigo-50 text-brand-600' },
    { label: 'Practice', icon: Layers, color: 'bg-violet/10 text-violet' },
    { label: 'Understand', icon: CheckCircle2, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Improve', icon: TrendingUp, color: 'bg-amber-50 text-amber-600' },
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }
    }
  };

  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-brand-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Vision Details */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6 space-y-8"
        >
          <div>
            <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
              What if every child had a <span className="text-gradient">personal tutor?</span>
            </h2>
            <p className="text-lg text-slate-600 mt-5 leading-relaxed">
              Imagine a student who can ask questions anytime without hesitation, learn without the fear of making mistakes, revisit difficult concepts as many times as needed, and move ahead whenever they are ready.
            </p>
          </div>

          {/* Sequential Timeline Flow */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">The Loop of Mastery:</h3>
            <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-2">
              {flowItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex flex-col items-center">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm border border-white ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 mt-2">{item.label}</span>
                    </div>
                    {idx < flowItems.length - 1 && (
                      <span className="text-slate-300 font-bold text-lg hidden sm:block mb-6 ml-1">→</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Statement Banner */}
          <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white rounded-2xl p-6 shadow-md border border-brand-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
            <div className="flex items-start gap-3">
              <Sparkles className="h-6 w-6 text-amber-300 fill-amber-300 shrink-0 mt-0.5" />
              <p className="text-base font-bold leading-relaxed">
                "Our vision is simple: make personalized education accessible to every child."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: AI Generated Vision Concept Illustration */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6 flex justify-center items-center select-none"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl shadow-indigo-100/40 border border-slate-200/50 bg-white">
            <img
              src="/vision_tutor_concept.png"
              alt="Vision of adaptive student learning journey"
              className="w-full h-full object-cover"
              draggable="false"
            />
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
