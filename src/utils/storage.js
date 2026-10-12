/**
 * LocalStorage management utility with versioning and fail-safe error handling.
 */

const STORAGE_KEY = 'strategy_prep_quiz_v2';

export const loadStoredData = (defaultData) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return { ...defaultData, ...parsed };
    }
  } catch (err) {
    console.warn('Failed to load saved quiz session from localStorage:', err);
  }
  return defaultData;
};

export const saveStoredData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('Failed to save quiz session to localStorage:', err);
  }
};

export const clearStoredData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Failed to clear quiz session from localStorage:', err);
  }
};
