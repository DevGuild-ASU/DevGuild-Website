// @ts-check

import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('devguild-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const isLight = theme === 'light';
    document.documentElement.classList.toggle('light', isLight);
    localStorage.setItem('devguild-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      id="themeToggle"
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className={styles.themeIcon} aria-hidden="true">
        {isLight ? '☾' : '☼'}
      </span>
      <span className={styles.themeLabel}>
        {isLight ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
