import React, { useMemo } from 'react';
import { 
  Award, 
  RotateCcw, 
  BookOpen, 
  Home, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers
} from 'lucide-react';

export default function ResultsScreen({
  quizQuestions,
  progress,
  isTestMode,
  testModeAnswers,
  onRetryQuiz,
  onPracticeNotMastered,
  onReviewAll,
  onReviewIncorrect,
  onGoHome,
}) {
  // Compute comprehensive metrics from session
  const stats = useMemo(() => {
    let distinctAttempted = 0;
    let distinctMastered = 0;
    let notMastered = 0;
    let totalAttempts = 0;
    let initiallyWrongThenMastered = 0;
    let neverAnsweredCorrectly = 0;

    const notMasteredQuestionsList = [];
    const incorrectQuestionsList = [];

    quizQuestions.forEach((q) => {
      const state = progress?.[q.id];
      const attempted = isTestMode ? Boolean(testModeAnswers?.[q.id]) : Boolean(state?.attempted);
      const mastered = Boolean(state?.mastered);
      const attempts = state?.attemptsCount || (attempted ? 1 : 0);

      if (attempted) {
        distinctAttempted++;
        totalAttempts += attempts;

        if (mastered) {
          distinctMastered++;
          if (attempts > 1) {
            initiallyWrongThenMastered++;
          }
        } else {
          neverAnsweredCorrectly++;
          incorrectQuestionsList.push(q);
        }
      }

      if (!mastered) {
        notMastered++;
        notMasteredQuestionsList.push(q);
      }
    });

    const total = quizQuestions.length;
    const masteryPercentage = total > 0 ? Math.round((distinctMastered / total) * 100) : 0;
    const unattempted = total - distinctAttempted;

    return {
      total,
      distinctAttempted,
      distinctMastered,
      notMastered,
      unattempted,
      masteryPercentage,
      totalAttempts,
      initiallyWrongThenMastered,
      neverAnsweredCorrectly,
      notMasteredQuestionsList,
      incorrectQuestionsList,
    };
  }, [quizQuestions, progress, isTestMode, testModeAnswers]);

  // Breakdown by week
  const weekBreakdown = useMemo(() => {
    const map = new Map();
    quizQuestions.forEach((q) => {
      if (!map.has(q.week)) {
        map.set(q.week, {
          week: q.week,
          topic: q.topic,
          total: 0,
          mastered: 0,
        });
      }
      const entry = map.get(q.week);
      entry.total += 1;
      if (progress?.[q.id]?.mastered) {
        entry.mastered += 1;
      }
    });
    return Array.from(map.values()).sort((a, b) => a.week - b.week);
  }, [quizQuestions, progress]);

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-8 animate-fade-in">
      
      {/* Celebration Header */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-8 md:p-10 text-center relative overflow-hidden animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-3 animate-fade-in-up delay-50">
          <Award className="w-4 h-4 text-indigo-600 animate-icon-entrance" />
          <span>Quiz Summary & Performance Report</span>
        </div>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight animate-fade-in-up delay-100">
          {stats.masteryPercentage >= 80 ? 'Outstanding Performance!' : stats.masteryPercentage >= 50 ? 'Great Practice Session!' : 'Session Complete!'}
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-150">
          Here is the complete dynamic evaluation of your practice session for 
          <strong> Strategy and Technology: A Practical Primer</strong>.
        </p>

        {/* Big Score Radial / Highlight with smooth pop-in */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center animate-pop-in delay-200">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-6 sm:border-8 border-indigo-100 flex flex-col items-center justify-center bg-indigo-50/40 relative shadow-inner">
            <span className="text-2xl sm:text-4xl font-black text-indigo-600">
              {stats.masteryPercentage}%
            </span>
            <span className="text-2xs font-bold text-indigo-700 uppercase tracking-wider mt-0.5">
              Mastery Rate
            </span>
          </div>
          <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-700">
            {stats.distinctMastered} of {stats.total} Questions Mastered
          </p>
        </div>

        {/* Primary Action Buttons with responsive wrap and touch targets */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {stats.notMastered > 0 && (
            <button
              type="button"
              onClick={() => onPracticeNotMastered(stats.notMasteredQuestionsList)}
              className="w-full sm:w-auto py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>Practice {stats.notMastered} Not Mastered Questions</span>
            </button>
          )}

          <button
            type="button"
            onClick={onReviewAll}
            className="w-full sm:w-auto py-3 px-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
          >
            <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
            <span>Review All Questions</span>
          </button>

          {stats.neverAnsweredCorrectly > 0 && (
            <button
              type="button"
              onClick={onReviewIncorrect}
              className="w-full sm:w-auto py-3 px-5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold text-xs sm:text-sm rounded-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Review Incorrect ({stats.neverAnsweredCorrectly})</span>
            </button>
          )}

          <button
            type="button"
            onClick={onRetryQuiz}
            className="w-full sm:w-auto py-3 px-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4 text-slate-500 shrink-0" />
            <span>Retry This Quiz</span>
          </button>

          <button
            type="button"
            onClick={onGoHome}
            className="w-full sm:w-auto py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>Return to Home</span>
          </button>
        </div>
      </div>

      {/* Staggered Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
        
        <div className="bg-white p-3.5 sm:p-4.5 rounded-2xl border border-slate-200 shadow-xs hover-card-lift animate-fade-in-up delay-150">
          <div className="flex items-center justify-between text-emerald-600 mb-1">
            <span className="text-2xs sm:text-xs font-semibold">Mastered</span>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">{stats.distinctMastered}</div>
          <div className="text-2xs text-slate-500 mt-1">Answered correctly</div>
        </div>

        <div className="bg-white p-3.5 sm:p-4.5 rounded-2xl border border-slate-200 shadow-xs hover-card-lift animate-fade-in-up delay-200">
          <div className="flex items-center justify-between text-indigo-600 mb-1">
            <span className="text-2xs sm:text-xs font-semibold">Attempted</span>
            <Layers className="w-4 h-4 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">{stats.distinctAttempted}</div>
          <div className="text-2xs text-slate-500 mt-1">Out of {stats.total} total</div>
        </div>

        <div className="bg-white p-3.5 sm:p-4.5 rounded-2xl border border-slate-200 shadow-xs hover-card-lift animate-fade-in-up delay-250">
          <div className="flex items-center justify-between text-amber-600 mb-1">
            <span className="text-2xs sm:text-xs font-semibold">Overcame Errors</span>
            <Sparkles className="w-4 h-4 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">{stats.initiallyWrongThenMastered}</div>
          <div className="text-2xs text-slate-500 mt-1">Wrong, then mastered</div>
        </div>

        <div className="bg-white p-3.5 sm:p-4.5 rounded-2xl border border-slate-200 shadow-xs hover-card-lift animate-fade-in-up delay-300">
          <div className="flex items-center justify-between text-rose-600 mb-1">
            <span className="text-2xs sm:text-xs font-semibold">Needs Practice</span>
            <XCircle className="w-4 h-4 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900">{stats.notMastered}</div>
          <div className="text-2xs text-slate-500 mt-1">Not yet mastered</div>
        </div>

      </div>

      {/* Additional Stats Row */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-3.5 sm:p-5 flex flex-wrap items-center justify-between gap-3 text-2xs sm:text-sm text-slate-600 animate-fade-in-up delay-350">
        <div>
          Total Answer Attempts: <strong className="text-slate-900">{stats.totalAttempts}</strong>
        </div>
        <div>
          Unattempted in Session: <strong className="text-slate-900">{stats.unattempted}</strong>
        </div>
        <div>
          Attempted but never correct: <strong className="text-rose-700">{stats.neverAnsweredCorrectly}</strong>
        </div>
      </div>

      {/* Week-by-Week Mastery Breakdown */}
      {weekBreakdown.length > 1 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 md:p-8 animate-fade-in-up delay-400">
          <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 mb-3.5 pb-2.5 border-b border-slate-100">
            Performance Breakdown by Week & Topic
          </h3>

          <div className="space-y-2.5 sm:space-y-3">
            {weekBreakdown.map((w) => {
              const weekPct = w.total > 0 ? Math.round((w.mastered / w.total) * 100) : 0;
              return (
                <div key={w.week} className="p-3 sm:p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/80 hover-card-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div className="min-w-0">
                      <span className="font-bold text-xs text-indigo-700 mr-2">Week {w.week}</span>
                      <span className="text-xs font-semibold text-slate-800">{w.topic}</span>
                    </div>
                    <div className="text-2xs sm:text-xs font-medium text-slate-600">
                      {w.mastered} / {w.total} Mastered ({weekPct}%)
                    </div>
                  </div>

                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                      style={{ width: `${weekPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
