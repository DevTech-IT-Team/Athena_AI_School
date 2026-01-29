import FollowHero from '../components/FollowHero';
import FlowwEnrollmentUI from '../components/FlowwEnrollmentUI';
import FlowwDifferent from '../components/FlowwDifferent';
import FlowwLearningStack from '../components/FlowwLearningStack';
import FlowwTemplate from '../components/FlowwTemplate';

export default function Follow() {
  return (
    <div className="min-h-screen">
      <div className="pt-10 bg-white">
        <FollowHero />
      </div>
      <FlowwEnrollmentUI />
      <FlowwDifferent />
      <FlowwLearningStack />
      <FlowwTemplate />
    </div>
  );
}
