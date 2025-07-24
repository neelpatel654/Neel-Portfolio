import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Lock body scroll when mobile menu is open (nice UX on phones)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Brand */}
          <div className="flex items-center space-x-3 min-w-0">
            <button
              aria-label="Scroll to Home"
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Buttons - Larger touch targets */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 transition-all duration-200"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen((p) => !p)}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 transition-all duration-200"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Improved mobile layout */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/20 dark:border-gray-700/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;