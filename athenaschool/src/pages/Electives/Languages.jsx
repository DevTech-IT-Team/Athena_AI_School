import React from "react";

const Languages = () => {
  const sidebarList = [
    "Computational Thinking and Coding",
    "Languages", // Active Item
  ];

  const tableData = [
    { grade: "Grade 1", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 2", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 3", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 4", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 5", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 6", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 7", indian: "₹8,700", foreign: "₹11,000" },
    { grade: "Grade 8", indian: "₹8,700", foreign: "₹11,000" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-linear-to-r from-blue-300 to-blue-500 py-40 text-center text-white mt-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter">
          Languages
        </h1>
        <div className="h-1.5 w-20 bg-[#FFB400] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20 mb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-1/4 self-start">
            <div className="bg-[#E9E9E9] rounded-sm border-t-4 border-[#00C1DE] overflow-hidden">
              <ul className="flex flex-col">
                {sidebarList.map((item, idx) => (
                  <li
                    key={idx}
                    className={`relative border-b border-gray-200 last:border-0 ${item === "Languages" ? "bg-[#DEDEDE]" : ""}`}
                  >
                    {item === "Languages" && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00C1DE]"></div>
                    )}
                    <button className="w-full text-left px-6 py-4 text-[13px] font-bold text-[#333] transition-colors hover:text-[#00C1DE]">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-2">
              <div className="text-[11px] text-gray-500 italic text-center px-2 mb-4 leading-relaxed">
                "The beauty of online schooling is that you can be anywhere and
                yet have access to quality education..."
              </div>
              <button className="w-full bg-[#FFB400] text-[#074D8D] font-black py-3 rounded-sm uppercase tracking-widest text-[11px]">
                Enquire Now
              </button>
              <button className="w-full bg-[#FFB400] text-[#074D8D] font-black py-3 rounded-sm uppercase tracking-widest text-[11px]">
                Download Prospectus
              </button>
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            <nav className="text-[12px] mb-6 flex items-center gap-1 font-medium text-[#F9A825]">
              <span className="text-gray-400">Home</span>
              <span className="text-gray-300"> &gt; </span>
              <span>Languages</span>
            </nav>

            <h2 className="text-[#2C3E75] text-4xl font-bold mb-6">
              Languages
            </h2>

            <div className="text-gray-700 text-[14px] leading-relaxed space-y-5 mb-10">
              <p>
                Additional language is introduced as electives, enabling
                learners to further develop their linguistic abilities.
              </p>
              <p>
                We provide tailored support for non-English speakers of all
                levels and ages, helping them to successfully adopt English as
                their first language of learning.
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li>
                  Learners can select any one 2nd and 3rd language subject from
                  the below-mentioned options.
                </li>
                <li>
                  While learners must study 2nd Language, studying a third
                  language is optional for Grades 1 to 8.
                </li>
                <li>
                  There is no additional tuition fee for studying a 2nd
                  Language.
                </li>
                <li>
                  Learners of Grades 1 through 8 who choose to pursue a third
                  language will incur additional tuition fees of ₹8700 for
                  Indian Language & ₹11000 for Foreign Language.
                </li>
              </ul>
            </div>

            <div className="max-w-lg mx-auto mb-16 border border-gray-100 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-[#1A365D] text-white text-[13px] font-bold">
                    <th className="py-3 px-4 border-r border-blue-800/30">
                      Grade
                    </th>
                    <th className="py-3 px-4 border-r border-blue-800/30">
                      Indian
                    </th>
                    <th className="py-3 px-4">Foreign</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[14px]">
                  {tableData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 font-bold text-[#1A365D] text-left">
                        {row.grade}
                      </td>
                      <td className="px-6 py-3 font-bold text-[#F9A825]">
                        {row.indian}
                      </td>
                      <td className="px-6 py-3 font-bold text-[#00C1DE]">
                        {row.foreign}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-16">
              <h3 className="text-[#2C3E75] font-bold text-lg mb-6">
                Language Policy
              </h3>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <div className="w-full md:w-64 border rounded-lg overflow-hidden border-gray-100 shadow-sm">
                  <div className="bg-[#3F51B5] text-white text-center py-3 font-bold text-[13px]">
                    Foreign Language Options
                  </div>
                  <div className="divide-y divide-gray-50 text-center text-[13px] text-gray-600">
                    {[
                      "Arabic",
                      "French",
                      "Japanese",
                      "Spanish",
                      "ESOL (English)",
                    ].map((l, i) => (
                      <div
                        key={i}
                        className={`py-2 ${i % 2 !== 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-64 border rounded-lg overflow-hidden border-gray-100 shadow-sm">
                  <div className="bg-[#3F51B5] text-white text-center py-3 font-bold text-[13px]">
                    Indian Regional Languages Options
                  </div>
                  <div className="divide-y divide-gray-50 text-center text-[13px] text-gray-600">
                    {[
                      "Hindi",
                      "Tamil",
                      "Telugu",
                      "Urdu",
                      "Marathi",
                      "Kannada",
                      "Malayalam",
                      "Sanskrit",
                    ].map((l, i) => (
                      <div
                        key={i}
                        className={`py-2 ${i % 2 !== 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
              {[
                "Actions Speak louder than words",
                "Starting the weekend with love we get from our learners",
                "Understanding rainforests with yug",
              ].map((title, idx) => (
                <div key={idx} className="group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-3 shadow-md bg-gray-900">
                    <div className="absolute top-0 left-0 z-10">
                      <div
                        className="bg-[#FFC107] text-[#074D8D] text-[9px] font-black px-3 py-1 flex items-center h-6"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                        }}
                      >
                        #AthenaAI
                      </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                        <span className="ml-0.5">▶</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[12px] font-medium text-gray-500 leading-tight">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Languages;
