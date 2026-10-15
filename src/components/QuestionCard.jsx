import React from 'react';
import AnswerOption from './AnswerOption';
import { CheckCircle2, AlertCircle, Award, RotateCcw } from 'lucide-react';

export default function QuestionCard({
  question,
  displayIndex,
  totalQuestions,
  questionState,
  isTestMode,
  testModeSelectedOption,
  onSelectOption,
}) {
  const { id, week, topic, question: questionText, options, correctAnswer, explanation } = question;

  const attempted = isTestMode ? Boolean(testModeSelectedOption) : Boolean(questionState?.attempted);
  const selectedOption = isTestMode ? testModeSelectedOption : questionState?.selectedOption;
  const isLatestCorrect = Boolean(questionState?.isLatestCorrect);
  const isMastered = Boolean(questionState?.mastered);
  const attemptsCount = questionState?.attemptsCount || 0;

  return (
    <div 
      key={id}
      className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs p-4 sm:p-7 md:p-8 animate-question-slide transition-shadow duration-300"
    >
      {/* Top Meta info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 sm:pb-5 border-b border-slate-100">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="px-2.5 py-1 rounded-full text-2xs sm:text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 break-words max-w-full">
            Week {week} · {topic}
          </span>
          <span className="px-2 py-0.5 rounded-full text-2xs sm:text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
            ID #{id}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-between sm:justify-end">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {!isTestMode && isMastered && (
              <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-2xs sm:text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 animate-pop-in shrink-0">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mastered</span>
              </span>
            )}
            {!isTestMode && attemptsCount > 0 && (
              <span className="text-2xs sm:text-xs text-slate-400 font-medium shrink-0">
                {attemptsCount} {attemptsCount === 1 ? 'attempt' : 'attempts'}
              </span>
            )}
          </div>
          <span className="text-2xs sm:text-xs font-semibold text-slate-500 bg-slate-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-slate-200 shrink-0">
            Question {displayIndex + 1} of {totalQuestions}
          </span>
        </div>
      </div>

      {/* Question Text */}
      <div className="py-4 sm:py-6">
        <h2 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 leading-snug sm:leading-relaxed tracking-tight">
          {questionText}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5 sm:space-y-3.5">
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isCorrect = option.id === correctAnswer;

          return (
            <AnswerOption
              key={option.id}
              option={option}
              isSelected={isSelected}
              isCorrectOption={isCorrect}
              isAttempted={attempted}
              isTestMode={isTestMode}
              onSelect={onSelectOption}
            />
          );
        })}
      </div>

      {/* Feedback Section */}
      <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100">
        {isTestMode ? (
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-2xs sm:text-xs md:text-sm text-slate-600 flex items-center justify-between gap-2">
            <span className="break-words flex-1">
              {selectedOption ? (
                <span className="text-indigo-700 font-medium">Option {selectedOption} selected.</span>
              ) : (
                'Select an option above. You can change your choice anytime before submitting.'
              )}
            </span>
            <span className="text-2xs text-slate-400 font-medium shrink-0">Test Mode</span>
          </div>
        ) : (
          <div>
            {attempted ? (
              isLatestCorrect ? (
                <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-2.5 sm:gap-3 animate-feedback-reveal">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 animate-pop-in" />
                  <div className="space-y-1">
                    <p className="font-semibold text-xs sm:text-sm md:text-base">
                      Correct! Well done.
                    </p>
                    {explanation ? (
                      <p className="text-2xs sm:text-xs md:text-sm text-emerald-800 leading-relaxed">
                        {explanation}
                      </p>
                    ) : (
                      <p className="text-2xs sm:text-xs text-emerald-700">
                        Option {correctAnswer} is the correct answer. You can try other options if you wish to explore.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-2.5 sm:gap-3 animate-feedback-reveal">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5 animate-pop-in" />
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-xs sm:text-sm md:text-base">
                      Not quite. The correct answer is {correctAnswer}.
                    </p>
                    <p className="text-2xs sm:text-xs text-rose-700 flex items-center gap-1.5 pt-0.5">
                      <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                      Attempts are unlimited. You can click another option to try again!
                    </p>
                    {explanation && (
                      <p className="text-2xs sm:text-xs text-rose-800 pt-1 leading-relaxed">
                        {explanation}
                      </p>
                    )}
                  </div>
                </div>
              )
            ) : (
              <div className="p-2.5 text-center text-2xs sm:text-xs text-slate-400 italic">
                Click an option above for immediate feedback. Attempts are unlimited.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
