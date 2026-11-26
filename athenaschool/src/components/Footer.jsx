import { Link } from 'react-router-dom';
import { memo } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  GraduationCap,
  BookOpen,
  User,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react';

const Footer = memo(() => {
  return (
    <footer
      className="bg-gradient-to-br from-white via-gray-50 to-white text-black py-16"
      style={{ contain: 'layout style' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* School Introduction */}
          <div>
            <div className="flex items-center mb-4">
              <Link
                to="/"
                className="text-2xl font-black tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
              >
                Edulectual <span className="text-sky-600">K12</span>
              </Link>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Edulectual K12 Online School is a fully online school for Nursery
              to Grade 12, teaching the Pearson Edexcel British pathway and the
              Indian curriculum with NIOS exams to families in India, the Gulf,
              the UK, North America and Australia.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 mb-6">

              <a
                href="https://www.youtube.com/@edulectualk12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <span className="sr-only">YouTube</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Youtube size={16} />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/edulectual-k12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Linkedin size={16} />
                </div>
              </a>

              <a
                href="[PLACEHOLDER: Instagram URL]"
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Instagram size={16} />
                </div>
              </a>

              <a
                href="[PLACEHOLDER: Facebook URL]"
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Facebook size={16} />
                </div>
              </a>

            </div>
          </div>

          {/* Programmes */}
          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <GraduationCap size={18} className="mr-2 text-blue-600" />
              Programmes
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/early-years"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Early Years
                </Link>
              </li>

              <li>
                <Link
                  to="/british-primary"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  British Primary
                </Link>
              </li>

              <li>
                <Link
                  to="/indian-primary"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Indian Primary
                </Link>
              </li>

              <li>
                <Link
                  to="/middle-school"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Middle School
                </Link>
              </li>

              <li>
                <Link
                  to="/igcse"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  IGCSE
                </Link>
              </li>

              <li>
                <Link
                  to="/a-levels"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  A Levels
                </Link>
              </li>

              <li>
                <Link
                  to="/nios"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  NIOS Senior School
                </Link>
              </li>

            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <BookOpen size={18} className="mr-2 text-blue-600" />
              Admissions
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/fees"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Fees 2027-28
                </Link>
              </li>

              <li>
                <Link
                  to="/how-to-apply"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  How to Apply
                </Link>
              </li>

              <li>
                <Link
                  to="/class-timings"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Class Timings
                </Link>
              </li>

              <li>
                <Link
                  to="/refer-a-family"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Refer a Family
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  FAQs
                </Link>
              </li>

            </ul>
          </div>

          {/* School */}
          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <User size={18} className="mr-2 text-blue-600" />
              School
            </h2>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/about"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/our-leaders"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Our Leaders
                </Link>
              </li>

              <li>
                <Link
                  to="/our-values"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Our Values
                </Link>
              </li>

              <li>
                <Link
                  to="/how-it-works"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/special-education"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Special Education
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold mb-6 text-xl text-gray-900 border-b border-gray-300 pb-2 flex items-center">
              <Phone size={18} className="mr-2 text-blue-600" />
              Contact
            </h2>

            <div className="space-y-4 text-sm text-gray-600">

              {/* India */}
              <div>
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-blue-700">
                  India
                </p>

                <a
                  href="tel:+919811773207"
                  className="inline-block mt-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  +91 98117 73207
                </a>

                <p className="mt-1 leading-relaxed text-xs text-gray-700">
                  GF-20, Omaxe Square, Jasola District Centre,
                  New Delhi – 110025
                </p>
              </div>

              {/* USA */}
              <div className="pt-3 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-blue-700">
                  USA
                </p>

                <a
                  href="tel:+14254009246"
                  className="inline-block mt-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  +1 (425) 400-9246
                </a>

                <p className="mt-1 leading-relaxed text-xs text-gray-700">
                  600 1st Ave, Seattle, WA 98104
                </p>
              </div>

              {/* Email */}
              <div className="pt-3 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-blue-700">
                  Email
                </p>

                <a
                  href="mailto:farah@lmsathena.com"
                  className="inline-block mt-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  farah@lmsathena.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="pt-3 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-blue-700">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/919811773207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  +91 98117 73207
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Online School Notice */}
        <div className="mt-10 bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
          <p className="leading-relaxed">
            <span className="font-semibold text-gray-900">
              Edulectual K12 is a fully online school.
            </span>{' '}
            Our offices handle administration only and are not teaching campuses.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="font-semibold text-gray-900 mb-4">
            Follow Us
          </p>

          <div className="flex flex-wrap gap-4 text-sm">

            <a
              href="https://www.youtube.com/@edulectualk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              YouTube
            </a>

            <a
              href="https://www.linkedin.com/company/edulectual-k12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="[PLACEHOLDER: Instagram URL]"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Instagram
            </a>

            <a
              href="[PLACEHOLDER: X URL]"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              X
            </a>

            <a
              href="[PLACEHOLDER: Facebook URL]"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Facebook
            </a>

          </div>
        </div>

        {/* Policies */}
        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">

            <Link
              to="/privacy-policy"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-black transition-colors"
            >
              Terms
            </Link>

            <Link
              to="/refund-policy"
              className="hover:text-black transition-colors"
            >
              Refund Policy
            </Link>

            <Link
              to="/safeguarding"
              className="hover:text-black transition-colors"
            >
              Safeguarding
            </Link>

          </div>

          <p className="text-xs text-gray-500 mt-3">
            [PLACEHOLDER: policy pages]
          </p>
        </div>

        {/* Qualifications Disclaimer */}
        <div className="mt-6 text-xs text-gray-500 leading-relaxed">
          Pearson Edexcel and NIOS qualifications are awarded by those
          organisations. [PLACEHOLDER: registered legal entity name]
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">

          <p>
            © 2026 Edulectual K12 Online School. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 sm:mt-0">

            <Link
              to="/contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/faq"
              className="hover:text-black transition-colors"
            >
              FAQs
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
});

export default Footer;