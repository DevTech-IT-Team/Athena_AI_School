import { Link } from 'react-router-dom';
import { memo } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = memo(() => {
  const linkGroups = [
    {
      title: 'Programmes',
      links: [
        { text: 'Early Years', href: '/early-years' },
        { text: 'British Primary', href: '/british-primary' },
        { text: 'Indian Primary', href: '/primary' },
        { text: 'Middle School', href: '/middle' },
        { text: 'IGCSE', href: '/british-upper-secondary' },
        { text: 'A Levels', href: '/british-advanced-levels' },
        { text: 'NIOS Senior School', href: '/senior-school' },
      ],
    },
    {
      title: 'Admissions',
      links: [
        { text: 'Fees 2027-28', href: '/fees' },
        { text: 'How to Apply', href: '/apply-now' },
        { text: 'Class Timings', href: '/batch-timings' },
        { text: 'Refer a Family', href: '/refer-a-parent' },
        { text: 'FAQs', href: '/faq' },
      ],
    },
    {
      title: 'School',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Our Leaders', href: '/our-leaders' },
        { text: 'Our Values', href: '/values-and-ethos' },
        { text: 'How It Works', href: '/how-it-works' },
        { text: 'Special Education', href: '/special-education' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@edulectualk12',
      color: '#FF0000',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/edulectual-k12/',
      color: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.85h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z" />
        </svg>
      ),
    },
  ];

  const legalLinks = [
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Terms', href: '/terms' },
    { text: 'Refunds', href: '/refund-policy' },
    { text: 'Safeguarding', href: '/safeguarding' },
  ];

  return (
    <>
      {/* Footer Wave */}
      <div className="relative h-12 overflow-hidden bg-white">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M0 48 C360 0 1080 0 1440 48 Z"
            fill="#101A4A"
          />
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <footer className="relative bg-[#101A4A] text-[#C3CCE8]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">

          {/* TOP FOOTER GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

            {/* BRAND */}
            <div className="lg:col-span-2">

              <Link
                to="/"
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-teal-500 to-yellow-400 p-1">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <span className="text-[#101A4A] font-black text-xl">
                      K
                    </span>
                  </div>
                </div>

                <span className="text-xl sm:text-2xl font-bold text-white">
                  Edulectual
                  <span className="text-sky-400"> K12</span>
                </span>
              </Link>

              <p className="text-sm leading-7 text-[#C3CCE8] max-w-md">
                Edulectual K12 Online School is a fully online school
                for Nursery to Grade 12, teaching the Pearson Edexcel
                British pathway and the Indian curriculum with NIOS exams
                to families in India, the Gulf, the UK, North America
                and Australia.
              </p>

              <div className="mt-5 border-l-2 border-teal-500 pl-4">
                <p className="text-xs leading-6 text-[#8A9ABE]">
                  Edulectual K12 is a fully online school. Our offices
                  handle administration only.
                </p>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-7">

                <h4 className="text-white font-semibold mb-4">
                  Connect with us
                </h4>

                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#101A4A] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

              </div>
            </div>

            {/* NAVIGATION GROUPS */}
            {linkGroups.map((group) => (
              <div key={group.title}>

                <h4 className="text-white font-bold text-base mb-6">
                  {group.title}
                </h4>

                <ul className="space-y-3">
                  {group.links.map(({ text, href }) => (
                    <li key={href}>
                      <Link
                        to={href}
                        className="group inline-flex items-center gap-1 text-sm text-[#C3CCE8] hover:text-white transition-colors duration-200"
                      >
                        <span>{text}</span>
                        <ArrowRight
                          className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

          {/* CONTACT SECTION */}
          <div className="mt-16 border-t border-white/10 pt-10">

            <h3 className="text-white text-lg font-bold mb-7">
              Get in touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* INDIA PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A9ABE] mb-2">
                    India
                  </p>

                  <a
                    href="tel:+919811773207"
                    className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    +91 98117 73207
                  </a>
                </div>
              </div>

              {/* USA PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A9ABE] mb-2">
                    USA
                  </p>

                  <a
                    href="tel:+14254009246"
                    className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    +1 (425) 400-9246
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A9ABE] mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:farah@lmsathena.com"
                    className="text-sm font-semibold text-white break-all hover:text-teal-400 transition-colors"
                  >
                    farah@lmsathena.com
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A9ABE] mb-2">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/919811773207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-green-400 transition-colors"
                  >
                    +91 98117 73207
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* OFFICE LOCATIONS */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* INDIA OFFICE */}
            <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">
                  India Office
                </h4>

                <p className="text-sm leading-6 text-[#C3CCE8]">
                  GF-20, Omaxe Square, Jasola District Centre,
                  New Delhi – 110025
                </p>
              </div>
            </div>

            {/* USA OFFICE */}
            <div className="flex items-start gap-4 bg-white/5 rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">
                  USA Office
                </h4>

                <p className="text-sm leading-6 text-[#C3CCE8]">
                  600 1st Ave, Seattle, WA 98104
                </p>
              </div>
            </div>

          </div>

          {/* BOTTOM FOOTER */}
          <div className="mt-14 border-t border-white/10 pt-7 flex flex-col lg:flex-row justify-between gap-6">

            {/* COPYRIGHT */}
            <div className="text-xs sm:text-sm text-[#C3CCE8] leading-7">
              <p>
                © {new Date().getFullYear()} Edulectual K12 Online School.
                All rights reserved.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-[#C3CCE8] hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>

            {/* QUALIFICATION DISCLAIMER */}
            <p className="text-xs text-[#8A9ABE] leading-6 max-w-xl">
              Pearson Edexcel and NIOS qualifications are awarded by
              those organisations. [PLACEHOLDER: registered legal
              entity name]
            </p>

          </div>

        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex gap-3 shadow-[0_-8px_24px_rgba(20,33,91,0.10)]">

        <Link
          to="/apply-now"
          className="flex-1 flex items-center justify-center rounded-full border border-blue-950 text-blue-950 font-bold text-sm h-12 hover:bg-blue-50 transition-colors"
        >
          Apply 2027-28
        </Link>

        <Link
          to="/book-trial"
          className="flex-1 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm h-12 hover:bg-blue-700 transition-colors"
        >
          Free 2-week trial
        </Link>

      </div>

      {/* MOBILE SPACING */}
      <style>{`
        @media (max-width: 1023px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>

    </>
  );
});

export default Footer;