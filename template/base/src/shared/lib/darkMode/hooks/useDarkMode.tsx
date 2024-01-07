import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateDarkMode = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener('change', updateDarkMode);
    };
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export { useDarkMode };
