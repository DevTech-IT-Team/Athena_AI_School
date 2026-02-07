import React from "react";

const MinimalBlogComingSoon = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-2 border-[#074D8D] rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#074D8D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>

            <div className="absolute top-0 right-0 w-4 h-4 bg-[#FFB400] rounded-full border-4 border-white"></div>
          </div>
        </div>

        <h1 className="text-[#074D8D] text-4xl font-bold tracking-tight mb-4">
          Insights & Stories
        </h1>

        <div className="w-12 h-1 bg-[#FFB400] mx-auto mb-8"></div>

        <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md mx-auto mb-10">
          Our blog is currently being curated. We're preparing deep dives into
          AI education and learner excellence.
        </p>

        <div className="inline-block border border-gray-100 px-6 py-2 rounded-full">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
            Coming Soon 2026-27
          </span>
        </div>
      </div>
    </div>
  );
};

export default MinimalBlogComingSoon;
