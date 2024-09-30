import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import onlycoach from '../../images/onlycoachlogo.png';
import ids from '../../images/ids.jpeg';
import styled from "styled-components";
import scori from '../../images/scori.jpg';
import consulteradmin from '../../images/consulteradmin.png';
import SkillsCarousel from './skills';

const projects = [
  {
    id: 1,
    title: "OnlyCoach",
    description: "Design of a private coaching website similar to upwork and implemented a back office for the admin and coaches then developped a virtual market for supplement and gym material.",
    image: onlycoach,
    link:"https://github.com/FertaniYoussef/OnlyCoach"
  },
  {
    id: 2,
    title: "IDS with AI",
    description: "Design and implementation of a machine learning model capable of predicting the type of security intrusion into a system using the KDD dataset.",
    image: ids,
    link:"https://colab.research.google.com/drive/1zvtdu50peSK7y3xZukG4JONiUCxkWxiO?usp=sharing"
  },
  {
    id: 3,
    title: "Credit Scoring with AI",
    description: "Design and implementation of a machine learning model capable of predicting a credit score for a client requesting a loan",
    image: scori,
    link:"https://colab.research.google.com/drive/1s65OuS8ikcTZSCcLvTuFude78U7V6_V0?usp=sharing"
  },
  {
    id: 4,
    title: "TechMyService",
    description: "Conceived a Dashboard for a multiservice platform and a gps tracker middleware for the delivery man for the mobile version of the application",
    image: consulteradmin,
    link:"https://github.com/FertaniYoussef/Techmyservice"
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-[#0a192f]" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#64ffda] text-center uppercase ">My Projects</h2>
        <div className="overflow-hidden rounded-lg">
          <Slider {...settings}>
            {[...projects, ...projects].map((project, index) => (
              <div key={`${project.id}-${index}`} className="px-2 cursor-pointer" >
                <div 
                  className="relative rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-contain border border-[#64ffda] rounded-lg"
                    
                  />
                  <div 
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                      <StyledWrapper>
      <a href={project.link} className='no-underline' >See Project</a>
    </StyledWrapper>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div>
   
      <SkillsCarousel/>
      </div>
    </section>
  );
}
const StyledWrapper = styled.div`
  a {
  --color: #64ffda;
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);
}

a:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

a:hover {
  color: #fff;
}

a:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

a:hover:before {
  top: -30px;
  left: -30px;
}

a:active:before {
  background: #3a0ca3;
  transition: background 0s;
}

`;


