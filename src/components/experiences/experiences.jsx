import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Graduate",
      company: "University Degree",
      type: "Education",
      duration: "2023",
      description: "Bac+5 in Software Engineering with focus on modern web technologies, AI/ML, and enterprise solutions. Completed comprehensive projects in React, Node.js, Python, and machine learning applications.",
      technologies: ["React", "Node.js", "Python", "Machine Learning", "Database Design"]
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "TechMyService",
      type: "Internship",
      duration: "2023",
      description: "Developed a multiservice platform dashboard and GPS tracker middleware for delivery personnel. Implemented real-time tracking systems and optimized mobile application performance.",
      technologies: ["React", "Node.js", "GPS Tracking", "Mobile Development", "Real-time Systems"]
    },
    {
      id: 3,
      title: "AI Research Project",
      company: "Limoges Research Center",
      type: "Research",
      duration: "2023",
      description: "Collaborated with Limoges Research Center on an excellent Alzheimer's disease detection project using machine learning. Developed advanced algorithms for medical image analysis and early diagnosis.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "Medical AI", "OpenCV"]
    },
    {
      id: 4,
      title: "Credit Scoring AI Project",
      company: "Academic Project",
      type: "Academic",
      duration: "2023",
      description: "Designed and implemented a machine learning model for credit score prediction. Achieved excellent project evaluation with optimized algorithms for financial risk assessment.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Financial Modeling", "Scikit-learn"]
    },
    {
      id: 5,
      title: "Intrusion Detection System",
      company: "Academic Project",
      type: "Academic",
      duration: "2023",
      description: "Developed an AI-powered intrusion detection system using the KDD dataset. Created machine learning models capable of predicting security intrusions with high accuracy.",
      technologies: ["Python", "Machine Learning", "Cybersecurity", "Data Mining", "TensorFlow"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Professional Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic and professional journey as a fresh Software Engineering graduate
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-500 to-teal-600 h-full rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                    {/* Type Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-medium rounded-full mb-4">
                      {experience.type}
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {experience.duration}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
