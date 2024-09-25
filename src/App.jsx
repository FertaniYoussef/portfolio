import React, { useState, useEffect } from 'react';
import TopMenu from './components/topmenu/topmenu';
import HeroSection from './components/hero/hero';
import Loader from './components/loader/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // State to handle fade-in for the content

  useEffect(() => {
    // Start fade-out of loader after 2 seconds
    const loaderTimer = setTimeout(() => {
      setFadeOut(true);
      
      const fadeTimer = setTimeout(() => {
        setIsLoading(false); // Hide loader after fade-out
        setTimeout(() => {
          setFadeIn(true); // Start fade-in after a slight delay
        }, 100); // Small delay to make fade-in smoother
      }, 1000); // 1 second fade-out duration for loader
      
      return () => clearTimeout(fadeTimer);
    }, 2000); // 2 seconds for the loader display

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className="App bg-[#0a192f] min-h-screen">
      {isLoading ? (
        <div 
          className={`flex items-center justify-center h-screen transition-opacity duration-1000 ease-in-out ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
          aria-live="polite"
          aria-busy={isLoading}
        >
          <Loader />
        </div>
      ) : (
        <header  
          className={`App-header relative transition-opacity duration-1000 ease-in-out ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <TopMenu />
          <main>
            <HeroSection />
          </main>
        </header>
      )}
    </div>
  );
}

export default App;
