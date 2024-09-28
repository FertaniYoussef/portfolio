import React, { useState, useEffect, useCallback } from 'react';
import TopMenu from './components/topmenu/topmenu';
import HeroSection from './components/hero/hero';
import Loader from './components/loader/loader';
import About from './components/about/about';
import { useIntersectionObserver } from './customhooks/useIntersectionObserver.ts';
import Experiences from './components/experiences/experiences.jsx';
import Projects from './components/projects/projects.jsx';
import Footer from './components/footer/footer.jsx';

function ScrollReveal({ children, id }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setFadeOut(true);

      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setFadeIn(true);
        }, 100);
      }, 1000);

      return () => clearTimeout(fadeTimer);
    }, 2000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const smoothScroll = useCallback((targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Increase this value to make the scroll slower (e.g., 2000ms)
      let start = null;
  
      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      // Easing function for smooth animation (slightly slower at the start and end)
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').slice(1);
        smoothScroll(targetId);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [smoothScroll]);

  return (
    <div className="App bg-[#0a192f] min-h-screen scroll-smooth">
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
            <ScrollReveal id="hero">
              <HeroSection />
            </ScrollReveal>
            <ScrollReveal id="about">
              <About />
            </ScrollReveal>
            <ScrollReveal id="experience">
              <Experiences />
            </ScrollReveal>
            <ScrollReveal id="projects">
              <Projects />
            </ScrollReveal>
          
          <ScrollReveal id="contact">
            <Footer />
            </ScrollReveal>
          </main>
        </header>
      )}
    </div>
  );
}