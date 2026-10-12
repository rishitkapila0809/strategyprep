import React from 'react';
import { Award, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

export default function ProgressBar({
  totalQuestions,
  masteredCount,
  attemptedCount,
  notMasteredCount,
  totalAttempts,
  isTestMode,
}) {
  const percentage = totalQuestions > 0 ? Math.round((masteredCount / totalQuestions) * 100) : 0;
  const attemptedPercentage = totalQuestions > 0 ? Math.round((attemptedCount / totalQuestions) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 mb-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-600" />
          <span className="text-xs sm:text-sm font-semibold text-slate-800">
            {isTestMode ? 'Test Completion' : 'Session Mastery Progress'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">
            {isTestMode ? `${attemptedCount} of ${totalQuestions} Answered` : `${masteredCount} of ${totalQuestions} Mastered`}
          </span>
          <span className="text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
            {isTestMode ? `${attemptedPercentage}%` : `${percentage}%`}
          </span>
        </div>
      </div>

      {/* Bar */}
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
        {isTestMode ? (
          <div
            className="h-full bg-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${attemptedPercentage}%` }}
          />
        ) : (
          <>
            <div
              className="h-full bg-emerald-500 transition-all duration-300 ease-out"
              style={{ width: `${percentage}%` }}
              title={`Mastered: ${masteredCount}`}
            />
            <div
              className="h-full bg-rose-400 transition-all duration-300 ease-out"
              style={{ width: `${Math.max(0, (attemptedCount - masteredCount) / totalQuestions * 100)}%` }}
              title={`Attempted, Not Yet Mastered: ${attemptedCount - masteredCount}`}
            />
          </>
        )}
      </div>

      {/* Small Stat Badges */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600">
        {!isTestMode && (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>Mastered: <strong className="text-slate-800">{masteredCount}</strong></span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
          <span>Attempted: <strong className="text-slate-800">{attemptedCount}</strong></span>
        </div>
        {!isTestMode && (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0" />
            <span>Needs Practice: <strong className="text-slate-800">{notMasteredCount}</strong></span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0" />
          <span>Unattempted: <strong className="text-slate-800">{totalQuestions - attemptedCount}</strong></span>
        </div>
        {!isTestMode && totalAttempts > 0 && (
          <div className="text-slate-400 ml-auto hidden md:block">
            Total attempts made: {totalAttempts}
          </div>
        )}
      </div>
    </div>
  );
}
