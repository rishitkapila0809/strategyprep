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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="submit-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 id="submit-modal-title" className="text-lg font-semibold text-slate-900">
              Submit Test & View Results?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Once submitted, all answers will be evaluated and correct answers with full review will be revealed.
            </p>
          </div>
        </div>

        <div className="my-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 text-sm">
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
            <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium pt-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>All questions answered!</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Keep Answering
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Submit Test Now
          </button>
        </div>
      </div>
    </div>
  );
}
