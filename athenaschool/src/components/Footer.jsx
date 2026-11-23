import { Link } from 'react-router-dom';
import { memo } from 'react';
import { Facebook, Instagram, Linkedin, GraduationCap, BookOpen, User, Mail, Phone, MapPin } from 'lucide-react';

const Footer = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-white text-black py-16" style={{ contain: 'layout style' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="text-2xl font-black tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
                k12<span className="text-sky-600">online</span>school
              </Link>
            </div>
            <p className="text-gray-600 mb-6 text-sm">India's Most Advanced AI-Powered Online School</p>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Facebook size={16} />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Instagram size={16} />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Linkedin size={16} />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <User size={18} className="mr-2 text-blue-600" /> About Us
            </h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Our Mission</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Leadership</a></li>
              <li><Link to="/affiliations-accreditation" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Affiliation & Accreditation</Link></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Careers</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Blog</a></li>
              <li><Link to="/faq" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <GraduationCap size={18} className="mr-2 text-blue-600" /> Indian Pathway
            </h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Pre Primary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Primary School</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Middle School</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Senior School</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <BookOpen size={18} className="mr-2 text-blue-600" /> British Pathway
            </h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Early Years</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Primary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Lower Secondary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Upper Secondary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Advanced Levels</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <Phone size={18} className="mr-2 text-blue-600" /> Contact Us
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              {/* India */}
              <div>
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-blue-700">India</p>
                <p className="mt-1 leading-relaxed text-xs text-gray-700">
                  GF-20, Omaxe Square, Jasola District Centre, New Delhi - 110025
                </p>
                <a href="tel:+919811773207" className="inline-block mt-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  +91 9811773207
                </a>
              </div>

              {/* USA */}
              <div className="pt-3 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-blue-700">USA</p>
                <p className="mt-1 leading-relaxed text-xs text-gray-700">
                  600 1st Ave, Seattle, WA 98104
                </p>
                <a href="tel:+14254009246" className="inline-block mt-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  (425) 400-9246
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 k12onlineschool. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link>
            <Link to="/faq" className="hover:text-black transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;