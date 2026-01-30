import React, { useState } from 'react';
import { BookOpen, Calculator, LineChart, Star, Zap, Globe, Award, CheckCircle2 } from 'lucide-react';
import vitalyImage from '../assets/vitaly-gariev-tP666CeG03o-unsplash.jpg';
import johnImage from '../assets/john-FlPc9_VocJ4-unsplash.jpg';
import kimberlyImage from '../assets/kimberly-farmer-lUaaKCUANVI-unsplash.jpg';

const FlowwLearningStack = () => {
  const [activeTab, setActiveTab] = useState('mastery');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-sans text-blue-950">
      
      {/* LEFT SIDE: Fixed Checkerboard (Desktop) */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 grid grid-cols-2 grid-rows-3 overflow-hidden">
        <div className="bg-slate-100"><img src={vitalyImage} alt="Learning" className="object-cover w-full h-full grayscale" /></div>
        <div className="bg-blue-300 p-6 flex flex-col justify-center border-b border-white">
          <BookOpen className="mb-2 w-6 h-6 text-blue-600" />
          <h3 className="font-bold text-lg">Academic Excellence</h3>
        </div>
        <div className="bg-blue-300 p-6 flex flex-col justify-center border-r border-white">
          <Calculator className="mb-2 w-6 h-6 text-blue-600" />
          <h3 className="font-bold text-lg">Cognitive Logic</h3>
        </div>
        <div className="bg-slate-100"><img src={johnImage} alt="Math" className="object-cover w-full h-full grayscale" /></div>
        <div className="bg-slate-100"><img src={kimberlyImage} alt="Habits" className="object-cover w-full h-full grayscale" /></div>
        <div className="bg-blue-300 p-6 flex flex-col justify-center">
          <Star className="mb-2 w-6 h-6 text-blue-600" />
          <h3 className="font-bold text-lg">Future Habits</h3>
        </div>
      </div>

      {/* RIGHT SIDE: Smooth Scroll Content */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col">
        {/* Header */}
        <header className="max-w-xl">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">The FLOWW Learning Stack</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-6">
            Three Dimensions of <span className="text-blue-500">Complete Learning</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            A coherent learning system designed to deliver multi-dimensional success at scale.
          </p>
        </header>

        {/* Tabs Navigation */}
        <nav className="flex gap-8 border-b border-slate-100 mt-12 mb-10">
          {[
            { id: 'mastery', label: 'Mastery Pathways' },
            { id: 'languages', label: 'Languages' },
            { id: 'capstones', label: 'Capstones' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === tab.id ? 'text-blue-950' : 'text-slate-400 hover:text-blue-400'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* MASTERY TAB */}
          {activeTab === 'mastery' && (
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-blue-600">Mastery Pathways — English & Math</h2>
                <p className="text-slate-600 leading-relaxed">
                  Deep, focused mastery programmes designed to build strong academic foundations with AI-assisted personalised progression.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1">
                {[
                  { val: '10', label: 'Months' },
                  { val: '2x', label: 'Per Week' },
                  { val: '40', label: 'Minutes' }
                ].map((stat, i) => (
                  <div key={i} className="bg-blue-50 p-6 rounded-2xl">
                    <div className="text-3xl font-black">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-blue-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="font-bold">Features</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-blue-500" /> Spiral learning with levelled grouping</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-blue-500" /> Classes between 3:15 PM – 5:45 PM IST</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-blue-500" /> Weekly formative mastery checks</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold">Outcomes</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-blue-500" /> Demonstrable skill progression</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-blue-500" /> Quarterly reviews and portfolios</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-blue-500" /> Regular parent progress updates</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* LANGUAGES TAB */}
          {activeTab === 'languages' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-600">Languages Programme</h2>
              <p className="text-slate-600">14 regional and international languages designed for global readiness.</p>
              
              <div className="flex flex-wrap gap-2">
                {['IELTS', 'Arabic', 'French', 'Hindi', 'Japanese', 'Kannada', 'Malayalam', 'Marathi', 'Sanskrit', 'Spanish', 'Tamil', 'Telugu', 'Urdu'].map((lang) => (
                  <span key={lang} className="px-4 py-2 bg-blue-50 rounded-full text-xs font-bold hover:bg-blue-100 cursor-default transition-colors">
                    {lang}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-50">
                {[
                  { title: 'Global', desc: 'International opportunities' },
                  { title: 'Empathy', desc: 'Cultural appreciation' },
                  { title: 'Interest', desc: 'Personalised electives' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CAPSTONES TAB */}
          {activeTab === 'capstones' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-600">Capstones Programme</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Financial Literacy', desc: 'Money management and investments' },
                  { title: 'Young Pioneer', desc: 'Entrepreneurship and business basics' },
                  { title: 'AI & Machine Learning', desc: 'Future-ready technology' },
                  { title: 'Public Speaking', desc: 'Confidence and communication' }
                ].map((cap) => (
                  <div key={cap.title} className="p-5 rounded-2xl bg-blue-50 border border-transparent hover:border-blue-200 transition-all">
                    <div className="font-bold text-sm mb-1">{cap.title}</div>
                    <div className="text-xs text-slate-500">{cap.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="mt-12 group flex items-center gap-3 bg-blue-950 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all">
            Start Learning Journey
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </main>
      </div>
    </div>
  );
};

export default FlowwLearningStack;
