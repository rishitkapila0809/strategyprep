import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ResetModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 p-5 sm:p-6 relative animate-pop-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <div className="p-2.5 sm:p-3 bg-rose-50 text-rose-600 rounded-xl border border-rose-100 shrink-0">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 id="reset-modal-title" className="text-base sm:text-lg font-semibold text-slate-900">
              Reset Session Progress?
            </h3>
            <p className="text-2xs sm:text-xs text-slate-600 mt-1 leading-relaxed">
              This will erase all recorded attempts, answers, and mastery statistics for this browser session. The question bank itself will remain unaffected.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 mt-5 pt-3.5 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer min-h-[44px]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer min-h-[44px]"
          >
            Yes, Reset All Progress
          </button>
        </div>
      </div>
    </div>
  );
}
