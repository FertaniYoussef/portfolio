import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0); // Track which text is being typed
  const [typedText, setTypedText] = useState(''); // Track the current text being typed
  const fullTexts = [
    "Hi, my name is", 
    "Youssef Fertani.", 
    "I build things for the web.",
    "I'm a software engineer specializing in building websites and machine learning models. Currently, studying my last semester at 3IL."
  ]; // Full texts to type out one after the other

  useEffect(() => {
    let currentText = fullTexts[textIndex]; // Get the current text based on the index
    let currentIndex = 0; // Start typing from the first character
    
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + currentText[currentIndex]);
      currentIndex++;

      if (currentIndex === currentText.length) {
        clearInterval(typingInterval); // Stop typing when the current text is fully typed
        
        // Move to the next text after a short delay
        if (textIndex < fullTexts.length - 1) {
          setTimeout(() => {
            setTypedText(''); // Clear the typed text
            setTextIndex((prevIndex) => prevIndex + 1); // Move to the next text
          }, 100); // 1 second delay between each section
        }
      }
    }, 45); // Typing speed (in milliseconds)

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, [textIndex]); // Re-run this effect whenever the textIndex changes

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white p-8">
      <div className="max-w-3xl">
        {/* Render each section based on the index */}
        {textIndex >= 0 && (
          <p className="text-[#64ffda] mb-5 text-lg">{textIndex === 0 ? typedText : fullTexts[0]}</p>
        )}
        {textIndex >= 1 && (
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{textIndex === 1 ? typedText : fullTexts[1]}</h1>
        )}
        {textIndex >= 2 && (
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#8892b0]">{textIndex === 2 ? typedText : fullTexts[2]}</h2>
        )}
        {textIndex >= 3 && (
          <p className="text-[#8892b0] mb-8 text-lg max-w-xl">{textIndex === 3 ? typedText : fullTexts[3]}</p>
        )}

        <StyledWrapper>
          <button>MY RESUME</button>
        </StyledWrapper>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
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
`;
