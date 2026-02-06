import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, BookOpen, Award, Users, Phone, Heart } from 'lucide-react';
import logo from '../assets/logo-nav.webp';

import logo from '../assets/ydyh.webp';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Optimize scroll handler with throttling
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);

    const handleClickOutside = (event) => {
      if (!event.target.closest('.mega-menu-container') && !event.target.closest('.mega-menu-toggle')) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const menuItems = [
    {
      title: 'About',
      links: [
        { text: 'What sets us apart?', href: '/what-sets-us-apart' },
        { text: 'Values & Ethos', href: '/values-and-ethos' },
        { text: 'Athena AI Group', href: '/athena-ai-group' },
        { text: 'Our Leaders', href: '/our-leaders' },
        { text: 'Habits of Mind', href: '/habits-of-mind' },
      ]
    },
    {
      title: 'Academics Indian Pathway',
      links: [
        { text: 'NCF India', href: '/ncf-india' },
        { text: 'Learning Culture', href: '/learning-culture' },
        { text: 'Pre Primary', href: '/pre-primary' },
        { text: 'Primary', href: '/primary' },
        { text: 'Middle', href: '/middle' },
        { text: 'Senior School', href: '/senior-school' },
        { text: 'Music & Arts Partner', href: '/music-arts-partner' },
      ]
    },
    {
      title: 'Academics British Pathway',
      links: [
        { text: 'Cambridge International, UK', href: '/cambridge-international-uk' },
        { text: 'Edexcel, UK', href: '/edexcel-uk' },
        { text: 'Early Years', href: '/early-years' },
        { text: 'British Primary', href: '/british-primary' },
        { text: 'British Lower Secondary', href: '/british-lower-secondary' },
        { text: 'British Upper Secondary', href: '/british-upper-secondary' },
        { text: 'Cambridge IGCSE', href: '/cambridge-igcse' },
        { text: 'Edexcel International GCSE', href: '/edexcel-international-gcse' },
        { text: 'British Advanced Levels', href: '/british-advanced-levels' },
        { text: 'Cambridge Advanced Level', href: '/cambridge-advanced-level' },
        { text: 'Edexcel International Advanced Level', href: '/edexcel-international-advanced-level' },
      ]
    },
    {
      title: 'Electives',
      links: [
        { text: 'Computational Thinking', href: '/computational-thinking' },
        { text: 'Languages', href: '/languages' },
        { text: 'International Benchmark Test', href: '/international-benchmark-test' },
        { text: 'FLOWW NEW', href: '/follow' },
        { text: 'Learning Garages NEW', href: '#' },
      ]
    },
    {
      title: 'Admissions',
      links: [
        { text: 'How to Register?', href: '/apply-now' },
        { text: 'Who Should Register?', href: '/who-should-register' },
        { text: 'Batch Timings', href: '/batch-timings' },
        { text: 'Essential Requirements', href: '/essential-requirements' },
        { text: 'Fees', href: '/fees' },
      ]
    },
    {
      title: 'How it Works',
      links: [
        { text: 'How does it work?', href: '/how-it-works' },
        { text: 'Special Education', href: '/special-education' },
        { text: 'Technology', href: '/technology' },
        { text: 'Features', href: '/features' },
        { text: 'Why online only?', href: '/why-online-only' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Affiliations & Accreditation', href: '/affiliations-accreditation' },
        { text: 'Resources', href: '/resources-downloads' },
      ]
    },
    {
      title: 'Being Athena AI',
      links: [
        { text: 'Wall of Love', href: '/wall-of-love' },
        { text: 'Refer A Parent', href: '/refer-a-parent' },
        { text: 'Learner-Led Podcast', href: '/learner-led-podcast' },
        { text: 'Student Spotlight', href: '/student-spotlight' },
        { text: 'Meet Our Academic Crew', href: '/meet-our-academic-crew' },
        { text: 'Learner Work', href: '/learner-work' },
        { text: 'Parents Speak', href: '/parents-speak' },
        { text: 'Press', href: '/press' },
        { text: 'Blog', href: '#' },
        { text: 'Awards', href: '/awards' },
        { text: 'Our Learner Council', href: '/our-learner-council' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { text: 'Contact Us', href: '/contact' },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} z-50 h-16 flex items-center px-4 md:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`} style={{ contain: 'layout style' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Athena AI School Logo"
              className="h-24 md:h-32 w-auto"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(255, 255, 255, 0.8)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.6))' }}
              width={320}
              height={128}
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden lg:flex space-x-8 ml-auto">
          <Link to="/" className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/' ? 'text-blue-600' : ''}`} style={{ filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))' }}><Home size={18} /><span>Home</span></Link>
          <Link to="/pathway" className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/pathway' ? 'text-blue-600' : ''}`} style={{ filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))' }}><BookOpen size={18} /><span>Pathway</span></Link>
          <Link to="/follow" className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/follow' ? 'text-blue-600' : ''}`} style={{ filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))' }}><Heart size={18} /><span>Follow</span></Link>
          <Link to="/contact" className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/contact' ? 'text-blue-600' : ''}`} style={{ filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))' }}><Phone size={18} /><span>Contact</span></Link>
        </div>

        {/* Hamburger Toggle */}
        <div className="lg:static ml-4">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsMegaMenuOpen(false);
            }}
            className="p-2 text-gray-700 focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Full Screen / Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-64px)] animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 py-8">

            {/* Mobile Only Quick Links */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mb-8">
              <Link to="/" className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700" onClick={() => setIsOpen(false)}><Home size={18} /><span>Home</span></Link>
              <Link to="/pathway" className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700" onClick={() => setIsOpen(false)}><BookOpen size={18} /><span>Pathway</span></Link>
              <Link to="/follow" className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700" onClick={() => setIsOpen(false)}><Heart size={18} /><span>Follow</span></Link>
              <Link to="/contact" className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700" onClick={() => setIsOpen(false)}><Phone size={18} /><span>Contact</span></Link>
            </div>

            <div className="h-px bg-gray-200 mb-8 lg:hidden"></div>

            {/* Responsive Grid for Mega Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-8">
              {menuItems.map((column, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-4 flex items-center">
                    {column.title}
                    <span className="ml-2 flex-grow h-px bg-yellow-400/50"></span>
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.href.startsWith('/') ? (
                          <Link
                            to={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base block"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.text}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base block"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.text}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Padding for mobile thumb reach */}
            <div className="h-20 lg:hidden"></div>
          </div>
        </div>
      )}
    </nav>
  );
});

export default Navigation;