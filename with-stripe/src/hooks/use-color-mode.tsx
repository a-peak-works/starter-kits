import { useState, useEffect } from 'react';

// Custom hook to detect the user's preferred color scheme
export const useColorMode = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(() =>
    typeof window === 'undefined'
      ? 'light'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  );

  useEffect(() => {
    if (!typeof window) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) =>
      setColorMode(event.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return colorMode;
};
