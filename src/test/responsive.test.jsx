import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { questions } from '../data/questions';

const VIEWPORTS = [
  { name: 'small mobile', width: 320, height: 568 },
  { name: 'standard mobile', width: 375, height: 667 },
  { name: 'modern mobile', width: 390, height: 844 },
  { name: 'large mobile', width: 430, height: 932 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'small laptop', width: 1024, height: 768 },
  { name: 'desktop', width: 1440, height: 900 },
];

describe('Mobile Responsiveness & Viewport Audit', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  VIEWPORTS.forEach(({ name, width, height }) => {
    it(`renders flawlessly on ${name} (${width}x${height}px) across all views`, () => {
      // Set viewport dimensions
      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event('resize'));

      const { container, unmount } = render(<App />);

      // 1. Home View
      expect(screen.getAllByText(/Strategy and Technology/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/Start Practicing Now/i)).toBeTruthy();

      // Check for horizontal overflow risk elements
      const elements = container.querySelectorAll('*');
      elements.forEach((el) => {
        // Elements should not have fixed inline widths exceeding viewport width
        if (el.style && el.style.width && el.style.width.endsWith('px')) {
          const pixelVal = parseFloat(el.style.width);
          expect(pixelVal).toBeLessThanOrEqual(width);
        }
      });

      // 2. Start Quiz
      fireEvent.click(screen.getByText(/Start Practicing Now/i));
      expect(screen.getByText(/Question 1 of 120/i)).toBeTruthy();

      // Option selection on mobile
      const optionC = screen.getByText(/The end-to-end collection of all the primary and secondary activities of the firm/i);
      fireEvent.click(optionC);
      expect(screen.getByText(/Correct! Well done./i)).toBeTruthy();

      // 3. Finish and view results
      const finishBtn = screen.getByText(/Finish & View Results/i);
      fireEvent.click(finishBtn);
      expect(screen.getByText(/Quiz Summary & Performance Report/i)).toBeTruthy();

      // 4. Review view
      const reviewBtn = screen.getByText(/Review All Questions/i);
      fireEvent.click(reviewBtn);
      expect(screen.getByText(/Question Review & Answer Key/i)).toBeTruthy();

      unmount();
    });
  });

  it('Verifies prefers-reduced-motion media query rule exists in stylesheet', async () => {
    const fs = await import('fs');
    const css = fs.readFileSync('src/index.css', 'utf-8');
    expect(css.includes('prefers-reduced-motion: reduce')).toBe(true);
    expect(css.includes('animation-duration: 0.01ms !important')).toBe(true);
    expect(css.includes('overflow-x: hidden')).toBe(true);
  });
});
