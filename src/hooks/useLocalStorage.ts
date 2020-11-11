import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T, resetLocalStorage: boolean = false) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return !item || resetLocalStorage ? initialValue : JSON.parse(item);
    } catch (error) {
      return initialValue;
    }
  });

  // local storage is automatically set when state is updated.
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};