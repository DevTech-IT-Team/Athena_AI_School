import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const LearningGarageFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LG</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Learning Garage</h3>
                <p className="text-sm text-gray-400">by WisdomAI School</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A hands-on, inclusive physical learning space where learners aged 5–18 explore, build, and learn through robotics, electronics, Design, AI & IoT.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+919663213636" className="text-gray-300 hover:text-white transition-colors">
                  +91 96632 13636
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@Wisdomschool.com" className="text-gray-300 hover:text-white transition-colors">
                  info@Wisdomschool.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  110, Grace Towers, 1st Floor,<br />
                  Old Madras Road, Halasuru,<br />
                  Bangalore - 560038
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Learning Garage by WisdomAI School. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LearningGarageFooter;
