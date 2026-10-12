import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { questions } from '../data/questions';

describe('Strategy and Technology MCQ Practice Application', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('1. Question bank integrity: verifies all 120 questions have unique IDs, 4 options, and correct answers', () => {
    expect(questions.length).toBe(120);

    const ids = new Set();
    questions.forEach((q, index) => {
      expect(q.id).toBe(index + 1);
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);

      expect(q.options.length).toBe(4);
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
      expect(q.question).toBeTruthy();
      expect(q.week).toBeGreaterThanOrEqual(1);
      expect(q.topic).toBeTruthy();
    });

    // Check screenshot questions Q111-120
    const q111to120Answers = questions.slice(110).map((q) => q.correctAnswer);
    expect(q111to120Answers).toEqual(['B', 'B', 'D', 'C', 'B', 'B', 'C', 'B', 'C', 'C']);
  });

  it('2. Homepage displays correctly with 120 questions and subject title', () => {
    render(<App />);

    expect(screen.getAllByText(/Strategy and Technology/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/A Practical Primer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/120 MCQs/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Start Practicing Now/i)).toBeTruthy();
  });

  it('3. Practice Mode: evaluates Question 1, handles incorrect answer, allows unlimited retry to correct answer', () => {
    render(<App />);

    // Click "Start Practicing Now"
    const startButton = screen.getByText(/Start Practicing Now/i);
    fireEvent.click(startButton);

    // Q1 should be visible
    expect(screen.getByText(/A definition of Value Chain of a firm is:/i)).toBeTruthy();
    expect(screen.getByText(/Question 1 of 120/i)).toBeTruthy();

    // Q1 Correct answer is C. Let's first click A (incorrect)
    const optionA = screen.getByText(/The end-to-end collection of only the primary activities of the firm/i);
    fireEvent.click(optionA);

    // Should display red feedback indicating incorrect and showing correct answer C
    expect(screen.getByText(/Not quite. The correct answer is C./i)).toBeTruthy();

    // Now try again with Option C (Correct!)
    const optionC = screen.getByText(/The end-to-end collection of all the primary and secondary activities of the firm/i);
    fireEvent.click(optionC);

    // Feedback should now be updated to green correct
    expect(screen.getByText(/Correct! Well done./i)).toBeTruthy();
    expect(screen.getAllByText(/Mastered/i).length).toBeGreaterThan(0);
  });

  it('4. Navigation preserves state when moving between questions', () => {
    render(<App />);

    // Start practice
    fireEvent.click(screen.getByText(/Start Practicing Now/i));

    // Answer Q1 with C
    const optionC = screen.getByText(/The end-to-end collection of all the primary and secondary activities of the firm/i);
    fireEvent.click(optionC);
    expect(screen.getByText(/Correct! Well done./i)).toBeTruthy();

    // Click Next Question -> moves to Q2
    const nextBtn = screen.getByText(/Next Question/i);
    fireEvent.click(nextBtn);

    expect(screen.getByText(/Question 2 of 120/i)).toBeTruthy();
    expect(screen.getByText(/Which of the following is not an external threat for a typical company\?/i)).toBeTruthy();

    // Click Previous -> moves back to Q1
    const prevBtn = screen.getByText(/Previous/i);
    fireEvent.click(prevBtn);

    expect(screen.getByText(/Question 1 of 120/i)).toBeTruthy();
    // Selection and correct feedback should still be present!
    expect(screen.getByText(/Correct! Well done./i)).toBeTruthy();
  });

  it('5. Direct navigation to questions 1, 60, and 120 via Question Navigator', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Start Practicing Now/i));

    // Find navigator button for Question 60
    const btn60 = screen.getByRole('button', { name: /Question 60/i });
    fireEvent.click(btn60);

    expect(screen.getByText(/Question 60 of 120/i)).toBeTruthy();
    expect(screen.getByText(/In the concept of retrofuturism/i)).toBeTruthy();

    // Jump to Question 120
    const btn120 = screen.getByRole('button', { name: /Question 120/i });
    fireEvent.click(btn120);

    expect(screen.getByText(/Question 120 of 120/i)).toBeTruthy();
    expect(screen.getByText(/Which of the following best describes an oligopoly\?/i)).toBeTruthy();
    // On the last question, Next should be replaced by "Complete Quiz"
    expect(screen.getByText(/Complete Quiz/i)).toBeTruthy();
  });

  it('6. Results screen calculates values dynamically from session attempts', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Start Practicing Now/i));

    // Answer Q1 correctly (Option C)
    const optionC = screen.getByText(/The end-to-end collection of all the primary and secondary activities of the firm/i);
    fireEvent.click(optionC);

    // Click Finish & View Results
    const finishBtn = screen.getByText(/Finish & View Results/i);
    fireEvent.click(finishBtn);

    // Verify Results screen
    expect(screen.getByText(/Quiz Summary & Performance Report/i)).toBeTruthy();
    expect(screen.getByText(/1 of 120 Questions Mastered/i)).toBeTruthy();
    expect(screen.getByText(/Review All Questions/i)).toBeTruthy();
  });

  it('7. Reset Progress clears session state properly', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Start Practicing Now/i));

    // Answer Q1
    const optionC = screen.getByText(/The end-to-end collection of all the primary and secondary activities of the firm/i);
    fireEvent.click(optionC);

    // Open Reset modal
    const resetHeaderBtn = screen.getByTitle(/Reset session progress/i);
    fireEvent.click(resetHeaderBtn);

    expect(screen.getByText(/Reset Session Progress\?/i)).toBeTruthy();

    // Confirm reset
    const confirmBtn = screen.getByText(/Yes, Reset All Progress/i);
    fireEvent.click(confirmBtn);

    // Should return to homepage with 0 mastered
    expect(screen.getByText(/0 \/ 120/i)).toBeTruthy();
  });

  it('8. Test Mode: answer selection without instant feedback and submission evaluation', () => {
    render(<App />);

    // Select Test Mode on Home Screen
    const testModeBtn = screen.getByText(/Test Mode/i);
    fireEvent.click(testModeBtn);

    // Start practice in Test Mode
    fireEvent.click(screen.getByText(/Start Practicing Now/i));

    expect(screen.getAllByText(/Test Mode/i).length).toBeGreaterThan(0);

    // Click Option C for Q1
    const optionC = screen.getByText(/The end-to-end collection of all the primary and secondary activities of the firm/i);
    fireEvent.click(optionC);

    // Verify instant feedback like "Correct! Well done." is NOT shown in Test Mode
    expect(screen.queryByText(/Correct! Well done./i)).toBeNull();
    expect(screen.getByText(/Option C selected./i)).toBeTruthy();

    // Click "Submit Test"
    const submitBtn = screen.getByText(/Submit Test/i);
    fireEvent.click(submitBtn);

    // In modal, confirm submission
    const confirmSubmitBtn = screen.getByText(/Submit Test Now/i);
    fireEvent.click(confirmSubmitBtn);

    // Results screen should show evaluated answers
    expect(screen.getByText(/Quiz Summary & Performance Report/i)).toBeTruthy();
    expect(screen.getByText(/1 of 120 Questions Mastered/i)).toBeTruthy();
  });
});
