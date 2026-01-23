import React, { useState } from 'react';
import { 
  ChevronDown, Users, Clock, Globe, GraduationCap, Award, BookOpen, CheckCircle, Star, Monitor, HelpCircle, Tag,
  Calendar, Target, Users as UsersIcon, PenTool, ArrowRight, ChevronUp, Brain, Cpu, Cctv,
  Microscope, Palette, Building, Code, Zap, Video, FileText, Book, Laptop, Smartphone,
  Tablet, Home, School, MapPin, Mail, Phone, Lock, Shield, Globe as World,
  UserCheck, BarChart, TrendingUp, Heart, Eye, Music, Camera, Gamepad2,
  Calculator, Beaker, Atom, Database, Cloud, Wifi, Router, Server,
  Briefcase, Lightbulb, Rocket, Target as TargetIcon, Flag, Trophy, Medal,
  HeartHandshake, Handshake, UsersRound, UserPlus, Baby, BrainCircuit, Sun, Coffee, Sunset, Wrench
} from 'lucide-react';
import AthenaFeatureSection from './AthenaFeatureSection';
import PhilosophySection from './PhilosophySection';
import AccreditationUISection from './AccreditationUISection';
import OurPrograms from './OurPrograms';
import ClassSelection from './ClassSelection';
import BlogCards from './BlogCards';
import ParentTestimonials from './ParentTestimonials';

const AthenaElegantLayout = () => {
  // Content Configuration (Preserved Exactly)
  const content = {
    hero: {
      title: "Indian and British Pathway",
      subtitle: "Excellence Delivered, Consistently",
      schoolName: "Athena AI School"
    },
    
    academicCrew: {
      title: "Meet Our Academic Team",
      description: "Building the future of learning needs a team of 325+ passionate educators and innovators. At Athena AI School, an online school dedicated to excellence, our leadership and mentors are committed to guiding learners on their unique learning paths.",
      cta: "Meet The Team"
    },

    philosophy: {
      title: "Different Minds, Different Goals",
      subtitle: "One Tailored Path to Success",
      description: "Our alumni are proof that unique journeys lead to extraordinary destinations. From diverse goals to tailored paths, Athena AI School online learners have gone on to thrive in top colleges and careers, showcasing the power of personalized inclusive education."
    },

    faqs: [
      {
        question: "Is Athena AI School affiliated?",
        answer: "Yes, Athena AI School is accredited and recognized by leading educational bodies including Cambridge International, Pearson Edexcel, and NIOS.",
        category: "Accreditation"
      },
      {
        question: "Which is better: Indian Curriculum or the British Curriculum?",
        answer: "Both curriculums have their strengths. The British Curriculum offers global recognition while the Indian Curriculum provides strong foundational knowledge. We help you choose based on your child's goals and future aspirations.",
        category: "Curriculum"
      },
      {
        question: "How does Athena AI School promote equal education?",
        answer: "We provide inclusive education with personalized learning paths, ensuring every student gets equal opportunities regardless of their background or learning style through adaptive technologies and customized support.",
        category: "Philosophy"
      },
      {
        question: "How much does Athena AI School cost?",
        answer: "Our fee structure varies based on grade level, curriculum choice, and program selection. We offer transparent pricing and flexible payment plans. Contact our admissions team for a detailed fee breakdown.",
        category: "Admissions"
      },
      {
        question: "How to enroll in Athena AI School?",
        answer: "Enroll through our streamlined online process: 1) Submit application form, 2) Provide academic records, 3) Attend orientation, 4) Complete onboarding. Our team guides you at every step.",
        category: "Admissions"
      },
      {
        question: "How does Athena AI School work?",
        answer: "We combine live interactive classes with recorded lessons, personalized learning plans, and continuous assessment through our advanced platform accessible 24/7 from any device.",
        category: "Operations"
      },
      {
        question: "How to pay Athena AI School fees?",
        answer: "Multiple secure options: online portal, bank transfer, UPI, or installment plans. We provide payment reminders and receipts through our parent portal.",
        category: "Admissions"
      },
      {
        question: "What are the benefits of choosing Athena AI School?",
        answer: "Global curriculum access, flexible scheduling, personalized attention, experienced faculty, comprehensive support, and preparation for international opportunities.",
        category: "Benefits"
      }
    ],

    accreditations: [
      {
        name: "Cambridge International",
        curriculum: "British Curriculum",
        grades: "Grades 1-8",
        id: "CAMBRIDGE",
        description: "Globally recognized standards"
      },
      {
        name: "Pearson Edexcel",
        curriculum: "International GCSE",
        grades: "Registration No. 94883",
        id: "PEARSON",
        description: "International qualifications"
      },
      {
        name: "Cambridge IGCSE",
        curriculum: "A & AS Levels",
        grades: "Affiliation No. IA702",
        id: "IGCSE",
        description: "Advanced level programs"
      },
      {
        name: "Indian NCF",
        curriculum: "Indian Curriculum",
        grades: "Grades 1-8",
        id: "NCF",
        description: "National Curriculum Framework"
      },
      {
        name: "NIOS",
        curriculum: "Indian Curriculum",
        grades: "Grades 9-12",
        id: "NIOS",
        description: "National Institute of Open Schooling"
      }
    ],

    blogs: [
      {
        title: "The Future of Online Education",
        excerpt: "Exploring how technology transforms learning experiences",
        readTime: "5 min read",
        category: "Trends"
      },
      {
        title: "Balancing Screen Time in Digital Learning",
        excerpt: "Strategies for healthy learning habits",
        readTime: "4 min read",
        category: "Wellness"
      },
      {
        title: "Parent's Guide to Choosing Curriculum",
        excerpt: "Indian vs International curriculum comparison",
        readTime: "6 min read",
        category: "Guidance"
      }
    ]
  };

  // State for Accordion
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-blue-950 bg-white">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-[600px] md:h-screen overflow-hidden bg-slate-900 font-sans">
        
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Education Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>
        </div>

        {/* 2. The Main Geometric Overlay */}
        <div 
          className="absolute top-0 right-0 w-full h-full bg-sky-400/95 z-10"
          style={{
            clipPath: "polygon(35% 0%, 100% 0, 100% 100%, 0% 100%)"
          }}
        >
          {/* Texture/Gradient detail */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-500 opacity-100"></div>
        </div>

        {/* 3. Decorative Geometric Accents */}
        
        {/* Top Left White Triangle */}
        <div className="absolute top-0 left-[20%] w-32 h-32 bg-white z-20 shadow-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

        {/* Bottom Left Accent */}
        <div 
          className="absolute bottom-0 left-0 w-[40%] h-[30%] bg-blue-950/20 z-15"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
        ></div>
        
        {/* Bottom Left White Triangle Accent */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white z-20 transform translate-y-1/2 -translate-x-1/2 rotate-45"></div>

        {/* 4. Content Container */}
        <div className="relative z-30 container mx-auto px-6 h-full flex flex-col justify-center items-end text-right">
          
          <div className="max-w-2xl mt-10 md:mt-0 mr-4 md:mr-10">
            
            {/* Main Title */}
            <h1 
              className="text-5xl md:text-7xl font-bold text-blue-950 mb-4 tracking-tight"
              data-aos="fade-up"
            >
              {content.hero.title}
            </h1>

            {/* Subheading / Tagline */}
            <h2 
              className="text-2xl md:text-4xl text-blue-900 font-light mb-8"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              {content.hero.schoolName}
            </h2>

            {/* Paragraph Text */}
            <p 
              className="text-sm md:text-base text-blue-900/80 mb-8 leading-relaxed max-w-lg ml-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              {content.hero.subtitle}
            </p>

            {/* The Thick Accent Line */}
            <div 
              className="w-24 h-2 bg-blue-950 ml-auto rounded-sm" 
              data-aos="fade-up" 
              data-aos-delay="300"
            ></div>

          </div>
        </div>

      </section>

      {/* ---------------- ATHENA FEATURE SECTION ---------------- */}
      <AthenaFeatureSection />

      {/* ---------------- PHILOSOPHY SECTION ---------------- */}
      <PhilosophySection />

      {/* ---------------- ACCREDITATION UI SECTION ---------------- */}
      <AccreditationUISection />

      {/* ---------------- OUR PROGRAMS SECTION ---------------- */}
      <OurPrograms />

      {/* ---------------- CLASS SELECTION SECTION ---------------- */}
      <ClassSelection />

      {/* ---------------- BLOG CARDS ---------------- */}
      <BlogCards />

      {/* ---------------- PARENT TESTIMONIALS ---------------- */}
      <ParentTestimonials />

      {/* ---------------- FAQS ---------------- */}
      <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-blue-950 mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                  {content.faqs.map((faq, index) => (
                      <div key={index} className="bg-white shadow-sm border-l-4 border-transparent hover:border-sky-400 transition-all">
                          <button 
                              onClick={() => toggleFaq(index)}
                              className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                          >
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center">
                                      <HelpCircle className="w-5 h-5 text-sky-500" />
                                  </div>
                                  <span className="text-lg font-semibold text-blue-950">{faq.question}</span>
                              </div>
                              {openFaq === index ? <ChevronUp className="text-sky-400" /> : <ChevronDown className="text-gray-400" />}
                          </button>
                          {openFaq === index && (
                              <div className="px-8 pb-8 text-gray-600 leading-relaxed animate-fadeIn">
                                  <div className="mb-2 text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                                      <Tag className="w-3 h-3" /> {faq.category}
                                  </div>
                                  {faq.answer}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      </section>


      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-white py-12 text-center border-t border-gray-100">
          <div className="text-blue-950 font-bold text-2xl mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              {content.hero.schoolName}
          </div>
          <p className="text-gray-400"> 2024 Athena AI School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AthenaElegantLayout;