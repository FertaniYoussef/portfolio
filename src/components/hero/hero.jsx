import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cv from '../../pdf/cv.pdf';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
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

  const handleResumeClick = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when close button is clicked
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white p-8">
      <StyledWrapper>
        <div className="max-w-3xl">
          <p className="text-[#64ffda] mb-5 text-lg">
            {typedText}
            {showCursor && <span className="cursor">|</span>}
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
            <button className='resume' onClick={handleResumeClick}>MY RESUME</button>
          </StyledWrapper>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal>
            <div className="modal-content">
              <button className="text-red-500 font-bold text-right w-full" onClick={closeModal}>X</button>
              <iframe
                src= {cv} // Replace with the actual path to your PDF file
                width="100%"
                height="100%"
                title="Resume PDF"
              />
            </div>
          </Modal>
        )}
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  /* Your existing styles... */
  
  .resume {
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

  .resume::after {
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

  .resume::before {
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

  .resume:hover::before, button:hover::after {
    transform: scale(0);
  }

  .resume:hover {
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    max-width: 80%;
    max-height: 80%;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  iframe {
    width: 100%;
    height: 500px;
    border: none;
  }
`;
