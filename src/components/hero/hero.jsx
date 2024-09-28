import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, my name is";

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

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white p-8">
      <StyledWrapper>
        <div className="max-w-3xl">
          <p className="text-[#64ffda] mb-5 text-lg">
            {typedText}
            {showCursor && <span className="cursor">|</span>} {/* Show cursor */}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Youssef Fertani.</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#8892b0]">
            I build things for the web.
          </h2>
          <p className="text-[#8892b0] mb-8 text-lg max-w-xl">
            I'm a software engineer specializing in building websites and machine learning models. Currently, studying my last semester at {' '}
            <span className="text-[#64ffda]">3IL</span>.
          </p>
          <StyledWrapper>
            <button>MY RESUME</button>
          </StyledWrapper>
        </div>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
 .card {
  width: 190px;
  height: 254px;
  position: relative;
  background: #f5f5f5;
  color: #252525;
  border-radius: 4px;
  overflow: hidden;
  line-height: 150%;
  box-shadow: 0px 10px 20px rgba(80, 80, 80, 0.2);
  transition: box-shadow .3s ease-in-out;
}

.card-info {
  position: absolute;
  bottom: 1em;
  width: 100%;
  text-align: center;
}

/* Image */
.card-img {
  background: #00ff88;
  background: linear-gradient(to top, #00ff88, #61efff);
  height: 100%;
  width: 100%;
  position: absolute;
  transition: transform .3s ease-in-out;
  z-index: 2;
}

/* Buttons */
.social-media {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  transform: translateY(-6em);
  z-index: 3;
}

.social-media li {
  background: #f5f5f5;
  display: inline-flex;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: all .3s ease-in;
}
/* Icons */
.social-media li svg {
  --size: 24px;
  width: var(--size);
  height: var(--size);
  fill: #252525;
}

/* Texts */
.title {
  font-size: 1.5em;
  font-weight: bold;
}

.subtitle {
  letter-spacing: 1px;
  font-size: 0.9em;
}


/* Hovers */
.card:hover {
  box-shadow: 0px 15px 30px rgba(80, 80, 80, 0.3);
}

.card:hover .card-img {
  transform: translateY(-5em);
}

.card:hover .social-media li {
  transform: translateY(-5%);
  opacity: 1;
}

.card:hover .social-media li:nth-child(1) {
  transition-delay: 0s;
}

.card:hover .social-media li:nth-child(2) {
  transition-delay: .1s;
}

.card:hover .social-media li:nth-child(3) {
  transition-delay: .2s;
}
  button {
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge #64ffda;
    outline: none;
    background-color: #0a192f;
    color: white;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  button::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #0a192f;
    transition: 0.5s;
    transform-origin: center;
  }

  button::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #0a192f;
    transition: 0.5s;
  }

  button:hover::before, button:hover::after {
    transform: scale(0);
  }

  button:hover {
    box-shadow: inset 0px 0px 25px #64ffda;
  }
 .cursor {
   
    background-color: #64ffda;
    width: 1px;
    height: 1px;
    
    margin-left: 2px;
    animation: blink 1s steps(2, start) infinite;
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;
