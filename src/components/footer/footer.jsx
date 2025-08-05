import React, { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock 
} from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Let's Connect
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's collaborate on your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I'm always excited to work on new projects and collaborate with amazing teams. 
                Whether you have a question or want to discuss a potential project, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:yousseffertani.pro@gmail.com" 
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300"
                  >
                    yousseffertani.pro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Available for remote work worldwide</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <FaClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Response Time</h4>
                  <p className="text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/FertaniYoussef" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/youssef-fertani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Youssef Fertani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
