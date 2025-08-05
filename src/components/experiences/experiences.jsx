import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "SMLTP",
      type: "Internship",
      duration: "June 2021 - July 2021",
      description: "Conceived a facial recognition desktop software using advanced computer vision techniques and machine learning algorithms.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "Desktop Development", "Facial Recognition"]
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "FullStack by Smart Touch",
      type: "Internship",
      duration: "February 2022 - June 2022",
      description: "Full-stack development of a multiservice platform using the MERN stack. Created a RESTful API with Node.js and Express.js for server logic management. Designed an interactive and responsive client-side dashboard with React. Used MongoDB for NoSQL data persistence. Created a GPS tracking middleware for delivery drivers on the mobile version of the application.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "MERN Stack", "GPS Tracking", "Mobile Development"]
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Lasting Recruitment",
      type: "Internship",
      duration: "July 2023 - August 2023",
      description: "Development of a web application for the company with front office and back office. Created comprehensive recruitment management system with user interfaces.",
      technologies: ["Web Development", "Frontend", "Backend", "Database Design", "User Management"]
    },
    {
      id: 4,
      title: "Software Engineer Intern",
      company: "YAUDEV",
      type: "Internship",
      duration: "July 2024 - August 2024",
      description: "Design of a dynamic and responsive user interface with ReactJS, Next.js, and Tailwind CSS. Development of backend logic and API routes using the NodeJS environment integrated into Next.js. Data management and modeling with a relational database PostgreSQL. Integration of WordPress as a Headless CMS for flexible content management.",
      technologies: ["ReactJS", "Next.js", "Tailwind CSS", "NodeJS", "PostgreSQL", "WordPress", "Headless CMS"]
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      company: "FRAMATOME",
      type: "Internship",
      duration: "March 2025 - August 2025",
      description: "Automation of SAP data extraction for the creation of Power BI dashboards. Development of several web applications with React and Powerapps for various internal needs. Creation and deployment of personalized RAG agents for factory operators.",
      technologies: ["SAP", "Power BI", "React", "Powerapps", "RAG", "Data Automation", "Web Applications"]
    }
  ];

  return (
    <section id="experiences" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Experience
            </span>
          </h2>
                           <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
                   A journey through my internship experiences, showcasing my growth
                   from facial recognition software to AI-powered industrial applications.
                 </p>
        </div>

        {/* Timeline - Mobile Optimized */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 sm:ml-16 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium">
                          {experience.type}
                        </span>
                        <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                          {experience.duration}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-base sm:text-lg text-emerald-600 dark:text-emerald-400 font-medium">
                        {experience.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 sm:py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium"
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

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            Ready to start a new chapter? Let's work together on your next project!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Let's Collaborate
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
