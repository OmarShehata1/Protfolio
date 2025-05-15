import { createContext, useContext, useState, useEffect } from 'react';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  COLORFUL: 'colorful',
  CYBERPUNK: 'cyberpunk',
  NATURE: 'nature',
  MINIMALIST: 'minimalist',
};

const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      return savedTheme;
    }
    
    // Use system preference as default
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK;
    }
    
    return THEMES.LIGHT;
  });

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove(...Object.values(THEMES));
    // Add current theme class
    document.documentElement.classList.add(theme);
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      // Cycle through themes
      switch (prevTheme) {
        case THEMES.LIGHT:
          return THEMES.DARK;
        case THEMES.DARK:
          return THEMES.COLORFUL;
        case THEMES.COLORFUL:
          return THEMES.CYBERPUNK;
        case THEMES.CYBERPUNK:
          return THEMES.NATURE;
        case THEMES.NATURE:
          return THEMES.MINIMALIST;
        case THEMES.MINIMALIST:
          return THEMES.LIGHT;
        default:
          return THEMES.LIGHT;
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext; 