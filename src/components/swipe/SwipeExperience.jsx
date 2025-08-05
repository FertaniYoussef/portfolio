import React, { useState, useRef, useEffect } from 'react';
import me from '../../images/me.jpg';

const skillCards = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "React, Node.js, Express, MongoDB, Next.js",
    icon: "💻",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    description: "Python, TensorFlow, LLMs, NLP, Machine Learning",
    icon: "🤖",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Enterprise Development",
    description: "Java, Spring Boot, .NET, C#, SQL",
    icon: "🏢",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "DevOps & Cloud",
    description: "Docker, Kubernetes, CI/CD, Git, AWS",
    icon: "☁️",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Tailwind CSS, Responsive Design, User Experience",
    icon: "🎨",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Database & APIs",
    description: "PostgreSQL, REST APIs, GraphQL, Data Modeling",
    icon: "🗄️",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function SwipeExperience({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const startY = useRef(0);
  const currentY = useRef(0);

  const handleStart = (e) => {
    if (isAnimating) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startX.current = clientX;
    currentX.current = clientX;
    startY.current = clientY;
    currentY.current = clientY;
  };

  const handleMove = (e) => {
    if (!isDragging || isAnimating) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    currentX.current = clientX;
    currentY.current = clientY;
    const deltaX = currentX.current - startX.current;
    const deltaY = currentY.current - startY.current;
    
    // Only allow horizontal swiping
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
      if (cardRef.current) {
        cardRef.current.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.1}deg)`;
        cardRef.current.style.opacity = Math.max(0.5, 1 - Math.abs(deltaX) / 200);
      }
    }
  };

  const handleEnd = () => {
    if (!isDragging || isAnimating) return;
    setIsDragging(false);
    
    const deltaX = currentX.current - startX.current;
    const threshold = 100;

    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? 'right' : 'left';
      handleSwipe(direction);
    } else {
      // Reset card position
      if (cardRef.current) {
        cardRef.current.style.transform = 'translateX(0px) rotate(0deg)';
        cardRef.current.style.opacity = 1;
      }
    }
  };

  const handleKeyDown = (e) => {
    if (isAnimating) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleSwipe('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleSwipe('right');
    }
  };

  const handleSwipe = (direction) => {
    setIsAnimating(true);
    setSwipeDirection(direction);

    if (direction === 'right') {
      // Match! Add to matches and continue
      const currentSkill = skillCards[currentIndex];
      setMatches(prev => [...prev, currentSkill]);
    }

    // Always move to next card after a short delay
    setTimeout(() => {
      nextCard();
    }, 500);
  };

  const nextCard = () => {
    setSwipeDirection(null);
    setIsAnimating(false);
    
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateX(0px) rotate(0deg)';
      cardRef.current.style.opacity = 1;
    }

    if (currentIndex < skillCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // All cards swiped - go to match screen
      setTimeout(() => {
        onComplete(matches);
      }, 500);
    }
  };

  const currentCard = skillCards[currentIndex];

  if (!currentCard) return null;

  return (
    <div 
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Tinder-style Card */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <div 
          ref={cardRef}
          className={`relative w-full max-w-sm h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
            isAnimating ? 'pointer-events-none' : ''
          }`}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          {/* Card Image */}
          <div className="relative h-full">
            <img 
              src={currentCard.image} 
              alt={currentCard.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Card Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">{currentCard.title}</h2>
              <p className="text-lg opacity-90 mb-2">{currentCard.category}</p>
              <p className="text-sm opacity-80">{currentCard.description}</p>
            </div>

            {/* Swipe Animation Overlay */}
            {swipeDirection && (
              <div className={`absolute inset-0 flex items-center justify-center text-8xl font-bold ${
                swipeDirection === 'right' ? 'text-green-500' : 'text-red-500'
              }`}>
                {swipeDirection === 'right' ? '♥' : '✗'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tinder-style Bottom Action Bar */}
      <div className="bg-white dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center items-center space-x-4">
          {/* Rewind Button */}
          <button className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>

          {/* Pass Button */}
          <button 
            onClick={() => handleSwipe('left')}
            className="w-14 h-14 bg-white dark:bg-gray-800 border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Super Like Button */}
          <button className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-blue-400 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </button>

          {/* Like Button */}
          <button 
            onClick={() => handleSwipe('right')}
            className="w-14 h-14 bg-white dark:bg-gray-800 border-2 border-green-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>

          {/* Boost Button */}
          <button className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {currentIndex + 1} of {skillCards.length}
        </span>
      </div>
    </div>
  );
} 