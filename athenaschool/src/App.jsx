import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./components/Programs'));
const Resources = lazy(() => import('./pages/Resources'));
const Pathway = lazy(() => import('./pages/Pathway'));
const Contact = lazy(() => import('./pages/Contact'));
const ApplyNow = lazy(() => import('./pages/ApplyNow'));
const WhoShouldRegister = lazy(() => import('./pages/WhoShouldRegister'));
const BatchTimings = lazy(() => import('./pages/BatchTimings'));
const EssentialRequirements = lazy(() => import('./pages/EssentialRequirements'));
const Fees = lazy(() => import('./pages/Fees'));

function ScrollToTopWrapper({ children }) {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

function App() {
  return (
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
          <Route path="/apply-now" element={<ScrollToTopWrapper><ApplyNow /></ScrollToTopWrapper>} />
          <Route path="/who-should-register" element={<ScrollToTopWrapper><WhoShouldRegister /></ScrollToTopWrapper>} />
          <Route path="/batch-timings" element={<ScrollToTopWrapper><BatchTimings /></ScrollToTopWrapper>} />
          <Route path="/essential-requirements" element={<ScrollToTopWrapper><EssentialRequirements /></ScrollToTopWrapper>} />
          <Route path="/fees" element={<ScrollToTopWrapper><Fees /></ScrollToTopWrapper>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App
