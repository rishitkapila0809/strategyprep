import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Filter, 
  Award,
  Layers,
  Search
} from 'lucide-react';

export default function ReviewScreen({
  questions,
  progress,
  initialFilter = 'all', // 'all' | 'notMastered'
  onBack,
  onPracticeFiltered,
}) {
  const [filterMode, setFilterMode] = useState(initialFilter); // 'all' | 'notMastered' | 'mastered'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('all');

  // Weeks available
  const availableWeeks = useMemo(() => {
    const set = new Set(questions.map((q) => q.week));
    return Array.from(set).sort((a, b) => a - b);
  }, [questions]);

  // Filtered review list
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Week filter
      if (selectedWeek !== 'all' && q.week !== Number(selectedWeek)) {
        return false;
      }

      // Mastery filter
      const state = progress?.[q.id];
      const isMastered = Boolean(state?.mastered);
      if (filterMode === 'mastered' && !isMastered) return false;
      if (filterMode === 'notMastered' && isMastered) return false;

      // Search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(term);
        const matchesOptions = q.options.some((opt) => opt.text.toLowerCase().includes(term));
        const matchesTopic = q.topic.toLowerCase().includes(term);
        if (!matchesQ && !matchesOptions && !matchesTopic) return false;
      }

      return true;
    });
  }, [questions, progress, filterMode, searchTerm, selectedWeek]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Previous Screen</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span>Question Review & Answer Key</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Detailed breakdown of answers, correct keys, and your attempt history.
          </p>
        </div>

        {filteredQuestions.length > 0 && filterMode === 'notMastered' && (
          <button
            type="button"
            onClick={() => onPracticeFiltered(filteredQuestions)}
            className="py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Practice These {filteredQuestions.length} Questions</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap text-xs">
          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-3 py-2 rounded-xl font-medium transition-colors cursor-pointer ${
              filterMode === 'all'
                ? 'bg-slate-900 text-white font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Questions
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('notMastered')}
            className={`px-3 py-2 rounded-xl font-medium transition-colors cursor-pointer ${
              filterMode === 'notMastered'
                ? 'bg-rose-600 text-white font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Needs Practice
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('mastered')}
            className={`px-3 py-2 rounded-xl font-medium transition-colors cursor-pointer ${
              filterMode === 'mastered'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Mastered
          </button>

          {/* Week Selector */}
          {availableWeeks.length > 1 && (
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">All Weeks</option>
              {availableWeeks.map((w) => (
                <option key={w} value={w}>
                  Week {w}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Review Questions Count */}
      <div className="text-xs font-semibold text-slate-500 px-1">
        Showing {filteredQuestions.length} of {questions.length} questions
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-400">
            No questions match your current filters.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const state = progress?.[q.id];
            const attempted = Boolean(state?.attempted);
            const userChoice = state?.selectedOption;
            const isMastered = Boolean(state?.mastered);
            const attemptsCount = state?.attemptsCount || 0;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                      Week {q.week}
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {q.topic}
                    </span>
                    <span className="text-2xs font-medium text-slate-400">
                      ID #{q.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {attempted ? (
                      isMastered ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Mastered ({attemptsCount} {attemptsCount === 1 ? 'attempt' : 'attempts'})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" />
                          Needs Practice ({attemptsCount} {attemptsCount === 1 ? 'attempt' : 'attempts'})
                        </span>
                      )
                    ) : (
                      <span className="text-slate-400 font-medium bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                        Unattempted
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug mb-4">
                  {q.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2 text-xs sm:text-sm">
                  {q.options.map((opt) => {
                    const isCorrect = opt.id === q.correctAnswer;
                    const isUserPick = userChoice === opt.id;

                    let rowStyle = 'bg-slate-50/70 border-slate-200 text-slate-700';
                    let badgeStyle = 'bg-slate-200 text-slate-700';

                    if (isCorrect) {
                      rowStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium';
                      badgeStyle = 'bg-emerald-600 text-white font-bold';
                    } else if (isUserPick && !isCorrect) {
                      rowStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                      badgeStyle = 'bg-rose-600 text-white font-bold';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-3 rounded-xl border flex items-start gap-3 ${rowStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 ${badgeStyle}`}>
                          {opt.id}
                        </span>
                        <div className="flex-1 pt-0.5">
                          {opt.text}
                        </div>
                        {isCorrect && (
                          <span className="text-2xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                            Correct Answer
                          </span>
                        )}
                        {isUserPick && !isCorrect && (
                          <span className="text-2xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md shrink-0">
                            Your Last Pick
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation if any */}
                {q.explanation && (
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
