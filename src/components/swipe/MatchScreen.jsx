import React, { useState, useEffect } from 'react';
import me from '../../images/me.jpg';

export default function MatchScreen({ matches, onEnterPortfolio }) {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Animate content appearance
    setTimeout(() => setShowContent(true), 500);
    setTimeout(() => setShowButton(true), 2000);
    
    // Auto redirect after 4 seconds
    const redirectTimer = setTimeout(() => {
      onEnterPortfolio();
    }, 4000);

    return () => clearTimeout(redirectTimer);
  }, [onEnterPortfolio]);

  // Get the first match only
  const firstMatch = matches[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full relative z-10 text-center">
        {/* Match Animation */}
        <div className={`transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          {/* Tinder Match Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-2" style={{ 
              fontFamily: 'Brush Script MT, cursive',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              It's a Match!
            </h1>
            <p className="text-white text-lg opacity-90">
              You and Youssef have indicated that you like each other
            </p>
          </div>

          {/* Profile Pictures */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {/* Your Profile */}
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  You
                </div>
              </div>
            </div>

            {/* Youssef's Profile */}
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img 
                  src={me} 
                  alt="Youssef Fertani" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Match Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-white mb-2">
                {firstMatch ? firstMatch.title : 'Full-Stack Development'}
              </div>
              <div className="text-white/80 text-sm">
                {firstMatch ? firstMatch.category : 'Web Development'}
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/90 text-base leading-relaxed">
                Based on your skill requirements, Youssef is the ideal candidate for your team. 
                With expertise in {firstMatch ? firstMatch.title : 'Full-Stack Development'}, 
                he brings both technical excellence and innovative thinking to every project.
              </p>
            </div>
          </div>

          {/* Auto Redirect Message */}
          <div className={`transition-all duration-1000 delay-1000 ${
            showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
              <p className="text-white/80 text-sm">
                Redirecting to portfolio in <span className="font-bold">2 seconds</span>...
              </p>
            </div>
            
            <button
              onClick={onEnterPortfolio}
              className="w-full bg-white text-gray-900 rounded-2xl py-4 font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 transform"
            >
              View Portfolio Now
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-6xl opacity-10 animate-bounce">💕</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-pulse">✨</div>
      <div className="absolute top-1/2 right-10 text-3xl opacity-10 animate-spin">🎉</div>
    </div>
  );
} 