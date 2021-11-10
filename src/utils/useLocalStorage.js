import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    const parsedItem = JSON.parse(item);

    return parsedItem || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
