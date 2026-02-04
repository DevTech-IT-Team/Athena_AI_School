import React, { useEffect } from 'react';
import { 
  GraduationCap, 
  Target, 
  Eye, 
  User, 
  Lightbulb, 
  Heart, 
  Users, 
  Trophy, 
  Globe, 
  Rocket, 
  Award, 
  Star, 
  CheckCircle, 
  Building, 
  Bot, 
  Beaker, 
  Book, 
  Monitor, 
  Circle, 
  Palette, 
  Utensils, 
  TrendingUp, 
  Scale, 
  MessageCircle 
} from 'lucide-react';

const AboutContent = () => {
  useEffect(() => {
    // Removed AOS for performance - using CSS transitions instead
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 selection:bg-sky-400 selection:text-white">
      {/* Hero Section - Centered Typography */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-200/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            About<span className="text-sky-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            India's First AI & English Grammar School. <br />
            Shaping Future Leaders with Innovation and Excellence.
          </p>
        </div>
      </section>

      {/* SECTION 1: STORY (Matches Image "About Us" Split Layout) */}
      <section id="our-story" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Visual Block (Replacing Image with Abstract Design) */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-3xl p-10 border border-sky-300 shadow-2xl relative overflow-hidden group hover:border-sky-400 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/20 rounded-bl-full"></div>
                
                <div className="relative z-10">
                   <GraduationCap className="text-8xl text-sky-600 mb-6" />
                   <h3 className="text-4xl font-bold text-gray-900 mb-2">15 Years</h3>
                   <p className="text-gray-700 text-lg">Of Educational Excellence</p>
                   
                   <div className="mt-8 pt-8 border-t border-blue-700">
                      <div className="flex items-center gap-4">
                        <div className="bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                          <Rocket />
                        </div>
                        <div>
                          <p className="text-gray-900 font-bold">First AI School</p>
                          <p className="text-sm text-gray-600">Pioneering Future Tech</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
              {/* Decorative elements behind */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sky-300 rounded-3xl -z-10"></div>
            </div>

            {/* Right Side: Content */}
            <div>
              <h4 className="text-sky-600 font-bold uppercase tracking-wider mb-2">Our Story</h4>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We Always Make The Best Education Accessible.</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, Wisdom School emerged from a vision to revolutionize education in India. From a humble beginning with 50 students, we have grown into a premier institution with over 7500 students.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We are India's First AI & English Grammar School, creating an environment that prepares students not just for exams, but for life.
              </p>
              
              <button className="bg-white text-blue-950 px-8 py-3 rounded-full font-bold hover:bg-sky-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: STATS & VALUES (Matches Image "Skills/Stats" Split Layout) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Values (Styled like Progress Bars/Skills in the image) */}
            <div>
              <h4 className="text-sky-600 font-bold uppercase tracking-wider mb-2">Our Values</h4>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Principles That Guide Us</h2>
              
              <div className="space-y-6">
                {[
                  { label: 'Innovation & Technology', percent: '100%' },
                  { label: 'Academic Integrity', percent: '100%' },
                  { label: 'Global Citizenship', percent: '100%' },
                  { label: 'Student Excellence', percent: '100%' }
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900 font-medium">{skill.label}</span>
                      <span className="text-sky-600">{skill.percent}</span>
                    </div>
                    <div className="h-1 w-full bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500 w-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Grid (Matches 2x2 Grid in Image) */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '7,500+', label: 'Happy Students' },
                { value: '500+', label: 'Cities Reached' },
                { value: '78+', label: 'Countries' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 hover:border-sky-400 transition-all group">
              <Target className="text-5xl text-sky-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide transformative education that empowers students to become critical thinkers, lifelong learners, and responsible global citizens through innovative teaching methods.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 hover:border-sky-400 transition-all group">
              <Eye className="text-5xl text-sky-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a global leader in education, recognized for our innovative approach to learning, commitment to excellence, and ability to prepare students for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Cards (Light Theme) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Leadership Team</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Rajesh Kumar', title: 'Founder & CEO' },
              { name: 'Ms. Priya Sharma', title: 'Principal' },
              { name: 'Mr. Amit Patel', title: 'Academic Director' },
              { name: 'Dr. Sarah Johnson', title: 'Innovation Dir.' }
            ].map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center border border-gray-200 hover:-translate-y-2 transition-transform">
                <div className="w-24 h-24 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4 text-sky-600 text-3xl">
                  <User />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                <p className="text-sky-600 text-sm">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid (Icon + Text) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex justify-between items-end border-b border-gray-200 pb-4">
             <div>
               <h4 className="text-sky-600 font-bold uppercase tracking-wider mb-2">Infrastructure</h4>
               <h2 className="text-3xl font-bold text-gray-900">Campus Facilities</h2>
             </div>
             <div className="hidden md:block text-gray-600">State-of-the-Art Environment</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {[
               { icon: Beaker, title: 'Science Labs' },
               { icon: Book, title: 'Digital Library' },
               { icon: Monitor, title: 'AI & Computer Labs' },
               { icon: Circle, title: 'Sports Complex' },
               { icon: Palette, title: 'Art Studios' },
               { icon: Utensils, title: 'Modern Cafeteria' }
             ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-sky-400 transition-colors">
                   <div className="p-3 bg-sky-100 rounded-lg text-sky-600 text-xl mr-4">
                      <item.icon />
                   </div>
                   <span className="text-lg font-medium text-gray-900">{item.title}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Light Theme) */}
      <section className="relative py-24 bg-gradient-to-r from-sky-500 to-sky-600 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm font-medium text-white uppercase tracking-wide">
              ADMISSIONS OPEN 2026-2027
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            We Are Always Ready To 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-100"> Shape The Future.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/admissions.html" className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:text-sky-700 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Apply Now
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sky-600 transition-all duration-300">
              Schedule Visit
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/7078049533"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-400 transition-all duration-300 z-50 animate-bounce"
      >
        <MessageCircle className="text-3xl" />
      </a>
      
          </div>
  );
};

export default AboutContent;