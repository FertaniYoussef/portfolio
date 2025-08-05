import React from 'react';
import me from '../../images/me.jpg';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      icon: "🎨"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"],
      icon: "⚙️"
    },
    {
      category: "AI/ML",
      skills: ["TensorFlow", "OpenCV", "RAG", "Machine Learning", "Deep Learning"],
      icon: "🧠"
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "PowerBI", "SAP"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Fresh Graduate with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Passion for Innovation
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-4">
            I'm a passionate Software Engineering graduate with a strong foundation in modern web technologies, 
            AI/ML, and enterprise solutions. My academic and internship journey has equipped me with the skills to create 
            intelligent, scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={me}
                    alt="Youssef Fertani"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Stats - Mobile Optimized */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-emerald-500 flex items-center justify-center">
                  <div className="text-center">
                                       <div className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">Bac+5</div>
                   <div className="text-xs text-gray-600 dark:text-gray-400">Education</div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-teal-500 flex items-center justify-center">
                  <div className="text-center">
                                       <div className="text-sm sm:text-base font-bold text-teal-600 dark:text-teal-400">6+</div>
                   <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                My Journey
              </h3>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                 <p>
                   As a fresh Software Engineering graduate, I've developed a deep passion for creating innovative 
                   solutions that bridge the gap between cutting-edge AI technologies and practical web applications. 
                   My academic background and internship experiences have provided me with a solid foundation in both theoretical concepts and 
                   hands-on implementation.
                 </p>
                <p>
                  I specialize in building intelligent applications with optimized performance, clean code architecture, 
                  and exceptional user experiences. My projects focus on technical excellence and optimization rather 
                  than commercial metrics, ensuring robust and scalable solutions.
                </p>
                <p>
                  I'm always eager to learn new technologies and collaborate on challenging projects that push the 
                  boundaries of what's possible in software development.
                </p>
              </div>
            </div>

            {/* Core Skills - Mobile Optimized */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Core Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl mr-3">{skillGroup.icon}</span>
                      <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 sm:py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;