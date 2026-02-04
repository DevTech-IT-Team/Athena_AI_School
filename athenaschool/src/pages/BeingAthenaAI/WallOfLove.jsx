import React, { useState } from "react";

import { Star, Quote, ChevronDown } from "lucide-react";

const ReviewCard = ({ name, review, initial, colorClass, platform }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
    <Quote className="absolute -top-2 -right-2 w-16 h-16 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="flex items-center gap-4 mb-5 relative z-10">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md transform group-hover:scale-110 transition-transform duration-300 ${colorClass}`}
      >
        {initial}
      </div>
      <div className="flex-1">
        <h4 className="text-[14px] font-bold text-[#074D8D] uppercase tracking-tight leading-tight">
          {name}
        </h4>
        <div className="flex text-yellow-400 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>

    <p className="text-gray-600 text-[13px] leading-relaxed mb-6 grow italic relative z-10">
      "{review}"
    </p>

    <div className="pt-4 border-t border-gray-50 flex items-center justify-between relative z-10">
      <button className="text-[11px] font-bold text-gray-400 hover:text-[#074D8D] transition-colors uppercase tracking-widest">
        Hide
      </button>
      <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
        <img
          src={
            platform === "google"
              ? "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
              : "https://cdn-icons-png.flaticon.com/512/174/174857.png"
          }
          alt={platform}
          className="h-3.5 w-3.5 object-contain"
        />
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">
          {platform}
        </span>
      </div>
    </div>
  </div>
);

function WallOfLove() {
  const [googleLimit, setGoogleLimit] = useState(4);
  const [linkedInLimit, setLinkedInLimit] = useState(4);

  const GOOGLE_REVIEWS = Array.from({ length: 15 }, (_, i) => ({
    id: `g-${i}`,
    name:
      [
        "Yoihenba Lour",
        "Usha Madhuri",
        "Umera Firdous",
        "Suhana Suhail",
        "Aman Gupta",
      ][i % 5] + (i > 4 ? ` ${i}` : ""),
    initial: ["Y", "U", "U", "S", "A"][i % 5],
    colorClass: [
      "bg-[#074D8D]",
      "bg-[#6366f1]",
      "bg-purple-600",
      "bg-pink-500",
      "bg-emerald-600",
    ][i % 5],
    platform: "google",
    review:
      "The curriculum at Athena AI Online School is incredibly engaging. My teachers are lovely and awesome—they teach very nicely by explaining everything clearly! I've seen a lot of improvement in my skills.",
  }));

  const LINKEDIN_REVIEWS = Array.from({ length: 10 }, (_, i) => ({
    id: `l-${i}`,
    name:
      ["Wati", "Sasmita Shelly", "Jasmine Chakraborty", "Karuna Kochar"][
        i % 4
      ] + (i > 3 ? ` ${i}` : ""),
    initial: ["W", "S", "J", "K"][i % 4],
    colorClass: ["bg-gray-800", "bg-orange-600", "bg-blue-700", "bg-cyan-600"][
      i % 4
    ],
    platform: "linkedin",
    review:
      "Athena AI Online School has completely changed our perspective on digital education. The focus on creativity and skill-based learning is exactly what students need today.",
  }));

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-50">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <nav className="text-[10px] mb-12 flex items-center gap-2 font-bold tracking-[0.25em] uppercase text-gray-400">
          <span className="hover:text-gray-600 cursor-pointer transition-colors">
            Home
          </span>
          <span className="text-gray-300">/</span>
          <span className="hover:text-gray-600 cursor-pointer transition-colors">
            Being Athena AI
          </span>
          <span className="text-gray-300">/</span>
          <span className="text-[#074D8D]">Wall of Love</span>
        </nav>

        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#074D8D] mb-6 tracking-tight leading-tight">
            Athena AI Online School Reviews
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            We are loved by parents, students, and the larger community who
            believe in quality education.
          </p>
          <div className="mt-10 flex justify-center">
            <span className="bg-[#F1F8E9] text-[#074D8D] text-[11px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest border border-[#dcedc8] flex items-center gap-2 shadow-sm">
              <Star size={14} fill="#0D47A1" strokeWidth={0} />
              Our community's testimonials are the best social proof we can get!
            </span>
          </div>
        </div>

        <section className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Athena AI Online School
              </h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="h-7"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Reviews
              </h2>
            </div>
            <div className="w-24 h-1 bg-[#FFC107] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {GOOGLE_REVIEWS.slice(0, googleLimit).map((rev) => (
              <ReviewCard key={rev.id} {...rev} />
            ))}
          </div>

          {googleLimit < GOOGLE_REVIEWS.length && (
            <div className="flex justify-center">
              <button
                onClick={() => setGoogleLimit((prev) => prev + 4)}
                className="group flex items-center gap-3 px-12 py-4 bg-[#FFC107] text-white text-[13px] font-black rounded-xl shadow-lg hover:bg-[#E6AC00] hover:-translate-y-1 transition-all uppercase tracking-widest"
              >
                Load More Reviews
                <ChevronDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </div>
          )}
        </section>

        <section className="pb-10">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Athena AI Online School
              </h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="h-7"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Reviews
              </h2>
            </div>
            <div className="w-24 h-1 bg-[#074D8D] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {LINKEDIN_REVIEWS.slice(0, linkedInLimit).map((rev) => (
              <ReviewCard key={rev.id} {...rev} />
            ))}
          </div>

          {linkedInLimit < LINKEDIN_REVIEWS.length && (
            <div className="flex justify-center">
              <button
                onClick={() => setLinkedInLimit((prev) => prev + 4)}
                className="group flex items-center gap-3 px-12 py-4 border-2 border-[#074D8D] text-[#074D8D] text-[13px] font-black rounded-xl hover:bg-[#074D8D] hover:text-white transition-all uppercase tracking-widest shadow-md hover:shadow-xl"
              >
                Load More LinkedIn Reviews
                <ChevronDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default React.memo(WallOfLove);
