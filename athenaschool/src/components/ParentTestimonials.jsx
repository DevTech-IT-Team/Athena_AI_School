import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sadiq Khan",
    location: "Parent of Zoya - Class 3 - Gurgaon",
    text: "WisdomAI School has been an incredible journey for my daughter. The flexibility of online learning combined with high-tech AI tools has helped her excel beyond traditional methods.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Sharma",
    location: "Parent of Aryan - Class 7 - Mumbai",
    text: "The personalized attention Aryan receives is unmatched. WisdomAI School's curriculum is forward-thinking, and the transition to virtual classrooms was completely seamless.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    location: "Parent of Diya - Class 5 - Bangalore",
    text: "What surprised us most was the affordability without compromising quality. The school provides a world-class education that fits perfectly into our modern lifestyle.",
    rating: 5,
  },
];

const TestimonialCard = ({ name, location, text, rating }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
    <div>
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-blue-600 text-blue-600" />
        ))}
      </div>
      
      {/* Quote Text */}
      <p className="text-blue-950 text-lg leading-relaxed mb-6 italic">
        "{text}"
      </p>
    </div>

    {/* Footer Info */}
    <div>
      <h4 className="text-blue-600 font-bold text-xl mb-1">{name}</h4>
      <p className="text-blue-300 font-medium text-sm uppercase tracking-wide">
        {location}
      </p>
    </div>
  </div>
);

const ParentTestimonials = () => {
  return (
    <div className="min-h-screen bg-blue-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-3">
            Parent Success Stories
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold">
            Why Parents Love <span className="text-blue-600">WisdomAI School</span>
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ParentTestimonials);
