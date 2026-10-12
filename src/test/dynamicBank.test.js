import { describe, it, expect } from 'vitest';
import { questions } from '../data/questions';

describe('Dynamic Question Bank Expansion Test', () => {
  it('Verifies dynamic extensibility: adding Q121 dynamically', () => {
    const originalCount = questions.length;
    expect(originalCount).toBe(120);

    const sampleQ121 = {
      id: 121,
      week: 12,
      topic: "Advanced Strategy, Technology and Cases",
      question: "What is an architectural innovation?",
      options: [
        { id: "A", text: "Changes only the core components" },
        { id: "B", text: "Reconfigures the linkages between existing components" },
        { id: "C", text: "Eliminates all existing components" },
        { id: "D", text: "Only lowers price" }
      ],
      correctAnswer: "B",
      explanation: "Architectural innovation reconfigures the way in which components and subsystems are linked together."
    };

    // Temporarily add to questions array
    questions.push(sampleQ121);

    expect(questions.length).toBe(121);
    expect(questions[120].id).toBe(121);
    expect(questions[120].correctAnswer).toBe("B");

    // Clean up immediately
    questions.pop();
    expect(questions.length).toBe(120);
  });
});
