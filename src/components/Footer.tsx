
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web applications 
              that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>alex.johnson@email.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>and lots of coffee</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
