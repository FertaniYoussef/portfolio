import React from 'react';
import onlycoach from '../../images/onlycoachlogo.png';
import ids from '../../images/ids.jpeg';
import scori from '../../images/scori.jpg';
import consulteradmin from '../../images/consulteradmin.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "OnlyCoach",
      description: "Design of a private coaching website similar to Upwork with back office for admin and coaches. Developed a virtual market for supplement and gym material with optimized performance and user experience.",
      image: onlycoach,
      link: "https://github.com/FertaniYoussef/OnlyCoach",
      technologies: ["React", "Node.js", "MongoDB", "E-commerce", "Admin Panel"]
    },
    {
      id: 2,
      title: "IDS with AI",
      description: "Design and implementation of a machine learning model for predicting security intrusion types using the KDD dataset. Achieved excellent optimization results with high accuracy in threat detection.",
      image: ids,
      link: "https://colab.research.google.com/drive/1zvtdu50peSK7y3xZukG4JONiUCxkWxiO?usp=sharing",
      technologies: ["Python", "Machine Learning", "KDD Dataset", "Cybersecurity", "Data Mining"]
    },
    {
      id: 3,
      title: "Credit Scoring with AI",
      description: "Design and implementation of a machine learning model for credit score prediction. Excellent project evaluation with optimized algorithms for financial risk assessment and loan approval.",
      image: scori,
      link: "https://colab.research.google.com/drive/1s65OuS8ikcTZSCcLvTuFude78U7V6_V0?usp=sharing",
      technologies: ["Python", "Machine Learning", "Financial Modeling", "Risk Assessment", "Scikit-learn"]
    },
    {
      id: 4,
      title: "TechMyService",
      description: "Conceived a Dashboard for a multiservice platform and GPS tracker middleware for delivery personnel. Optimized mobile application performance with real-time tracking capabilities.",
      image: consulteradmin,
      link: "https://github.com/FertaniYoussef/Techmyservice",
      technologies: ["React", "Node.js", "GPS Tracking", "Real-time Systems", "Mobile Development"]
    },
    {
      id: 5,
      title: "Alzheimer's Disease Detection",
      description: "Collaborated with Limoges Research Center on Alzheimer's disease detection using machine learning. Developed advanced algorithms for medical image analysis with excellent project outcomes.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MF9saW5lYXJfMV8xIiB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIyMDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzEwQjM3MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNUQ5QjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8ZyBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMDAgMzBDNzguOTUgMzAgNjIgNDYuOTUgNjIgNjhDNjIgODkuMDUgNzguOTUgMTA2IDEwMCAxMDZDMTAxLjA1IDEwNiAxMDIgMTA1LjA1IDEwMiAxMDRDMTAyIDEwMi45NSAxMDEuMDUgMTAyIDEwMCAxMDJDNzguOTUgMTAyIDY2IDg5LjA1IDY2IDY4QzY2IDQ2Ljk1IDc4Ljk1IDM0IDEwMCAzNEMxMDEuMDUgMzQgMTAyIDMzLjA1IDEwMiAzMkMxMDIgMzAuOTUgMTAxLjA1IDMwIDEwMCAzMFoiLz4KPHBhdGggZD0iTTEwMCAxNzBDNzguOTUgMTcwIDYyIDE4Ni45NSA2MiAyMDhDNjIgMjI5LjA1IDc4Ljk1IDI0NiAxMDAgMjQ2QzEwMS4wNSAyNDYgMTAyIDI0NS4wNSAxMDIgMjQ0QzEwMiAyNDIuOTUgMTAxLjA1IDI0MiAxMDAgMjQyQzc4Ljk1IDI0MiA2NiAyMjkuMDUgNjYgMjA4QzY2IDE4Ni45NSA3OC45NSAxNzQgMTAwIDE3NEMxMDEuMDUgMTc0IDEwMiAxNzMuMDUgMTAyIDE3MkMxMDIgMTcwLjk1IDEwMS4wNSAxNzAgMTAwIDE3MFoiLz4KPHBhdGggZD0iTTE3MCAxMDBDMTcwIDc4Ljk1IDE1My4wNSA2MiAxMzIgNjJDMTA5LjA1IDYyIDk2IDc1LjA1IDk2IDk4Qzk2IDEyMC45NSAxMDkuMDUgMTM0IDEzMiAxMzRDMTMzLjA1IDEzNCAxMzQgMTMzLjA1IDEzNCAxMzJDMTM0IDEzMC45NSAxMzMuMDUgMTMwIDEzMiAxMzBDMTA5LjA1IDEzMCA5OCAxMTguOTUgOTggOTZDOTggNzMuMDUgMTA5LjA1IDYwIDEzMiA2MEMxNTMuMDUgNjAgMTcwIDc2Ljk1IDE3MCA5OEMxNzAgOTkuMDUgMTY5LjA1IDEwMCAxNjggMTAwQzE2Ni45NSAxMDAgMTY2IDk5LjA1IDE2NiA5OEMxNjYgNzYuOTUgMTUzLjA1IDY0IDEzMiA2NEMxMzAuOTUgNjQgMTMwIDYzLjA1IDEzMCA2MkMxMzAgNjAuOTUgMTMwLjk1IDYwIDEzMiA2MEMxNTMuMDUgNjAgMTcwIDc2Ljk1IDE3MCA5OEMxNzAgOTkuMDUgMTY5LjA1IDEwMCAxNjggMTAwQzE2Ni45NSAxMDAgMTY2IDk5LjA1IDE2NiA5OEMxNjYgNzYuOTUgMTUzLjA1IDY0IDEzMiA2NEMxMzAuOTUgNjQgMTMwIDYzLjA1IDEzMCA2MkMxMzAgNjAuOTUgMTMwLjk1IDYwIDEzMiA2MFoiLz4KPHBhdGggZD0iTTY4IDEwMEM2OCA3OC45NSA1MS4wNSA2MiAzMCA2MkM3LjA1IDYyIC02IDc1LjA1IC02IDk4Qy02IDEyMC45NSA3LjA1IDEzNCAzMCAxMzRDMzEuMDUgMTM0IDMyIDEzMy4wNSAzMiAxMzJDMzIgMTMwLjk1IDMxLjA1IDEzMCAzMCAxMzBDNy4wNSAxMzAgLTQgMTE4Ljk1IC00IDk2Qy00IDczLjA1IDcuMDUgNjAgMzAgNjBDNTEuMDUgNjAgNjggNzYuOTUgNjggOThDNjggOTkuMDUgNjcuMDUgMTAwIDY2IDEwMEM2NC45NSAxMDAgNjQgOTkuMDUgNjQgOThDNjQgNzYuOTUgNTEuMDUgNjQgMzAgNjRDMjguOTUgNjQgMjggNjMuMDUgMjggNjJDMjggNjAuOTUgMjguOTUgNjAgMzAgNjBDNTEuMDUgNjAgNjggNzYuOTUgNjggOThDNjggOTkuMDUgNjcuMDUgMTAwIDY2IDEwMEM2NC45NSAxMDAgNjQgOTkuMDUgNjQgOThDNjQgNzYuOTUgNTEuMDUgNjQgMzAgNjRDMjguOTUgNjQgMjggNjMuMDUgMjggNjJDMjggNjAuOTUgMjguOTUgNjAgMzAgNjBaIi8+CjxwYXRoIGQ9Ik0xMDAgMTM4Qzc4Ljk1IDEzOCA2MiAxNTQuOTUgNjIgMTc2QzYyIDE5Ny4wNSA3OC45NSAyMTQgMTAwIDIxNEMxMDEuMDUgMjE0IDEwMiAyMTMuMDUgMTAyIDIxMkMxMDIgMjEwLjk1IDEwMS4wNSAyMTAgMTAwIDIxMEM3OC45NSAyMTAgNjYgMTk3LjA1IDY2IDE3NkM2NiAxNTQuOTUgNzguOTUgMTQyIDEwMCAxNDJDMTAxLjA1IDE0MiAxMDIgMTQxLjA1IDEwMiAxNDBDMTAyIDEzOC45NSAxMDEuMDUgMTM4IDEwMCAxMzhaIi8+CjxwYXRoIGQ9Ik0xMzIgMTM4QzEwOS4wNSAxMzggOTYgMTUxLjA1IDk2IDE3NEM5NiAxOTYuOTUgMTA5LjA1IDIxMCAxMzIgMjEwQzEzMy4wNSAyMTAgMTM0IDIwOS4wNSAxMzQgMjA4QzEzNCAyMDYuOTUgMTMzLjA1IDIwNiAxMzIgMjA2QzEwOS4wNSAyMDYgOTggMTk0Ljk1IDk4IDE3MkM5OCAxNDkuMDUgMTA5LjA1IDEzNiAxMzIgMTM2QzE1My4wNSAxMzYgMTcwIDE1Mi45NSAxNzAgMTc0QzE3MCAxNzUuMDUgMTY5LjA1IDE3NiAxNjggMTc2QzE2Ni45NSAxNzYgMTY2IDE3NS4wNSAxNjYgMTc0QzE2NiAxNTIuOTUgMTUzLjA1IDE0MCAxMzIgMTQwQzEzMC45NSAxNDAgMTMwIDEzOS4wNSAxMzAgMTM4QzEzMCAxMzYuOTUgMTMwLjk1IDEzNiAxMzIgMTM2QzE1My4wNSAxMzYgMTcwIDE1Mi45NSAxNzAgMTc0QzE3MCAxNzUuMDUgMTY5LjA1IDE3NiAxNjggMTc2QzE2Ni45NSAxNzYgMTY2IDE3NS4wNSAxNjYgMTc0QzE2NiAxNTIuOTUgMTUzLjA1IDE0MCAxMzIgMTQwQzEzMC45NSAxNDAgMTMwIDEzOS4wNSAxMzAgMTM4QzEzMCAxMzYuOTUgMTMwLjk1IDEzNiAxMzIgMTM2WiIvPgo8cGF0aCBkPSJNMzAgMTM4QzcuMDUgMTM4IC02IDE1MS4wNSAtNiAxNzRDLTYgMTk2Ljk1IDcuMDUgMjEwIDMwIDIxMEMzMS4wNSAyMTAgMzIgMjA5LjA1IDMyIDIwOEMzMiAyMDYuOTUgMzEuMDUgMjA2IDMwIDIwNkM3LjA1IDIwNiAtNCAxOTQuOTUgLTQgMTcyQy00IDE0OS4wNSA3LjA1IDEzNiAzMCAxMzZDNTEuMDUgMTM2IDY4IDE1Mi45NSA2OCAxNzRDNjggMTc1LjA1IDY3LjA1IDE3NiA2NiAxNzZDNjQuOTUgMTc2IDY0IDE3NS4wNSA2NCAxNzRDNjQgMTUyLjk1IDUxLjA1IDE0MCAzMCAxNDBDMjguOTUgMTQwIDI4IDEzOS4wNSAyOCAxMzhDMjggMTM2Ljk1IDI4Ljk1IDEzNiAzMCAxMzZDNTEuMDUgMTM2IDY4IDE1Mi45NSA2OCAxNzRDNjggMTc1LjA1IDY3LjA1IDE3NiA2NiAxNzZDNjQuOTUgMTc2IDY0IDE3NS4wNSA2NCAxNzRDNjQgMTUyLjk1IDUxLjA1IDE0MCAzMCAxNDBDMjguOTUgMTQwIDI4IDEzOS4wNSAyOCAxMzhDMjggMTM2Ljk1IDI4Ljk1IDEzNiAzMCAxMzZaIi8+CjxwYXRoIGQ9Ik0xMDAgMTc0Qzc4Ljk1IDE3NCA2MiAxOTAuOTUgNjIgMjEyQzYyIDIzMy4wNSA3OC45NSAyNTAgMTAwIDI1MEMxMDEuMDUgMjUwIDEwMiAyNDkuMDUgMTAyIDI0OEMxMDIgMjQ2Ljk1IDEwMS4wNSAyNDYgMTAwIDI0NkM3OC45NSAyNDYgNjYgMjMzLjA1IDY2IDIxMkM2NiAxOTAuOTUgNzguOTUgMTc4IDEwMCAxNzhDMTAxLjA1IDE3OCAxMDIgMTc3LjA1IDEwMiAxNzZDMTAyIDE3NC45NSAxMDEuMDUgMTc0IDEwMCAxNzRaIi8+CjxwYXRoIGQ9Ik0xMzIgMTc0QzEwOS4wNSAxNzQgOTYgMTg3LjA1IDk2IDIwOEM5NiAyMjkuMDUgMTA5LjA1IDI0MiAxMzIgMjQyQzEzMy4wNSAyNDIgMTM0IDI0MS4wNSAxMzQgMjQwQzEzNCAyMzguOTUgMTMzLjA1IDIzOCAxMzIgMjM4QzEwOS4wNSAyMzggOTggMjI2Ljk1IDk4IDIwNEM5OCAxODEuMDUgMTA5LjA1IDE2OCAxMzIgMTY4QzE1My4wNSAxNjggMTcwIDE4NC45NSAxNzAgMjA2QzE3MCAyMDcuMDUgMTY5LjA1IDIwOCAxNjggMjA4QzE2Ni45NSAyMDggMTY2IDIwNy4wNSAxNjYgMjA2QzE2NiAxODQuOTUgMTUzLjA1IDE3MiAxMzIgMTcyQzEzMC45NSAxNzIgMTMwIDE3MS4wNSAxMzAgMTcwQzEzMCAxNjguOTUgMTMwLjk1IDE2OCAxMzIgMTY4QzE1My4wNSAxNjggMTcwIDE4NC45NSAxNzAgMjA2QzE3MCAyMDcuMDUgMTY5LjA1IDIwOCAxNjggMjA4QzE2Ni45NSAyMDggMTY2IDIwNy4wNSAxNjYgMjA2QzE2NiAxODQuOTUgMTUzLjA1IDE3MiAxMzIgMTcyQzEzMC45NSAxNzIgMTMwIDE3MS4wNSAxMzAgMTcwQzEzMCAxNjguOTUgMTMwLjk1IDE2OCAxMzIgMTY4WiIvPgo8cGF0aCBkPSJNMzAgMTc0QzcuMDUgMTc0IC02IDE4Ny4wNSAtNiAyMTBDLTYgMjMxLjA1IDcuMDUgMjQ0IDMwIDI0NEMzMS4wNSAyNDQgMzIgMjQzLjA1IDMyIDI0MkMzMiAyNDAuOTUgMzEuMDUgMjQwIDMwIDI0MEM3LjA1IDI0MCAtNCAyMjguOTUgLTQgMjA2Qy00IDE4My4wNSA3LjA1IDE3MCAzMCAxNzBDNTEuMDUgMTcwIDY4IDE4Ni45NSA2OCAyMDhDNjggMjA5LjA1IDY3LjA1IDIxMCA2NiAyMTBDNjQuOTUgMjEwIDY0IDIwOS4wNSA2NCAyMDhDNjQgMTg2Ljk1IDUxLjA1IDE3NCAzMCAxNzRDMjguOTUgMTc0IDI4IDE3My4wNSAyOCAxNzJDMjggMTcwLjk1IDI4Ljk1IDE3MCAzMCAxNzBDNTEuMDUgMTcwIDY4IDE4Ni45NSA2OCAyMDhDNjggMjA5LjA1IDY3LjA1IDIxMCA2NiAyMTBDNjQuOTUgMjEwIDY0IDIwOS4wNSA2NCAyMDhDNjQgMTg2Ljk1IDUxLjA1IDE3NCAzMCAxNzRDMjguOTUgMTc0IDI4IDE3My4wNSAyOCAxNzJDMjggMTcwLjk1IDI4Ljk1IDE3MCAzMCAxNzBaIi8+CjwvZz4KPC9zdmc+",
      link: "#",
      technologies: ["Python", "Machine Learning", "Medical AI", "Computer Vision", "Research"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Featured Projects
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic and personal projects showcasing optimization, performance, and technical excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's work together to bring your ideas to life with optimized, high-performance solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


