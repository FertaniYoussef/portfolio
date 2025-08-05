import React, { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDesktop, 
  FaServer, 
  FaChartBar,
  FaCogs
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiAmazonwebservices, 
  SiTensorflow, 
  SiOpencv, 
  SiGit, 
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiSap
} from 'react-icons/si';

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: FaCogs },
    { id: 'frontend', name: 'Frontend', icon: FaDesktop },
    { id: 'backend', name: 'Backend', icon: FaServer },
    { id: 'ai-ml', name: 'AI/ML', icon: FaChartBar },
    { id: 'tools', name: 'Tools', icon: FaCogs }
  ];

  const technologies = [
    // Frontend
    { name: 'React', icon: FaReact, category: 'frontend', proficiency: 90 },
    { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', proficiency: 85 },
    { name: 'TypeScript', icon: SiTypescript, category: 'frontend', proficiency: 80 },
    { name: 'JavaScript', icon: SiJavascript, category: 'frontend', proficiency: 90 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', proficiency: 85 },
    
    // Backend
    { name: 'Node.js', icon: FaNodeJs, category: 'backend', proficiency: 85 },
    { name: 'Express.js', icon: SiExpress, category: 'backend', proficiency: 80 },
    { name: 'Python', icon: FaPython, category: 'backend', proficiency: 90 },
    { name: 'MongoDB', icon: SiMongodb, category: 'backend', proficiency: 75 },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'backend', proficiency: 70 },
    
    // AI/ML
    { name: 'TensorFlow', icon: SiTensorflow, category: 'ai-ml', proficiency: 85 },
    { name: 'OpenCV', icon: SiOpencv, category: 'ai-ml', proficiency: 80 },
    { name: 'Machine Learning', icon: FaChartBar, category: 'ai-ml', proficiency: 85 },
    { name: 'Deep Learning', icon: FaChartBar, category: 'ai-ml', proficiency: 80 },
    
    // Tools
    { name: 'Git', icon: SiGit, category: 'tools', proficiency: 90 },
    { name: 'Docker', icon: SiDocker, category: 'tools', proficiency: 75 },
    { name: 'AWS', icon: SiAmazonwebservices, category: 'tools', proficiency: 70 },
    { name: 'SAP', icon: SiSap, category: 'tools', proficiency: 65 }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="technologies" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Technologies &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Tools
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            intelligent, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredTechnologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {tech.proficiency}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary - Mobile Optimized */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaDesktop className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Modern UI frameworks and responsive design
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaServer className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Robust server-side development and APIs
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaChartBar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">AI/ML</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Machine learning and intelligent systems
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaCogs className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Tools</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Development tools and cloud platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection; 