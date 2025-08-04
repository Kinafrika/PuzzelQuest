import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

export function useTheme() {
  const { theme, setTheme, currentUser } = useGameStore();

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply accessibility preferences
    if (currentUser?.preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (currentUser?.preferences.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply font size
    if (currentUser?.preferences.fontSize) {
      root.classList.remove('text-sm', 'text-base', 'text-lg');
      if (currentUser.preferences.fontSize === 'small') root.classList.add('text-sm');
      else if (currentUser.preferences.fontSize === 'large') root.classList.add('text-lg');
      else root.classList.add('text-base');
    }
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      };

      // Set initial theme
      if (mediaQuery.matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, currentUser?.preferences]);

  return { theme, setTheme };
}