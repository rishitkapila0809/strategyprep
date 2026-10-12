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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          {/* Logo & Course Info */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 text-left group transition-transform active:scale-98 cursor-pointer"
              title="Return to Home"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-slate-900 tracking-tight">
                    Strategy<span className="text-indigo-600">Prep</span>
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    2026
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium line-clamp-1">
                  Strategy and Technology: A Practical Primer
                </div>
              </div>
            </button>
          </div>

          {/* Action buttons and indicators */}
          <div className="flex items-center gap-2.5 justify-end">
            {quizMode && currentView === 'quiz' && (
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${
                quizMode === 'test'
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}>
                {quizMode === 'test' ? 'Test Mode' : 'Practice Mode'}
              </span>
            )}

            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg border border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              {totalQuestionsCount} Questions Available
            </span>

            {currentView !== 'home' && (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
                title="Go to Home Screen"
              >
                <Home className="w-3.5 h-3.5 text-slate-500" />
                <span>Home</span>
              </button>
            )}

            <button
              onClick={onOpenResetModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-lg transition-colors cursor-pointer"
              title="Reset session progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Progress</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
