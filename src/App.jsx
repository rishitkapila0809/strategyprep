import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { questions } from './data/questions';
import { loadStoredData, saveStoredData, clearStoredData } from './utils/storage';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import ReviewScreen from './components/ReviewScreen';
import ResetModal from './components/ResetModal';

// Initial default state
const createInitialProgress = (questionList) => {
  const map = {};
  questionList.forEach((q) => {
    map[q.id] = {
      attempted: false,
      selectedOption: null,
      attemptsCount: 0,
      isLatestCorrect: false,
      mastered: false,
      history: [],
    };
  });
  return map;
};

export default function App() {
  // Load persistent state from localStorage
  const [sessionState, setSessionState] = useState(() => {
    const defaultData = {
      progress: createInitialProgress(questions),
      testModeAnswers: {},
      quizConfig: {
        scope: 'all',
        selectedWeek: null,
        subsetCount: null,
        mode: 'practice',
        isTimed: false,
      },
      currentView: 'home',
      activeQuestionIndex: 0,
    };

    const loaded = loadStoredData(defaultData);

    // Reconcile loaded progress with current questions array in questions.js
    const reconciledProgress = { ...createInitialProgress(questions) };
    if (loaded.progress && typeof loaded.progress === 'object') {
      questions.forEach((q) => {
        if (loaded.progress[q.id]) {
          reconciledProgress[q.id] = {
            ...reconciledProgress[q.id],
            ...loaded.progress[q.id],
          };
        }
      });
    }

    return {
      ...loaded,
      progress: reconciledProgress,
      testModeAnswers: loaded.testModeAnswers || {},
    };
  });

  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all');

  // Save to localStorage on state change
  useEffect(() => {
    saveStoredData({
      progress: sessionState.progress,
      testModeAnswers: sessionState.testModeAnswers,
      quizConfig: sessionState.quizConfig,
      currentView: sessionState.currentView,
      activeQuestionIndex: sessionState.activeQuestionIndex,
    });
  }, [sessionState]);

  // Compute active question list based on quizConfig
  const activeQuizQuestions = useMemo(() => {
    const config = sessionState.quizConfig;
    if (!config) return questions;

    if (config.scope === 'week' && config.selectedWeek) {
      const filtered = questions.filter((q) => q.week === config.selectedWeek);
      return filtered.length > 0 ? filtered : questions;
    }

    if (config.scope === 'unmastered') {
      const unmastered = questions.filter((q) => !sessionState.progress[q.id]?.mastered);
      return unmastered.length > 0 ? unmastered : questions;
    }

    if (config.scope === 'subset' && config.subsetCount) {
      return questions.slice(0, Math.min(config.subsetCount, questions.length));
    }

    // Default: all questions
    return questions;
  }, [sessionState.quizConfig, sessionState.progress]);

  // Safe active question index
  const safeIndex = useMemo(() => {
    if (activeQuizQuestions.length === 0) return 0;
    if (sessionState.activeQuestionIndex >= activeQuizQuestions.length) {
      return 0;
    }
    return Math.max(0, sessionState.activeQuestionIndex);
  }, [sessionState.activeQuestionIndex, activeQuizQuestions.length]);

  // Start / Configure new Quiz session
  const handleStartQuiz = useCallback((config) => {
    setSessionState((prev) => ({
      ...prev,
      quizConfig: config,
      testModeAnswers: config.mode === 'test' ? {} : prev.testModeAnswers,
      currentView: 'quiz',
      activeQuestionIndex: 0,
    }));
  }, []);

  // Update Practice Mode question attempt (Unlimited Retries)
  const handleUpdateQuestionAttempt = useCallback((questionId, optionId, isCorrect) => {
    setSessionState((prev) => {
      const current = prev.progress[questionId] || {
        attempted: false,
        selectedOption: null,
        attemptsCount: 0,
        isLatestCorrect: false,
        mastered: false,
        history: [],
      };

      const newHistory = [...(current.history || []), optionId];
      // A question is mastered if it was already mastered OR is correct now
      const newMastered = Boolean(current.mastered || isCorrect);

      return {
        ...prev,
        progress: {
          ...prev.progress,
          [questionId]: {
            attempted: true,
            selectedOption: optionId,
            attemptsCount: (current.attemptsCount || 0) + 1,
            isLatestCorrect: isCorrect,
            mastered: newMastered,
            history: newHistory,
          },
        },
      };
    });
  }, []);

  // Update Test Mode Answer
  const handleUpdateTestAnswer = useCallback((questionId, optionId) => {
    setSessionState((prev) => ({
      ...prev,
      testModeAnswers: {
        ...prev.testModeAnswers,
        [questionId]: optionId,
      },
    }));
  }, []);

  // Navigate question index
  const handleNavigateIndex = useCallback((newIndex) => {
    setSessionState((prev) => ({
      ...prev,
      activeQuestionIndex: newIndex,
    }));
  }, []);

  // Finish quiz and evaluate if in Test Mode
  const handleFinishQuiz = useCallback(() => {
    setSessionState((prev) => {
      // If in Test Mode, evaluate all answers and record into progress
      if (prev.quizConfig?.mode === 'test') {
        const updatedProgress = { ...prev.progress };
        questions.forEach((q) => {
          const chosen = prev.testModeAnswers[q.id];
          if (chosen) {
            const isCorrect = chosen === q.correctAnswer;
            const current = updatedProgress[q.id] || {
              attempted: false,
              selectedOption: null,
              attemptsCount: 0,
              isLatestCorrect: false,
              mastered: false,
              history: [],
            };

            updatedProgress[q.id] = {
              attempted: true,
              selectedOption: chosen,
              attemptsCount: (current.attemptsCount || 0) + 1,
              isLatestCorrect: isCorrect,
              mastered: current.mastered || isCorrect,
              history: [...(current.history || []), chosen],
            };
          }
        });

        return {
          ...prev,
          progress: updatedProgress,
          currentView: 'results',
        };
      }

      return {
        ...prev,
        currentView: 'results',
      };
    });
  }, []);

  // Practice only unmastered questions from results
  const handlePracticeNotMastered = useCallback((unmasteredList) => {
    setSessionState((prev) => ({
      ...prev,
      quizConfig: {
        scope: 'unmastered',
        selectedWeek: null,
        subsetCount: null,
        mode: 'practice',
        isTimed: false,
      },
      currentView: 'quiz',
      activeQuestionIndex: 0,
    }));
  }, []);

  // Practice a custom filtered set from ReviewScreen
  const handlePracticeFiltered = useCallback((filteredList) => {
    setSessionState((prev) => ({
      ...prev,
      quizConfig: {
        scope: 'unmastered',
        selectedWeek: null,
        subsetCount: null,
        mode: 'practice',
        isTimed: false,
      },
      currentView: 'quiz',
      activeQuestionIndex: 0,
    }));
  }, []);

  // Reset all session progress
  const handleConfirmReset = useCallback(() => {
    clearStoredData();
    setSessionState({
      progress: createInitialProgress(questions),
      testModeAnswers: {},
      quizConfig: {
        scope: 'all',
        selectedWeek: null,
        subsetCount: null,
        mode: 'practice',
        isTimed: false,
      },
      currentView: 'home',
      activeQuestionIndex: 0,
    });
  }, []);

  // Check if session has attempts
  const hasExistingSession = useMemo(() => {
    return Object.values(sessionState.progress).some((p) => p.attempted);
  }, [sessionState.progress]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Central Header */}
      <Header
        totalQuestionsCount={questions.length}
        currentView={sessionState.currentView}
        onNavigateHome={() => setSessionState((prev) => ({ ...prev, currentView: 'home' }))}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        quizMode={sessionState.quizConfig?.mode}
      />

      {/* Main Screen Views */}
      <main className="flex-1">
        {sessionState.currentView === 'home' && (
          <HomeScreen
            questions={questions}
            progress={sessionState.progress}
            hasExistingSession={hasExistingSession}
            onStartQuiz={handleStartQuiz}
            onReviewAll={() => {
              setReviewFilter('all');
              setSessionState((prev) => ({ ...prev, currentView: 'review' }));
            }}
          />
        )}

        {sessionState.currentView === 'quiz' && (
          <QuizScreen
            questions={activeQuizQuestions}
            currentIndex={safeIndex}
            onNavigateIndex={handleNavigateIndex}
            progress={sessionState.progress}
            onUpdateQuestionAttempt={handleUpdateQuestionAttempt}
            quizConfig={sessionState.quizConfig}
            testModeAnswers={sessionState.testModeAnswers}
            onUpdateTestAnswer={handleUpdateTestAnswer}
            onFinishQuiz={handleFinishQuiz}
          />
        )}

        {sessionState.currentView === 'results' && (
          <ResultsScreen
            quizQuestions={activeQuizQuestions}
            progress={sessionState.progress}
            isTestMode={sessionState.quizConfig?.mode === 'test'}
            testModeAnswers={sessionState.testModeAnswers}
            onRetryQuiz={() => {
              setSessionState((prev) => ({
                ...prev,
                currentView: 'quiz',
                activeQuestionIndex: 0,
                testModeAnswers: prev.quizConfig?.mode === 'test' ? {} : prev.testModeAnswers,
              }));
            }}
            onPracticeNotMastered={handlePracticeNotMastered}
            onReviewAll={() => {
              setReviewFilter('all');
              setSessionState((prev) => ({ ...prev, currentView: 'review' }));
            }}
            onReviewIncorrect={() => {
              setReviewFilter('notMastered');
              setSessionState((prev) => ({ ...prev, currentView: 'review' }));
            }}
            onGoHome={() => setSessionState((prev) => ({ ...prev, currentView: 'home' }))}
          />
        )}

        {sessionState.currentView === 'review' && (
          <ReviewScreen
            questions={questions}
            progress={sessionState.progress}
            initialFilter={reviewFilter}
            onBack={() => setSessionState((prev) => ({ ...prev, currentView: 'home' }))}
            onPracticeFiltered={handlePracticeFiltered}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 bg-white/60 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong>StrategyPrep</strong> · Strategy and Technology: A Practical Primer (NPTEL 2026)
          </div>
          <div>
            Created by : R.Kapila
          </div>
        </div>
      </footer>

      {/* Confirmation Reset Modal */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
      />

    </div>
  );
}
