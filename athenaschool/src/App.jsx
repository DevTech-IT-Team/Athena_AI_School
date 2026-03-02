import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import BlogComingSoon from './pages/BeingAthenaAI/BlogCommingSoon';

const Footer = lazy(() => import('./components/Footer'));
const EnquireTab = lazy(() => import('./components/EnquireTab'));

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
const Computational = lazy(() => import('./pages/Electives/Computational'));
const Languages = lazy(() => import('./pages/Electives/Languages'));
const InternationalBenchmarkTest = lazy(() => import('./pages/Electives/InternationalBenchmarkTest'));
const NCFIndia = lazy(() => import('./pages/Academics Indian Pathway/NCFIndia'));
const LearningCulture = lazy(() => import('./pages/Academics Indian Pathway/LearningCulture'));
const PrePrimary = lazy(() => import('./pages/Academics Indian Pathway/PrePrimary'));
const Primary = lazy(() => import('./pages/Academics Indian Pathway/Primary'));
const Middle = lazy(() => import('./pages/Academics Indian Pathway/Middle'));
const SeniorSchool = lazy(() => import('./pages/Academics Indian Pathway/SeniorSchool'));
const MusicArtsPartner = lazy(() => import('./pages/Academics Indian Pathway/MusicArtsPartner'));
const CambridgeInternationalUK = lazy(() => import('./pages/Academics British Pathway/CambridgeInternationalUK'));
const EdexcelUK = lazy(() => import('./pages/Academics British Pathway/EdexcelUK'));
const EarlyYears = lazy(() => import('./pages/Academics British Pathway/EarlyYears'));
const BritishPrimary = lazy(() => import('./pages/Academics British Pathway/BritishPrimary'));
const BritishLowerSecondary = lazy(() => import('./pages/Academics British Pathway/BritishLowerSecondary'));
const BritishUpperSecondary = lazy(() => import('./pages/Academics British Pathway/BritishUpperSecondary'));
const CambridgeIGCSE = lazy(() => import('./pages/Academics British Pathway/CambridgeIGCSE'));
const EdexcelInternationalGCSE = lazy(() => import('./pages/Academics British Pathway/EdexcelInternationalGCSE'));
const BritishAdvancedLevels = lazy(() => import('./pages/Academics British Pathway/BritishAdvancedLevels'));
const CambridgeAdvancedLevel = lazy(() => import('./pages/Academics British Pathway/CambridgeAdvancedLevel'));
const EdexcelInternationalAdvancedLevel = lazy(() => import('./pages/Academics British Pathway/EdexcelInternationalAdvancedLevel'));
const WallOfLove = lazy(() => import('./pages/BeingAthenaAI/WallOfLove'));
const ReferAParent = lazy(() => import('./pages/BeingAthenaAI/ReferAParent'));
const LearnerLedPodcast = lazy(() => import('./pages/BeingAthenaAI/LearnerLedPodcast'));
const StudentSpotlight = lazy(() => import('./pages/BeingAthenaAI/StudentSpotlight'));
const MeetOurAcademicCrew = lazy(() => import('./pages/BeingAthenaAI/MeetOurAcademicCrew'));
const LearnerWork = lazy(() => import('./pages/BeingAthenaAI/LearnerWork'));
const ParentsSpeak = lazy(() => import('./pages/BeingAthenaAI/ParentsSpeak'));
const Press = lazy(() => import('./pages/BeingAthenaAI/Press'));
const Awards = lazy(() => import('./pages/BeingAthenaAI/Awards'));
const OurLearnerCouncil = lazy(() => import('./pages/BeingAthenaAI/OurLearnerCouncil'));
const WhatSetsUsApart = lazy(() => import('./pages/About/WhatSetsUsApart'));
const ValuesAndEthos = lazy(() => import('./pages/About/ValuesAndEthos'));
const AthenaAIGroup = lazy(() => import('./pages/About/AthenaAIGroup'));
const OurLeaders = lazy(() => import('./pages/About/OurLeaders'));
const HabitsOfMind = lazy(() => import('./pages/About/HabitsOfMind'));
const AthenaAISchool = lazy(() => import('./pages/About/AthenaAISchool'));
const MissionBridge = lazy(() => import('./pages/About/MissionBridge'));
const WhyOnlineSchool = lazy(() => import('./pages/About/WhyOnlineSchool'));
const OurVision = lazy(() => import('./pages/About/OurVision'));

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
            <Route path="/computational-thinking" element={<ScrollToTopWrapper><Computational /></ScrollToTopWrapper>} />
            <Route path="/languages" element={<ScrollToTopWrapper><Languages /></ScrollToTopWrapper>} />
            <Route path="/international-benchmark-test" element={<ScrollToTopWrapper><InternationalBenchmarkTest /></ScrollToTopWrapper>} />
            <Route path="/ncf-india" element={<ScrollToTopWrapper><NCFIndia /></ScrollToTopWrapper>} />
            <Route path="/learning-culture" element={<ScrollToTopWrapper><LearningCulture /></ScrollToTopWrapper>} />
            <Route path="/pre-primary" element={<ScrollToTopWrapper><PrePrimary /></ScrollToTopWrapper>} />
            <Route path="/primary" element={<ScrollToTopWrapper><Primary /></ScrollToTopWrapper>} />
            <Route path="/middle" element={<ScrollToTopWrapper><Middle /></ScrollToTopWrapper>} />
            <Route path="/senior-school" element={<ScrollToTopWrapper><SeniorSchool /></ScrollToTopWrapper>} />
            <Route path="/music-arts-partner" element={<ScrollToTopWrapper><MusicArtsPartner /></ScrollToTopWrapper>} />
            <Route path="/cambridge-international-uk" element={<ScrollToTopWrapper><CambridgeInternationalUK /></ScrollToTopWrapper>} />
            <Route path="/edexcel-uk" element={<ScrollToTopWrapper><EdexcelUK /></ScrollToTopWrapper>} />
            <Route path="/early-years" element={<ScrollToTopWrapper><EarlyYears /></ScrollToTopWrapper>} />
            <Route path="/british-primary" element={<ScrollToTopWrapper><BritishPrimary /></ScrollToTopWrapper>} />
            <Route path="/british-lower-secondary" element={<ScrollToTopWrapper><BritishLowerSecondary /></ScrollToTopWrapper>} />
            <Route path="/british-upper-secondary" element={<ScrollToTopWrapper><BritishUpperSecondary /></ScrollToTopWrapper>} />
            <Route path="/cambridge-igcse" element={<ScrollToTopWrapper><CambridgeIGCSE /></ScrollToTopWrapper>} />
            <Route path="/edexcel-international-gcse" element={<ScrollToTopWrapper><EdexcelInternationalGCSE /></ScrollToTopWrapper>} />
            <Route path="/british-advanced-levels" element={<ScrollToTopWrapper><BritishAdvancedLevels /></ScrollToTopWrapper>} />
            <Route path="/cambridge-advanced-level" element={<ScrollToTopWrapper><CambridgeAdvancedLevel /></ScrollToTopWrapper>} />
            <Route path="/edexcel-international-advanced-level" element={<ScrollToTopWrapper><EdexcelInternationalAdvancedLevel /></ScrollToTopWrapper>} />
            <Route path="/wall-of-love" element={<ScrollToTopWrapper><WallOfLove /></ScrollToTopWrapper>} />
            <Route path="/refer-a-parent" element={<ScrollToTopWrapper><ReferAParent /></ScrollToTopWrapper>} />
            <Route path="/learner-led-podcast" element={<ScrollToTopWrapper><LearnerLedPodcast /></ScrollToTopWrapper>} />
            <Route path="/student-spotlight" element={<ScrollToTopWrapper><StudentSpotlight /></ScrollToTopWrapper>} />
            <Route path="/meet-our-academic-crew" element={<ScrollToTopWrapper><MeetOurAcademicCrew /></ScrollToTopWrapper>} />
            <Route path="/learner-work" element={<ScrollToTopWrapper><LearnerWork /></ScrollToTopWrapper>} />
            <Route path="/parents-speak" element={<ScrollToTopWrapper><ParentsSpeak /></ScrollToTopWrapper>} />
            <Route path="/press" element={<ScrollToTopWrapper><Press /></ScrollToTopWrapper>} />
            <Route path="/awards" element={<ScrollToTopWrapper><Awards /></ScrollToTopWrapper>} />
            <Route path="/our-learner-council" element={<ScrollToTopWrapper><OurLearnerCouncil /></ScrollToTopWrapper>} />
            <Route path="/what-sets-us-apart" element={<ScrollToTopWrapper><WhatSetsUsApart /></ScrollToTopWrapper>} />
            <Route path="/Wisdom-ai-school" element={<ScrollToTopWrapper><AthenaAISchool /></ScrollToTopWrapper>} />
            <Route path="/our-vision" element={<ScrollToTopWrapper><OurVision /></ScrollToTopWrapper>} />
            <Route path="/mission-bridge" element={<ScrollToTopWrapper><MissionBridge /></ScrollToTopWrapper>} />
            <Route path="/why-online-school" element={<ScrollToTopWrapper><WhyOnlineSchool /></ScrollToTopWrapper>} />
            <Route path="/values-and-ethos" element={<ScrollToTopWrapper><ValuesAndEthos /></ScrollToTopWrapper>} />
            <Route path="/Wisdom-ai-group" element={<ScrollToTopWrapper><AthenaAIGroup /></ScrollToTopWrapper>} />
            <Route path="/our-leaders" element={<ScrollToTopWrapper><OurLeaders /></ScrollToTopWrapper>} />
            <Route path="/habits-of-mind" element={<ScrollToTopWrapper><HabitsOfMind /></ScrollToTopWrapper>} />
            <Route path="/blog" element={<ScrollToTopWrapper><BlogComingSoon /></ScrollToTopWrapper>} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <EnquireTab />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App
