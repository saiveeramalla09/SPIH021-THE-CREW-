import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVG Logo Mark representing AI, personalization, and learning
const LogoMark = () => (
  <div className="relative w-8 h-8 flex items-center justify-center mr-2 select-none group/logo">
    {/* Ambient glow circle with slow pulse */}
    <motion.div
      className="absolute inset-0.5 rounded-full bg-brand-500/25 blur-[6px]"
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    />
    
    {/* Rotating dashed orbit */}
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
    >
      <svg className="w-full h-full opacity-35" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="13"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>
      {/* Orbiting electron particle */}
      <div className="absolute top-1 left-1/2 -ml-0.5 w-1 h-1 rounded-full bg-brand-300 shadow-[0_0_4px_#c4b5fd]" />
    </motion.div>

    {/* Center Core: Stylized ✦ Sparkle representing AI Personalization */}
    <motion.div
      className="relative z-10 text-brand-300 drop-shadow-[0_0_5px_rgba(167,139,250,0.6)]"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
    >
      <span className="text-sm font-bold leading-none select-none">✦</span>
    </motion.div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  // Track scrolling to reduce navbar height and add background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver scroll spy to track visible section and update active nav link
  useEffect(() => {
    const sections = ['home', 'how-it-works', 'features', 'demo', 'dashboard', 'vision'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // Trigger when section occupies active viewport area
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScrollFallback = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScrollFallback);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Features', href: '#features', id: 'features', hasDropdown: true },
    { label: 'For Students', href: '#demo', id: 'demo' },
    { label: 'For Parents', href: '#dashboard', id: 'dashboard' },
    { label: 'About', href: '#vision', id: 'vision' },
  ];

  const featuresDropdownItems = [
    { label: 'Adaptive Learning', emoji: '🧠' },
    { label: 'Personalized Teaching', emoji: '🎯' },
    { label: 'Understanding Check', emoji: '💡' },
    { label: 'Learn in Your Language', emoji: '🌐' },
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'TE', name: 'తెలుగు' },
    { code: 'HI', name: 'हिन्दी' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8 select-none">
        <motion.nav 
          className={`max-w-7xl mx-auto rounded-full border transition-all duration-300 flex items-center justify-between ${
            isScrolled 
              ? 'py-2 px-8 bg-slate-950/85 backdrop-blur-xl border-white/10 shadow-xl shadow-black/30' 
              : 'py-3.5 px-8 bg-slate-950/45 backdrop-blur-md border-white/5 shadow-md'
          }`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand Logo & Subtitle */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center group">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white group-hover:text-brand-300 transition-colors leading-none flex items-center">
                ✦ VIDYA-AI
              </span>
              <span className="text-[7.5px] text-slate-400 font-extrabold tracking-[0.15em] mt-1.5 uppercase leading-none">
                YOUR PERSONAL AI TUTOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <div
                  key={item.label}
                  className="relative py-1.5"
                  onMouseEnter={() => {
                    if (item.hasDropdown) setFeaturesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) setFeaturesOpen(false);
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 block z-10 hover:-translate-y-[2px] cursor-pointer hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.35)]
                      after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-brand-500/80 hover:after:w-[70%] hover:after:left-[15%] after:transition-all after:duration-300
                      ${isActive ? 'text-brand-350 font-bold' : 'text-slate-300 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </a>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavbarIndicator"
                      className="absolute bottom-[-1px] left-3.5 right-3.5 h-[2px] bg-brand-400 rounded-full shadow-[0_0_6px_rgba(139,92,246,0.6)] z-0 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}

                  {/* Features Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {featuresOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-60 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-2 shadow-2xl z-50 pointer-events-auto"
                        >
                          {featuresDropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.label}
                              href="#features"
                              onClick={(e) => {
                                handleScrollTo(e, '#features');
                                setFeaturesOpen(false);
                              }}
                              className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                              <span className="text-base group-hover:translate-x-1.5 transition-transform duration-200 inline-block">{dropItem.emoji}</span>
                              <span className="group-hover:text-brand-300 transition-colors duration-200">{dropItem.label}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right Side CTA & Controls */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Selector */}
            <div 
              className="relative py-1.5"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-300 hover:text-brand-300 hover:bg-white/5 transition-all duration-200 z-10 relative cursor-pointer group"
              >
                <span>🌐 {lang}</span>
                <span className="text-[10px] text-slate-400 group-hover:text-brand-300 transition-colors">▾</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 top-full mt-2.5 w-36 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-2 shadow-2xl z-50 pointer-events-auto"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 block cursor-pointer ${
                          lang === l.code 
                            ? 'text-white bg-brand-600/40' 
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {l.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sign In (Secondary Action) */}
            <a
              href="#cta"
              onClick={(e) => handleScrollTo(e, '#cta')}
              className="text-slate-350 hover:text-brand-300 text-sm font-semibold px-3 py-2 transition-all duration-200 hover:-translate-y-[2px] relative cursor-pointer group/signin"
            >
              <span>Sign In</span>
              <span className="absolute bottom-1 left-3 right-3 h-[1px] bg-brand-400 scale-x-0 group-hover/signin:scale-x-100 transition-transform duration-200 origin-center" />
            </a>

            {/* Primary CTA Button */}
            <a
              href="#cta"
              onClick={(e) => handleScrollTo(e, '#cta')}
              className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-600 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_12px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:scale-[1.03] active:scale-[0.98] hover:brightness-110 transition-all duration-200 cursor-pointer"
            >
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 md:hidden pointer-events-auto"
          >
            {/* Header inside mobile menu */}
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <a 
                href="#home" 
                onClick={(e) => { 
                  handleScrollTo(e, '#home'); 
                  setIsOpen(false); 
                }} 
                className="flex items-center"
              >
                <LogoMark />
                <span className="text-xl font-black text-white tracking-wider">✦ VIDYA-AI</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links list */}
            <div className="flex flex-col gap-4 my-auto overflow-y-auto max-h-[60vh] py-4">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5">
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="text-2xl font-bold text-white hover:text-brand-400 transition-colors py-1.5 px-3 rounded-xl hover:bg-white/5 active:scale-95 transition-all"
                  >
                    {item.label}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-6 flex flex-col gap-3 border-l border-white/10 mt-1 ml-3">
                      {featuresDropdownItems.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href="#features"
                          onClick={(e) => {
                            handleScrollTo(e, '#features');
                            setIsOpen(false);
                          }}
                          className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm font-semibold transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
                        >
                          <span>{dropItem.emoji}</span>
                          <span>{dropItem.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Divider */}
              <div className="border-t border-white/10 my-2" />

              {/* Language Selector in Mobile */}
              <div className="flex flex-col gap-2 px-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select Language</span>
                <div className="flex gap-3">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        lang === l.code
                          ? 'bg-brand-600 text-white'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer actions inside mobile menu */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <a
                href="#cta"
                onClick={(e) => {
                  handleScrollTo(e, '#cta');
                  setIsOpen(false);
                }}
                className="text-center font-bold text-slate-350 hover:text-white py-3 rounded-2xl hover:bg-white/5 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#cta"
                onClick={(e) => {
                  handleScrollTo(e, '#cta');
                  setIsOpen(false);
                }}
                className="flex justify-center items-center gap-2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white py-4 rounded-2xl font-bold shadow-[0_0_12px_rgba(124,58,237,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
