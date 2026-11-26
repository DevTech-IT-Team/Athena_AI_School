import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  BookOpen,
  Phone,
} from 'lucide-react';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
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

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Optimize scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);

    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.mega-menu-container') &&
        !event.target.closest('.mega-menu-toggle')
      ) {
        // Menu closing logic handled elsewhere
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
      }, 16);
    };

    window.addEventListener('scroll', throttledHandleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const menuItems = [
    {
      title: 'Programmes',
      links: [
        { text: 'Early Years (Nursery–KG)', href: '/early-years' },
        { text: 'Pre-Primary (Nursery, LKG, UKG)', href: '/pre-primary' },
        { text: 'British Primary (Grades 1–5)', href: '/british-primary' },
        { text: 'Indian Primary (Grades 1–5)', href: '/primary' },
        {
          text: 'British Lower Secondary (Grades 6–8)',
          href: '/british-lower-secondary',
        },
        {
          text: 'Indian Middle School (Grades 6–8)',
          href: '/middle',
        },
        { text: 'IGCSE (Grades 9–10)', href: '/igcse' },
        { text: 'A Levels (Grades 11–12)', href: '/a-levels' },
        {
          text: 'NIOS Senior School (Grades 9–12)',
          href: '/senior-school',
        },
      ],
    },
    {
      title: 'Pathways',
      links: [
        { text: 'British vs Indian Pathway', href: '/pathway' },
        { text: 'Pearson Edexcel', href: '/edexcel-uk' },
        {
          text: 'Edexcel International GCSE',
          href: '/edexcel-international-gcse',
        },
        {
          text: 'Edexcel International A Level',
          href: '/edexcel-international-advanced-level',
        },
        { text: 'NCF and the Indian Pathway', href: '/ncf-india' },
      ],
    },
    {
      title: 'Admissions',
      links: [
        { text: 'How to Apply', href: '/apply-now' },
        { text: 'Who Should Register', href: '/who-should-register' },
        { text: 'Class Timings', href: '/batch-timings' },
        {
          text: 'What You Need at Home',
          href: '/essential-requirements',
        },
        { text: 'Refer a Family', href: '/refer-a-parent' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Our Leaders', href: '/our-leaders' },
        { text: 'Our Teachers', href: '/meet-our-academic-crew' },
        { text: 'Mission, Vision and Values', href: '/values-and-ethos' },
        { text: 'Why Choose Us', href: '/what-sets-us-apart' },
        { text: 'How Online School Works', href: '/how-it-works' },
        { text: 'Accreditation', href: '/affiliations-accreditation' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FAQs', href: '/faq' },
        { text: 'Help and Support', href: '/help-and-support' },
        {
          text: 'Prospectus and Downloads',
          href: '/resources-downloads',
        },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Fees',
      links: [{ text: 'Fees and Offers', href: '/fees' }],
    },
    {
      title: 'Connect',
      links: [{ text: 'Contact', href: '/contact' }],
    },
  ];

  return (
    <>
      {/* Announcement Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-blue-950 text-white text-center px-4 py-2 text-sm">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>
            Admissions for 2027-28 are open. Founding families save 25%
            when they enrol by 31 March 2027.
          </span>

          <Link
            to="/fees"
            className="underline underline-offset-2 font-semibold hover:text-yellow-300 transition-colors"
          >
            See fees and offers
          </Link>
        </div>
      </div>

      <nav
        className={`fixed top-9 left-0 right-0 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } z-50 h-16 flex items-center px-4 md:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{ contain: 'layout style' }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group py-2">
              <span className="text-2xl font-black tracking-tight text-blue-950 group-hover:text-blue-600 transition-colors">
                k12<span className="text-sky-600">online</span>school
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 ml-auto">
            <Link
              to="/"
              className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium ${
                location.pathname === '/' ? 'text-blue-600' : ''
              }`}
              style={{
                filter:
                  'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))',
              }}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>

            <Link
              to="/programmes"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium"
              style={{
                filter:
                  'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))',
              }}
            >
              <BookOpen size={18} />
              <span>Programmes</span>
            </Link>

            <Link
              to="/fees"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium"
              style={{
                filter:
                  'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))',
              }}
            >
              <span>Fees</span>
            </Link>

            <Link
              to="/contact"
              className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium ${
                location.pathname === '/contact' ? 'text-blue-600' : ''
              }`}
              style={{
                filter:
                  'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.7))',
              }}
            >
              <Phone size={18} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Header CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 ml-6">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full border border-blue-900 text-blue-950 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Book a free trial
            </Link>

            <Link
              to="/apply-now"
              className="px-4 py-2 rounded-full bg-blue-950 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Apply for 2027-28
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <div className="lg:static ml-4 mega-menu-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-100px)] animate-in slide-in-from-top duration-300 mega-menu-container">
            <div className="container mx-auto px-6 py-8">
              {/* Mobile Quick Links */}
              <div className="lg:hidden grid grid-cols-2 gap-4 mb-8">
                <Link
                  to="/"
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Home size={18} />
                  <span>Home</span>
                </Link>

                <Link
                  to="/programmes"
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen size={18} />
                  <span>Programmes</span>
                </Link>

                <Link
                  to="/fees"
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Fees</span>
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg font-medium text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  <span>Contact</span>
                </Link>
              </div>

              <div className="h-px bg-gray-200 mb-8 lg:hidden"></div>

              {/* Mega Menu Grid */}
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
                          <Link
                            to={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base block"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Mega Menu CTA */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 rounded-full border border-blue-950 text-blue-950 font-semibold hover:bg-blue-50 transition-colors"
                >
                  Book a free trial
                </Link>

                <Link
                  to="/apply-now"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 rounded-full bg-blue-950 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Apply for 2027-28
                </Link>
              </div>

              {/* Mobile Padding */}
              <div className="h-20 lg:hidden"></div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
});

export default Navigation;