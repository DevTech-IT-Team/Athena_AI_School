import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EnquireTab from './components/EnquireTab';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./components/Programs'));
const Pathway = lazy(() => import('./pages/Pathway'));
const Contact = lazy(() => import('./pages/Contact'));
const ApplyNow = lazy(() => import('./pages/Admissions/ApplyNow'));
const WhoShouldRegister = lazy(() => import('./pages/Admissions/WhoShouldRegister'));
const BatchTimings = lazy(() => import('./pages/Admissions/BatchTimings'));
const EssentialRequirements = lazy(() => import('./pages/Admissions/EssentialRequirements'));
const Fees = lazy(() => import('./pages/Admissions/Fees'));
const HowItWorks = lazy(() => import('./pages/Howitworks/HowItWorksSimple'));
const SpecialEducation = lazy(() => import('./pages/Howitworks/SpecialEducation'));
const Technology = lazy(() => import('./pages/Howitworks/Technology'));
const Features = lazy(() => import('./pages/Howitworks/Features'));
const WhyOnlineOnly = lazy(() => import('./pages/Howitworks/WhyOnlineOnly'));
const FAQ = lazy(() => import('./pages/Howitworks/FAQ'));
const AffiliationsAccreditation = lazy(() => import('./pages/Howitworks/AffiliationsAccreditation'));
const Resources = lazy(() => import('./pages/Howitworks/Resources'));
const ResourcesDownloads = lazy(() => import('./pages/Howitworks/ResourcesDownloads'));
const Follow = lazy(() => import('./pages/Follow'));
const LearningGarage = lazy(() => import('./pages/LearningGarage'));

function ScrollToTopWrapper({ children }) {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        <Suspense fallback={<div className="py-16 text-center text-gray-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ScrollToTopWrapper><Home /></ScrollToTopWrapper>} />
            <Route path="/pathway" element={<ScrollToTopWrapper><Pathway /></ScrollToTopWrapper>} />
            <Route path="/about" element={<ScrollToTopWrapper><About /></ScrollToTopWrapper>} />
            <Route path="/programs" element={<ScrollToTopWrapper><Programs /></ScrollToTopWrapper>} />
            <Route path="/resources" element={<ScrollToTopWrapper><Resources /></ScrollToTopWrapper>} />
            <Route path="/contact" element={<ScrollToTopWrapper><Contact /></ScrollToTopWrapper>} />
            <Route path="/follow" element={<ScrollToTopWrapper><Follow /></ScrollToTopWrapper>} />
            <Route path="/learning-garage" element={<ScrollToTopWrapper><LearningGarage /></ScrollToTopWrapper>} />
            <Route path="/apply-now" element={<ScrollToTopWrapper><ApplyNow /></ScrollToTopWrapper>} />
            <Route path="/who-should-register" element={<ScrollToTopWrapper><WhoShouldRegister /></ScrollToTopWrapper>} />
            <Route path="/batch-timings" element={<ScrollToTopWrapper><BatchTimings /></ScrollToTopWrapper>} />
            <Route path="/essential-requirements" element={<ScrollToTopWrapper><EssentialRequirements /></ScrollToTopWrapper>} />
            <Route path="/fees" element={<ScrollToTopWrapper><Fees /></ScrollToTopWrapper>} />
            <Route path="/how-it-works" element={<ScrollToTopWrapper><HowItWorks /></ScrollToTopWrapper>} />
            <Route path="/special-education" element={<ScrollToTopWrapper><SpecialEducation /></ScrollToTopWrapper>} />
            <Route path="/technology" element={<ScrollToTopWrapper><Technology /></ScrollToTopWrapper>} />
            <Route path="/features" element={<ScrollToTopWrapper><Features /></ScrollToTopWrapper>} />
            <Route path="/why-online-only" element={<ScrollToTopWrapper><WhyOnlineOnly /></ScrollToTopWrapper>} />
            <Route path="/faq" element={<ScrollToTopWrapper><FAQ /></ScrollToTopWrapper>} />
            <Route path="/affiliations-accreditation" element={<ScrollToTopWrapper><AffiliationsAccreditation /></ScrollToTopWrapper>} />
            <Route path="/resources-downloads" element={<ScrollToTopWrapper><ResourcesDownloads /></ScrollToTopWrapper>} />
          </Routes>
        </Suspense>
        <Footer />
        <EnquireTab />
      </div>
    </ErrorBoundary>
  );
}

export default App
