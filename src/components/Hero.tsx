import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };


  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-[#fafaff]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Translucent overlay for readability and blending */}
      <div className="absolute inset-0 bg-white/72 backdrop-blur-[1.5px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-brand-300/30 to-brand-100/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-indigo-300/20 to-blue-200/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center">
        {/* Centered Content */}
        <motion.div
          className="flex flex-col items-center text-center z-10 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-50 border border-indigo-100/50 rounded-full text-brand-700 font-semibold text-xs mb-8 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-500 fill-brand-200 animate-pulse" />
            <span>AI-Powered Personalized Learning</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6 max-w-3xl"
          >
            Every child deserves a <span className="text-gradient">personal tutor.</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-600 mb-8"
          >
            Not every parent can afford one.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-700 max-w-2xl leading-relaxed mb-10"
          >
            VIDYA-AI is an AI-powered personal tutor that understands what your child knows, identifies where they struggle, and adapts every lesson in real-time to their learning pace.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto mb-12"
          >
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#cta');
              }}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#how-it-works');
              }}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-brand-600 hover:border-brand-200 px-8 py-4 rounded-2xl font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Play className="h-4 w-4 fill-current text-slate-500 group-hover:text-brand-500" />
              See How It Works
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8 text-sm text-slate-500 font-semibold border-t border-slate-200/50 pt-8 w-full max-w-2xl"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500" /> Learn
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet" /> Understand
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue" /> Practice
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Improve
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
