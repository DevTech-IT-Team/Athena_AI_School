import React, { Suspense, lazy } from 'react';
import { useProgressiveLoading } from '../hooks/useProgressiveLoading';
import FollowHero from '../components/FollowHero';

// Lazy load all sections except hero
const FlowwEnrollmentUI = lazy(() => import('../components/FlowwEnrollmentUI'));
const FlowwDifferent = lazy(() => import('../components/FlowwDifferent'));
const FlowwLearningStack = lazy(() => import('../components/FlowwLearningStack'));
const FlowwTemplate = lazy(() => import('../components/FlowwTemplate'));

// Loading placeholder
const SectionPlaceholder = ({ height = "h-64" }) => (
  <div className={`flex items-center justify-center ${height} bg-gray-100 animate-pulse`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

export default function Follow() {
  const { visibleSections, registerSection } = useProgressiveLoading();

  return (
    <div className="min-h-screen">
      <div className="pt-4 bg-white">
        <div ref={registerSection('hero')}>
          <FollowHero />
        </div>
      </div>

      {/* FlowwEnrollmentUI Section */}
      <div ref={registerSection('enrollment')}>
        {visibleSections.has('enrollment') ? (
          <Suspense fallback={<SectionPlaceholder />}>
            <FlowwEnrollmentUI />
          </Suspense>
        ) : (
          <SectionPlaceholder height="h-96" />
        )}
      </div>

      {/* FlowwDifferent Section */}
      <div ref={registerSection('different')}>
        {visibleSections.has('different') ? (
          <Suspense fallback={<SectionPlaceholder />}>
            <FlowwDifferent />
          </Suspense>
        ) : (
          <SectionPlaceholder height="h-96" />
        )}
      </div>

      {/* FlowwLearningStack Section */}
      <div ref={registerSection('learning')}>
        {visibleSections.has('learning') ? (
          <Suspense fallback={<SectionPlaceholder />}>
            <FlowwLearningStack />
          </Suspense>
        ) : (
          <SectionPlaceholder height="h-96" />
        )}
      </div>

      {/* FlowwTemplate Section */}
      <div ref={registerSection('template')}>
        {visibleSections.has('template') ? (
          <Suspense fallback={<SectionPlaceholder />}>
            <FlowwTemplate />
          </Suspense>
        ) : (
          <SectionPlaceholder height="h-96" />
        )}
      </div>
    </div>
  );
}
