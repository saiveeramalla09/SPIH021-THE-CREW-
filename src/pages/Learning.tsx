import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LearningWorld } from "../components/vidyaai/LearningWorld";
import type { OnboardingData } from "./Onboarding";

interface LearningProps {
  onboardingData?: OnboardingData;
  onReset?: () => void;
}

export const Learning: React.FC<LearningProps> = ({ onboardingData: propData, onReset }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Try to retrieve data from location.state, then sessionStorage, then propData, then defaults
  const stateData = location.state as OnboardingData | undefined;
  
  const savedDataStr = typeof window !== "undefined" ? sessionStorage.getItem("vidya_onboarding") : null;
  const savedData: OnboardingData | null = savedDataStr ? JSON.parse(savedDataStr) : null;

  const data: OnboardingData = stateData || propData || savedData || {
    class_level: 5,
    language: "en",
    topic: "Fractions",
    goal: "visual"
  };

  const handleExit = () => {
    if (onReset) {
      onReset();
    } else {
      navigate("/");
    }
  };

  const handleSetupTopic = () => {
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-[#fafaff] text-slate-900 flex flex-col font-sans overflow-x-hidden selection:bg-brand-500/25 selection:text-brand-900">
      <LearningWorld 
        initialClassLevel={data.class_level}
        initialLanguage={data.language} 
        initialTopic={data.topic} 
        initialGoal={data.goal}
        onExit={handleExit}
        onConfigure={handleSetupTopic}
      />
    </div>
  );
};

export default Learning;
