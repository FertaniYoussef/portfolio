import React, { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaWordpress, 
  FaDocker, 
  FaAws,
  FaChartBar,
  FaCogs
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiSap, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedis,
  SiTensorflow,
  SiOpencv,
  SiGit
} from 'react-icons/si';
import { 
  BiBrain, 
  BiCodeAlt, 
  BiPalette, 
  BiCog, 
  BiServer, 
  BiData 
} from 'react-icons/bi';

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: 25, icon: <BiCodeAlt /> },
    { id: 'frontend', name: 'Frontend', count: 8, icon: <BiPalette /> },
    { id: 'backend', name: 'Backend', count: 6, icon: <BiServer /> },
    { id: 'database', name: 'Database', count: 4, icon: <BiData /> },
    { id: 'ai-ml', name: 'AI/ML', count: 4, icon: <BiBrain /> },
    { id: 'tools', name: 'Tools', count: 3, icon: <BiCog /> }
  ];

  const technologies = [
    // Frontend
    { name: 'React', category: 'frontend', proficiency: 95, icon: <FaReact /> },
    { name: 'Next.js', category: 'frontend', proficiency: 90, icon: <SiNextdotjs /> },
    { name: 'JavaScript', category: 'frontend', proficiency: 95, icon: <FaJs /> },
    { name: 'TypeScript', category: 'frontend', proficiency: 85, icon: <SiTypescript /> },
    { name: 'HTML5', category: 'frontend', proficiency: 95, icon: <FaHtml5 /> },
    { name: 'CSS3', category: 'frontend', proficiency: 90, icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, icon: <SiTailwindcss /> },
    { name: 'WordPress', category: 'frontend', proficiency: 80, icon: <FaWordpress /> },
    
    // Backend
    { name: 'Node.js', category: 'backend', proficiency: 90, icon: <FaNodeJs /> },
    { name: 'Python', category: 'backend', proficiency: 85, icon: <FaPython /> },
    { name: 'Express.js', category: 'backend', proficiency: 85, icon: <SiExpress /> },
    { name: 'PowerApps', category: 'backend', proficiency: 80, icon: <FaCogs /> },
    { name: 'SAP', category: 'backend', proficiency: 75, icon: <SiSap /> },
    { name: 'PowerBI', category: 'backend', proficiency: 80, icon: <FaChartBar /> },
    
    // Database
    { name: 'MongoDB', category: 'database', proficiency: 85, icon: <SiMongodb /> },
    { name: 'PostgreSQL', category: 'database', proficiency: 80, icon: <SiPostgresql /> },
    { name: 'MySQL', category: 'database', proficiency: 75, icon: <SiMysql /> },
    { name: 'Redis', category: 'database', proficiency: 70, icon: <SiRedis /> },
    
    // AI/ML
    { name: 'Machine Learning', category: 'ai-ml', proficiency: 85, icon: <SiTensorflow /> },
    { name: 'Computer Vision', category: 'ai-ml', proficiency: 80, icon: <SiOpencv /> },
    { name: 'OpenCV', category: 'ai-ml', proficiency: 75, icon: <SiOpencv /> },
    { name: 'RAG Systems', category: 'ai-ml', proficiency: 85, icon: <BiBrain /> },
    
    // Tools
    { name: 'Git', category: 'tools', proficiency: 90, icon: <SiGit /> },
    { name: 'Docker', category: 'tools', proficiency: 75, icon: <FaDocker /> },
    { name: 'AWS', category: 'tools', proficiency: 70, icon: <FaAws /> }
  ];

  // Filter technologies based on active category
  const getFilteredTechnologies = () => {
    if (activeCategory === 'all') {
      return technologies;
    }
    return technologies.filter(tech => tech.category === activeCategory);
  };

  const filteredTechnologies = getFilteredTechnologies();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Technical Skills
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical arsenal for building innovative solutions
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name} ({category.count})</span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon and Name */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl text-emerald-600 dark:text-emerald-400">{tech.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {tech.category}
                  </p>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Proficiency
                  </span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {tech.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-5xl mb-4 text-emerald-600 dark:text-emerald-400"><BiPalette /></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Frontend Expert</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Modern React, Next.js, and responsive design with Tailwind CSS
            </p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-5xl mb-4 text-emerald-600 dark:text-emerald-400"><BiServer /></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Backend Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Node.js, Python, and enterprise solutions with SAP & PowerApps
            </p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-5xl mb-4 text-emerald-600 dark:text-emerald-400"><BiBrain /></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Machine Learning, Computer Vision, and RAG systems development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection; 