import React from 'react';

const AccreditationUISection = () => {
  const curriculumData = [
    {
      title: "Cambridge International",
      subtitle: "British Curriculum",
      details: "Grades 1-8",
      extra: "Globally recognized standards",
    },
    {
      title: "Pearson Edexcel",
      subtitle: "International GCSE",
      details: "Registration No. 94883",
      extra: "International qualifications",
    },
    {
      title: "Cambridge IGCSE",
      subtitle: "A & AS Levels",
      details: "Affiliation No. IA702",
      extra: "Advanced level programs",
    },
    {
      title: "Indian NCF",
      subtitle: "Indian Curriculum",
      details: "Grades 1-8",
      extra: "National Curriculum Framework",
    },
    {
      title: "NIOS",
      subtitle: "Indian Curriculum",
      details: "Grades 9-12",
      extra: "National Institute of Open Schooling",
    },
  ];

  return (
    <div className="relative py-20 w-full bg-white overflow-hidden font-sans">
      
      {/* Background Split Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-blue-300 z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center">
        
        {/* Left Side: Headings & Introduction */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 md:pr-16 mb-8 md:mb-0">
          
          {/* Top Section (Visual Top White Area) */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">
              Our Standards
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight">
              ACCREDITATIONS <br />
              & CURRICULUM
            </h1>
          </div>

          {/* Bottom Section (Visual Bottom Blue Area) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-blue-900">
              World-Class Education
            </h3>
            <p className="text-blue-900/80 max-w-md leading-relaxed text-sm">
              We provide a comprehensive learning environment integrated with globally recognized boards and national frameworks, ensuring excellence from primary to advanced levels.
            </p>
            
            {/* The Dash Indicator from the reference image */}
            <div className="w-12 h-1 bg-blue-950 mt-2"></div>
          </div>
        </div>

        {/* Right Side: The Floating White Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white shadow-xl w-full max-w-sm p-6 md:p-8 relative">
            
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
               <h3 className="text-xl font-bold text-blue-950">Programs</h3>
               {/* Decorative Circle */}
               <div className="w-6 h-6 rounded-full border-3 border-blue-300"></div>
            </div>

            {/* List Area - No Scrollbar */}
            <div className="space-y-4">
              {curriculumData.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                      {item.subtitle}
                    </span>
                    <div className="flex justify-between items-end mt-1">
                      <span className="text-xs text-gray-500 font-medium">
                        {item.details}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">
                      {item.extra}
                    </span>
                  </div>
                  {/* Divider line, hide for last item */}
                  {index !== curriculumData.length - 1 && (
                    <hr className="border-gray-100 mt-3" />
                  )}
                </div>
              ))}
            </div>

             {/* Footer visual inside card */}
             <div className="mt-6 pt-3 text-center">
                <button className="text-xs font-bold text-blue-950 hover:text-blue-600 border-b-2 border-blue-300 pb-1 transition-all">
                  VIEW FULL PROSPECTUS
                </button>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AccreditationUISection;
