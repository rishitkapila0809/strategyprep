import React, { useState, useMemo } from 'react';
import { Filter, Layers, CheckCircle2, XCircle, Circle, Award } from 'lucide-react';

export default function QuestionNavigator({
  questions,
  currentIndex,
  onSelectIndex,
  progress,
  isTestMode,
  testModeAnswers,
  onCloseMobile,
}) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'unattempted' | 'notMastered' | 'mastered'
  const [selectedWeekFilter, setSelectedWeekFilter] = useState('all'); // 'all' | number

  // Extract distinct weeks available in current quiz questions
  const availableWeeks = useMemo(() => {
    const set = new Set(questions.map((q) => q.week));
    return Array.from(set).sort((a, b) => a - b);
  }, [questions]);

  // Compute stats for current questions
  const stats = useMemo(() => {
    let attempted = 0;
    let mastered = 0;
    let notMastered = 0;
    let unattempted = 0;

    questions.forEach((q) => {
      if (isTestMode) {
        if (testModeAnswers?.[q.id]) {
          attempted++;
        } else {
          unattempted++;
        }
      } else {
        const state = progress?.[q.id];
        if (state?.attempted) {
          attempted++;
          if (state.mastered) {
            mastered++;
          } else {
            notMastered++;
          }
        } else {
          unattempted++;
        }
      }
    });

    return { attempted, mastered, notMastered, unattempted };
  }, [questions, progress, isTestMode, testModeAnswers]);

  // Filter questions according to active tab
  const filteredQuestionsWithIndices = useMemo(() => {
    return questions
      .map((q, originalIndex) => ({ q, originalIndex }))
      .filter(({ q }) => {
        // Week filter
        if (selectedWeekFilter !== 'all' && q.week !== Number(selectedWeekFilter)) {
          return false;
        }

        // Status filter
        if (activeFilter === 'all') return true;

        if (isTestMode) {
          const isAnswered = Boolean(testModeAnswers?.[q.id]);
          if (activeFilter === 'unattempted') return !isAnswered;
          if (activeFilter === 'mastered') return isAnswered;
          return true;
        }

        const state = progress?.[q.id];
        const attempted = Boolean(state?.attempted);
        const isMastered = Boolean(state?.mastered);

        if (activeFilter === 'unattempted') return !attempted;
        if (activeFilter === 'mastered') return isMastered;
        if (activeFilter === 'notMastered') return attempted && !isMastered;

        return true;
      });
  }, [questions, selectedWeekFilter, activeFilter, isTestMode, testModeAnswers, progress]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 flex flex-col h-full">
      {/* Navigator Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-3.5">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-600" />
          <h3 className="font-semibold text-sm sm:text-base text-slate-900">
            Question Navigator
          </h3>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
          {questions.length} Items
        </span>
      </div>

      {/* Week Selector Dropdown (if more than 1 week) */}
      {availableWeeks.length > 1 && (
        <div className="mb-3">
          <label htmlFor="week-filter" className="block text-xs font-medium text-slate-500 mb-1">
            Jump to Week / Topic:
          </label>
          <select
            id="week-filter"
            value={selectedWeekFilter}
            onChange={(e) => setSelectedWeekFilter(e.target.value)}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="all">All Weeks ({questions.length} questions)</option>
            {availableWeeks.map((w) => {
              const weekCount = questions.filter((q) => q.week === w).length;
              return (
                <option key={w} value={w}>
                  Week {w} ({weekCount} questions)
                </option>
              );
            })}
          </select>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1 p-1 bg-slate-100/80 rounded-xl mb-4 text-xs">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`flex-1 py-1.5 px-2 font-medium rounded-lg transition-all text-center cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-white text-slate-900 shadow-2xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          All ({questions.length})
        </button>

        {!isTestMode ? (
          <>
            <button
              type="button"
              onClick={() => setActiveFilter('mastered')}
              className={`flex-1 py-1.5 px-2 font-medium rounded-lg transition-all text-center cursor-pointer ${
                activeFilter === 'mastered'
                  ? 'bg-white text-emerald-700 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              Mastered ({stats.mastered})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('notMastered')}
              className={`flex-1 py-1.5 px-2 font-medium rounded-lg transition-all text-center cursor-pointer ${
                activeFilter === 'notMastered'
                  ? 'bg-white text-rose-700 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-rose-700'
              }`}
            >
              Wrong ({stats.notMastered})
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setActiveFilter('mastered')}
            className={`flex-1 py-1.5 px-2 font-medium rounded-lg transition-all text-center cursor-pointer ${
              activeFilter === 'mastered'
                ? 'bg-white text-indigo-700 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-indigo-700'
            }`}
          >
            Answered ({stats.attempted})
          </button>
        )}

        <button
          type="button"
          onClick={() => setActiveFilter('unattempted')}
          className={`flex-1 py-1.5 px-2 font-medium rounded-lg transition-all text-center cursor-pointer ${
            activeFilter === 'unattempted'
              ? 'bg-white text-slate-700 shadow-2xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Pending ({stats.unattempted})
        </button>
      </div>

      {/* Grid of question buttons */}
      <div className="flex-1 overflow-y-auto pr-1 max-h-[380px] sm:max-h-[460px] min-h-[160px]">
        {filteredQuestionsWithIndices.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-400">
            No questions match this filter.
          </div>
        ) : (
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
            {filteredQuestionsWithIndices.map(({ q, originalIndex }) => {
              const isCurrent = originalIndex === currentIndex;
              let btnClass = 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
              let ariaLabel = `Question ${originalIndex + 1}`;

              if (isTestMode) {
                const isAnswered = Boolean(testModeAnswers?.[q.id]);
                if (isAnswered) {
                  btnClass = 'border-indigo-400 bg-indigo-50 text-indigo-800 font-semibold';
                  ariaLabel += ', answered';
                } else {
                  ariaLabel += ', unanswered';
                }
              } else {
                const state = progress?.[q.id];
                if (state?.attempted) {
                  if (state.mastered) {
                    btnClass = 'border-emerald-500 bg-emerald-500 text-white font-semibold shadow-xs';
                    ariaLabel += ', mastered';
                  } else {
                    btnClass = 'border-rose-400 bg-rose-50 text-rose-800 font-semibold';
                    ariaLabel += ', attempted and incorrect';
                  }
                } else {
                  ariaLabel += ', not attempted';
                }
              }

              if (isCurrent) {
                btnClass += ' ring-2 ring-indigo-600 ring-offset-2 z-10 scale-105';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    onSelectIndex(originalIndex);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`h-9 rounded-xl border text-xs flex items-center justify-center transition-all cursor-pointer relative ${btnClass}`}
                  aria-label={ariaLabel}
                  aria-current={isCurrent ? 'true' : undefined}
                >
                  <span>{originalIndex + 1}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Visible Legend */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 text-2xs sm:text-xs text-slate-500 space-y-1.5">
        <div className="font-semibold text-slate-600 mb-1">Status Legend:</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md border-2 border-indigo-600 ring-1 ring-indigo-400" />
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-white border border-slate-300" />
            <span>Unattempted</span>
          </div>
          {!isTestMode ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-500" />
                <span className="text-emerald-700 font-medium">Mastered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-rose-50 border border-rose-400 text-rose-700" />
                <span className="text-rose-700 font-medium">Needs Practice</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1.5 col-span-2">
              <span className="w-3 h-3 rounded-md bg-indigo-50 border border-indigo-400" />
              <span className="text-indigo-700 font-medium">Answer Selected</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
