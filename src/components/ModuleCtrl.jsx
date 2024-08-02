import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import './navbar.css';

const ModuleCtrl = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className="mode_btn dark:bg-neutral-300 dark:text-neutral-950 bg-neutral-950 text-neutral-300 p-1 ml-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ModuleCtrl;
