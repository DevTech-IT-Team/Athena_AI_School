import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, GraduationCap, BookOpen, User, Mail, Phone, ArrowRight } from 'lucide-react';
import logo from '../assets/vvx (1).webp';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="AI School Logo" className="h-60 w-100 mr-10" />
            </div>
            <p className="text-gray-600 mb-6">India's Most Advanced AI-Powered Online School</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Facebook size={18} />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Instagram size={18} />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Linkedin size={18} />
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-600"> 2025 AI School. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <User size={18} className="mr-2" /> About Us
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Our Mission</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Leadership</a></li>
              <li><Link to="/affiliations-accreditation" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Affiliation & Accreditation</Link></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Careers</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Blog</a></li>
              <li><Link to="/faq" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <GraduationCap size={18} className="mr-2" /> Indian Pathway
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Pre Primary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Primary School</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Middle School</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Senior School</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <BookOpen size={18} className="mr-2" /> British Pathway
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">Early Years</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Primary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Lower Secondary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Upper Secondary</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-black transition-colors duration-300 py-1">British Advanced Levels</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;