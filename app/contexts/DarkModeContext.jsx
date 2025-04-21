// DarkModeContext.js
import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}