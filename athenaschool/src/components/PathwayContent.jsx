import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import { pathwayContent } from "../data/pathwayContent";

// Lazy load sections
const AthenaFeatureSection = lazy(() => import("./AthenaFeatureSection"));
const PhilosophySection = lazy(() => import("./PhilosophySection"));
const AccreditationUISection = lazy(() => import("./AccreditationUISection"));
const OurPrograms = lazy(() => import("./OurPrograms"));
const ClassSelection = lazy(() => import("./ClassSelection"));
const BlogCards = lazy(() => import("./BlogCards"));
const ParentTestimonials = lazy(() => import("./ParentTestimonials"));
const FAQSection = lazy(() => import("./FAQSection"));

// Section loading fallback
const SectionFallback = ({ label }) => (
  <div
    className="flex min-h-[280px] items-center justify-center px-6 py-16"
    aria-label={`Loading ${label}`}
  >
    <div className="flex flex-col items-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />

      <p className="text-sm font-medium text-slate-500">
        Loading {label}...
      </p>
    </div>
  </div>
);

// Lazy section wrapper
const LazySection = ({
  children,
  label,
  placeholderHeight = 360,
  background = "bg-white",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full ${background}`}
      aria-label={label}
    >
      {isVisible ? (
        <Suspense fallback={<SectionFallback label={label} />}>
          {children}
        </Suspense>
      ) : (
        <div
          className="flex w-full items-center justify-center"
          style={{ minHeight: placeholderHeight }}
        >
          <div className="h-6 w-6 animate-pulse rounded-full bg-blue-200" />
        </div>
      )}
    </section>
  );
};

// Main Layout
const AthenaElegantLayout = () => {
  return (
    <main className="w-full overflow-hidden bg-white font-sans text-[#10234F]">

      {/* ================= HERO ================= */}
      <HeroSection hero={pathwayContent.hero} />

      {/* ================= FEATURES ================= */}
      <LazySection
        label="k12onlineschool features"
        placeholderHeight={520}
        background="bg-[#F0FAF7]"
      >
        <AthenaFeatureSection />
      </LazySection>

      {/* ================= PHILOSOPHY ================= */}
      <LazySection
        label="philosophy"
        placeholderHeight={400}
        background="bg-[#FFF7F0]"
      >
        <PhilosophySection />
      </LazySection>

      {/* ================= ACCREDITATION ================= */}
      <LazySection
        label="accreditation"
        placeholderHeight={400}
        background="bg-[#F0FAF7]"
      >
        <AccreditationUISection />
      </LazySection>

      {/* ================= PROGRAMS ================= */}
      <LazySection
        label="our programs"
        placeholderHeight={500}
        background="bg-[#FFFBEA]"
      >
        <OurPrograms />
      </LazySection>

      {/* ================= CLASS SELECTION ================= */}
      <LazySection
        label="class selection"
        placeholderHeight={450}
        background="bg-[#F3F6FF]"
      >
        <ClassSelection />
      </LazySection>

      {/* ================= BLOG ================= */}
      <LazySection
        label="blog"
        placeholderHeight={400}
        background="bg-[#FFF7F0]"
      >
        <BlogCards />
      </LazySection>

      {/* ================= TESTIMONIALS ================= */}
      <LazySection
        label="testimonials"
        placeholderHeight={450}
        background="bg-[#F0FAF7]"
      >
        <ParentTestimonials />
      </LazySection>

      {/* ================= FAQ ================= */}
      <LazySection
        label="faq"
        placeholderHeight={450}
        background="bg-[#FFF7F0]"
      >
        <FAQSection />
      </LazySection>

    </main>
  );
};

export default React.memo(AthenaElegantLayout);