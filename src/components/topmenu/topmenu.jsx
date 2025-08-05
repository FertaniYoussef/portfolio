import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

const TopMenu = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-premium shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-lg lg:text-xl">YF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gradient">Youssef Fertani</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">AI & Software Engineer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'technologies', label: 'Technologies' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-medium"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
                <div className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover-lift group"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover-lift group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-premium">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'technologies', label: 'Technologies' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;