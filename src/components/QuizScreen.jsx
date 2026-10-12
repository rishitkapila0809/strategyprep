import React, { useState, useEffect, useMemo, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import QuestionNavigator from './QuestionNavigator';
import ProgressBar from './ProgressBar';
import SubmitTestModal from './SubmitTestModal';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  X, 
  Clock, 
  Award, 
  Send,
  HelpCircle
} from 'lucide-react';

export default function QuizScreen({
  questions,
  currentIndex,
  onNavigateIndex,
  progress,
  onUpdateQuestionAttempt,
  quizConfig,
  testModeAnswers,
  onUpdateTestAnswer,
  onFinishQuiz,
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isTestMode = quizConfig?.mode === 'test';
  const isTimed = quizConfig?.isTimed;

  // Non-intrusive timer
  useEffect(() => {
    if (!isTimed) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimed]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  // Keyboard navigation handler (Left & Right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (['input', 'textarea', 'select'].includes(activeTag)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          onNavigateIndex(currentIndex - 1);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < questions.length - 1) {
          onNavigateIndex(currentIndex + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions.length, onNavigateIndex]);

  // Handle Option Selection
  const handleSelectOption = useCallback((optionId) => {
    if (!currentQuestion) return;

    if (isTestMode) {
      onUpdateTestAnswer(currentQuestion.id, optionId);
    } else {
      const isCorrect = optionId === currentQuestion.correctAnswer;
      onUpdateQuestionAttempt(currentQuestion.id, optionId, isCorrect);
    }
  }, [currentQuestion, isTestMode, onUpdateTestAnswer, onUpdateQuestionAttempt]);

  // Compute live counts for ProgressBar
  const progressStats = useMemo(() => {
    let masteredCount = 0;
    let attemptedCount = 0;
    let totalAttempts = 0;

    questions.forEach((q) => {
      if (isTestMode) {
        if (testModeAnswers?.[q.id]) {
          attemptedCount++;
        }
      } else {
        const state = progress?.[q.id];
        if (state?.attempted) {
          attemptedCount++;
          totalAttempts += state.attemptsCount || 1;
          if (state.mastered) {
            masteredCount++;
          }
        }
      }
    });

    const notMasteredCount = questions.length - masteredCount;

    return { masteredCount, attemptedCount, notMasteredCount, totalAttempts };
  }, [questions, progress, isTestMode, testModeAnswers]);

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-500">
        No questions available for this selection.
      </div>
    );
  }

  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  const currentQuestionState = progress?.[currentQuestion.id];
  const testSelectedOption = testModeAnswers?.[currentQuestion.id] || null;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 animate-fade-in">
      
      {/* Top Banner with Quiz Scope & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-5">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-2xs sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            {quizConfig?.scope === 'week' ? `Week ${quizConfig.selectedWeek}` : 'Practice Session'}
          </span>
          {isTimed && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-2xs sm:text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 animate-fade-in">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600" />
              <span>{formatTime(elapsedSeconds)}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Mobile Navigator Drawer Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 text-2xs sm:text-xs font-semibold bg-white text-slate-700 border border-slate-200 rounded-xl shadow-2xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer min-h-[36px]"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>Navigator ({currentIndex + 1}/{questions.length})</span>
          </button>

          {/* Quick Finish / View Results button */}
          <button
            type="button"
            onClick={() => {
              if (isTestMode) {
                setIsSubmitModalOpen(true);
              } else {
                onFinishQuiz();
              }
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 text-2xs sm:text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer min-h-[36px]"
          >
            {isTestMode ? <Send className="w-3.5 h-3.5 shrink-0" /> : <Award className="w-3.5 h-3.5 shrink-0" />}
            <span>{isTestMode ? 'Submit Test' : 'Finish & View Results'}</span>
          </button>
        </div>
      </div>

      {/* Progress Bar Header */}
      <ProgressBar
        totalQuestions={questions.length}
        masteredCount={progressStats.masteredCount}
        attemptedCount={progressStats.attemptedCount}
        notMasteredCount={progressStats.notMasteredCount}
        totalAttempts={progressStats.totalAttempts}
        isTestMode={isTestMode}
      />

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        
        {/* Left Column: Active Question & Navigation Controls */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-6">
          <QuestionCard
            question={currentQuestion}
            displayIndex={currentIndex}
            totalQuestions={questions.length}
            questionState={currentQuestionState}
            isTestMode={isTestMode}
            testModeSelectedOption={testSelectedOption}
            onSelectOption={handleSelectOption}
          />

          {/* Navigation Buttons with smooth hover and press micro-interactions */}
          <div className="flex items-center justify-between gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <button
              type="button"
              disabled={isFirstQuestion}
              onClick={() => onNavigateIndex(currentIndex - 1)}
              className="py-3 px-4 sm:px-5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Previous</span>
            </button>

            <div className="text-2xs text-slate-400 font-medium hidden sm:block">
              Use <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded-sm font-mono text-slate-600">←</kbd> and <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded-sm font-mono text-slate-600">→</kbd>
            </div>

            {isLastQuestion ? (
              <button
                type="button"
                onClick={() => {
                  if (isTestMode) {
                    setIsSubmitModalOpen(true);
                  } else {
                    onFinishQuiz();
                  }
                }}
                className="py-3 px-5 sm:px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-h-[44px]"
              >
                <span>{isTestMode ? 'Submit Test' : 'Complete Quiz'}</span>
                {isTestMode ? <Send className="w-4 h-4 shrink-0" /> : <Award className="w-4 h-4 shrink-0" />}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNavigateIndex(currentIndex + 1)}
                className="py-3 px-5 sm:px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95 min-h-[44px]"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Desktop Question Navigator */}
        <div className="hidden lg:block lg:col-span-4 sticky top-20">
          <QuestionNavigator
            questions={questions}
            currentIndex={currentIndex}
            onSelectIndex={onNavigateIndex}
            progress={progress}
            isTestMode={isTestMode}
            testModeAnswers={testModeAnswers}
          />
        </div>

      </div>

      {/* Mobile Slide-Over Drawer for Navigator */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-slate-900/40 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl p-4 flex flex-col animate-question-slide">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <span className="font-bold text-sm text-slate-900">Question List</span>
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Close navigator"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <QuestionNavigator
                questions={questions}
                currentIndex={currentIndex}
                onSelectIndex={onNavigateIndex}
                progress={progress}
                isTestMode={isTestMode}
                testModeAnswers={testModeAnswers}
                onCloseMobile={() => setIsMobileNavOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Test Submission Modal */}
      <SubmitTestModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirm={onFinishQuiz}
        totalQuestions={questions.length}
        answeredCount={progressStats.attemptedCount}
      />

    </div>
  );
}
