import React from "react";
import {
  BookOpen,
  Laptop,
  Lightbulb,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import LazyImage from "./LazyImage";

import johnImage from "/assets/images/heroes/jonathan.webp";
import brookeImage from "/assets/images/content/brooke.webp";
import element5Image from "/assets/images/content/3.webp";

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Online Education",
      category: "Education",
      readTime: "5 min read",
      description:
        "Exploring how technology transforms learning experiences and shapes the future of online education.",
      imageUrl: johnImage,
      icon: Laptop,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      title: "Balancing Screen Time in Digital Learning",
      category: "Wellness",
      readTime: "4 min read",
      description:
        "Discover strategies to create healthy learning habits and maintain balance in digital education.",
      imageUrl: brookeImage,
      icon: BookOpen,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-100",
    },
    {
      id: 3,
      title: "Parent's Guide to Choosing Curriculum",
      category: "Parent Guide",
      readTime: "6 min read",
      description:
        "Explore Indian and international curriculum options to help make informed education choices.",
      imageUrl: element5Image,
      icon: Lightbulb,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F9FC] py-16 md:py-20 px-5 sm:px-8 lg:px-16 font-sans">

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div className="max-w-3xl">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-[1.5px] mb-5">
                Resources & Insights
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B59] leading-tight">
                Ideas and insights for
                <span className="text-blue-600"> modern learning</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl leading-7">
                Explore articles, practical advice and educational insights
                to support children, parents and families throughout their
                learning journey.
              </p>

            </div>

            {/* View All */}
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 w-fit"
            >
              Explore all articles
              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {blogs.map((blog) => {
            const Icon = blog.icon;

            return (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1.5"
              >

                {/* Image */}
                <div className="relative h-60 sm:h-64 overflow-hidden">

                  <LazyImage
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142B59]/30 to-transparent" />

                  {/* Category Icon */}
                  <div
                    className={`absolute top-4 left-4 ${blog.bgColor} w-12 h-12 rounded-xl flex items-center justify-center shadow-sm`}
                  >
                    <Icon
                      size={22}
                      className={blog.iconColor}
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="p-6 md:p-7">

                  {/* Meta Information */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">

                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {blog.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <Clock size={14} />
                      {blog.readTime}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#142B59] leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-7 mb-6">
                    {blog.description}
                  </p>

                  {/* Read More */}
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors duration-300"
                  >
                    Read article

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-[#142B59] p-7 md:p-10 relative overflow-hidden">

          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500/20" />
          <div className="absolute -right-10 -bottom-20 w-48 h-48 rounded-full bg-teal-400/10" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="max-w-2xl">

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Learning goes beyond the classroom
              </h3>

              <p className="text-blue-100/80 text-sm md:text-base leading-7">
                Discover helpful resources, educational ideas and practical
                guidance to help your child thrive in an online learning
                environment.
              </p>

            </div>

            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 shrink-0 px-6 py-3.5 rounded-full bg-white text-[#142B59] font-bold text-sm hover:bg-blue-50 transition-all duration-300"
            >
              Discover resources
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default React.memo(BlogCards);