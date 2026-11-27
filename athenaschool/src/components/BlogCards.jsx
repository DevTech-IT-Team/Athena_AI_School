import React from "react";
import { BookOpen, Laptop, Lightbulb, ArrowUpRight } from "lucide-react";
import LazyImage from "./LazyImage";

import johnImage from "/assets/images/heroes/jonathan.webp";
import brookeImage from "/assets/images/content/brooke.webp";
import element5Image from "/assets/images/content/3.webp";

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Online Education",
      subtitle: "Trends • 5 min read",
      description:
        "Exploring how technology transforms learning experiences and shapes the future of online education.",
      imageUrl: johnImage,
      icon: Laptop,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      cardBg: "bg-white",
    },
    {
      id: 2,
      title: "Balancing Screen Time in Digital Learning",
      subtitle: "Wellness • 4 min read",
      description:
        "Discover strategies to create healthy learning habits and maintain balance in digital education.",
      imageUrl: brookeImage,
      icon: BookOpen,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-100",
      cardBg: "bg-white",
    },
    {
      id: 3,
      title: "Parent's Guide to Choosing Curriculum",
      subtitle: "Guidance • 6 min read",
      description:
        "Explore Indian and international curriculum options to help make informed education choices.",
      imageUrl: element5Image,
      icon: Lightbulb,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      cardBg: "bg-white",
    },
  ];

  return (
    <section className="w-full bg-[#FFF7EF] py-16 px-5 sm:px-8 lg:px-16 font-sans">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-[1.5px] mb-3">
            Resources & Insights
          </span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#142B59] leading-tight">
                Latest Insights
              </h2>

              <p className="text-gray-600 text-sm mt-3 max-w-2xl leading-relaxed">
                Explore ideas, guidance and insights to support your child's
                learning journey in an online school environment.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors">
              Explore all articles
              <ArrowUpRight size={16} />
            </button>

          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogs.map((blog) => {
            const Icon = blog.icon;

            return (
              <article
                key={blog.id}
                className={`${blog.cardBg} rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden">

                  <LazyImage
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Icon */}
                  <div
                    className={`absolute top-4 left-4 ${blog.bgColor} w-11 h-11 rounded-xl flex items-center justify-center shadow-sm`}
                  >
                    <Icon size={21} className={blog.iconColor} />
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Meta */}
                  <p className="text-xs font-semibold text-teal-700 mb-3">
                    {blog.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-[#142B59] mb-3 leading-snug">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {blog.description}
                  </p>

                  {/* Read More */}
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors">
                    Read article
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default React.memo(BlogCards);