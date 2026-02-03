import React, { useState, useEffect } from "react";

import GoogleRev1 from "../../assets/BeingAthena/Review-1.png";
import GoogleRev2 from "../../assets/BeingAthena/Review-2.png";
import GoogleRev3 from "../../assets/BeingAthena/review-3.png";
import GoogleRev4 from "../../assets/BeingAthena/review-4.png";
import GoogleRev5 from "../../assets/BeingAthena/review-5.png";
import GoogleRev6 from "../../assets/BeingAthena/review-6.png";
import GoogleRev7 from "../../assets/BeingAthena/review-7.png";
import GoogleRev8 from "../../assets/BeingAthena/review-8.png";
import GoogleRev9 from "../../assets/BeingAthena/review-9.png";
import GoogleRev10 from "../../assets/BeingAthena/review-10.png";
import GoogleRev11 from "../../assets/BeingAthena/review-11.png";
import GoogleRev12 from "../../assets/BeingAthena/review-12.png";
import GoogleRev13 from "../../assets/BeingAthena/review-13.png";
import GoogleRev14 from "../../assets/BeingAthena/review-14.png";
import GoogleRev15 from "../../assets/BeingAthena/review-15.png";
import GoogleRev16 from "../../assets/BeingAthena/review-16.png";
import GoogleRev17 from "../../assets/BeingAthena/review-17.png";
import GoogleRev18 from "../../assets/BeingAthena/review-18.png";
import GoogleRev19 from "../../assets/BeingAthena/review-19.png";
import LinkedInRev1 from "../../assets/BeingAthena/review-6.png";
import LinkedInRev2 from "../../assets/BeingAthena/review-7.png";
import LinkedInRev3 from "../../assets/BeingAthena/review-8.png";
import LinkedInRev4 from "../../assets/BeingAthena/review-9.png";
import LinkedInRev5 from "../../assets/BeingAthena/review-10.png";

// --- Placeholder Data (Replace with your actual image imports) ---
const GOOGLE_REVIEWS = [
  { id: 1, src: GoogleRev1 },
  { id: 2, src: GoogleRev2 },
  { id: 3, src: GoogleRev3 },
  { id: 4, src: GoogleRev4 },
  { id: 5, src: GoogleRev5 },
  { id: 6, src: GoogleRev6 },
  { id: 7, src: GoogleRev7 },
  { id: 8, src: GoogleRev8 },
  { id: 9, src: GoogleRev9 },
  { id: 10, src: GoogleRev10 },
  { id: 11, src: GoogleRev11 },
  { id: 12, src: GoogleRev12 },
  { id: 13, src: GoogleRev14 },
  { id: 14, src: GoogleRev15 },
];

const LINKEDIN_REVIEWS = [
  { id: 1, src: GoogleRev2 },
  // { id: 2, src: 'https://via.placeholder.com/400x600?text=LinkedIn+Post+2' },
  // { id: 3, src: 'https://via.placeholder.com/400x600?text=LinkedIn+Post+3' },
  // { id: 4, src: 'https://via.placeholder.com/400x600?text=LinkedIn+Post+4' },
  // { id: 5, src: 'https://via.placeholder.com/400x600?text=LinkedIn+Post+5' },
];

function WallOfLove() {
  const [googleLimit, setGoogleLimit] = useState(4);
  const [linkedinLimit, setLinkedinLimit] = useState(4);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Preload critical branding assets
      const preloadImages = [
        "/assets/google-logo.webp",
        "/assets/linkedin-logo.webp",
      ];
      preloadImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });

      // Inject SEO Meta Tags
      const metaData = [
        {
          name: "description",
          content: "Wall of Love - Real community reviews for Athena AI School",
        },
        { property: "og:title", content: "Wall of Love | Athena AI School" },
      ];

      metaData.forEach((tag) => {
        const meta = document.createElement("meta");
        if (tag.property) meta.setAttribute("property", tag.property);
        else meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    }
  }, []);

  // Internal Header Component for consistency
  const HeaderSection = () => (
    <div className="text-center py-16 px-4">
      <h1 className="text-4xl font-extrabold text-[#074D8D] mb-4">
        21K Online School Reviews
      </h1>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        We are loved by parents, students, and the larger community who believe
        in quality education.
      </p>
      <div className="mt-4">
        <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-green-200">
          Our community's testimonials are the best social proof we can get!
        </span>
      </div>
    </div>
  );

  // Reusable Grid Component
  const ReviewSection = ({ title, logo, items, limit, setLimit, platform }) => (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="flex items-center justify-center gap-3 mb-10">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {logo && (
          <img src={logo} alt={platform} className="h-7 object-contain" />
        )}
        <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.slice(0, limit).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
          >
            <img
              src={item.src}
              alt={`${platform} testimonial`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {limit < items.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setLimit(items.length)}
            className="bg-[#FFC107] hover:bg-[#E6AC00] text-[#1A1A1A] font-bold py-4 px-10 rounded-lg transition-all shadow-lg active:scale-95"
          >
            Load More {platform} Reviews
          </button>
        </div>
      )}
    </section>
  );

  return (
    <main className="bg-[#FDFDFD] min-h-screen">
      <HeaderSection />

      {/* Google Reviews */}
      <ReviewSection
        title="21K School"
        platform="Google"
        logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        items={GOOGLE_REVIEWS}
        limit={googleLimit}
        setLimit={setGoogleLimit}
      />

      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-20" />

      {/* LinkedIn Reviews */}
      <ReviewSection
        title="21K School"
        platform="LinkedIn"
        logo="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        items={LINKEDIN_REVIEWS}
        limit={linkedinLimit}
        setLimit={setLinkedinLimit}
      />
    </main>
  );
}

export default React.memo(WallOfLove);
