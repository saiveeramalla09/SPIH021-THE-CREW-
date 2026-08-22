import { motion } from 'framer-motion';
import { Search, Compass, BookOpen, Shuffle, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Choose a subject or specific math/science topic.',
      icon: Search,
      color: 'bg-blue/10 text-blue-600 border-blue-200/50',
    },
    {
      num: '02',
      title: 'Understand',
      desc: 'VIDYA-AI runs a quick assessment to identify current gaps.',
      icon: Compass,
      color: 'bg-indigo-50 text-brand-600 border-indigo-100/50',
    },
    {
      num: '03',
      title: 'Learn',
      desc: 'Get highly personalized, visual concept explanations.',
      icon: BookOpen,
      color: 'bg-violet/10 text-violet border-violet-200/50',
    },
    {
      num: '04',
      title: 'Adapt',
      desc: 'Difficulty auto-tunes with every response you submit.',
      icon: Shuffle,
      color: 'bg-amber-50 text-amber-600 border-amber-200/50',
    },
    {
      num: '05',
      title: 'Master',
      desc: 'Receive confirmation checks until you truly grasp it.',
      icon: CheckCircle,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200/50',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Visual glowing grid in background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
            Our Method
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Your learning journey, <span className="text-gradient">personalized.</span>
          </h2>
        </div>

        {/* Timeline Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative"
        >
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-blue-300 via-indigo-300 to-emerald-300 pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={stepVariants}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Step Circle Icon */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-lg ${step.color} relative transition-transform duration-300 group-hover:scale-105`}>
                  {/* Step Number Tag */}
                  <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                    {step.num}
                  </span>
                  <Icon className="h-9 w-9" />
                </div>

                {/* Step Text Info */}
                <div className="mt-6 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 max-w-[180px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
