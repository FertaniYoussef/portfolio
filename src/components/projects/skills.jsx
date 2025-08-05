import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tf from '../../images/tf.png';
import mongodb from '../../images/Mongodb.png';
import next from '../../images/next.png';
import java from '../../images/java.png';
import react from '../../images/react.png';
import express from '../../images/express.png';
import python from '../../images/python.png';
import csharp from '../../images/csharp.png';

const skills = [
  { name: 'TensorFlow', image: tf },
  { name: 'React', image: react },
  { name: 'Next.js', image: next },
  { name: 'MongoDB', image: mongodb },
  { name: 'Express', image: express },
  { name: 'C#', image: csharp },
  { name: 'Python', image: python },
  { name: 'Java', image: java },
];

export default function SkillsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16" id="skills">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-accent text-center tracking-wide roman-accent">
          Technologies & Skills
        </h2>
        
        <div className="overflow-hidden rounded-2xl bg-light/50 border border-light p-8">
          <Slider {...settings}>
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="px-4">
                <div className="group flex flex-col items-center justify-center bg-light rounded-xl p-6 border border-light hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-roman card-hover">
                  <div className="relative w-16 h-16 mb-4">
                    <img 
                      src={skill.image} 
                      alt={skill.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-secondary text-sm font-medium text-center group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}