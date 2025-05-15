import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme, THEMES } = useTheme();
  
  const themeOptions = [
    { id: THEMES.LIGHT, label: 'Light', emoji: '☀️' },
    { id: THEMES.DARK, label: 'Dark', emoji: '🌙' },
    { id: THEMES.COLORFUL, label: 'Colorful', emoji: '🌈' },
    { id: THEMES.CYBERPUNK, label: 'Cyberpunk', emoji: '🤖' },
    { id: THEMES.NATURE, label: 'Nature', emoji: '🌿' },
    { id: THEMES.MINIMALIST, label: 'Minimalist', emoji: '⬜' }
  ];

  return (
    <div className="theme-switcher-container">
      <div className="flex items-center space-x-4">
        {themeOptions.map(option => (
          <button
            key={option.id}
            onClick={() => setTheme(option.id)}
            className={`theme-option px-3 py-2 rounded-md transition-all duration-300 ${
              theme === option.id ? 'bg-[rgb(var(--accent))] text-[rgb(var(--background))]' : 'bg-[rgb(var(--background-alt))] text-[rgb(var(--text-alt))]'
            }`}
            title={option.label}
            aria-label={`Switch to ${option.label} theme`}
          >
            <span className="mr-2">{option.emoji}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        ))}
      </div>
      
      <div className="theme-preview mt-6">
        <div className="max-w-md mx-auto">
          <div className="card p-6 space-y-4">
            <h4 className="font-bold text-lg">Preview of {themeOptions.find(t => t.id === theme)?.label} Theme</h4>
            <p className="text-[rgb(var(--text-alt))]">This is how text looks in this theme. Colors and styles are applied based on your selection.</p>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 