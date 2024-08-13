import { useState, useEffect, Dispatch } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, Dispatch<T>] {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    try {
      return item !== null ? JSON.parse(item) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
