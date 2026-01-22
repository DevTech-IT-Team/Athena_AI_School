import React, { useState } from 'react';
import { 
  ChevronDown, Users, Clock, Globe, GraduationCap, Award, BookOpen, CheckCircle, Star, Monitor,
  Calendar, Target, Users as UsersIcon, PenTool, ArrowRight, ChevronUp, Brain, Cpu, Cctv,
  Microscope, Palette, Building, Code, Zap, Video, FileText, Book, Laptop, Smartphone,
  Tablet, Home, School, MapPin, Mail, Phone, Lock, Shield, Globe as World,
  UserCheck, BarChart, TrendingUp, Heart, Eye, Music, Camera, Gamepad2,
  Calculator, Beaker, Atom, Database, Cloud, Wifi, Router, Server,
  Briefcase, Lightbulb, Rocket, Target as TargetIcon, Flag, Trophy, Medal,
  HeartHandshake, Handshake, UsersRound, UserPlus, Baby, BrainCircuit
} from 'lucide-react';

const AthenaElegantLayout = () => {
  // Content Configuration (Preserved Exactly)
  const content = {
    hero: {
      title: "Indian and British Pathway",
      subtitle: "Excellence Delivered, Consistently",
      schoolName: "Athena AI School"
    },
    
    features: [
      {
        id: 'tech',
        title: "Technology Driven Learning",
        description: "Our Online Learning School provides a seamless, tech-driven learning experience. With features such as progress tracking, on-demand access to materials, and interactive tools, our learners and expert faculty are always supported. Our Online Learning School's ease of use provides a holistic learning experience.",
        icon: Monitor,
        iconBg: "bg-sky-100",
        iconColor: "text-blue-600",
        textColor: "text-blue-900",
        bgColor: "bg-white",
        reverse: false
      },
      {
        id: 'anytime',
        title: "Anytime Learning",
        description: "With over 1,250 hours of live, interactive classes conducted daily, our online school learners engage in dynamic, real-time learning. All sessions are recorded, giving learners the flexibility to revisit lessons anytime and anywhere, making our learner community truly diverse and our educational borderless.",
        icon: Clock,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        textColor: "text-blue-900",
        bgColor: "bg-slate-50",
        reverse: true
      },
      {
        id: 'future',
        title: "Future Ready Education",
        description: "Offering globally recognized curriculums with a future-oriented approach, Athena AI School prepares learners for success not only academically but in a rapidly evolving world. It enables us cater to both local and global educational standards, opening doors to international opportunities.",
        icon: Target,
        iconBg: "bg-sky-100",
        iconColor: "text-blue-600",
        textColor: "text-blue-900",
        bgColor: "bg-white",
        reverse: false
      }
    ],

    academicCrew: {
      title: "Meet Our Academic Crew",
      description: "Building the future of learning needs a team of 325+ passionate educators and innovators. At Athena AI School, an online school dedicated to excellence, our leadership and mentors are committed to guiding learners on their unique learning paths.",
      cta: "Meet The Crew"
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
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-200/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight" data-aos="fade-up">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
            {content.features.map((feature, index) => (
                <div key={feature.id} className={`flex flex-col md:flex-row gap-12 items-center ${feature.reverse ? 'md:flex-row-reverse' : ''}`}>
                    {/* Visual Side - Replaced with Icon Composition */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-blue-950 to-blue-900 relative overflow-hidden rounded-lg">
                            {/* Icon Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="grid grid-cols-5 grid-rows-4 gap-4 p-8">
                                    {[...Array(20)].map((_, i) => (
                                        <feature.icon key={i} className="w-6 h-6 text-white" />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Feature-Specific Icon Display */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 flex items-center justify-center shadow-2xl">
                                        <feature.icon className="w-24 h-24 text-white" />
                                    </div>
                                    
                                    {/* Floating Supplementary Icons */}
                                    {feature.id === 'tech' && (
                                        <>
                                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                                                <Cpu className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center">
                                                <Wifi className="w-8 h-8 text-white" />
                                            </div>
                                        </>
                                    )}
                                    
                                    {feature.id === 'anytime' && (
                                        <>
                                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                                                <Video className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center">
                                                <Cloud className="w-8 h-8 text-white" />
                                            </div>
                                        </>
                                    )}
                                    
                                    {feature.id === 'future' && (
                                        <>
                                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                                                <Rocket className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center">
                                                <TargetIcon className="w-8 h-8 text-white" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Offset Box */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-400 flex items-center justify-center shadow-lg">
                            <feature.icon className="w-10 h-10 text-blue-950" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="w-16 h-1 bg-sky-400"></div>
                        <h2 className="text-4xl font-bold text-blue-950">{feature.title}</h2>
                        <p className="text-lg text-blue-900/80 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* ---------------- PHILOSOPHY SECTION ---------------- */}
      <section className="bg-blue-950 py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/50 transform skew-x-12 translate-x-20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h3 className="text-sky-400 uppercase tracking-widest font-bold mb-4">Our Philosophy</h3>
            <h2 className="text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">
                {content.philosophy.title}
                <span className="block text-sky-400 mt-2">{content.philosophy.subtitle}</span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            
            {/* Icon Path Visualization */}
            <div className="flex justify-center items-center mb-8">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Brain className="w-12 h-12 text-sky-300" />
                        <div className="absolute -top-2 -right-2">
                            <Zap className="w-6 h-6 text-yellow-400" />
                        </div>
                    </div>
                    
                    <ArrowRight className="w-8 h-8 text-sky-300 mx-2" />
                    
                    <div className="relative">
                        <Target className="w-12 h-12 text-sky-300" />
                        <div className="absolute -top-2 -right-2">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                        </div>
                    </div>
                    
                    <ArrowRight className="w-8 h-8 text-sky-300 mx-2" />
                    
                    <div className="relative">
                        <Trophy className="w-12 h-12 text-sky-300" />
                        <div className="absolute -top-2 -right-2">
                            <Star className="w-6 h-6 text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="text-xl text-sky-100 leading-relaxed max-w-2xl mx-auto">
                {content.philosophy.description}
            </p>
        </div>
      </section>

      {/* ---------------- ACADEMIC CREW ---------------- */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-7/12 bg-sky-50 p-12 md:p-24 flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-blue-950 mb-8 relative inline-block">
                  {content.academicCrew.title}
                  <span className="absolute -bottom-2 left-0 w-1/2 h-2 bg-sky-400"></span>
              </h2>
              <p className="text-xl text-blue-900 mb-12 max-w-xl">
                  {content.academicCrew.description}
              </p>
              <button className="bg-blue-950 text-white px-8 py-4 w-max hover:bg-sky-600 transition-colors flex items-center gap-2">
                  {content.academicCrew.cta}
                  <ArrowRight size={20} />
              </button>
          </div>
          <div className="w-full md:w-5/12 bg-gradient-to-br from-blue-100 to-sky-100 relative flex items-center justify-center">
               {/* Crew Icon Composition */}
               <div className="relative w-64 h-64">
                   {/* Central Icon */}
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                       <GraduationCap className="w-32 h-32 text-blue-600" />
                   </div>
                   
                   {/* Surrounding Educator Icons */}
                   <div className="absolute top-8 left-8">
                       <UsersRound className="w-12 h-12 text-sky-500 bg-white p-2 rounded-full shadow-lg" />
                   </div>
                   <div className="absolute top-8 right-8">
                       <BrainCircuit className="w-12 h-12 text-blue-500 bg-white p-2 rounded-full shadow-lg" />
                   </div>
                   <div className="absolute bottom-8 left-8">
                       <UserCheck className="w-12 h-12 text-teal-500 bg-white p-2 rounded-full shadow-lg" />
                   </div>
                   <div className="absolute bottom-8 right-8">
                       <HeartHandshake className="w-12 h-12 text-indigo-500 bg-white p-2 rounded-full shadow-lg" />
                   </div>
                   
                   {/* Floating Badges */}
                   <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                       <Medal className="w-8 h-8 text-yellow-500" />
                   </div>
                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                       <Award className="w-8 h-8 text-sky-500" />
                   </div>
               </div>
          </div>
      </section>

      {/* ---------------- ACCREDITATIONS ---------------- */}
      <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-16">
                  <div className="w-12 h-12 bg-blue-950 text-white flex items-center justify-center">
                      <Award />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-950">Accreditations & Curriculum</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {content.accreditations.map((item) => (
                      <div key={item.id} className="group border-l-4 border-blue-950 p-8 hover:bg-sky-50 transition-all duration-300 shadow-sm hover:shadow-md">
                          {/* Accreditation Icons */}
                          <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center">
                                  {item.id === 'CAMBRIDGE' && <Globe className="w-8 h-8 text-white" />}
                                  {item.id === 'PEARSON' && <BookOpen className="w-8 h-8 text-white" />}
                                  {item.id === 'IGCSE' && <GraduationCap className="w-8 h-8 text-white" />}
                                  {item.id === 'NCF' && <Flag className="w-8 h-8 text-white" />}
                                  {item.id === 'NIOS' && <Building className="w-8 h-8 text-white" />}
                              </div>
                              <div>
                                  <h3 className="text-2xl font-bold text-blue-950">{item.name}</h3>
                                  <p className="text-sky-600 font-semibold">{item.curriculum}</p>
                              </div>
                          </div>
                          
                          <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                              <School className="w-4 h-4" /> {item.grades}
                          </div>
                          <p className="text-gray-700">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* ---------------- PROGRAMS SECTION (MAGAZINE STYLE) ---------------- */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -z-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-50 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          
          {/* Section Header - Magazine Layout */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 border-b border-blue-950 pb-8">
            <div className="relative">
              <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase block mb-4">
                Curriculum & Pathways
              </span>
              <h2 className="text-6xl md:text-7xl font-serif text-blue-950 leading-none">
                Our<br />Programs<span className="text-sky-500">.</span>
              </h2>
            </div>
            <div className="mt-8 md:mt-0 max-w-sm">
               <p className="text-blue-800 italic text-lg border-l-4 border-sky-500 pl-4">
                "Learning paths designed for every learner."
              </p>
            </div>
          </div>

          {/* Main Grid - Asymmetric Layout */}
          <div className="grid lg:grid-cols-3 gap-12 mb-32">
            
            {/* 1. British Pathway */}
            <div className="relative group mt-12 lg:mt-0">
              {/* Offset Border Effect */}
              <div className="absolute inset-0 border-2 border-blue-200 translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              <div className="bg-white relative z-10 h-full border border-blue-100 p-8 flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-300">
                {/* Visual Header Block */}
                <div className="bg-blue-950 w-16 h-16 flex items-center justify-center mb-8">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-serif text-blue-950 mb-2">British Pathway</h3>
                <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">British curriculum • Global</p>

                {/* Icons Row */}
                <div className="flex gap-4 mb-8 border-b border-gray-100 pb-6">
                  <Flag className="w-5 h-5 text-blue-600" />
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {['Cambridge / IGCSE / A & AS Level', 'Cambridge certified teachers', 'Complete IGCSE preparation', 'International assessments'].map((item, index) => (
                    <li key={index} className="flex items-start text-sm group/item">
                      <span className="w-1.5 h-1.5 bg-sky-500 mt-2 mr-3 group-hover/item:bg-blue-950 transition-colors"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center gap-2 text-blue-950 font-bold hover:gap-4 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Indian Pathway (Highlighted) */}
            <div className="relative group">
              {/* Solid Color Background Block */}
              <div className="absolute inset-0 bg-blue-950 transform -rotate-1 translate-x-2 translate-y-2"></div>

              <div className="bg-white relative z-10 h-full p-8 flex flex-col shadow-xl">
                 <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-4 py-2">
                    MOST POPULAR
                 </div>
                
                <div className="bg-sky-100 w-16 h-16 flex items-center justify-center mb-8">
                  <Flag className="w-8 h-8 text-blue-950" />
                </div>

                <h3 className="text-3xl font-serif text-blue-950 mb-2">Indian Pathway</h3>
                <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">CBSE / NCERT • National</p>

                <div className="flex gap-4 mb-8 border-b border-gray-100 pb-6">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <Book className="w-5 h-5 text-sky-600" />
                  <School className="w-5 h-5 text-sky-600" />
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {['NCF / NIOS', 'NCERT aligned syllabus', 'Board exam preparation', 'NEP 2020 aligned'].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-950 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 bg-blue-950 text-white font-medium hover:bg-blue-900 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* 3. Learning FLOWW */}
            <div className="relative group mt-12 lg:mt-0">
               <div className="absolute inset-0 border-2 border-blue-200 translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              <div className="bg-white relative z-10 h-full border border-blue-100 p-8 flex flex-col hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-300">
                <div className="bg-sky-500 w-16 h-16 flex items-center justify-center mb-8">
                  <Brain className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-serif text-blue-950 mb-2">Learning FLOWW</h3>
                <p className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">Fundamental Skills</p>

                <div className="flex gap-4 mb-8 border-b border-gray-100 pb-6">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <Heart className="w-5 h-5 text-blue-400" />
                  <UsersIcon className="w-5 h-5 text-blue-400" />
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {['Mastery Pathway - English & Maths', 'Holistic development', 'Learner-centric approach', 'Capstone Projects'].map((item, index) => (
                    <li key={index} className="flex items-start text-sm group/item">
                      <span className="w-1.5 h-1.5 bg-sky-500 mt-2 mr-3 group-hover/item:bg-blue-950 transition-colors"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center gap-2 text-blue-950 font-bold hover:gap-4 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Garage Section - Geometric Split Layout */}
          <div className="relative mt-24">
            <div className="bg-blue-950 text-white lg:flex min-h-[500px]">
              
              {/* Left Content */}
              <div className="lg:w-1/3 p-12 lg:p-16 flex flex-col justify-center border-r border-blue-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-sky-500"></div>
                <PenTool className="w-12 h-12 text-sky-400 mb-8" />
                <h3 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">Athena<br/>Learning Garage</h3>
                <p className="text-blue-200 mb-8 font-light italic text-xl">"Imagine. Build. Belong."</p>
                <div className="text-sm font-bold tracking-widest uppercase text-sky-400 mb-2">Physical Centers</div>
                <div className="text-blue-100">Grades 1-12</div>
                
                <button className="mt-12 border border-sky-400 text-sky-400 px-8 py-3 hover:bg-sky-400 hover:text-blue-950 transition-colors w-max">
                    Visit a Centre
                </button>
              </div>

              {/* Right Grid */}
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3">
                {[
                  { name: 'Robotics', icon: Cpu },
                  { name: 'Electronics', icon: Cctv },
                  { name: 'Tinkering', icon: Tool },
                  { name: 'AI & IOT', icon: Brain },
                  { name: 'Design', icon: Palette },
                  { name: 'Capstone', icon: Target }
                ].map((item, idx) => (
                  <div key={idx} className="border border-blue-900 flex flex-col items-center justify-center p-8 hover:bg-blue-900 transition-colors group cursor-pointer">
                    <item.icon className="w-10 h-10 text-sky-500 group-hover:text-white transition-colors mb-4" />
                    <span className="font-serif text-lg tracking-wide">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          {/* ---------------- CLASS OPTIONS (REDESIGNED) ---------------- */}
          <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <h2 className="text-5xl md:text-6xl font-serif text-blue-950">
                  Class Options<span className="text-sky-500">.</span>
                </h2>
                <p className="text-blue-600 font-medium tracking-wide uppercase text-sm mt-4 md:mt-0">
                   Choose Your Batch & Schedule
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* 1. Batch Size - Clean List Style */}
                <div className="bg-white p-8 border-t-4 border-blue-950 shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-blue-50">
                        <Users className="w-6 h-6 text-blue-950" />
                     </div>
                     <h3 className="text-2xl font-serif text-blue-950">Batch Size</h3>
                   </div>

                   <div className="space-y-4">
                      {[
                        { label: 'Standard', size: '24-26', desc: 'Collaborative Learning' },
                        { label: 'Premium', size: '20-22', desc: 'Balanced Approach', active: true },
                        { label: 'Elite', size: '16-18', desc: 'Focused Attention' }
                      ].map((batch) => (
                        <div key={batch.label} className={`group p-4 border ${batch.active ? 'border-sky-500 bg-sky-50/30' : 'border-slate-100 hover:border-blue-200'} transition-all`}>
                           <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-blue-950">{batch.label}</span>
                              <span className="text-2xl font-serif text-sky-600">{batch.size}</span>
                           </div>
                           <div className="text-xs text-slate-500 uppercase tracking-wider">{batch.desc}</div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* 2. Timing - Clean List Style */}
                <div className="bg-white p-8 border-t-4 border-sky-500 shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-sky-50">
                        <Clock className="w-6 h-6 text-sky-600" />
                     </div>
                     <h3 className="text-2xl font-serif text-blue-950">Timings (IST)</h3>
                   </div>

                   <div className="space-y-4">
                      {[
                        { time: '9:30 AM', icon: Sun },
                        { time: '11:00 AM', icon: Coffee },
                        { time: '1:30 PM', icon: Sun },
                        { time: '3:20 PM', icon: Sunset }
                      ].map((s) => (
                        <div key={s.time} className="flex items-center justify-between p-4 border-b border-slate-100 hover:pl-6 transition-all cursor-pointer group">
                           <div className="flex items-center gap-3">
                              <s.icon className="w-4 h-4 text-slate-400 group-hover:text-sky-500" />
                              <span className="text-lg font-serif text-blue-950">{s.time}</span>
                           </div>
                           <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                   </div>
                </div>

                {/* 3. Student Zone - Clean List Style */}
                <div className="bg-white p-8 border-t-4 border-blue-950 shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-blue-50">
                        <World className="w-6 h-6 text-blue-950" />
                     </div>
                     <h3 className="text-2xl font-serif text-blue-950">Student Zone</h3>
                   </div>

                   <div className="space-y-6">
                      <div className="p-6 bg-slate-50 border border-slate-200 text-center hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                         <div className="text-4xl mb-4">🇮🇳</div>
                         <h4 className="font-bold text-blue-950 mb-1">Indian Zone</h4>
                         <p className="text-sm text-slate-500">Local curriculum focus</p>
                      </div>
                      <div className="p-6 bg-blue-950 text-white text-center shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform">
                         <div className="text-4xl mb-4">🌍</div>
                         <h4 className="font-bold text-white mb-1">Global Zone</h4>
                         <p className="text-sm text-blue-200">International perspective</p>
                      </div>
                   </div>
                </div>

              </div>

              <div className="mt-16 text-center">
                 <button className="bg-blue-600 text-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-blue-950 transition-colors shadow-lg shadow-blue-500/30">
                    Check Availability
                 </button>
              </div>
            </div>
          </section>

          {/* ---------------- RATINGS ---------------- */}
          <section className="py-24 px-6 bg-slate-50">
              <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-blue-950 mb-12">Trusted Excellence</h2>
                  <div className="flex justify-center items-center mb-8">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-12 h-12 text-yellow-400 fill-current mx-2" />
                      ))}
                      <span className="ml-6 text-3xl font-light text-blue-950">4.9/5</span>
                  </div>
                  <p className="text-xl text-blue-800">
                      Based on 2,500+ parent reviews across 78 countries
                  </p>
              </div>
          </section>

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

          {/* ---------------- BLOGS ---------------- */}
          <section className="py-24 px-6 bg-blue-950 text-white">
              <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-end mb-16 border-b border-blue-800 pb-6">
                      <div>
                          <h2 className="text-4xl font-bold mb-2">Latest Insights</h2>
                          <p className="text-sky-400">Read our latest articles</p>
                      </div>
                      <BookOpen className="w-10 h-10 text-sky-400" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {content.blogs.map((blog, index) => (
                          <div key={index} className="bg-blue-900 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                              {/* Icon Header */}
                              <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-700 w-full relative overflow-hidden flex items-center justify-center">
                                   <div className="relative">
                                       {index === 0 && <TrendingUp className="w-16 h-16 text-sky-300" />}
                                       {index === 1 && <Eye className="w-16 h-16 text-sky-300" />}
                                       {index === 2 && <FileText className="w-16 h-16 text-sky-300" />}
                                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                                           <PenTool className="w-4 h-4 text-white" />
                                       </div>
                                   </div>
                              </div>
                              <div className="p-8">
                                  <div className="flex justify-between text-xs text-sky-300 mb-4 uppercase tracking-wider">
                                      <span className="flex items-center gap-2">
                                          <Tag className="w-3 h-3" /> {blog.category}
                                      </span>
                                      <span className="flex items-center gap-2">
                                          <Clock className="w-3 h-3" /> {blog.readTime}
                                      </span>
                                  </div>
                                  <h3 className="text-xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{blog.title}</h3>
                                  <p className="text-blue-200 text-sm leading-relaxed">{blog.excerpt}</p>
                              </div>
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
      </section>

    </div>
  );
};

// Additional Icons that were referenced
const Tool = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const Crown = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 7a2 2 0 012-2h10a2 2 0 012 2v.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V7zM3 15a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z" /></svg>;
const Sun = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const Coffee = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14m-7 0h14a2 2 0 002-2v-1a2 2 0 00-2-2H5a2 2 0 00-2 2v1a2 2 0 002 2z" /></svg>;
const Sunset = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 18a5 5 0 00-10 0m12 0H5m0 0l-2 2m2-2l2 2m11-6H4m16 0l-2 2m2-2l2 2M4 12h16M4 12l-2 2m2-2l2 2m11-6H5m14 0l-2-2m2 2l2-2" /></svg>;
const HelpCircle = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Tag = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;

export default AthenaElegantLayout;