import React, { useCallback, useState } from 'react';
import smltp from '../../images/smltp.png';
import fstack from '../../images/fstack.png';
import LR from '../../images/LR.png';
import yaudev from '../../images/yaudev.png';

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    job: "SMLTP",
    description: "Conceived a facial recognition desktop software.",
    date: "June 2021 - July 2021",
    image: smltp,
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    job: "FullStack by Smart Touch",
    description: "Conceived a Dashboard for a multiservice platform with full back-office management.",
    date: "February 2022 - June 2022",
    image: fstack,
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    job: "Lasting Recruitment",
    description: "Development of a web application for the company with front office and back office.",
    date: "July 2023 - August 2023",
    image: LR,
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    job: "Yaudev",
    description: "Development of a web application for the client HORECA FORMA BE PRO using multiple techniques and technologies.",
    date: "July 2024 - August 2024",
    image: yaudev,
  }
];

export default function Experiences() {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useCallback((node) => {
    if (node !== null) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // Stop observing once visible
        }
      }, { threshold: 0.1 });

      observer.observe(node);
    }
  }, []);

  

  return (
    <div ref={sectionRef} className="py-16 bg-[#0a192f]" id="experiences">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 uppercase text-center text-[#64ffda]">My Experiences</h2>
        <div className="relative">
          {/* Timeline */}
          <div
            className={`absolute left-1/2 w-0.5 bg-[#64ffda] transform -translate-x-1/2 transition-all duration-1000 ease-out ${
              isVisible ? 'h-full' : 'h-0'
            }`}
          ></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col md:flex-row items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } transition-all duration-1000 ease-out`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 0.5}s`,
              }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-right md:pr-8' : 'md:pl-8'} px-4`}>
                <div className="md:w-2/3 mx-auto">
                  <h3 className="text-lg md:text-xl font-semibold text-[#64ffda]">{exp.title}</h3>
                  <h4 className="text-sm md:text-lg text-[#95e6d3]">{exp.job}</h4>
                  <p className="text-sm  text-white md:text-wrap">{exp.description}</p>
                  <p className="text-xs md:text-sm text-white mt-1">{exp.date}</p>
                </div>
              </div>
              <div className="w-full md:w-1/4 px-4 mt-4 md:mt-0">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-black rounded-full border-2 border-[#64ffda] z-10">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className={`w-full h-full rounded-full object-contain`} // Apply object-fit conditionally
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
