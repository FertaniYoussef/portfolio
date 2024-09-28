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
  // Add more skills as needed
];

export default function SkillsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
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
    <section className="py-16 my-auto" id="skills">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-[#64ffda] text-center uppercase ">My Knowledge</h2>
        <div className="overflow-hidden  rounded-lg">
          <Slider {...settings}>
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col items-center bg-white rounded-full h-24 w-24">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-20 h-20 object-contain mb-2 my-auto "
                    
                  />
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}