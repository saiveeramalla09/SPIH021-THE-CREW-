import { motion } from 'framer-motion';
import { Users, ArrowRight, Bot, X, Check } from 'lucide-react';

export default function ProblemSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="problem" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Education shouldn't depend on <span className="text-gradient">how much you can spend.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From KG to Class 12, families can spend lakhs on private tuition and coaching. Yet traditional classrooms and group tuition centers still fail to give every child continuous, personalized attention.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-center">
          
          {/* Traditional Tuition Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm relative overflow-hidden"
          >
            {/* Visual Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-200/70 text-slate-700 p-2.5 rounded-2xl">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Traditional Classroom</h3>
                <p className="text-xs text-slate-500 font-semibold uppercase">One-to-Many Model</p>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-6 flex flex-col items-center">
              <div className="flex flex-col items-center mb-4">
                <span className="text-3xl mb-1">👨‍🏫</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">1 Teacher</span>
              </div>
              
              <div className="w-full flex justify-center py-2 text-slate-300">
                <span className="text-xl">↓</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 max-w-[280px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="text-xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                    {['👦', '👧', '👦', '👧', '👦', '👦', '👧', '👦', '👧'][i]}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500 mt-2">40+ Students</span>
            </div>

            {/* Pain Points */}
            <div className="space-y-3.5">
              {[
                'Same teaching pace for everyone',
                'Same lesson, regardless of gaps in understanding',
                'Extremely limited individual attention',
                'Fear of asking doubts in front of others',
                'High cost makes private tuition a luxury'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-red-50 text-red-500 p-0.5 rounded-full mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-slate-600 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Versus Connector */}
          <div className="lg:col-span-1 flex flex-col justify-center items-center py-4 lg:py-0">
            <div className="h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100/60 flex items-center justify-center font-bold text-indigo-600 shadow-sm">
              VS
            </div>
          </div>

          {/* VIDYA-AI Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 shadow-xl shadow-indigo-900/10 border border-slate-800/80 relative overflow-hidden"
          >
            {/* Visual background glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />

            {/* Visual Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-500 text-white p-2.5 rounded-2xl shadow-lg shadow-brand-500/20">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VIDYA-AI AI Tutor</h3>
                <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider">One-to-One Model</p>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 flex flex-col items-center">
              <div className="flex items-center justify-center gap-8 w-full">
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-1">👦</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">1 Student</span>
                </div>
                
                <div className="flex items-center text-brand-400">
                  <ArrowRight className="h-5 w-5 animate-pulse" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-tr from-brand-600 to-brand-400 p-2 rounded-xl text-white shadow-md animate-bounce">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider mt-1">AI Tutor</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/10 my-4" />

              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2.5 py-1 bg-white/10 text-white border border-white/5 rounded-full text-[10px] font-semibold">
                  Personalized Path
                </span>
                <span className="px-2.5 py-1 bg-white/10 text-white border border-white/5 rounded-full text-[10px] font-semibold">
                  Adaptive Difficulty
                </span>
                <span className="px-2.5 py-1 bg-white/10 text-white border border-white/5 rounded-full text-[10px] font-semibold">
                  Continuous Feedback
                </span>
              </div>
            </div>

            {/* Selling Points */}
            <div className="space-y-3.5">
              {[
                'Adjusts pace perfectly to the student',
                'Identifies weaknesses and adapts lessons in real-time',
                'Gives full, undivided one-to-one attention',
                'Safe space to make mistakes and learn from them',
                'Highly affordable, making quality tutoring accessible to all'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 text-emerald-400 p-0.5 rounded-full mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
