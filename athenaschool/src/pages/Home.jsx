import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

// Only critical components imported directly
const Hero = lazy(() => import('../components/Hero'));
const Stats = lazy(() => import('../components/Stats'));

// Everything else lazy loaded
const Features = lazy(() => import('../components/Features'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CTA = lazy(() => import('../components/CTA'));
const Contact = lazy(() => import('../components/Contact'));
const EnquireTab = lazy(() => import('../components/EnquireTab'));
const OurPrograms = lazy(() => import('../components/OurPrograms'));
const CurriculumOverview = lazy(() => import('../components/CurriculumOverview'));
const AcademicCrew = lazy(() => import('../components/AcademicCrew'));

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
      { rootMargin: '100px 0px', threshold: 0.1 }
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

function Home() {
  const [showAboveFold, setShowAboveFold] = useState(false);

  useEffect(() => {
    const aboveFoldTimer = setTimeout(() => setShowAboveFold(true), 100);
    return () => clearTimeout(aboveFoldTimer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <EnquireTab />
      </Suspense>

      <Suspense fallback={
        <div className="w-full h-screen bg-white flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      }>
        <Hero />
      </Suspense>
      
      {/* Stats Section - Critical for above fold */}
      {showAboveFold && (
        <Suspense fallback={
          <div className="py-12 bg-white flex items-center justify-center">
            <div className="text-gray-400">Loading stats...</div>
          </div>
        }>
          <div className="py-12 bg-white relative z-10">
            <Stats />
          </div>
        </Suspense>
      )}
      
      {/* Our Programs Section */}
      <LazySection label="our programs" placeholderHeight={500}>
        <Suspense fallback={<SectionFallback label="our programs" />}>
          <OurPrograms />
        </Suspense>
      </LazySection>
      
      {/* Features Section */}
      <LazySection label="features" placeholderHeight={400}>
        <Suspense fallback={<SectionFallback label="features" />}>
          <div className="py-12 bg-white relative z-10">
            <Features />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Curriculum Overview Section */}
      <LazySection label="curriculum overview" placeholderHeight={400}>
        <Suspense fallback={<SectionFallback label="curriculum overview" />}>
          <div className="py-12 bg-white relative z-10">
            <CurriculumOverview />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Testimonials Section */}
      <LazySection label="testimonials" placeholderHeight={400}>
        <Suspense fallback={<SectionFallback label="testimonials" />}>
          <div className="py-12 bg-white relative overflow-hidden">
            <Testimonials />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Academic Crew Section */}
      <LazySection label="academic crew" placeholderHeight={400}>
        <Suspense fallback={<SectionFallback label="academic crew" />}>
          <div className="py-12 bg-white relative z-10">
            <AcademicCrew />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Contact Section */}
      <LazySection label="contact" placeholderHeight={400}>
        <Suspense fallback={<SectionFallback label="contact" />}>
          <div className="bg-white relative z-10">
            <Contact />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Call to Action Section */}
      <LazySection label="call to action" placeholderHeight={300}>
        <Suspense fallback={<SectionFallback label="call to action" />}>
          <CTA />
        </Suspense>
      </LazySection>
    </div>
  );
}

export default Home;