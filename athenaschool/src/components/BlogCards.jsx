import React from 'react';
import { BookOpen, Laptop, Lightbulb } from 'lucide-react';
import LazyImage from './LazyImage';
import johnImage from '/assets/images/heroes/jonathan.webp';
import brookeImage from '/assets/images/content/brooke.webp';
import element5Image from '/assets/images/content/3.webp';

const BlogCards = () => {
  // Demo Data for Online School
  const blogs = [
    {
      id: 1,
      title: "The Future of Online Education",
      subtitle: "Trends • 5 min read",
      description: "Exploring how technology transforms learning experiences",
      imageUrl: johnImage,
      icon: <Laptop size={32} className="text-blue-600" />,
    },
    {
      id: 2,
      title: "Balancing Screen Time in Digital Learning",
      subtitle: "Wellness • 4 min read",
      description: "Strategies for healthy learning habits",
      imageUrl: brookeImage,
      icon: <BookOpen size={32} className="text-blue-600" />,
    },
    {
      id: 3,
      title: "Parent's Guide to Choosing Curriculum",
      subtitle: "Guidance • 6 min read",
      description: "Indian vs International curriculum comparison",
      imageUrl: element5Image,
      icon: <Lightbulb size={32} className="text-blue-600" />,
    }
  ];

  return (
    <div className="relative flex w-full max-w-6xl bg-white shadow-2xl overflow-hidden min-h-[500px]">
        {/* Left Accent Bar (The "L" shape) */}
        <div className="hidden md:block w-16 bg-blue-600 h-full absolute left-0 top-0 z-10"></div>
        <div className="hidden md:block h-6 w-32 bg-blue-600 absolute left-0 bottom-0 z-10"></div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-8 md:pl-24 md:pr-8 py-12">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-blue-950">
              Latest Insights
            </h1>
            <div className="flex gap-2 text-xl mt-1">
              <span className="font-semibold text-blue-400">Read our latest articles</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col items-center text-center group cursor-pointer">
                
                {/* Image Container */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105">
                  <LazyImage 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-blue-950 mb-1">
                  {blog.title}
                </h3>
                <h4 className="text-blue-400 font-medium mb-4 text-sm uppercase tracking-wide">
                  {blog.subtitle}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  {blog.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar (Dark Blue Vertical Bar) */}
        <div className="hidden md:flex w-24 bg-blue-950 items-center justify-center">
          <h2 className="text-white text-2xl font-bold tracking-widest uppercase transform -rotate-90 whitespace-nowrap">
            Featured Articles
          </h2>
        </div>

      </div>
  );
};

export default React.memo(BlogCards);
