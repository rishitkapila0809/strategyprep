import React from 'react';
import { CheckCircle2, XCircle, Check, Circle } from 'lucide-react';

export default function AnswerOption({
  option,
  isSelected,
  isCorrectOption,
  isAttempted,
  isTestMode,
  onSelect,
}) {
  const { id, text } = option;

  // Visual State Determination:
  let containerStyle = 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50/80';
  let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';
  let iconComponent = <Circle className="w-4 h-4 text-slate-300 shrink-0" />;

  if (isTestMode) {
    if (isSelected) {
      containerStyle = 'bg-indigo-50/70 border-indigo-500 text-indigo-950 ring-1 ring-indigo-500 shadow-xs';
      badgeStyle = 'bg-indigo-600 text-white border-indigo-600';
      iconComponent = <Check className="w-4 h-4 text-indigo-600 shrink-0" />;
    }
  } else {
    // Practice Mode: Instant feedback
    if (isAttempted) {
      if (isCorrectOption) {
        // Correct option is ALWAYS highlighted in green once attempted
        containerStyle = 'bg-emerald-50/90 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500 shadow-xs';
        badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
        iconComponent = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
      } else if (isSelected && !isCorrectOption) {
        // Selected wrong option is highlighted in red
        containerStyle = 'bg-rose-50/90 border-rose-500 text-rose-950 ring-1 ring-rose-500 shadow-xs';
        badgeStyle = 'bg-rose-600 text-white border-rose-600';
        iconComponent = <XCircle className="w-5 h-5 text-rose-600 shrink-0" />;
      } else {
        // Other non-selected incorrect options
        containerStyle = 'bg-white/60 border-slate-200 text-slate-500 opacity-75 hover:opacity-100';
        badgeStyle = 'bg-slate-100 text-slate-500 border-slate-200';
      }
    }
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-150 flex items-start gap-3.5 sm:gap-4 relative group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 ${containerStyle}`}
      aria-pressed={isSelected}
      aria-label={`Option ${id}: ${text}`}
    >
      {/* Option Letter Badge */}
      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border transition-colors ${badgeStyle}`}>
        {id}
      </span>

      {/* Option Text */}
      <span className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5 font-normal">
        {text}
      </span>

      {/* Status Icon */}
      <div className="pt-1.5 shrink-0">
        {iconComponent}
      </div>
    </button>
  );
}
