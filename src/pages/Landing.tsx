import React, { useState } from "react";
import { Brain, Menu, X, ArrowRight } from "lucide-react";
import { Hero } from "../components/landing/Hero";
import { ProblemSection } from "../components/landing/ProblemSection";
import { LearningTwinSection } from "../components/landing/LearningTwinSection";
import { WaterSection } from "../components/landing/WaterSection";
import { TreeSection } from "../components/landing/TreeSection";
import { TeachMeSection } from "../components/landing/TeachMeSection";
import { AdaptiveLearningSection } from "../components/landing/AdaptiveLearningSection";
import { TransferSection } from "../components/landing/TransferSection";
import { FutureVision } from "../components/landing/FutureVision";
import { CTASection } from "../components/landing/CTASection";

interface LandingProps {
  onStartLearning: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStartLearning }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden relative selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Immersive radial glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-teal-900/10 blur-[150px] -top-80 -left-60" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-900/5 blur-[150px] top-1/3 right-0 -translate-y-1/2" />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-emerald-950/5 blur-[180px] -bottom-80 left-1/4" />
      </div>

      {/* Global Navbar */}
      <header className="relative w-full border-b border-white/5 bg-slate-950/80 backdrop-blur z-50 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-teal-600 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/5">
              <Brain className="w-5 h-5 stroke-[2.5px]" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
              VidyaAI
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
            <a href="#problem" className="hover:text-slate-200 transition">How It Works</a>
            <a href="#water" className="hover:text-slate-200 transition">Indicators</a>
            <a href="#teach-me" className="hover:text-slate-200 transition">Active Learning</a>
            <a href="#future" className="hover:text-slate-200 transition">Next Steps</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onStartLearning}
              className="text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-slate-100 transition cursor-pointer"
            >
              Log In
            </button>
            <button 
              onClick={onStartLearning}
              className="py-2.5 px-5 bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-400 hover:to-teal-500 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] transition cursor-pointer border border-amber-400/20"
            >
              Enter Learning World
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-white/5 bg-slate-950 p-6 flex flex-col gap-4 shadow-xl z-40 md:hidden animate-in fade-in slide-in-from-top-3">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition">How It Works</a>
            <a href="#water" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition">Indicators</a>
            <a href="#teach-me" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition">Active Learning</a>
            <a href="#future" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition">Next Steps</a>
            <hr className="border-white/5 my-2" />
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); onStartLearning(); }}
                className="w-full py-2.5 rounded-xl border border-white/5 text-slate-300 font-bold hover:bg-slate-900 transition cursor-pointer text-xs uppercase tracking-wider"
              >
                Log In
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onStartLearning(); }}
                className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-teal-600 text-slate-950 font-bold rounded-xl transition cursor-pointer text-xs uppercase tracking-wider"
              >
                Enter Learning World
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <Hero onStartLearning={onStartLearning} />

      {/* Problem Section */}
      <div id="problem">
        <ProblemSection />
      </div>

      {/* Learning Twin Section */}
      <LearningTwinSection />

      {/* Water Feature Section */}
      <div id="water">
        <WaterSection />
      </div>

      {/* Tree Feature Section */}
      <TreeSection />

      {/* Teach Me Section */}
      <div id="teach-me">
        <TeachMeSection />
      </div>

      {/* Adaptive Learning Section */}
      <AdaptiveLearningSection />

      {/* Transfer Section */}
      <TransferSection />

      {/* Future Vision Section */}
      <div id="future">
        <FutureVision />
      </div>

      {/* Bottom CTA Section */}
      <CTASection onStartLearning={onStartLearning} />

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-[10px] text-slate-600 uppercase tracking-widest relative z-10">
        © {new Date().getFullYear()} VidyaAI · Designed for deep understanding
      </footer>

    </div>
  );
};
export default Landing;
