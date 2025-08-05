import React, { useState, useEffect, useRef } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import TopMenu from './components/topmenu/topmenu';
import HeroSection from './components/hero/hero';
import Loader from './components/loader/loader';
import About from './components/about/about';
import Experiences from './components/experiences/experiences.jsx';
import TechnologiesSection from './components/technologies/TechnologiesSection';
import Projects from './components/projects/projects.jsx';
import Footer from './components/footer/footer.jsx';

// Unique floating particles system
function FloatingParticles() {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      const particleCount = 30; // Reduced particle count for better performance
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Reduced velocity
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1, // Reduced size
          opacity: Math.random() * 0.3 + 0.1, // Reduced opacity
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          pulse: Math.random() * Math.PI * 2
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.8 + 0.2 * Math.sin(particle.pulse));
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) { // Reduced connection distance
              ctx.save();
              ctx.globalAlpha = (80 - distance) / 80 * 0.05; // Reduced opacity
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 0.5; // Reduced line width
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}

// Unique magnetic cursor effect
function MagneticCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;

    const updateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      
      const dotDx = mouseX - cursorDotX;
      const dotDy = mouseY - cursorDotY;
      cursorDotX += dotDx * 0.3;
      cursorDotY += dotDy * 0.3;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorDot.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px)`;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      updateCursor();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}

// Unique scroll-triggered animations
function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
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

  return (
    <DarkModeProvider>
      <div className="App bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen relative overflow-x-hidden">
        <FloatingParticles />
        <MagneticCursor />
        <ScrollAnimations />
        
        {isLoading ? (
          <div 
            className={`flex items-center justify-center h-screen transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <Loader />
          </div>
        ) : (
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <TopMenu />
            
            <main className="relative z-10">
              {/* Hero Section */}
              <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <HeroSection />
              </section>
              
              {/* About Section */}
              <section id="about" className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900">
                <About />
              </section>
              
              {/* Experience Section */}
              <section id="experience" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <Experiences />
              </section>
              
              {/* Technologies Section */}
              <section id="technologies" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <TechnologiesSection />
              </section>
              
              {/* Projects Section */}
              <section id="projects" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <Projects />
              </section>
              
              {/* Contact Section */}
              <section id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <Footer />
              </section>
            </main>

            {/* Unique floating navigation */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
              <div className="flex flex-col space-y-4">
                {['hero', 'about', 'experience', 'technologies', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      document.getElementById(section)?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="group relative w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="relative w-full h-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full backdrop-blur-sm group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DarkModeProvider>
  );
}