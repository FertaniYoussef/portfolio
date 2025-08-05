import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';

const RotatingColumn = () => {
  const { isDarkMode } = useDarkMode();
  const [rotation, setRotation] = useState(0);
  const [visibleTechs, setVisibleTechs] = useState([]);
  const sectionRef = useRef(null);
  const columnRef = useRef(null);

  const technologies = [
    { name: "React", category: "Frontend", color: "blue" },
    { name: "Node.js", category: "Backend", color: "green" },
    { name: "Python", category: "AI/ML", color: "yellow" },
    { name: "MongoDB", category: "Database", color: "green" },
    { name: "TensorFlow", category: "AI/ML", color: "orange" },
    { name: "PostgreSQL", category: "Database", color: "blue" },
    { name: "Next.js", category: "Frontend", color: "black" },
    { name: "Express", category: "Backend", color: "gray" },
    { name: "SAP", category: "Enterprise", color: "blue" },
    { name: "AWS", category: "Cloud", color: "orange" },
    { name: "Docker", category: "DevOps", color: "blue" },
    { name: "Git", category: "Version Control", color: "orange" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight));
        const newRotation = scrollProgress * 360;
        setRotation(newRotation);
        
        // Show/hide technologies based on scroll progress
        const targetTechCount = Math.floor(scrollProgress * technologies.length);
        setVisibleTechs(technologies.slice(0, targetTechCount));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [technologies]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      style={{ height: `${technologies.length * 100}vh` }}
    >
      {/* Sticky container for column */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          {/* Section title */}
          <div className="absolute top-8 left-8 z-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Scroll to rotate and discover
            </p>
          </div>

          {/* 3D Column Container */}
          <div className="relative flex items-center justify-center h-full">
            {/* Column */}
            <div 
              ref={columnRef}
              className="relative w-32 h-96 perspective-1000"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Ionic Column Design */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-200 dark:from-amber-800 dark:via-amber-700 dark:to-amber-800 rounded-lg shadow-2xl">
                {/* Column Base */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-amber-300 dark:bg-amber-600 rounded-b-lg"></div>
                
                {/* Column Capital */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-amber-300 dark:bg-amber-600 rounded-t-lg"></div>
                
                {/* Column Flutes */}
                <div className="absolute inset-2 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-100 dark:from-amber-700 dark:via-amber-600 dark:to-amber-700 rounded-md">
                  {/* Vertical lines for flutes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-0 bottom-0 w-px bg-amber-300 dark:bg-amber-500"
                      style={{ left: `${(i + 1) * 12.5}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Technology Cards */}
            {visibleTechs.map((tech, index) => {
              const angle = (index * 360) / technologies.length;
              const radius = 300;
              const x = Math.cos((angle + rotation) * Math.PI / 180) * radius;
              const z = Math.sin((angle + rotation) * Math.PI / 180) * radius;
              
              return (
                <div
                  key={tech.name}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px)`,
                    opacity: visibleTechs.includes(tech) ? 1 : 0,
                    scale: visibleTechs.includes(tech) ? 1 : 0.8
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 min-w-32">
                    <div className="text-center">
                      <div className={`w-8 h-8 mx-auto mb-2 rounded-full bg-${tech.color}-500 flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rotation indicator */}
          <div className="absolute bottom-8 right-8 z-10">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {Math.round(rotation)}°
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {visibleTechs.length} / {technologies.length} technologies
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-sm font-medium">Scroll to rotate</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingColumn; 