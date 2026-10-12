import React from 'react';
import { Compass, RotateCcw, Home, Sparkles } from 'lucide-react';

export default function Header({
  totalQuestionsCount,
  currentView,
  onNavigateHome,
  onOpenResetModal,
  quizMode,
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Course Info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 sm:gap-2.5 text-left group transition-transform active:scale-98 cursor-pointer min-w-0"
              title="Return to Home"
            >
              {/* Subtle entrance animation on the logo */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 transition-colors shrink-0 animate-icon-entrance">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight whitespace-nowrap">
                    Strategy<span className="text-indigo-600">Prep</span>
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-2xs sm:text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    2026
                  </span>
                </div>
                <div className="text-2xs sm:text-xs text-slate-500 font-medium truncate max-w-[150px] xs:max-w-[200px] sm:max-w-xs md:max-w-md">
                  Strategy and Technology: A Practical Primer
                </div>
              </div>
            </button>
          </div>

          {/* Action buttons and indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {quizMode && currentView === 'quiz' && (
              <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-2xs sm:text-xs font-semibold rounded-lg border whitespace-nowrap ${
                quizMode === 'test'
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}>
                {quizMode === 'test' ? 'Test Mode' : 'Practice Mode'}
              </span>
            )}

            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg border border-slate-200 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              {totalQuestionsCount} Questions Available
            </span>

            {currentView !== 'home' && (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer min-h-[36px] sm:min-h-[38px]"
                title="Go to Home Screen"
              >
                <Home className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden xs:inline">Home</span>
              </button>
            )}

            <button
              onClick={onOpenResetModal}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3 text-xs font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer min-h-[36px] sm:min-h-[38px]"
              title="Reset session progress"
            >
              <RotateCcw className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Reset Progress</span>
              <span className="inline sm:hidden text-2xs sm:text-xs">Reset</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
