import React, { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, Phone, Mail, MapPin } from 'lucide-react';

const LearningGarageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LG</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-blue-900">Learning Garage</h1>
                <p className="text-xs text-gray-600">by WisdomAI School</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Programs
            </a>
            <a href="#locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Locations
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a 
                href="#home" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#programs" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </a>
              <a 
                href="#locations" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </a>
              <a 
                href="#pricing" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200 flex gap-4">
                <button className="flex-1 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Login
                </button>
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LearningGarageNavbar;
