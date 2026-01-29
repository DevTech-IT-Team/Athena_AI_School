import React from 'react';

const FlowwCTA = () => {
  return (
    <div className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Your Child's FLOWW?
          </h2>
          <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            FLOWW exists to help learners discover their strengths early, build skills that matter for life, and learn with confidence, clarity, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Free consultation</h3>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Personalised assessment</h3>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Flexible batches</h3>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Works with any school</h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="bg-sky-500 hover:bg-sky-400 text-blue-950 font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20">
            Enquire Now 📞
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-950 font-bold py-4 px-8 rounded-full transition-all">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowwCTA;
