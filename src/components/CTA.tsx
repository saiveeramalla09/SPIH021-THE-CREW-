import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Glow Panel Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-tr from-indigo-900 via-indigo-950 to-slate-950 text-white rounded-[40px] p-8 sm:p-16 text-center border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glowing blobs */}
          <div className="absolute top-[-30%] left-[-20%] w-[60%] h-[60%] rounded-full bg-brand-500/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-30%] right-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 border border-white/10 rounded-full text-brand-300 font-bold text-xs mb-8">
            <Sparkles className="h-3.5 w-3.5 text-brand-400 fill-brand-400 animate-pulse" />
            <span>Interactive Beta Release</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
            Your learning journey starts here.
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-indigo-200/80 max-w-xl mx-auto mb-10 font-semibold leading-relaxed">
            Learn at your pace. Learn your way. Learn with VIDYA-AI. Give your child the personal AI tutor they deserve.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/onboarding')}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Start Learning — It's Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore VIDYA-AI
            </a>
          </div>



        </motion.div>

      </div>
    </section>
  );
}
