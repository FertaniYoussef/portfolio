import React from 'react';
import me from '../../images/me.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-2 shadow-2xl">
                <img 
                  src={me} 
                  alt="Youssef Fertani" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Bac+5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Education</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                About Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Fresh Graduate with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Passion for Innovation
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a freshly graduated Software Engineer (Bac+5) with a passion for creating innovative 
                solutions that bridge the gap between AI and modern web development. My academic journey 
                has equipped me with strong foundations in both theoretical concepts and practical applications.
              </p>
              
              <p>
                My expertise spans across the full development stack, from modern frontend frameworks 
                like React and Next.js to robust backend systems with Node.js and Python. I have a 
                particular passion for AI/ML applications and have successfully completed research projects 
                in collaboration with institutions like the Limoges Research Center.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and creating user experiences that make a difference. 
                My projects focus on optimization and technical excellence, demonstrating my commitment to 
                delivering high-quality solutions that solve real-world problems.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚛️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Frontend</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, TypeScript</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🟢</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Backend</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Node.js, Python, Express</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">AI/ML</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">TensorFlow, OpenCV, RAG</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">☁️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Tools</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Git, Docker, AWS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}