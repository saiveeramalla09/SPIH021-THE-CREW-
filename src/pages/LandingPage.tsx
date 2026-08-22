import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import StudentComparison from '../components/StudentComparison';
import ProgressDashboard from '../components/ProgressDashboard';
import WhyVidyaAI from '../components/WhyVidyaAI';
import VisionSection from '../components/VisionSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

interface LandingPageProps {
  onStartLearning?: () => void;
}

export default function LandingPage(_props: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#fafaff] font-sans antialiased text-slate-900 selection:bg-brand-500/25 selection:text-brand-900">
      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <ProblemSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Timeline Section */}
      <HowItWorks />

      {/* Key Demo Student Comparison Section */}
      <StudentComparison />

      {/* Progress Dashboard Mockup Section */}
      <ProgressDashboard />

      {/* Why VIDYA-AI Comparison Table Section */}
      <WhyVidyaAI />

      {/* Vision Statement Section */}
      <VisionSection />

      {/* Premium Call to Action */}
      <CTA />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
