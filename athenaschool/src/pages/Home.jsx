import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

import Hero from '../components/Hero';
import Stats from '../components/Stats';

const TrustIndicators = lazy(() => import('../components/TrustIndicators'));
const LiveChatWidget = lazy(() => import('../components/LiveChatWidget'));
const Programs = lazy(() => import('../components/Programs'));
const CTA = lazy(() => import('../components/CTA'));
const Features = lazy(() => import('../components/Features'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const StudentSpotlight = lazy(() => import('../components/StudentSpotlight'));
const AcademicCrew = lazy(() => import('../components/AcademicCrew'));
const Contact = lazy(() => import('../components/Contact'));
const CurriculumOverview = lazy(() => import('../components/CurriculumOverview'));
const AffordableAccredited = lazy(() => import('../components/AffordableAccredited'));
const EnquireTab = lazy(() => import('../components/EnquireTab'));

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

function Home() {
  const [enableChat, setEnableChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEnableChat(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <EnquireTab />
      </Suspense>

      <Hero />
      
      {/* Stats Section */}
      <div className="py-12 bg-white relative z-10">
        <Stats />
      </div>
      
      <LazySection label="accreditation" placeholderHeight={520}>
        <Suspense fallback={<SectionFallback label="accreditation" />}>
          <AffordableAccredited />
        </Suspense>
      </LazySection>
      
      {/* Programs Section 
      <LazySection label="programs">
        <Suspense fallback={<SectionFallback label="programs" />}>
          <div className="py-12 bg-white relative z-10">
            <Programs />
          </div>
        </Suspense>
      </LazySection>*/}
      
      {/* Features Section */}
      <LazySection label="features">
        <Suspense fallback={<SectionFallback label="features" />}>
          <div className="py-12 bg-white relative z-10">
            <Features />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Testimonials Section */}
      <LazySection label="testimonials">
        <Suspense fallback={<SectionFallback label="testimonials" />}>
          <div className="py-12 bg-white relative overflow-hidden">
            <Testimonials />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Student Spotlight Section */}
      <LazySection label="student stories">
        <Suspense fallback={<SectionFallback label="student stories" />}>
          <StudentSpotlight />
        </Suspense>
      </LazySection>
      
      {/* Academic Crew Section */}
      <LazySection label="academic crew">
        <Suspense fallback={<SectionFallback label="academic crew" />}>
          <AcademicCrew />
        </Suspense>
      </LazySection>
      
      {/* Curriculum Overview */}
      <LazySection label="curriculum overview">
        <Suspense fallback={<SectionFallback label="curriculum overview" />}>
          <div className="py-12 bg-white">
            <CurriculumOverview />
          </div>
        </Suspense>
      </LazySection>
      
      {/* Trust Indicators */}
      <LazySection label="trust indicators">
        <Suspense fallback={<SectionFallback label="trust indicators" />}>
          <TrustIndicators />
        </Suspense>
      </LazySection>
      
      {/* Contact Section */}
      <LazySection label="contact">
        <Suspense fallback={<SectionFallback label="contact" />}>
          <div className="bg-white relative z-10">
            <Contact />
          </div>
        </Suspense>
      </LazySection>
      
      <LazySection label="call to action">
        <Suspense fallback={<SectionFallback label="call to action" />}>
          <CTA />
        </Suspense>
      </LazySection>
      
      {enableChat && (
        <Suspense fallback={null}>
          <LiveChatWidget />
        </Suspense>
      )}
    </div>
  );
}

export default Home;