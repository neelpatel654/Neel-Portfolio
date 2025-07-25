import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 sm:pt-20">
        {/* Welcome badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">
            👋 Welcome to my portfolio
          </div>
        </div>

        {/* Main Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neel Patel
              </span>
              <span className="inline-block animate-bounce ml-2">👋</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              "Full-Stack Developer passionate about creating beautiful, functional web applications — with a growing focus on AI agents and intelligent systems."  
            </p>

            {/* CTA Buttons - Better mobile stacking */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 active:scale-95 text-sm sm:text-base"
              >
                Get In Touch
              </button>
              <a
                href="/NEEL_J_PATEL_CV.pdf"
                download
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-600 text-blue-600
                  dark:text-blue-400 dark:border-blue-400
                  hover:bg-blue-600 hover:text-white
                  dark:hover:bg-blue-400 dark:hover:text-gray-900
                  font-semibold rounded-lg transition-all duration-300
                  flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links - Better mobile spacing */}
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/neelpatel654"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300 active:scale-95"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/neel-patel-3536ab301/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300 active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:nealpatel2004@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Neel%0A%0ARegards%2C%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300 active:scale-95"
                aria-label="Email Contact"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image - Better mobile sizing */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br rounded-full shadow-2xl relative overflow-hidden">
                <img
                  src="/neel.png"
                  alt="Neel Patel Profile"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 rounded-full"></div>
              </div>

              {/* Floating elements - Responsive sizing */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-lg sm:text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center animate-pulse animation-delay-1000">
                <span className="text-lg sm:text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Hidden on small screens */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 p-2"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={28} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;