import React from 'react';
import { HelpCircle, X, CheckCircle2 } from 'lucide-react';

export default function SubmitTestModal({
  isOpen,
  onClose,
  onConfirm,
  totalQuestions,
  answeredCount,
}) {
  if (!isOpen) return null;

  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 p-5 sm:p-6 relative animate-pop-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="submit-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <div className="p-2.5 sm:p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 shrink-0">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 id="submit-modal-title" className="text-base sm:text-lg font-semibold text-slate-900">
              Submit Test & View Results?
            </h3>
            <p className="text-2xs sm:text-xs text-slate-600 mt-1 leading-relaxed">
              Once submitted, all answers will be evaluated and correct answers with full review will be revealed.
            </p>
          </div>
        </div>

        <div className="my-3.5 p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5 text-xs">
          <div className="flex justify-between items-center text-slate-700">
            <span>Total Questions:</span>
            <span className="font-semibold text-slate-900">{totalQuestions}</span>
          </div>
          <div className="flex justify-between items-center text-emerald-700">
            <span>Answered:</span>
            <span className="font-semibold">{answeredCount}</span>
          </div>
          {unansweredCount > 0 ? (
            <div className="flex justify-between items-center text-amber-700 font-medium">
              <span>Unanswered:</span>
              <span>{unansweredCount}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-emerald-600 text-2xs font-medium pt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>All questions answered!</span>
            </div>
          )}
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 mt-5 pt-3.5 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer min-h-[44px]"
          >
            Keep Answering
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer min-h-[44px]"
          >
            Submit Test Now
          </button>
        </div>
      </div>
    </div>
  );
}
