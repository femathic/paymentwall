import { useEffect, useState } from 'react';

const getSavedValue = (key : string, initialValue: any) => {
  const savedValue = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '') : null;

  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

export default function useLocalStorage(key: string, initialValue : any) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value, key]);

  return ([value, setValue]);
}
