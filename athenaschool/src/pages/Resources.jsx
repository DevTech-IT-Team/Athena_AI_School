import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Award, 
  ArrowRight, Brain, Target, Trophy, Star, CheckCircle, MessageCircle,
  Phone, Mail, Globe, Clock, Shield, Heart, Lightbulb, Zap
} from 'lucide-react';

function Resources() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    hero: {
      title: "Resources & Support",
      subtitle: "Everything you need to succeed in your learning journey",
      description: "Find answers to common questions, access helpful resources, and get the support you need"
    },

    quickActions: [
      {
        title: "Academic Support",
        description: "Get help with coursework, assignments, and exam preparation",
        icon: BookOpen,
        color: "bg-blue-600",
        link: "/#contact"
      },
      {
        title: "Technical Help",
        description: "Resolve platform issues and learn how to use our tools effectively",
        icon: Shield,
        color: "bg-sky-500",
        link: "/#contact"
      },
      {
        title: "Parent Resources",
        description: "Access guides, reports, and parent portal information",
        icon: Users,
        color: "bg-indigo-600",
        link: "/#contact"
      }
    ],

    faqCategories: [
      {
        category: "General",
        icon: HelpCircle,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        items: [
          {
            question: "What is the British Curriculum?",
            answer: "The British Curriculum follows the UK National Curriculum framework, which is recognized globally for its rigor and comprehensive approach to education. It emphasizes critical thinking, creativity, and analytical skills."
          },
          {
            question: "How does online learning work?",
            answer: "Our online learning platform provides live interactive classes, recorded lessons, and comprehensive resources. Students attend scheduled classes with qualified teachers and access materials 24/7 for flexible learning."
          },
          {
            question: "What age groups do you serve?",
            answer: "We serve students from ages 3 to 18, covering Early Years (3-5), Primary (5-11), Secondary (11-14), and Senior School (14-18) programs."
          }
        ]
      },
      {
        category: "Curriculum",
        icon: BookOpen,
        color: "text-sky-600",
        bgColor: "bg-sky-50",
        items: [
          {
            question: "Which qualifications do students receive?",
            answer: "Students receive internationally recognized qualifications including IGCSE, AS and A-Levels, which are accepted by universities worldwide. Our curriculum aligns with UK National Curriculum standards."
          },
          {
            question: "How is the curriculum delivered online?",
            answer: "Our curriculum is delivered through live interactive classes, multimedia resources, virtual labs, and collaborative projects. Teachers use specialized online pedagogy to ensure engagement and comprehension."
          },
          {
            question: "Are the subjects the same as traditional schools?",
            answer: "Yes, we offer the same core and foundation subjects as traditional British schools, including English, Mathematics, Sciences, Humanities, Languages, Arts, and Computing, adapted for online delivery."
          }
        ]
      },
      {
        category: "Teachers",
        icon: Users,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        items: [
          {
            question: "What qualifications do your teachers have?",
            answer: "All our teachers are UK-qualified and certified to teach the British Curriculum. They have extensive experience in online pedagogy and undergo continuous professional development."
          },
          {
            question: "How are teachers trained for online learning?",
            answer: "Our teachers undergo specialized training in online pedagogy, digital learning tools, and virtual classroom management. They participate in monthly training sessions and quarterly performance reviews."
          },
          {
            question: "Can students interact with teachers?",
            answer: "Absolutely! Students have live interactions with teachers during classes, can schedule one-on-one sessions, and have access to teachers during designated office hours for additional support."
          }
        ]
      },
      {
        category: "Admissions",
        icon: Award,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        items: [
          {
            question: "How do I apply?",
            answer: "Visit our admissions page to fill out the application form. You'll need to provide academic records, complete an assessment, and participate in a virtual interview with our admissions team."
          },
          {
            question: "What documents are required?",
            answer: "You'll need to provide previous academic transcripts, proof of identity, immunization records, and complete our online assessment. Additional documents may be required based on the grade level."
          },
          {
            question: "Is there an entrance exam?",
            answer: "Yes, we conduct age-appropriate assessments to evaluate the student's current academic level and ensure proper placement in our curriculum. This helps us customize the learning experience."
          }
        ]
      }
    ],

    supportChannels: [
      {
        title: "Live Chat Support",
        description: "Get instant help from our support team",
        icon: MessageCircle,
        hours: "Mon-Fri, 9 AM - 6 PM",
        action: "Start Chat"
      },
      {
        title: "Email Support",
        description: "Send us your questions and we'll respond within 24 hours",
        icon: Mail,
        hours: "24/7 Response",
        action: "Send Email"
      },
      {
        title: "Phone Support",
        description: "Speak directly with our support representatives",
        icon: Phone,
        hours: "Mon-Sat, 8 AM - 8 PM",
        action: "Call Now"
      }
    ]
  };

  return (
    <div className="font-sans text-blue-950 bg-white">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-200/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* ---------------- QUICK ACTIONS ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
              Quick Access
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Get Help Instantly
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link 
                  key={index}
                  to={action.link}
                  className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
                >
                  {/* Offset Border Effect */}
                  <div className="absolute inset-0 border-2 border-blue-200 translate-x-2 translate-y-2 rounded-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                  
                  <div className="relative z-10">
                    <div className={`${action.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-blue-950 mb-3">{action.title}</h3>
                    <p className="text-gray-600 mb-4">{action.description}</p>
                    
                    <div className="flex items-center text-sky-600 font-semibold group-hover:text-blue-950 transition-colors">
                      Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-bold tracking-widest text-sm uppercase block mb-4">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our British curriculum online school
            </p>
          </div>

          <div className="space-y-8">
            {content.faqCategories.map((category, catIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={catIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className={`${category.bgColor} px-8 py-6 border-b border-gray-200`}>
                    <div className="flex items-center">
                      <div className={`${category.color} p-3 rounded-xl mr-4`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-950">{category.category}</h3>
                    </div>
                  </div>
                  
                  {/* FAQ Items */}
                  <div className="divide-y divide-gray-100">
                    {category.items.map((item, itemIndex) => {
                      const currentIndex = `${catIndex}-${itemIndex}`;
                      return (
                        <div key={itemIndex} className="group">
                          <button
                            onClick={() => toggleAccordion(currentIndex)}
                            className="w-full flex justify-between items-center p-8 text-left hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex items-center flex-1">
                              <div className="w-2 h-2 bg-sky-400 rounded-full mr-4 group-hover:bg-blue-950 transition-colors"></div>
                              <span className="text-lg font-medium text-blue-950">{item.question}</span>
                            </div>
                            <div className="flex items-center">
                              {openIndex === currentIndex ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </div>
                          </button>
                          
                          {openIndex === currentIndex && (
                            <div className="px-8 pb-8 text-gray-600 animate-in slide-in-from-top-2 duration-200">
                              <div className="pl-6 border-l-2 border-sky-200">
                                {item.answer}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SUPPORT CHANNELS ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-blue-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 p-8">
            {[...Array(48)].map((_, i) => (
              <MessageCircle key={i} className="w-6 h-6 text-white" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-sky-400 font-bold tracking-widest text-sm uppercase block mb-4">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto mb-8"></div>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Our support team is ready to assist you with any additional questions about our 
              British curriculum, programs, or enrollment process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                    <p className="text-sky-100 mb-4">{channel.description}</p>
                    
                    <div className="flex items-center text-sky-400 text-sm mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.hours}
                    </div>
                    
                    <button className="bg-white text-blue-950 px-6 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors w-full">
                      {channel.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 text-white mr-4" />
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students thriving in our innovative online learning environment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Contact Admissions Team <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pathway"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;