import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import pawelImage from '../assets/optimized/pawel-czerwinski--0xCCPIbl3M-unsplash.webp';

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative">

      {/* LEFT SIDE: Contact Information */}
      <div className="lg:w-5/12 bg-blue-950 relative overflow-hidden flex flex-col justify-center text-white z-10 py-16 px-6 sm:px-10 lg:px-12">

        {/* Top Texture */}
        <div className="absolute top-[-10%] right-[-20%] w-[400px] h-[600px] bg-slate-900 rotate-12 opacity-50 z-0 overflow-hidden border-l-4 border-sky-500">
          <img
            src={pawelImage}
            alt="Student Texture"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Texture */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900 -rotate-12 opacity-30 z-0 rounded-tr-[100px]"></div>

        {/* Content Container */}
        <div className="relative z-10 px-8 max-w-md mx-auto w-full">

          <div className="mb-6 inline-block px-3 py-1 border border-sky-500 rounded-full text-sky-400 text-xs font-bold uppercase tracking-wider">
            Contact Edulectual K12
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Contact <span className="text-sky-400">Us</span>
          </h2>

          <p className="text-gray-200 leading-relaxed mb-10">
            Whether you are choosing a pathway, checking fees, starting an
            application or need help with a class, our team is here to help.
            Choose the option that suits you below. We aim to reply to every
            message within [PLACEHOLDER: response time, e.g. one working day].
          </p>

          <div className="space-y-8 text-left">

            {/* Admissions Phone */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-sky-500 transition-colors duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className="text-xs text-sky-300 font-bold uppercase tracking-wider mb-2">
                  Admissions
                </p>

                <p className="text-sm text-gray-200 mb-3">
                  For questions about pathways, grades, fees, discounts and
                  the free 2-week trial class.
                </p>

                <div className="space-y-3">
                  <div>
                    <a
                      href="tel:+919811773207"
                      className="text-lg font-semibold text-white hover:text-sky-300 transition-colors block"
                    >
                      +91 98117 73207
                    </a>
                    <span className="text-xs text-sky-200/70">India</span>
                  </div>

                  <div>
                    <a
                      href="tel:+14254009246"
                      className="text-lg font-semibold text-white hover:text-sky-300 transition-colors block"
                    >
                      +1 (425) 400-9246
                    </a>
                    <span className="text-xs text-sky-200/70">USA</span>
                  </div>

                  <div>
                    <a
                      href="https://wa.me/919811773207"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-sky-300 hover:text-white transition-colors"
                    >
                      WhatsApp Admissions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-sky-500 transition-colors duration-300 mt-1">
                <MapPin className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-3">
                <p className="text-xs text-sky-300 font-bold uppercase tracking-wider">
                  Our Offices
                </p>

                <p className="text-sm text-gray-200 leading-relaxed mb-2">
                  Edulectual K12 is a fully online school, so these offices
                  handle administration only and are not teaching campuses.
                </p>

                <div>
                  <p className="text-xs font-semibold text-sky-200 mb-0.5">
                    India
                  </p>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    GF-20, Omaxe Square, Jasola District Centre,
                    New Delhi – 110025
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs font-semibold text-sky-200 mb-0.5">
                    USA
                  </p>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    600 1st Ave, Seattle, WA 98104
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-sky-500 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className="text-xs text-sky-300 font-bold uppercase tracking-wider mb-2">
                  Email Us
                </p>

                <a
                  href="mailto:farah@lmsathena.com"
                  className="text-lg font-semibold text-white hover:text-sky-300 transition-colors"
                >
                  farah@lmsathena.com
                </a>
              </div>
            </div>

            {/* Current Families */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg group-hover:bg-sky-500 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>

              <div>
                <p className="text-xs text-sky-300 font-bold uppercase tracking-wider mb-2">
                  Current Families
                </p>

                <p className="text-sm text-gray-200 leading-relaxed mb-3">
                  For timetable changes, platform access, technical problems
                  or questions about your child's progress, contact learner
                  support.
                </p>

                <a
                  href="mailto:farah@lmsathena.com"
                  className="text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                >
                  farah@lmsathena.com
                </a>

                <p className="text-xs text-sky-200/70 mt-2">
                  You can also contact support through the help section
                  of the learning platform.
                </p>
              </div>
            </div>

          </div>

          {/* Office Hours */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs text-sky-300 font-bold uppercase tracking-wider mb-2">
              Office Hours
            </p>

            <p className="text-sm text-gray-200 leading-relaxed">
              [PLACEHOLDER: office hours in IST, GST and other time zones.]
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: Enquiry Form */}
      <div className="lg:w-7/12 bg-white flex items-center justify-center relative py-16 px-6 sm:px-10">

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-bl-full -z-0"></div>

        <div className="w-full max-w-lg relative z-10">

          {/* Form Heading */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-blue-950 mb-2">
              Send Us a Message
            </h3>

            <div className="h-1 w-20 bg-sky-500 rounded-full"></div>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Use the enquiry form to tell us your child's grade, your country
              and your preferred pathway, and an admissions adviser will
              get back to you.
            </p>
          </div>

          <form className="space-y-6">

            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Phone
              </label>

              <div className="flex">
                <select className="px-3 py-3 rounded-l-lg bg-slate-100 border border-r-0 border-slate-200 text-slate-700 font-medium focus:border-sky-500 focus:ring-0 outline-none">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>

                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full px-4 py-3 rounded-r-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Country of Residence
              </label>

              <input
                type="text"
                placeholder="Enter your country"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
              />
            </div>

            {/* Child's Grade */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Child's Current Grade
              </label>

              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select grade
                  </option>
                  <option>Nursery</option>
                  <option>Reception</option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                  <option>Grade 6</option>
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Preferred Pathway */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Preferred Pathway
              </label>

              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select pathway
                  </option>
                  <option>Pearson Edexcel British Curriculum</option>
                  <option>Indian Curriculum with NIOS</option>
                  <option>Not Sure Yet</option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Your Message
              </label>

              <textarea
                rows="4"
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 mt-4 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-sky-600 hover:to-sky-500 text-white font-bold text-lg rounded-lg shadow-xl shadow-blue-900/20 transform transition-all duration-300 hover:-translate-y-1"
            >
              Send an Enquiry
            </button>

          </form>

          {/* Before You Get in Touch */}
          <div className="mt-10 bg-sky-50 rounded-xl p-6">
            <h4 className="text-xl font-bold text-blue-950 mb-3">
              Before You Get in Touch
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              To help us answer quickly, tell us your child's current grade,
              the country you live in, the pathway you are interested in
              (British Edexcel or Indian NIOS) and the best time to call.
              If you are a current family, include your child's name and class.
            </p>
          </div>

        </div>
      </div>

      {/* BELOW SECTION: Additional Contact Information */}
      <div className="w-full absolute top-full bg-gray-50">

        {/* Trial Class */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Book a Free Trial Class
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                If you would rather see a lesson before talking, book a free
                2-week trial or demo class. It is the quickest way to find
                out whether online school suits your child.
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Book a Free 2-Week Trial
              </button>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                Follow Us
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                See school news, class highlights and updates on our
                social channels.
              </p>

              <div className="space-y-4">

                <a
                  href="https://www.youtube.com/@edulectualk12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  YouTube
                </a>

                <a
                  href="https://www.linkedin.com/company/edulectual-k12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>

                <a
                  href="[PLACEHOLDER: Instagram URL]"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Instagram
                </a>

                <a
                  href="[PLACEHOLDER: X URL]"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  X
                </a>

                <a
                  href="[PLACEHOLDER: Facebook URL]"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Facebook
                </a>

              </div>
            </div>

          </div>

          {/* Admissions CTA */}
          <div className="max-w-6xl mx-auto mt-12 bg-blue-950 text-white rounded-2xl p-8 md:p-12">

            <h3 className="text-3xl font-bold mb-4">
              Admissions for 2027-28 Are Open
            </h3>

            <p className="text-gray-200 leading-relaxed mb-6">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>

            <p className="text-sky-300 font-semibold text-lg mb-6">
              Annual fees from ₹71,000 (India) / USD 2,200 (international families).
            </p>

            <a
              href="/fees"
              className="inline-flex items-center text-sky-300 hover:text-white mb-8 transition-colors"
            >
              See Full Fees →
            </a>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-400 transition-colors font-semibold">
                Book a Free 2-Week Trial
              </button>

              <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-950 transition-colors font-semibold">
                Apply for 2027-28
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Contact;