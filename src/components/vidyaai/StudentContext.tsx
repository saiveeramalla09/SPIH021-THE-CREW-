import React from "react";
import type { Student } from "../../types/learning";
import { GraduationCap, Globe2, BookOpen } from "lucide-react";

interface StudentContextProps {
  student: Student;
  topic: string;
}

export const StudentContext: React.FC<StudentContextProps> = ({ student, topic }) => {
  const getLanguageName = (code: string) => {
    switch (code) {
      case "te": return "తెలుగు";
      case "hi": return "हिन्दी";
      case "ta": return "தமிழ்";
      case "es": return "Español";
      default: return "English";
    }
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
      <div className="flex items-center gap-1.5">
        <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
        <span className="text-slate-900 font-bold">Class {student.class_level || 5}</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-slate-300" />
      <div className="flex items-center gap-1.5">
        <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>{getLanguageName(student.language)}</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
      <div className="hidden sm:flex items-center gap-1.5 font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100/80">
        <BookOpen className="w-3 h-3 text-indigo-600" />
        <span className="capitalize truncate max-w-[120px]">{topic}</span>
      </div>
    </div>
  );
};

export default StudentContext;
