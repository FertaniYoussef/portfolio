import React, { useState, useEffect } from 'react';
import cv from '../../pdf/cv.pdf';
import me from '../../images/me.jpg';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    "AI Engineer",
    "Software Engineer", 
    "UX Designer",
    "Machine Learning Specialist",
    "Full-Stack Developer"
  ];

  const fullText = "Hello, I'm";

  useEffect(() => {
    let timeouts = [];

    const typeText = (text, delay) => {
      for (let i = 0; i <= text.length; i++) {
        const timeout = setTimeout(() => {
          setTypedText(text.slice(0, i));
        }, delay * i);
        timeouts.push(timeout);
      }
    };

    typeText(fullText, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Role rotation
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(cursorInterval);
      clearInterval(roleInterval);
    };
  }, [roles.length]);

  const handleResumeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-4 sm:p-6 lg:p-8 pt-20 sm:pt-24 lg:pt-32 relative overflow-hidden">
      {/* Animated Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/5 dark:bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-emerald-500/3 to-teal-500/3 dark:from-emerald-400/3 dark:to-teal-400/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Tech Icons - Mobile Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {['🧠', '⚛️', '🐍', '⚡', '🎨', '☁️'].map((icon, index) => (
          <div
            key={index}
            className="absolute text-2xl sm:text-4xl opacity-10 animate-float"
            style={{
              left: `${15 + index * 15}%`,
              top: `${25 + (index % 2) * 40}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content - Mobile Optimized */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 dark:border-teal-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm sm:text-lg font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                {typedText}
                {showCursor && <span className="animate-pulse">|</span>}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white">
              Youssef
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Fertani
              </span>
            </h1>
            
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                I'm a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">
                  {roles[currentRole]}
                </span>
              </h2>
                             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                 Fresh Software Engineering graduate passionate about creating innovative solutions that bridge the gap between AI and modern web development. 
                 I specialize in building intelligent applications with optimized performance and exceptional user experiences.
               </p>
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">Bac+5</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Education</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">6+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={handleResumeClick}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                View Resume
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Column - Image - Mobile Optimized */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={me}
                    alt="Youssef Fertani"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements - Mobile Optimized */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl animate-bounce">
                  🚀
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-base sm:text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                  ⚛️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal - Mobile Optimized */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Download Resume
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                Click the button below to download my resume
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={cv}
                  download
                  className="flex-1 px-4 py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-sm sm:text-base"
                >
                  Download PDF
                </a>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
