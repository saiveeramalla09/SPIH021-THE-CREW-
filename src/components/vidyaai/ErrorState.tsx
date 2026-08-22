import React from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
      <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600">
        <AlertCircle className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-rose-700">Session Interrupted</h4>
        <p className="text-xs text-rose-600/80 mt-1 max-w-xs leading-relaxed">
          {message || "Something interrupted our learning session."}
        </p>
      </div>
      <button
        onClick={onRetry}
        className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-100 hover:bg-rose-200 border border-rose-300 rounded-full transition duration-300 cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Try Again</span>
      </button>
    </div>
  );
};
export default ErrorState;
