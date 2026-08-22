import { GraduationCap } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-brand-600 to-brand-400 p-2 rounded-xl text-white shadow-md">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight">VIDYA-AI</span>
              <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider -mt-1">
                Your Personal AI Tutor
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Making premium, individualized learning accessible and affordable to every KG-12 student worldwide.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Product</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Home</a>
              <a href="#how-it-works" onClick={(e) => handleScrollTo(e, '#how-it-works')} className="text-slate-400 hover:text-white text-sm transition-colors font-medium">How It Works</a>
              <a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Features</a>
              <a href="#why-vidya-ai" onClick={(e) => handleScrollTo(e, '#why-vidya-ai')} className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Why VIDYA-AI</a>
            </div>
          </div>

          {/* Legal / Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#privacy" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Privacy Policy</a>
              <a href="#terms" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Terms of Use</a>
              <a href="#security" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Security Details</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@vidya-ai.com" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">hello@vidya-ai.com</a>
              <a href="#twitter" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Twitter / X</a>
              <a href="#github" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">GitHub Repo</a>
            </div>
          </div>

        </div>

      </div>

      {/* Underline Panel */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
        <span>© 2026 VIDYA-AI. Personalized learning for everyone.</span>
        <div className="flex gap-4">
          <span className="hover:text-slate-400 cursor-pointer">Security</span>
          <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
