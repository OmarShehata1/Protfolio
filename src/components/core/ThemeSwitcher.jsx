import { useTheme } from '../../context/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, toggleTheme, THEMES } = useTheme();
  
  // Define which icon to show based on current theme
  const getThemeIcon = () => {
    switch (theme) {
      case THEMES.LIGHT:
        return <HiSun className="h-5 w-5" />;
      case THEMES.DARK:
        return <HiMoon className="h-5 w-5" />;
      case THEMES.COLORFUL:
        return <IoColorPaletteSharp className="h-5 w-5" />;
      default:
        return <HiSun className="h-5 w-5" />;
    }
  };
  
  // Get the name of the next theme
  const getNextThemeName = () => {
    switch (theme) {
      case THEMES.LIGHT:
        return 'Dark';
      case THEMES.DARK:
        return 'Colorful';
      case THEMES.COLORFUL:
        return 'Light';
      default:
        return 'Light';
    }
  };
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="custom-cursor flex items-center justify-center rounded-full p-2 bg-[rgb(var(--background-alt))] text-[rgb(var(--text))]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${getNextThemeName()} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {getThemeIcon()}
      </motion.div>
    </motion.button>
  );
} 