// Admissions Module - All admissions-related components
export { default as ApplyNow } from './ApplyNow';
export { default as WhoShouldRegister } from './WhoShouldRegister';
export { default as BatchTimings } from './BatchTimings';
export { default as EssentialRequirements } from './EssentialRequirements';
export { default as Fees } from './Fees';
export { default as FeeCalculator } from './FeeCalculator';

// Admissions Routes Configuration
export const admissionsRoutes = [
  {
    path: '/apply-now',
    name: 'Apply Now',
    component: 'ApplyNow',
    description: 'How to Register - Complete registration process'
  },
  {
    path: '/who-should-register',
    name: 'Who Should Register',
    component: 'WhoShouldRegister',
    description: 'Eligibility criteria and target audience'
  },
  {
    path: '/batch-timings',
    name: 'Batch Timings',
    component: 'BatchTimings',
    description: 'Available batch schedules and timings'
  },
  {
    path: '/essential-requirements',
    name: 'Essential Requirements',
    component: 'EssentialRequirements',
    description: 'Technical and academic requirements'
  },
  {
    path: '/fees',
    name: 'Fees',
    component: 'Fees',
    description: 'Fee structure and payment options'
  }
];
