// Howitworks Module - All how-it-works related components
export { default as HowItWorksSimple } from './HowItWorksSimple';
export { default as SpecialEducation } from './SpecialEducation';
export { default as Technology } from './Technology';
export { default as Features } from './Features';
export { default as WhyOnlineOnly } from './WhyOnlineOnly';
export { default as FAQ } from './FAQ';
export { default as AffiliationsAccreditation } from './AffiliationsAccreditation';
export { default as Resources } from './Resources';
export { default as ResourcesDownloads } from './ResourcesDownloads';

// Howitworks Routes Configuration
export const howitworksRoutes = [
  {
    path: '/how-it-works',
    name: 'How It Works',
    component: 'HowItWorksSimple',
    description: 'Complete guide to how our online school works'
  },
  {
    path: '/special-education',
    name: 'Special Education',
    component: 'SpecialEducation',
    description: 'Special education programs and support services'
  },
  {
    path: '/technology',
    name: 'Technology',
    component: 'Technology',
    description: 'Technology requirements and platform features'
  },
  {
    path: '/features',
    name: 'Features',
    component: 'Features',
    description: 'Key features and benefits of our platform'
  },
  {
    path: '/why-online-only',
    name: 'Why Online Only',
    component: 'WhyOnlineOnly',
    description: 'Benefits of online education approach'
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: 'FAQ',
    description: 'Frequently asked questions and answers'
  },
  {
    path: '/affiliations-accreditation',
    name: 'Affiliations & Accreditation',
    component: 'AffiliationsAccreditation',
    description: 'Our affiliations and accreditations'
  },
  {
    path: '/resources',
    name: 'Resources',
    component: 'Resources',
    description: 'Educational resources and materials'
  },
  {
    path: '/resources-downloads',
    name: 'Resources Downloads',
    component: 'ResourcesDownloads',
    description: 'Downloadable resources and documents'
  }
];
