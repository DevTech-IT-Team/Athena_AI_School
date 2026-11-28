import React from 'react';
import {
  Search,
  Layers3,
  Target,
  Award,
  BookOpen,
  Calculator,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Users,
  Eye,
} from 'lucide-react';

const FlowwLearningStack = () => {
  const steps = [
    {
      icon: Search,
      title: 'Find the starting point',
      description:
        'A short diagnostic check shows what your child already knows and where the gaps are.',
      color: 'blue',
    },
    {
      icon: Layers3,
      title: 'Learn in small steps',
      description:
        'Lessons build gradually. Each step is supported until your child is ready to move on.',
      color: 'teal',
    },
    {
      icon: Target,
      title: 'Practise little and often',
      description:
        'Practice, regular questions and short tasks help skills become secure over time.',
      color: 'yellow',
    },
    {
      icon: Award,
      title: 'Check and celebrate',
      description:
        'Progress checks show what is secure, what needs more support and the next steps.',
      color: 'orange',
    },
  ];

  const masterySubjects = [
    {
      icon: BookOpen,
      title: 'English mastery',
      description:
        'Reading and writing fluency, vocabulary, comprehension, grammar and sentence skills for meaningful use of English.',
      color: 'blue',
    },
    {
      icon: Calculator,
      title: 'Maths mastery',
      description:
        'Number sense, calculation, fractions, problem-solving and reasoning skills with practical methods and clear explanations.',
      color: 'teal',
    },
  ];

  const learnerTypes = [
    'Children who find English or maths hard and need to rebuild confidence.',
    'Curious, quick learners who want more challenge.',
    'Children returning from a break in schooling or changing curriculum.',
  ];

  const informationCards = [
    {
      icon: GraduationCap,
      title: 'How FLOWW fits with school',
      description:
        'For Edulectual K12 learners, FLOWW can support regular lessons or targeted support or revision. Families outside the school can join for specific needs, without replacing their school curriculum. FLOWW is designed to fit alongside school, not become another full-time timetable.',
      color: 'blue',
    },
    {
      icon: Eye,
      title: 'What parents see',
      description:
        'Parents receive short programme updates showing which skills have been secured, what can be practised and what comes next, with simple ideas for practice at home.',
      color: 'teal',
    },
  ];

  const exploreLinks = [
    'Indian curriculum Primary',
    'British Primary',
    'Special education support',
    'Fees',
  ];

  const colorStyles = {
    blue: {
      icon: 'bg-blue-600',
      border: 'border-t-blue-500',
      background: 'bg-blue-50',
    },
    teal: {
      icon: 'bg-teal-700',
      border: 'border-t-teal-600',
      background: 'bg-teal-50',
    },
    yellow: {
      icon: 'bg-yellow-400',
      border: 'border-t-yellow-400',
      background: 'bg-yellow-50',
    },
    orange: {
      icon: 'bg-orange-500',
      border: 'border-t-orange-500',
      background: 'bg-orange-50',
    },
  };

  return (
    <section className="bg-white text-[#14234f] overflow-hidden">

      {/* HOW FLOWW WORKS */}
      <section className="bg-[#f2f6ff] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              How FLOWW works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const styles = colorStyles[step.color];

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 border-t-4 ${styles.border} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className={`${styles.icon} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-base font-bold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGLISH & MATHS MASTERY */}
      <section className="bg-[#effaf7] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {masterySubjects.map((subject, index) => {
              const Icon = subject.icon;
              const styles = colorStyles[subject.color];

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 sm:p-8 border-t-4 ${styles.border} shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-4">

                    <div
                      className={`${styles.icon} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold mb-3">
                        {subject.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {subject.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHO FLOWW IS FOR */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">
            Who FLOWW is for
          </h2>

          <div className="space-y-4">
            {learnerTypes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white px-5 py-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-7 h-7 rounded-full bg-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>

                <p className="text-sm sm:text-base font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INFORMATION CARDS */}
      <section className="bg-[#fff8ed] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {informationCards.map((card, index) => {
              const Icon = card.icon;
              const styles = colorStyles[card.color];

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 sm:p-8 border-t-4 ${styles.border} shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">

                    <div
                      className={`${styles.icon} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold mb-3">
                        {card.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="bg-[#fff4ed] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <h3 className="text-lg font-extrabold mb-5">
            Explore more
          </h3>

          <div className="flex flex-wrap gap-3">
            {exploreLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm text-sm font-semibold text-[#14234f] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                {link}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

        </div>
      </section>

    </section>
  );
};

export default FlowwLearningStack;