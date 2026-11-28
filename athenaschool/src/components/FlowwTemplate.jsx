import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Languages,
  Music,
  Lightbulb,
  Brain,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Info,
  Star,
} from 'lucide-react';

import FlowwLanding from './FlowwLanding';
import FlowwCTA from './FlowwCTA';

const FlowwTemplate = () => {
  const programmesByStage = [
    {
      title: 'Early Years (Nursery to Kindergarten)',
      description:
        'A nurturing foundation for young learners, developing communication, early maths, creativity and curiosity through age-appropriate learning.',
      image: 'early-years',
      links: ['Early Years', 'Pre-Primary'],
    },
    {
      title: 'Primary (Grades 1–5)',
      description:
        'Build strong foundations in literacy, mathematics, science and wider learning through structured teaching and guided activities.',
      image: 'primary',
      links: ['British Primary', 'Indian Primary'],
    },
    {
      title: 'Middle School / Lower Secondary (Grades 6–8)',
      description:
        'Develop subject knowledge, independent learning, critical thinking and confidence through a balanced curriculum.',
      image: 'middle',
      links: ['British Lower Secondary', 'Indian Middle School'],
    },
    {
      title: 'Senior School (Grades 9–12)',
      description:
        'Prepare for recognised qualifications, further education and future pathways through focused academic programmes.',
      image: 'senior',
      links: ['IGCSE', 'A Levels', 'NIOS'],
    },
  ];

  const enrichmentProgrammes = [
    {
      icon: Brain,
      title: 'Computational Thinking',
      description: 'Logic, problem-solving and coding skills.',
      color: 'blue',
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'Language learning for communication and global connection.',
      color: 'yellow',
    },
    {
      icon: Music,
      title: 'Music and Arts',
      description: 'Creative learning through music, art and expression.',
      color: 'orange',
    },
    {
      icon: Lightbulb,
      title: 'Learning Garage',
      description: 'Hands-on learning through projects and innovation.',
      color: 'teal',
    },
  ];

  const choosingCards = [
    {
      icon: GraduationCap,
      title: 'How to choose',
      description:
        'Choose the programme that fits your child’s age, learning goals, interests and the curriculum or qualification pathway you want to follow.',
      color: 'blue',
    },
    {
      icon: BookOpen,
      title: 'Same curriculum in every country',
      description:
        'Whether your family lives in India, the UAE, Qatar, Europe or elsewhere, the curriculum and teaching approach remain consistent.',
      color: 'teal',
    },
  ];

  const exploreLinks = [
    'Early Years and programmes',
    'British Primary',
    'Indian Middle School',
    'International GCSE subjects',
    'NIOS Senior School',
    'Book a free trial',
  ];

  const colorStyles = {
    blue: {
      icon: 'bg-blue-600',
      background: 'bg-blue-50',
    },
    yellow: {
      icon: 'bg-yellow-400',
      background: 'bg-yellow-50',
    },
    orange: {
      icon: 'bg-orange-500',
      background: 'bg-orange-50',
    },
    teal: {
      icon: 'bg-teal-700',
      background: 'bg-teal-50',
    },
  };

  return (
    <section className="bg-white text-[#14234f] overflow-hidden">

      {/* PROGRAMMES BY STAGE */}
      <section className="bg-[#f2f6ff] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-teal-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              Learning by stage
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Programmes by stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programmesByStage.map((programme, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 via-teal-50 to-yellow-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap
                      className="w-16 h-16 text-blue-300"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-extrabold mb-3">
                    {programme.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {programme.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {programme.links.map((link, linkIndex) => (
                      <a
                        href="#"
                        key={linkIndex}
                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENRICHMENT PROGRAMMES */}
      <section className="bg-[#fffbea] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-orange-600 mb-3 block">
              Beyond the curriculum
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold">
              Enrichment programmes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {enrichmentProgrammes.map((programme, index) => {
              const Icon = programme.icon;
              const styles = colorStyles[programme.color];

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-36 flex items-center justify-center bg-slate-50">
                    <div
                      className={`${styles.icon} w-14 h-14 rounded-2xl flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-extrabold text-base mb-2">
                      {programme.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {programme.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="bg-[#effaf7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {choosingCards.map((card, index) => {
              const Icon = card.icon;
              const styles = colorStyles[card.color];

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">

                    <div
                      className={`${styles.icon} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-lg mb-3">
                        {card.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
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

      {/* FEES BY PROGRAMME */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="bg-[#fff8e5] border border-yellow-100 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">

              <div className="flex gap-2 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>

                <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center">
                  <Info className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                <h3 className="font-extrabold text-lg mb-2">
                  Fees by programme
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Annual fees depend on the programme, curriculum and
                  learning stage. Review the programme fee details,
                  registration requirements and available options before
                  enrolling.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  View fees
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TRY ANY PROGRAMME FIRST */}
      <section className="bg-[#fffbea] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 text-center">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Star className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
              Try any programme first
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Explore the programme, meet the teachers and experience
              the learning approach before making a decision about
              enrolment.
            </p>
          </div>

        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="bg-[#fff4ed] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <h3 className="font-extrabold text-xl mb-6">
            Explore more
          </h3>

          <div className="flex flex-wrap gap-3">
            {exploreLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-slate-100 text-sm font-semibold text-[#14234f] hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {link}
                <ArrowRight className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* EXISTING SECTIONS */}
      <FlowwLanding />
      <FlowwCTA />

    </section>
  );
};

export default FlowwTemplate;