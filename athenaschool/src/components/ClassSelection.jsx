import React from 'react';
import { Users, Clock, Globe, ArrowRight, Sun, Coffee, Sunset } from 'lucide-react';

const ClassSelection = () => {
  return (
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
                    <Globe className="w-6 h-6 text-blue-950" />
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
  );
};

export default ClassSelection;
