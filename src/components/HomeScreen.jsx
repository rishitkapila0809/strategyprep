import React, { useState, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Award, 
  Layers, 
  Check, 
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function HomeScreen({
  questions,
  progress,
  hasExistingSession,
  onStartQuiz,
  onReviewAll,
}) {
  // Quiz configuration states
  const [selectedScope, setSelectedScope] = useState('all'); // 'all' | 'week' | 'unmastered' | 'subset'
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [subsetCount, setSubsetCount] = useState(25);
  const [quizMode, setQuizMode] = useState('practice'); // 'practice' | 'test'
  const [isTimed, setIsTimed] = useState(false);

  // Group questions by week with topics
  const weeksData = useMemo(() => {
    const map = new Map();
    questions.forEach((q) => {
      if (!map.has(q.week)) {
        map.set(q.week, {
          week: q.week,
          topic: q.topic,
          count: 0,
          mastered: 0,
        });
      }
      const entry = map.get(q.week);
      entry.count += 1;
      if (progress?.[q.id]?.mastered) {
        entry.mastered += 1;
      }
    });
    return Array.from(map.values()).sort((a, b) => a.week - b.week);
  }, [questions, progress]);

  // Overall statistics from current question bank and session
  const stats = useMemo(() => {
    let distinctAttempted = 0;
    let distinctMastered = 0;
    let totalAttempts = 0;

    questions.forEach((q) => {
      const p = progress?.[q.id];
      if (p?.attempted) {
        distinctAttempted++;
        totalAttempts += p.attemptsCount || 1;
        if (p.mastered) {
          distinctMastered++;
        }
      }
    });

    const notMasteredCount = questions.length - distinctMastered;
    const attemptedNotMastered = distinctAttempted - distinctMastered;
    const masteryPercentage = questions.length > 0 ? Math.round((distinctMastered / questions.length) * 100) : 0;

    return {
      distinctAttempted,
      distinctMastered,
      notMasteredCount,
      attemptedNotMastered,
      totalAttempts,
      masteryPercentage,
    };
  }, [questions, progress]);

  const handleStart = () => {
    onStartQuiz({
      scope: selectedScope,
      selectedWeek: selectedScope === 'week' ? Number(selectedWeek) : null,
      subsetCount: selectedScope === 'subset' ? Number(subsetCount) : null,
      mode: quizMode,
      isTimed,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Hero Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>NPTEL Assignment Practice · 2026 Edition</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Strategy and Technology: <br className="hidden sm:inline" />
          <span className="text-indigo-600">A Practical Primer</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Master all <strong>{questions.length} official assignment questions</strong> across <strong>{weeksData.length} weeks and topics</strong>. 
          Features instant feedback, unlimited retries, detailed attempt history, and dynamic progress analytics.
        </p>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mt-7 pt-6 border-t border-slate-100 text-left">
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="text-xs text-slate-500 font-medium">Question Bank</div>
            <div className="text-lg font-bold text-slate-900 mt-0.5">{questions.length} MCQs</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="text-xs text-slate-500 font-medium">Curriculum</div>
            <div className="text-lg font-bold text-slate-900 mt-0.5">{weeksData.length} Weeks</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="text-xs text-slate-500 font-medium">Mastered</div>
            <div className="text-lg font-bold text-emerald-600 mt-0.5">{stats.distinctMastered} / {questions.length}</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="text-xs text-slate-500 font-medium">Mastery Rate</div>
            <div className="text-lg font-bold text-indigo-600 mt-0.5">{stats.masteryPercentage}%</div>
          </div>
        </div>
      </div>

      {/* Quiz Configuration Panel */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Configure Your Practice Session
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Choose what you want to practice and customize your learning experience.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Step 1: Practice Scope */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              1. Select Questions Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              {/* Option: All Questions */}
              <button
                type="button"
                onClick={() => setSelectedScope('all')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedScope === 'all'
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 text-indigo-950 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">All Questions</span>
                  {selectedScope === 'all' && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Full practice covering all {questions.length} questions
                </p>
              </button>

              {/* Option: By Week */}
              <button
                type="button"
                onClick={() => setSelectedScope('week')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedScope === 'week'
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 text-indigo-950 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">By Week / Topic</span>
                  {selectedScope === 'week' && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Focus on one specific week's lecture topics
                </p>
              </button>

              {/* Option: Unmastered Only */}
              <button
                type="button"
                onClick={() => setSelectedScope('unmastered')}
                disabled={stats.distinctMastered === questions.length}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedScope === 'unmastered'
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 text-indigo-950 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Needs Practice</span>
                  {selectedScope === 'unmastered' && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {stats.notMasteredCount} questions not yet mastered
                </p>
              </button>

              {/* Option: Quick Subset */}
              <button
                type="button"
                onClick={() => setSelectedScope('subset')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedScope === 'subset'
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 text-indigo-950 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Quick Drill</span>
                  {selectedScope === 'subset' && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Practice a compact subset (e.g. 10 or 25 questions)
                </p>
              </button>

            </div>

            {/* Sub-selectors */}
            {selectedScope === 'week' && (
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 animate-in fade-in duration-150">
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Choose Week / Topic:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1">
                  {weeksData.map((w) => (
                    <button
                      key={w.week}
                      type="button"
                      onClick={() => setSelectedWeek(w.week)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                        selectedWeek === w.week
                          ? 'border-indigo-600 bg-indigo-600 text-white font-medium shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                      }`}
                    >
                      <div className="font-bold">Week {w.week} ({w.count} Qs)</div>
                      <div className={`text-2xs truncate ${selectedWeek === w.week ? 'text-indigo-100' : 'text-slate-500'}`}>
                        {w.topic}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedScope === 'subset' && (
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 animate-in fade-in duration-150">
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Number of Questions:
                </label>
                <div className="flex gap-2">
                  {[10, 20, 30, 50].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setSubsetCount(num)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        subsetCount === num
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {num} Questions
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Choose Mode */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              2. Choose Practice Mode
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Practice Mode */}
              <button
                type="button"
                onClick={() => setQuizMode('practice')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  quizMode === 'practice'
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 text-indigo-950 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">Practice Mode</span>
                    <span className="text-2xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Recommended
                    </span>
                  </div>
                  {quizMode === 'practice' && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Instant feedback after every selection. Full correct answers revealed with unlimited retries and attempt tracking.
                </p>
              </button>

              {/* Test Mode */}
              <button
                type="button"
                onClick={() => setQuizMode('test')}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  quizMode === 'test'
                    ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600 text-indigo-950 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Test Mode</span>
                  {quizMode === 'test' && <Check className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Exam simulation. Answers are hidden until test submission. Freely navigate and review before submitting for final evaluation.
                </p>
              </button>

            </div>
          </div>

          {/* Optional Timed Mode toggle */}
          <div className="pt-2">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-500" />
                <div>
                  <div className="text-xs font-semibold text-slate-800">Timed Mode (Optional)</div>
                  <div className="text-2xs text-slate-500">Track your practice pace with a non-intrusive timer</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTimed}
                  onChange={(e) => setIsTimed(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>

          {/* Big Start Button */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleStart}
              className="flex-1 py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base rounded-2xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 flex items-center justify-center gap-2.5 transition-all active:scale-98 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{hasExistingSession ? 'Start / Continue Practicing' : 'Start Practicing Now'}</span>
            </button>

            <button
              type="button"
              onClick={onReviewAll}
              className="py-4 px-6 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Browse All Questions</span>
            </button>
          </div>

        </div>
      </div>

      {/* Week-by-Week Curriculum Table */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Curriculum & Topics Overview
            </h3>
            <p className="text-xs text-slate-500">
              Click any week to jump straight into practicing that unit
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {weeksData.length} Units
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {weeksData.map((w) => {
            const isCompleted = w.mastered === w.count && w.count > 0;
            return (
              <button
                key={w.week}
                type="button"
                onClick={() => {
                  setSelectedScope('week');
                  setSelectedWeek(w.week);
                  onStartQuiz({
                    scope: 'week',
                    selectedWeek: w.week,
                    subsetCount: null,
                    mode: quizMode,
                    isTimed,
                  });
                }}
                className="p-3.5 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all text-left flex items-start justify-between gap-2 group cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-indigo-700">Week {w.week}</span>
                    <span className="text-2xs text-slate-400">({w.count} MCQs)</span>
                  </div>
                  <div className="text-xs font-medium text-slate-800 line-clamp-1 group-hover:text-indigo-900">
                    {w.topic}
                  </div>
                  <div className="text-2xs text-slate-500">
                    {w.mastered > 0 ? (
                      <span className="text-emerald-700 font-medium">
                        {w.mastered} / {w.count} Mastered
                      </span>
                    ) : (
                      'Not yet attempted'
                    )}
                  </div>
                </div>

                <div className="pt-1 text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
