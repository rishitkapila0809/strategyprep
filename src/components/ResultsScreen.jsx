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
    let neverAnsweredCorrectly = 0; // attempted but never mastered

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
          // check if initially wrong: attempts > 1 and history had incorrect option or attemptsCount > 1
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-in fade-in duration-200">
      
      {/* Celebration Header */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-3">
          <Award className="w-4 h-4 text-indigo-600" />
          <span>Quiz Summary & Performance Report</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {stats.masteryPercentage >= 80 ? 'Outstanding Performance!' : stats.masteryPercentage >= 50 ? 'Great Practice Session!' : 'Session Complete!'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
          Here is the complete dynamic evaluation of your practice session for 
          <strong> Strategy and Technology: A Practical Primer</strong>.
        </p>

        {/* Big Score Radial / Highlight */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-8 border-indigo-100 flex flex-col items-center justify-center bg-indigo-50/40 relative">
            <span className="text-3xl sm:text-4xl font-black text-indigo-600">
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

        {/* Primary Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3">
          {stats.notMastered > 0 && (
            <button
              type="button"
              onClick={() => onPracticeNotMastered(stats.notMasteredQuestionsList)}
              className="py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice {stats.notMastered} Not Mastered Questions</span>
            </button>
          )}

          <button
            type="button"
            onClick={onReviewAll}
            className="py-3 px-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span>Review All Questions</span>
          </button>

          {stats.neverAnsweredCorrectly > 0 && (
            <button
              type="button"
              onClick={onReviewIncorrect}
              className="py-3 px-5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Review Incorrect ({stats.neverAnsweredCorrectly})</span>
            </button>
          )}

          <button
            type="button"
            onClick={onRetryQuiz}
            className="py-3 px-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>Retry This Quiz</span>
          </button>

          <button
            type="button"
            onClick={onGoHome}
            className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </div>
      </div>

      {/* Comprehensive Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        
        <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-emerald-600 mb-1">
            <span className="text-xs font-semibold">Mastered</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.distinctMastered}</div>
          <div className="text-2xs text-slate-500 mt-1">Answered correctly at least once</div>
        </div>

        <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-indigo-600 mb-1">
            <span className="text-xs font-semibold">Distinct Attempted</span>
            <Layers className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.distinctAttempted}</div>
          <div className="text-2xs text-slate-500 mt-1">Out of {stats.total} total in quiz</div>
        </div>

        <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-amber-600 mb-1">
            <span className="text-xs font-semibold">Overcame Mistakes</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.initiallyWrongThenMastered}</div>
          <div className="text-2xs text-slate-500 mt-1">Initially wrong, then mastered</div>
        </div>

        <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-rose-600 mb-1">
            <span className="text-xs font-semibold">Needs Practice</span>
            <XCircle className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.notMastered}</div>
          <div className="text-2xs text-slate-500 mt-1">Not yet answered correctly</div>
        </div>

      </div>

      {/* Additional Stats Row */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
        <div>
          Total Answer Attempts Recorded: <strong className="text-slate-900">{stats.totalAttempts}</strong>
        </div>
        <div>
          Unattempted in this Session: <strong className="text-slate-900">{stats.unattempted}</strong>
        </div>
        <div>
          Questions Attempted but never correct: <strong className="text-rose-700">{stats.neverAnsweredCorrectly}</strong>
        </div>
      </div>

      {/* Week-by-Week Mastery Breakdown */}
      {weekBreakdown.length > 1 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Performance Breakdown by Week & Topic
          </h3>

          <div className="space-y-3">
            {weekBreakdown.map((w) => {
              const weekPct = w.total > 0 ? Math.round((w.mastered / w.total) * 100) : 0;
              return (
                <div key={w.week} className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <span className="font-bold text-xs text-indigo-700 mr-2">Week {w.week}</span>
                      <span className="text-xs font-semibold text-slate-800">{w.topic}</span>
                    </div>
                    <div className="text-xs font-medium text-slate-600">
                      {w.mastered} of {w.total} Mastered ({weekPct}%)
                    </div>
                  </div>

                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300"
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
