
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import BlogComingSoon from './pages/BeingAthenaAI/BlogCommingSoon';

// Lazy-loaded components
const Footer = lazy(() => import('./components/Footer'));
const EnquireTab = lazy(() => import('./components/EnquireTab'));

const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./components/Programs'));
const Pathway = lazy(() => import('./pages/Pathway'));
const Contact = lazy(() => import('./pages/Contact'));

// Admissions
const ApplyNow = lazy(() => import('./pages/Admissions/ApplyNow'));
const WhoShouldRegister = lazy(() => import('./pages/Admissions/WhoShouldRegister'));
const BatchTimings = lazy(() => import('./pages/Admissions/BatchTimings'));
const EssentialRequirements = lazy(() => import('./pages/Admissions/EssentialRequirements'));
const Fees = lazy(() => import('./pages/Admissions/Fees'));

// How It Works
const HowItWorks = lazy(() => import('./pages/Howitworks/HowItWorksSimple'));
const SpecialEducation = lazy(() => import('./pages/Howitworks/SpecialEducation'));
const Technology = lazy(() => import('./pages/Howitworks/Technology'));
const Features = lazy(() => import('./pages/Howitworks/Features'));
const WhyOnlineOnly = lazy(() => import('./pages/Howitworks/WhyOnlineOnly'));
const FAQ = lazy(() => import('./pages/Howitworks/FAQ'));
const AffiliationsAccreditation = lazy(() => import('./pages/Howitworks/AffiliationsAccreditation'));
const Resources = lazy(() => import('./pages/Howitworks/Resources'));
const ResourcesDownloads = lazy(() => import('./pages/Howitworks/ResourcesDownloads'));

// Being Athena AI
const Follow = lazy(() => import('./pages/Follow'));
const LearningGarage = lazy(() => import('./pages/LearningGarage'));

// Electives
const Computational = lazy(() => import('./pages/Electives/Computational'));
const Languages = lazy(() => import('./pages/Electives/Languages'));
const InternationalBenchmarkTest = lazy(() => import('./pages/Electives/InternationalBenchmarkTest'));

// Indian Pathway
const NCFIndia = lazy(() => import('./pages/Academics Indian Pathway/NCFIndia'));
const LearningCulture = lazy(() => import('./pages/Academics Indian Pathway/LearningCulture'));
const PrePrimary = lazy(() => import('./pages/Academics Indian Pathway/PrePrimary'));
const Primary = lazy(() => import('./pages/Academics Indian Pathway/Primary'));
const Middle = lazy(() => import('./pages/Academics Indian Pathway/Middle'));
const SeniorSchool = lazy(() => import('./pages/Academics Indian Pathway/SeniorSchool'));
const MusicArtsPartner = lazy(() => import('./pages/Academics Indian Pathway/MusicArtsPartner'));

// British Pathway
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

// Being Athena AI pages
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

// About pages
const WhatSetsUsApart = lazy(() => import('./pages/About/WhatSetsUsApart'));
const ValuesAndEthos = lazy(() => import('./pages/About/ValuesAndEthos'));
const AthenaAIGroup = lazy(() => import('./pages/About/AthenaAIGroup'));
const OurLeaders = lazy(() => import('./pages/About/OurLeaders'));
const HabitsOfMind = lazy(() => import('./pages/About/HabitsOfMind'));
const AthenaAISchool = lazy(() => import('./pages/About/AthenaAISchool'));
const MissionBridge = lazy(() => import('./pages/About/MissionBridge'));
const WhyOnlineSchool = lazy(() => import('./pages/About/WhyOnlineSchool'));
const OurVision = lazy(() => import('./pages/About/OurVision'));

// 404
const NotFound = lazy(() => import('./components/NotFound'));

// Scroll to top on route change
function ScrollToTopWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return children;
}

// Route wrapper
function Page({ children }) {
  return (
    <ScrollToTopWrapper>
      {children}
    </ScrollToTopWrapper>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">

        {/* Main Navigation */}
        <Navigation />

        {/* Main Pages */}
        <Suspense
          fallback={
            <div className="py-16 text-center text-gray-500">
              Loading...
            </div>
          }
        >
          <Routes>

            {/* Home */}
            <Route path="/" element={<Page><Home /></Page>} />

            {/* Main Website */}
            <Route path="/pathway" element={<Page><Pathway /></Page>} />
            <Route path="/about" element={<Page><About /></Page>} />
            <Route path="/programs" element={<Page><Programs /></Page>} />
            <Route path="/contact" element={<Page><Contact /></Page>} />
            <Route path="/follow" element={<Page><Follow /></Page>} />
            <Route path="/floww" element={<Page><Follow /></Page>} />
            <Route path="/learning-garage" element={<Page><LearningGarage /></Page>} />

            {/* Admissions & Fees */}
            <Route path="/apply-now" element={<Page><ApplyNow /></Page>} />
            <Route path="/who-should-register" element={<Page><WhoShouldRegister /></Page>} />
            <Route path="/batch-timings" element={<Page><BatchTimings /></Page>} />
            <Route path="/essential-requirements" element={<Page><EssentialRequirements /></Page>} />
            <Route path="/fees" element={<Page><Fees /></Page>} />

            {/* Admissions aliases */}
            <Route path="/how-to-apply" element={<Page><ApplyNow /></Page>} />
            <Route path="/class-timings" element={<Page><BatchTimings /></Page>} />
            <Route path="/refer-a-family" element={<Page><ReferAParent /></Page>} />
            <Route path="/refer-a-parent" element={<Page><ReferAParent /></Page>} />

            {/* Online Learning */}
            <Route path="/how-it-works" element={<Page><HowItWorks /></Page>} />
            <Route path="/special-education" element={<Page><SpecialEducation /></Page>} />
            <Route path="/technology" element={<Page><Technology /></Page>} />
            <Route path="/features" element={<Page><Features /></Page>} />
            <Route path="/why-online-only" element={<Page><WhyOnlineOnly /></Page>} />
            <Route path="/why-online-school" element={<Page><WhyOnlineSchool /></Page>} />
            <Route path="/learning-culture" element={<Page><LearningCulture /></Page>} />

            {/* Help & Contact */}
            <Route path="/faq" element={<Page><FAQ /></Page>} />
            <Route path="/resources" element={<Page><Resources /></Page>} />
            <Route path="/help-and-support" element={<Page><Resources /></Page>} />
            <Route path="/affiliations-accreditation" element={<Page><AffiliationsAccreditation /></Page>} />
            <Route path="/accreditation" element={<Page><AffiliationsAccreditation /></Page>} />
            <Route path="/resources-downloads" element={<Page><ResourcesDownloads /></Page>} />
            <Route path="/prospectus-downloads" element={<Page><ResourcesDownloads /></Page>} />

            {/* Electives */}
            <Route path="/computational-thinking" element={<Page><Computational /></Page>} />
            <Route path="/languages" element={<Page><Languages /></Page>} />
            <Route path="/international-benchmark-test" element={<Page><InternationalBenchmarkTest /></Page>} />

            {/* Indian Pathway */}
            <Route path="/ncf-india" element={<Page><NCFIndia /></Page>} />
            <Route path="/learning-culture-india" element={<Page><LearningCulture /></Page>} />
            <Route path="/pre-primary" element={<Page><PrePrimary /></Page>} />
            <Route path="/primary" element={<Page><Primary /></Page>} />
            <Route path="/middle" element={<Page><Middle /></Page>} />
            <Route path="/senior-school" element={<Page><SeniorSchool /></Page>} />
            <Route path="/music-arts-partner" element={<Page><MusicArtsPartner /></Page>} />

            {/* British Pathway */}
            <Route path="/cambridge-international-uk" element={<Page><CambridgeInternationalUK /></Page>} />
            <Route path="/edexcel-uk" element={<Page><EdexcelUK /></Page>} />
            <Route path="/early-years" element={<Page><EarlyYears /></Page>} />
            <Route path="/british-primary" element={<Page><BritishPrimary /></Page>} />
            <Route path="/british-lower-secondary" element={<Page><BritishLowerSecondary /></Page>} />
            <Route path="/british-upper-secondary" element={<Page><BritishUpperSecondary /></Page>} />
            <Route path="/cambridge-igcse" element={<Page><CambridgeIGCSE /></Page>} />
            <Route path="/edexcel-international-gcse" element={<Page><EdexcelInternationalGCSE /></Page>} />
            <Route path="/british-advanced-levels" element={<Page><BritishAdvancedLevels /></Page>} />
            <Route path="/cambridge-advanced-level" element={<Page><CambridgeAdvancedLevel /></Page>} />
            <Route path="/edexcel-international-advanced-level" element={<Page><EdexcelInternationalAdvancedLevel /></Page>} />

            {/* Pathway aliases */}
            <Route path="/british-vs-indian-pathway" element={<Page><Pathway /></Page>} />
            <Route path="/pathways" element={<Page><Pathway /></Page>} />

            {/* Being Athena AI */}
            <Route path="/wall-of-love" element={<Page><WallOfLove /></Page>} />
            <Route path="/learner-led-podcast" element={<Page><LearnerLedPodcast /></Page>} />
            <Route path="/student-spotlight" element={<Page><StudentSpotlight /></Page>} />
            <Route path="/meet-our-academic-crew" element={<Page><MeetOurAcademicCrew /></Page>} />
            <Route path="/our-teachers" element={<Page><MeetOurAcademicCrew /></Page>} />
            <Route path="/learner-work" element={<Page><LearnerWork /></Page>} />
            <Route path="/parents-speak" element={<Page><ParentsSpeak /></Page>} />
            <Route path="/press" element={<Page><Press /></Page>} />
            <Route path="/awards" element={<Page><Awards /></Page>} />
            <Route path="/our-learner-council" element={<Page><OurLearnerCouncil /></Page>} />

            {/* About */}
            <Route path="/what-sets-us-apart" element={<Page><WhatSetsUsApart /></Page>} />
            <Route path="/why-choose-us" element={<Page><WhatSetsUsApart /></Page>} />

            <Route path="/k12-online-school" element={<Page><AthenaAISchool /></Page>} />
            <Route path="/wisdom-ai-school" element={<Page><AthenaAISchool /></Page>} />

            <Route path="/our-vision" element={<Page><OurVision /></Page>} />
            <Route path="/mission-bridge" element={<Page><MissionBridge /></Page>} />
            <Route path="/mission-vision-values" element={<Page><ValuesAndEthos /></Page>} />
            <Route path="/values-and-ethos" element={<Page><ValuesAndEthos /></Page>} />

            <Route path="/k12-online-group" element={<Page><AthenaAIGroup /></Page>} />
            <Route path="/wisdom-ai-group" element={<Page><AthenaAIGroup /></Page>} />

            <Route path="/our-leaders" element={<Page><OurLeaders /></Page>} />
            <Route path="/habits-of-mind" element={<Page><HabitsOfMind /></Page>} />

            {/* Blog */}
            <Route path="/blog" element={<Page><BlogComingSoon /></Page>} />

            {/* 404 */}
            <Route path="*" element={<Page><NotFound /></Page>} />

          </Routes>
        </Suspense>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Floating Enquiry Tab */}
        <Suspense fallback={null}>
          <EnquireTab />
        </Suspense>

      </div>
    </ErrorBoundary>
  );
}

export default App;
