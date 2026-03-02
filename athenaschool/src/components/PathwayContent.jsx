import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import HeroSection from './HeroSection';
import { pathwayContent } from '../data/pathwayContent';

// Lazy load ALL sections except hero
const AthenaFeatureSection = lazy(() => import('./AthenaFeatureSection'));
const PhilosophySection = lazy(() => import('./PhilosophySection'));
const AccreditationUISection = lazy(() => import('./AccreditationUISection'));
const OurPrograms = lazy(() => import('./OurPrograms'));
const ClassSelection = lazy(() => import('./ClassSelection'));
const BlogCards = lazy(() => import('./BlogCards'));
const ParentTestimonials = lazy(() => import('./ParentTestimonials'));
const FAQSection = lazy(() => import('./FAQSection'));

const SectionFallback = ({ label }) => (
  <div className="py-12 text-center text-sm text-gray-500" aria-label={`Loading ${label}`}>
    Loading {label}...
  </div>
);

const LazySection = ({ children, label, placeholderHeight = 360 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px', threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-label={label || 'deferred section'}>
      {isVisible ? (
        children
      ) : (
        <div className="py-12 flex items-center justify-center text-gray-400" style={{ minHeight: placeholderHeight }}>
          <span className="text-sm">Preparing {label || 'section'}…</span>
        </div>
      )}
    </div>
  );
};

const AthenaElegantLayout = () => {
  return (
    <div className="font-sans text-blue-950 bg-white">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <HeroSection hero={pathwayContent.hero} />

      {/* ---------------- ATHENA FEATURE SECTION ---------------- */}
      <LazySection label="Wisdom features" placeholderHeight={520}>
        <Suspense fallback={<SectionFallback label="Wisdom features" />}>
          <AthenaFeatureSection />
        </Suspense>
      </LazySection>

      {/* ---------------- PHILOSOPHY SECTION ---------------- */}
      <LazySection label="philosophy">
        <Suspense fallback={<SectionFallback label="philosophy" />}>
          <PhilosophySection />
        </Suspense>
      </LazySection>

      {/* ---------------- ACCREDITATION UI SECTION ---------------- */}
      <LazySection label="accreditation">
        <Suspense fallback={<SectionFallback label="accreditation" />}>
          <AccreditationUISection />
        </Suspense>
      </LazySection>

      {/* ---------------- OUR PROGRAMS SECTION ---------------- */}
      <LazySection label="our programs">
        <Suspense fallback={<SectionFallback label="our programs" />}>
          <OurPrograms />
        </Suspense>
      </LazySection>

      {/* ---------------- CLASS SELECTION SECTION ---------------- */}
      <LazySection label="class selection">
        <Suspense fallback={<SectionFallback label="class selection" />}>
          <ClassSelection />
        </Suspense>
      </LazySection>

      {/* ---------------- BLOG CARDS ---------------- */}
      <LazySection label="blog">
        <Suspense fallback={<SectionFallback label="blog" />}>
          <BlogCards />
        </Suspense>
      </LazySection>

      {/* ---------------- PARENT TESTIMONIALS ---------------- */}
      <LazySection label="testimonials">
        <Suspense fallback={<SectionFallback label="testimonials" />}>
          <ParentTestimonials />
        </Suspense>
      </LazySection>

      {/* ---------------- FAQS ---------------- */}
      <LazySection label="faq">
        <Suspense fallback={<SectionFallback label="faq" />}>
          <FAQSection />
        </Suspense>
      </LazySection>

    </div>
  );
};

export default React.memo(AthenaElegantLayout);