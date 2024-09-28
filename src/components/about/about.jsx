import React from 'react';
import me from '../../images/me.jpg';
import styled from "styled-components";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0a192f] text-white p-8 cursor-default">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto">
          <StyledWrapper>
            <div className="card">
              <img src={me} alt="Youssef" />
            </div>
          </StyledWrapper>
        </div>
        <div className="flex-1 text-center md:text-left p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#64ffda] mt-8">ABOUT ME</h2>
          <p className="text-base md:text-lg mb-4">
            I'm Youssef, 24 years old, a computer science enthusiast with a passion for both web development and artificial intelligence. I love creating websites that combine sleek design with smart functionality, always aiming to improve user experience. Alongside my love for web tech, I'm exploring how AI can drive innovation in digital solutions. I'm constantly learning and pushing myself to turn creative ideas into impactful, real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
  width: 18rem;
  height: 25rem;
  
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  margin-horizontal: auto;
  margin-bottom:4 rem;
}
.card img {
width:17.26rem;
height: 24.26rem;
border-radius: 10px;
z-index: 1;
object-fit: cover;
margin-bottom: ;
}


.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, #64ffda, white);
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}  
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
`

;