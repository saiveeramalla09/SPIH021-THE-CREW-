import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Flame, GraduationCap, TrendingUp, AlertCircle, Target, ArrowRight, Sparkles } from 'lucide-react';

interface CircularProgressProps {
  percentage: number;
  label: string;
  color: string;
  duration?: number;
}

// Circular Mastery Progress component
const CircularProgress = ({ percentage, label, color, duration = 1.5 }: CircularProgressProps) => {
  const radius = 30;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-slate-800"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            className={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
            viewport={{ once: true }}
            transition={{ duration, ease: 'easeOut' }}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-base font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">{label}</span>
    </div>
  );
};

interface ConceptNodeProps {
  topic: string;
  mastery: number;
  status: 'mastered' | 'learning' | 'practice';
  description: string;
}

// Concept Mastery Circle component (with tooltips)
const ConceptNode = ({ topic, mastery, status, description }: ConceptNodeProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const statusConfig: Record<'mastered' | 'learning' | 'practice', { color: string; symbol: string }> = {
    mastered: { color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30', symbol: '✓' },
    learning: { color: 'text-blue-400 bg-blue-500/20 border-blue-500/30', symbol: '◐' },
    practice: { color: 'text-amber-400 bg-amber-500/20 border-amber-500/30', symbol: '○' },
  };
  
  const { color, symbol } = statusConfig[status];
  
  return (
    <div className="relative flex items-center justify-between p-3.5 bg-slate-900/50 border border-slate-800 rounded-xl">
      <div className="flex items-center gap-3">
        {/* Visual state circle */}
        <div 
          className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 select-none ${color} cursor-pointer`}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}
        >
          {symbol}
        </div>
        <div>
          <span className="text-xs font-bold text-slate-200">{topic}</span>
          <span className="text-[10px] text-slate-400 font-semibold block mt-0.5 uppercase tracking-wider">{status}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-400">{mastery}%</span>
      </div>
      
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-950/95 border border-white/10 rounded-xl p-3 text-center shadow-2xl z-50 pointer-events-none"
          >
            <h5 className="text-xs font-bold text-slate-200">{topic}</h5>
            <p className="text-[10px] text-slate-400 font-medium mt-1">Mastery: {mastery}%</p>
            <p className="text-[9px] text-brand-300 font-semibold mt-0.5">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Abstract SVG Knowledge Tree component
const KnowledgeTree = ({ progress }: { progress: number }) => {
  const nodes = [
    { id: 'A', cx: 120, cy: 190, r: 5, label: 'Base', lvl: 20, color: 'fill-indigo-400' },
    { id: 'B', cx: 60, cy: 140, r: 6, label: 'Math', lvl: 40, color: 'fill-brand-400' },
    { id: 'C', cx: 180, cy: 140, r: 6, label: 'Science', lvl: 40, color: 'fill-blue-400' },
    { id: 'D', cx: 120, cy: 120, r: 6, label: 'English', lvl: 60, color: 'fill-violet-400' },
    { id: 'E', cx: 30, cy: 90, r: 5, label: 'Fractions', lvl: 80, color: 'fill-brand-500' },
    { id: 'F', cx: 90, cy: 90, r: 5, label: 'Algebra', lvl: 80, color: 'fill-brand-300' },
    { id: 'G', cx: 150, cy: 90, r: 5, label: 'Biology', lvl: 80, color: 'fill-blue-500' },
    { id: 'H', cx: 210, cy: 90, r: 5, label: 'Physics', lvl: 80, color: 'fill-blue-300' },
    { id: 'I', cx: 95, cy: 60, r: 5, label: 'Grammar', lvl: 100, color: 'fill-violet-500' },
    { id: 'J', cx: 145, cy: 60, r: 5, label: 'Reading', lvl: 100, color: 'fill-violet-300' },
  ];

  const branches = [
    { id: 'trunk', x1: 120, y1: 240, x2: 120, y2: 190, lvl: 20 },
    { id: 'trunk-to-mid', x1: 120, y1: 190, x2: 120, y2: 160, lvl: 40 },
    { id: 'mid-to-b', x1: 120, y1: 160, x2: 60, y2: 140, lvl: 40 },
    { id: 'mid-to-c', x1: 120, y1: 160, x2: 180, y2: 140, lvl: 40 },
    { id: 'mid-to-d', x1: 120, y1: 160, x2: 120, y2: 120, lvl: 60 },
    { id: 'b-to-e', x1: 60, y1: 140, x2: 30, y2: 90, lvl: 80 },
    { id: 'b-to-f', x1: 60, y1: 140, x2: 90, y2: 90, lvl: 80 },
    { id: 'c-to-g', x1: 180, y1: 140, x2: 150, y2: 90, lvl: 80 },
    { id: 'c-to-h', x1: 180, y1: 140, x2: 210, y2: 90, lvl: 80 },
    { id: 'd-to-i', x1: 120, y1: 120, x2: 95, y2: 60, lvl: 100 },
    { id: 'd-to-j', x1: 120, y1: 120, x2: 145, y2: 60, lvl: 100 },
  ];

  return (
    <div className="relative w-full max-w-[280px] aspect-[4/3] flex items-center justify-center">
      <svg className="w-full h-full overflow-visible animate-pulse-subtle" viewBox="0 0 240 250">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {branches.map((br) => {
          const isActive = progress >= br.lvl;
          return (
            <motion.line
              key={br.id}
              x1={br.x1}
              y1={br.y1}
              x2={br.x2}
              y2={br.y2}
              stroke={isActive ? '#8b5cf6' : '#334155'}
              strokeWidth={isActive ? '2.5' : '1.5'}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isActive ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="opacity-80"
            />
          );
        })}

        {nodes.map((node) => {
          const isActive = progress >= node.lvl;
          return (
            <g key={node.id}>
              {isActive && (
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + 3}
                  className="fill-none stroke-brand-500/30"
                  strokeWidth="1"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                />
              )}

              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                className={isActive ? `${node.color} cursor-pointer` : 'fill-slate-700'}
                initial={{ scale: 0 }}
                animate={{ scale: isActive ? 1 : 0.6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                filter={isActive ? 'url(#glow)' : ''}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default function ProgressDashboard() {
  const [growthProgress, setGrowthProgress] = useState(78);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 70, damping: 15 }
    }
  };

  return (
    <section id="dashboard" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-brand-100/40 to-blue-50/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-indigo-50/40 to-violet-100/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
            Student Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Watch your <span className="text-gradient">understanding grow.</span>
          </h2>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            Parents and students get full, clear visibility into learning growth. Trace active concept strengths, weekly streaks, and personalized learning milestones.
          </p>
        </div>

        {/* Mockup Dashboard Container */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-slate-900 text-white rounded-[32px] p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden max-w-5xl mx-auto"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top Panel: Welcome and Streak */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg">
                👋
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Good evening, Aarav</h3>
                <p className="text-xs text-slate-400 font-medium">Ready to continue your learning sprint?</p>
              </div>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-4 py-2 rounded-2xl">
              <Flame className="h-5 w-5 text-amber-500 fill-current animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-amber-400 leading-none">7 Day Streak</span>
                <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Active Study</span>
              </div>
            </div>
          </div>

          {/* Dashboard Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Progress Bars & Line Graph */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Learning Progress List */}
              <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-brand-400" />
                  Your Learning Progress
                </h4>
                
                <div className="space-y-4">
                  {[
                    { subject: 'Mathematics', percent: 78, color: 'bg-brand-500' },
                    { subject: 'Science', percent: 64, color: 'bg-blue' },
                    { subject: 'English', percent: 91, color: 'bg-violet' },
                  ].map((sub, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-200">{sub.subject}</span>
                        <span className="text-slate-400">{sub.percent}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sub.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 }}
                          className={`h-full ${sub.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sparkline Graph */}
              <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-400" />
                    Weekly Mastery Timeline
                  </h4>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    +18% growth
                  </span>
                </div>
                
                {/* SVG Sparkline */}
                <div className="h-32 w-full relative pt-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-x-0 top-0 border-t border-slate-800/60" />
                  <div className="absolute inset-x-0 top-1/2 border-t border-slate-800/60" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-slate-800/60" />

                  <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Gradient Area */}
                    <path
                      d="M 0 30 L 0 20 L 16.6 15 L 33.2 12 L 49.8 10 L 66.4 8 L 83 5 L 100 2 L 100 30 Z"
                      fill="url(#chartGradient)"
                    />
                    
                    {/* Trend Line */}
                    <motion.path
                      d="M 0 20 L 16.6 15 L 33.2 12 L 49.8 10 L 66.4 8 L 83 5 L 100 2"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                    
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </svg>
                </div>
                
                {/* Chart Label */}
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase mt-3">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
              </div>

            </div>

            {/* Right Column: Goal card & Weak areas */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Concept Mastered Count card */}
              <div className="bg-gradient-to-tr from-brand-600/20 to-violet/20 border border-brand-500/20 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mastery</span>
                  <h4 className="text-2xl font-black mt-1">24 Concepts</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1">Verified on curriculum goals</p>
                </div>
                <div className="bg-brand-500 p-3 rounded-2xl text-white shadow-md">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>

              {/* Today's Goal Card */}
              <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Target className="h-4 w-4 text-brand-400" />
                  Today's Goal
                </span>
                
                <div className="mt-4 p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Topic</h5>
                    <h6 className="text-sm font-bold text-slate-100 mt-1">Equivalent Fractions</h6>
                  </div>
                  <button className="p-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Needs Practice Card */}
              <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  Needs Practice
                </span>

                <div className="mt-4 space-y-2.5">
                  {[
                    { topic: 'Fractions', reason: 'Numerator/Denominator mixup', badge: 'Math' },
                    { topic: 'Algebra', reason: 'Evaluating expressions', badge: 'Math' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-slate-900 border border-slate-800 rounded-xl">
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-xs font-bold text-slate-200">{item.topic}</h5>
                          <span className="px-1.5 py-0.5 bg-slate-800 text-[8px] font-bold rounded text-slate-400 border border-slate-700/60 uppercase">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1 font-medium">{item.reason}</p>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Visual Growth & Mastery Section */}
          <div className="border-t border-slate-800 pt-8 mt-10">
            <div className="flex flex-col gap-2 mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-400" />
                Interactive Concept Mastery Map
              </h4>
              <p className="text-xs text-slate-400 max-w-xl font-medium">
                Toggle the progress levels to visualize the child's knowledge tree growth, subject mastery, and concept status.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Growth Tree (lg:col-span-6) */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 relative min-h-[360px]">
                {/* Your Learning Journey label */}
                <span className="absolute top-4 left-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Your Learning Journey
                </span>
                
                {/* Tree */}
                <KnowledgeTree progress={growthProgress} />

                {/* Progress Selector */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 z-10">
                  {[20, 40, 60, 80, 100].map((level) => (
                    <button
                      key={level}
                      onClick={() => setGrowthProgress(level)}
                      className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        growthProgress === level
                          ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                          : 'bg-slate-800 text-slate-450 hover:text-white'
                      }`}
                    >
                      {level}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Circular Progress and Mastery Circles (lg:col-span-6) */}
              <div className="lg:col-span-6 space-y-6">
                {/* Circular indicators */}
                <div className="grid grid-cols-3 gap-4 bg-slate-800/20 border border-slate-800/60 rounded-2xl p-6 justify-items-center">
                  <CircularProgress percentage={78} label="Mathematics" color="text-brand-500" />
                  <CircularProgress percentage={64} label="Science" color="text-blue" />
                  <CircularProgress percentage={91} label="English" color="text-violet" />
                </div>

                {/* Concept circles with checkmarks/tooltips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ConceptNode
                    topic="Fractions"
                    mastery={82}
                    status="mastered"
                    description="Strong understanding of equivalent values and mixed fractions."
                  />
                  <ConceptNode
                    topic="Addition"
                    mastery={96}
                    status="mastered"
                    description="Full concept mastery of double-digit carrying additions."
                  />
                  <ConceptNode
                    topic="Algebra"
                    mastery={54}
                    status="learning"
                    description="Evaluating basic expressions. Needs more practice with variables."
                  />
                  <ConceptNode
                    topic="Geometry"
                    mastery={30}
                    status="practice"
                    description="Initial learning phase. Identifying basic polygons and angles."
                  />
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
