import { useState } from 'react';
import { 
  ChevronDown, Users, Clock, Globe, GraduationCap, Award, BookOpen, CheckCircle, Star, Monitor,
  Calendar, Target, Users as UsersIcon, PenTool
} from 'lucide-react';

function PathwayContent() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState('premium');
  const [selectedSession, setSelectedSession] = useState('S2');
  const [selectedZone, setSelectedZone] = useState('indian');

  // Content Configuration - Easier to manage
  const content = {
    hero: {
      title: "School for Your Child?",
      subtitle: "Excellence Delivered, Consistently",
      schoolName: "21K School"
    },
    
    features: [
      {
        id: 'tech',
        title: "Technology Driven Learning",
        description: "Our Online Learning School provides a seamless, tech-driven learning experience. With features such as progress tracking, on-demand access to materials, and interactive tools, our learners and expert faculty are always supported. Our Online Learning School's ease of use provides a holistic learning experience.",
        icon: Monitor,
        iconBg: "bg-blue-100",
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
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        textColor: "text-blue-900",
        bgColor: "bg-gray-50",
        reverse: true
      },
      {
        id: 'future',
        title: "Future Ready Education",
        description: "Offering globally recognized curriculums with a future-oriented approach, 21K prepares learners for success not only academically but in a rapidly evolving world. It enables us cater to both local and global educational standards, opening doors to international opportunities.",
        icon: Target,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        textColor: "text-blue-900",
        bgColor: "bg-white",
        reverse: false
      }
    ],

    academicCrew: {
      title: "Meet Our Academic Crew",
      description: "Building the future of learning needs a team of 325+ passionate educators and innovators. At 21K School, an online school dedicated to excellence, our leadership and mentors are committed to guiding learners on their unique learning paths.",
      cta: "Meet The Crew"
    },

    philosophy: {
      title: "Different Minds, Different Goals",
      subtitle: "One Tailored Path to Success",
      description: "Our alumni are proof that unique journeys lead to extraordinary destinations. From diverse goals to tailored paths, 21K School online learners have gone on to thrive in top colleges and careers, showcasing the power of personalized inclusive education."
    },

    faqs: [
      {
        question: "Is the 21K school affiliated?",
        answer: "Yes, 21K School is accredited and recognized by leading educational bodies including Cambridge International, Pearson Edexcel, and NIOS.",
        category: "Accreditation"
      },
      {
        question: "Which is better: Indian Curriculum or the British Curriculum?",
        answer: "Both curriculums have their strengths. The British Curriculum offers global recognition while the Indian Curriculum provides strong foundational knowledge. We help you choose based on your child's goals and future aspirations.",
        category: "Curriculum"
      },
      {
        question: "How does 21K school promote equal education?",
        answer: "We provide inclusive education with personalized learning paths, ensuring every student gets equal opportunities regardless of their background or learning style through adaptive technologies and customized support.",
        category: "Philosophy"
      },
      {
        question: "How much does 21K School cost?",
        answer: "Our fee structure varies based on grade level, curriculum choice, and program selection. We offer transparent pricing and flexible payment plans. Contact our admissions team for a detailed fee breakdown.",
        category: "Admissions"
      },
      {
        question: "How to enroll in 21K School?",
        answer: "Enroll through our streamlined online process: 1) Submit application form, 2) Provide academic records, 3) Attend orientation, 4) Complete onboarding. Our team guides you at every step.",
        category: "Admissions"
      },
      {
        question: "How does 21K School work?",
        answer: "We combine live interactive classes with recorded lessons, personalized learning plans, and continuous assessment through our advanced platform accessible 24/7 from any device.",
        category: "Operations"
      },
      {
        question: "How to pay 21K School fees?",
        answer: "Multiple secure options: online portal, bank transfer, UPI, or installment plans. We provide payment reminders and receipts through our parent portal.",
        category: "Admissions"
      },
      {
        question: "What are the benefits of choosing 21K School?",
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

  // FAQ Toggle Handler
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Feature Component
  const FeatureSection = ({ feature }) => {
    const Icon = feature.icon;
    
    return (
      <section className={`py-16 px-4 ${feature.bgColor}`} id={feature.id}>
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${feature.reverse ? 'md:grid-flow-dense' : ''}`}>
            {feature.reverse ? (
              <>
                <div className={`md:col-start-2 ${feature.reverse ? 'md:order-2' : ''}`}>
                  <div className={`${feature.iconBg} rounded-lg p-8 text-center`}>
                    <Icon className={`w-16 h-16 ${feature.iconColor} mx-auto mb-4`} 
                          aria-hidden="true" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {feature.title.split(' ')[0]}<br />
                      <span className={feature.textColor}>
                        {feature.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className={`${feature.reverse ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`${feature.iconBg} rounded-lg p-8 text-center`}>
                  <Icon className={`w-16 h-16 ${feature.iconColor} mx-auto mb-4`} 
                        aria-hidden="true" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {feature.title.split(' ')[0]}<br />
                    <span className={feature.textColor}>
                      {feature.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" role="main">
      {/* Hero Section */}
      <header className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-3">
            {content.hero.subtitle}
          </p>
          <div className="text-lg md:text-xl text-gray-600 font-medium">
            {content.hero.schoolName}
          </div>
        </div>
      </header>

      {/* Feature Sections */}
      {content.features.map((feature) => (
        <FeatureSection key={feature.id} feature={feature} />
      ))}

      {/* Academic Crew */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.academicCrew.title}
          </h2>
          <div className="flex justify-center mb-8">
            <UsersIcon className="w-20 h-20 text-blue-200" aria-hidden="true" />
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            {content.academicCrew.description}
          </p>
          <p className="text-lg mb-8">
            <span className="font-bold text-2xl">325+</span> passionate educators and innovators
          </p>
          <button 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
            aria-label={content.academicCrew.cta}
          >
            {content.academicCrew.cta}
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.philosophy.title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-700 mb-8">
            {content.philosophy.subtitle}
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {content.philosophy.description}
            </p>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 max-w-2xl mx-auto border border-yellow-100">
              <div className="flex justify-center mb-4">
                <Award className="w-16 h-16 text-yellow-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Proven Success Stories
              </h3>
              <p className="text-gray-700">
                Our learners excel in universities worldwide and diverse careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="programs-heading">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📘 Our Programs
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Learning paths designed for every learner
            </p>
            <p className="text-lg text-gray-600">
              Choose from flexible programs that adapt to your child's goals and schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* British Pathway */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-200">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">British Pathway</h3>
                <p className="text-blue-600 font-medium">British curriculum • Global recognition</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Cambridge / IGCSE / A & AS Level</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Cambridge certified teachers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Complete IGCSE preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">International assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">University pathway support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">International standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Future-focused learning</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Explore British Pathway
              </button>
            </div>

            {/* Indian Pathway */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-200">
              <div className="mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Indian Pathway</h3>
                <p className="text-orange-600 font-medium">Indian curriculum • Board exams</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">NCF / NIOS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">NCERT aligned syllabus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Board exam preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Competitive exam coaching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Foreign & regional languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Strong foundations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Academic excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">NEP 2020 aligned</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Explore Indian Pathway
              </button>
            </div>

            {/* 21K Learning FLOWW */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-200">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <UsersIcon className="w-6 h-6 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">21K Learning FLOWW</h3>
                <p className="text-purple-600 font-medium">Foundational & Future Skills for learners who want to grow beyond classroom</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 italic mb-4">Fundamental Learning of Working Ways</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Mastery Pathway - English</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Mastery Pathway – Maths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Languages (Indian and Foreign)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Capstone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Holistic development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">Learner-centric approach</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Explore Learning FLOWW
              </button>
            </div>
          </div>

          {/* 21K Learning Garage */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-indigo-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">21K Learning Garage</h3>
                <p className="text-indigo-600 font-medium">Physical Experiential Learning Centres for Grades 1-12</p>
                <p className="text-lg text-gray-700 mt-3">Imagine. Build. Belong.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Robotics Garage',
                  'Electronics Garage', 
                  'Tinkering Garage',
                  'Ai & IOT Garage',
                  'Design Garage',
                  'Capstone Garage'
                ].map((garage, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <PenTool className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{garage}</h4>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Explore Learning Garage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Options Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="class-options-heading">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 id="class-options-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Class Options
            </h2>
            <p className="text-xl text-gray-700">
              Choose Your Batch & Schedule
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Batch Size */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Batch Size</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedBatch('standard')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      selectedBatch === 'standard'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl font-bold text-gray-900">24-26</div>
                    <div className="text-sm text-gray-600">Standard</div>
                  </button>
                  <button
                    onClick={() => setSelectedBatch('premium')}
                    className={`w-full p-4 rounded-lg border-2 transition-all relative ${
                      selectedBatch === 'premium'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {selectedBatch === 'premium' && (
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="text-2xl font-bold text-gray-900">20-22</div>
                    <div className="text-sm text-gray-600">Premium</div>
                  </button>
                  <button
                    onClick={() => setSelectedBatch('elite')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      selectedBatch === 'elite'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl font-bold text-gray-900">16-18</div>
                    <div className="text-sm text-gray-600">Elite</div>
                  </button>
                </div>
              </div>

              {/* Session Timing */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Timing (IST)</h3>
                <div className="space-y-2">
                  {[
                    { id: 'S1', time: '9:30 AM' },
                    { id: 'S2', time: '11:00 AM' },
                    { id: 'S3', time: '1:30 PM' },
                    { id: 'S4', time: '3:20 PM' }
                  ].map((session) => (
                    <button
                      key={session.id}
                      onClick={() => setSelectedSession(session.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        selectedSession === session.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-lg font-bold text-gray-900">{session.id}</div>
                      <div className="text-sm text-gray-600">{session.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Zone */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Zone</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedZone('indian')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      selectedZone === 'indian'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-2xl mr-2">🇮🇳</span>
                      <div className="text-left">
                        <div className="text-lg font-bold text-gray-900">Indian</div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedZone('global')}
                    className={`w-full p-4 rounded-lg border-2 transition-all ${
                      selectedZone === 'global'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-2xl mr-2">🌍</span>
                      <div className="text-left">
                        <div className="text-lg font-bold text-gray-900">Global</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Selected Display */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Selected:</div>
                <div className="text-lg font-semibold text-gray-900">
                  {selectedBatch === 'standard' && 'Standard (24-26)'}
                  {selectedBatch === 'premium' && 'Premium (20-22)'}
                  {selectedBatch === 'elite' && 'Elite (16-18)'}
                  {' • '}
                  {selectedSession === 'S1' && 'S1 - 9:30 AM'}
                  {selectedSession === 'S2' && 'S2 - 11:00 AM'}
                  {selectedSession === 'S3' && 'S3 - 1:30 PM'}
                  {selectedSession === 'S4' && 'S4 - 3:20 PM'}
                  {' • '}
                  {selectedZone === 'indian' ? 'Indian Zone' : 'Global Zone'}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="blog-heading">
        <div className="container mx-auto">
          <h2 id="blog-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Online School Insights & Updates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.blogs.map((blog, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                  {blog.readTime}
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <button 
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              aria-label="View all blog articles"
            >
              View All Articles →
            </button>
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trusted by Parents Worldwide
          </h2>
          <div className="flex justify-center items-center mb-6" aria-label="5-star rating">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-10 h-10 text-yellow-400 fill-current mx-1" 
                aria-hidden="true"
              />
            ))}
            <span className="ml-4 text-xl font-semibold text-gray-900">4.9/5</span>
          </div>
          <p className="text-lg text-gray-700">
            Based on 2,500+ parent reviews across 78 countries
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-4xl">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* FAQ Categories */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {['All', 'Accreditation', 'Curriculum', 'Admissions', 'Operations'].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-gray-800 text-lg" itemProp="name">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {openFAQ === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 py-5 border-t border-gray-100 bg-gray-50"
                    itemScope
                    itemType="https://schema.org/Answer"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Contact admissions team"
            >
              Contact Admissions Team
            </button>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="accreditation-heading">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 id="accreditation-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognized & Accredited
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Globally Certified Curriculum Standards
            </p>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our programs meet international education standards through recognized accreditation bodies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.accreditations.map((acc) => (
              <div 
                key={acc.id}
                className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 text-center border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {acc.name}
                </h3>
                <p className="text-sm text-gray-700 mb-1 font-medium">
                  {acc.curriculum}
                </p>
                <p className="text-xs text-gray-500 mb-3 font-mono">
                  {acc.grades}
                </p>
                <div className="inline-flex items-center text-green-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                  Accredited
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  {acc.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              All accreditations are current and verified for the 2024-2025 academic year
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 20,000+ learners experiencing personalized, future-ready education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              aria-label="Schedule a free consultation"
            >
              Free Consultation
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              aria-label="Download school brochure"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PathwayContent;