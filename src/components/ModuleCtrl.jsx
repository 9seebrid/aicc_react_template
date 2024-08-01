import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const ModuleCtrl = () => {
  // const toggleTheme=()=>{}

  const [darkMode, setDarkMode] = useState(false);
  return <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</button>;
};

export default ModuleCtrl;
