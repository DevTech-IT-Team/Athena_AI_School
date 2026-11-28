
import React, { memo } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/gemini.webp (2).webp";

const Hero = memo(() => {
  const learningTags = [
    "India",
    "UAE",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "UK",
    "Australia",
    "USA",
    "Canada",
  ];

  return (
    <section className="ek-home-hero">

      {/* Decorative Background */}
      <div className="ek-home-blob ek-home-blob-top" />
      <div className="ek-home-blob ek-home-blob-bottom" />

      <div className="ek-home-dots" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      {/* Main Hero Container */}
      <div className="ek-home-hero-container">

        {/* LEFT CONTENT */}
        <div className="ek-home-hero-content">

          {/* Badge */}
          <div className="ek-home-admission-badge">
            <span className="ek-home-badge-dot" />
            Admissions Open for 2027–28
          </div>

          {/* Heading */}
          <h1>
            Online School for
            <span>Nursery to Grade 12,</span>
            <span>Wherever You Live</span>
          </h1>

          {/* Description */}
          <p className="ek-home-description">
            Edulectual K12 Online School is a fully online school for
            children from Nursery to Grade 12. Your child learns from
            home with qualified teachers in live online classes,
            follows one clear curriculum and works towards recognised
            qualifications. Admissions are now open for the 2027–28
            academic year.
          </p>

          {/* Supporting Description */}
          <p className="ek-home-description ek-home-description-secondary">
            We offer two pathways, and each one follows the same
            curriculum in every country we serve. The Pearson Edexcel
            British pathway runs from Primary through Lower Secondary
            to International GCSE and International A Level. The Indian
            curriculum pathway prepares students for NIOS (National
            Institute of Open Schooling) examinations. Families can
            join from India, the UAE, Qatar, Oman, Kuwait, Bahrain,
            the UK, Australia, the US and Canada.
          </p>

          {/* Buttons */}
          <div className="ek-home-hero-actions">

            <a href="/contact" className="ek-home-btn ek-home-btn-primary">
              Book a free 2-week trial
              <ArrowRight size={16} />
            </a>

            <a href="/apply-now" className="ek-home-btn ek-home-btn-secondary">
              Apply for 2027-28
              <ArrowRight size={16} />
            </a>

          </div>

          {/* Country Tags */}
          <div className="ek-home-country-tags">
            {learningTags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="ek-home-hero-visual">

          {/* Gradient Ring */}
          <div className="ek-home-image-ring">

            {/* Image */}
            <div className="ek-home-image-inner">
              <img
                src={heroImage}
                alt="Student learning online with Edulectual K12"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

          </div>

          {/* Live Class Badge */}
          <div className="ek-home-floating-card ek-home-live-card">

            <span className="ek-home-float-icon ek-home-live-icon">
              📹
            </span>

            <div>
              <strong>Live online classes</strong>
              <small>With qualified teachers</small>
            </div>

          </div>

          {/* Grade Badge */}
          <div className="ek-home-floating-card ek-home-grade-card">

            <span className="ek-home-float-icon ek-home-grade-icon">
              ⭐
            </span>

            <div>
              <strong>Nursery – Grade 12</strong>
              <small>Edexcel or NIOS</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
});

export default Hero;
