import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsTransitioning(true);
    
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'mode-transition-overlay';
    document.body.appendChild(overlay);

    // Trigger transition animation
    setTimeout(() => {
      overlay.classList.add('active');
    }, 10);

    setTimeout(() => {
      // Toggle theme
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      
      if (newMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      // Remove overlay after transition
      setTimeout(() => {
        overlay.classList.remove('active');
        setTimeout(() => {
          document.body.removeChild(overlay);
          setIsTransitioning(false);
        }, 800);
      }, 800);
    }, 400);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, isTransitioning }}>
      {children}
    </DarkModeContext.Provider>
  );
}; 