import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sadiq Khan",
    location: "Parent of Zoya · Class 3 · Gurgaon",
    text: "k12onlineschool has been an incredible journey for my daughter. The flexibility of online learning combined with high-tech AI tools has helped her excel beyond traditional methods.",
    rating: 5,
    accent: "border-[#2463EB]",
    bg: "bg-[#EFF6FF]",
  },
  {
    id: 2,
    name: "Anita Sharma",
    location: "Parent of Aryan · Class 7 · Mumbai",
    text: "The personalized attention Aryan receives is unmatched. k12onlineschool's curriculum is forward-thinking, and the transition to virtual classrooms was completely seamless.",
    rating: 5,
    accent: "border-[#0F766E]",
    bg: "bg-[#EFFBF8]",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    location: "Parent of Diya · Class 5 · Bangalore",
    text: "What surprised us most was the affordability without compromising quality. The school provides a world-class education that fits perfectly into our modern lifestyle.",
    rating: 5,
    accent: "border-[#EAB308]",
    bg: "bg-[#FFFBEB]",
  },
];

const TestimonialCard = ({ name, location, text, rating, accent, bg }) => {
  return (
    <article
      className={`group relative ${bg} rounded-3xl p-7 md:p-8 border-t-4 ${accent} 
      shadow-[0_8px_30px_rgba(15,23,42,0.06)] 
      hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)]
      hover:-translate-y-2 transition-all duration-300
      flex flex-col justify-between h-full`}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-5">
        <div className="bg-white rounded-2xl p-3 shadow-sm">
          <Quote className="w-6 h-6 text-[#2463EB]" />
        </div>

        {/* Star Rating */}
        <div
          className="flex gap-1 bg-white px-3 py-2 rounded-full shadow-sm"
          aria-label={`${rating} out of 5 stars`}
        >
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              size={15}
              className="fill-[#FBBF24] text-[#FBBF24]"
            />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-[#172554] text-base md:text-lg leading-relaxed mb-8 font-medium">
        "{text}"
      </p>

      {/* Parent Details */}
      <div className="pt-5 border-t border-slate-200/80">
        <h4 className="text-[#142B5F] font-bold text-lg mb-1">
          {name}
        </h4>

        <p className="text-[#64748B] text-xs md:text-sm font-semibold tracking-wide">
          {location}
        </p>
      </div>
    </article>
  );
};

const ParentTestimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#F1F6FF] py-20 md:py-24 px-5 md:px-10">

      {/* Background Decorations */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D9F3ED] rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFF0D9] rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DBEAFE] text-[#2463EB] text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Star size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
            Parent Stories
          </span>

          <h2 className="text-[#142B5F] text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            Trusted by Families.
            <br />
            <span className="text-[#2463EB]">
              Loved by Parents.
            </span>
          </h2>

          <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover how families are experiencing flexible learning,
            personalised teaching and a better online school journey
            with Edulectual K12.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-slate-100">

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
            </div>

            <p className="text-[#142B5F] font-semibold text-sm md:text-base">
              Every family's learning journey matters to us.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(ParentTestimonials);