import React from 'react';
import '../../Academics.css';

const MusicArtsPartner = () => {
  const activities = [
    {
      title: 'Music',
      description:
        'Explore vocals, keyboard, guitar, percussion and Indian classical music while developing rhythm, creativity and musical understanding.',
      number: '01',
    },
    {
      title: 'Dance',
      description:
        'Learn classical and contemporary dance styles, improve coordination and movement, and express yourself through dance.',
      number: '02',
    },
    {
      title: 'Visual Arts',
      description:
        'Discover drawing, painting and craft through creative projects that encourage imagination and artistic expression.',
      number: '03',
    },
    {
      title: 'Other Activities',
      description:
        'Explore other activities, including martial arts, through selected partner academies.',
      number: '04',
    },
  ];

  const steps = [
    {
      title: 'Choose an Activity',
      description:
        'Browse the available partner activities and choose an activity and learning level that interests your child.',
      number: '01',
    },
    {
      title: 'Book Through Us',
      description:
        "Our team helps arrange a trial class and a regular learning slot that fits your child's school timetable.",
      number: '02',
    },
    {
      title: 'Track Progress',
      description:
        'Learners develop their skills through regular practice and guided activities with their instructors.',
      number: '03',
    },
  ];

  return (
    <div className="academics-page bg-slate-50 text-slate-800">

      {/* HERO SECTION */}
      <div className="relative min-h-[420px] bg-blue-100 flex items-center justify-center text-center overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-blue-100"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block bg-white text-blue-800 px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-6 border border-blue-200">
            CREATIVITY • EXPRESSION • GROWTH
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 leading-tight tracking-tight">
            Music & Arts
          </h1>

          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Discover music, dance and art through creative learning experiences
            that inspire confidence, imagination and self-expression.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#activities"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-950 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Explore Activities
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-950 font-bold rounded-xl border border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              Ask About Music & Arts
            </a>
          </div>
        </div>
      </div>

      <div className="academics-content">

        {/* BREADCRUMB */}
        <div className="academics-breadcrumb">
          <a href="/" className="hover:text-blue-700 transition-colors">
            Home
          </a>{' '}
          &gt; Music & Arts
        </div>

        {/* NAVIGATION */}
        <div className="academics-nav">
          <a href="/academics/learning-culture" className="nav-link">
            Learning Culture
          </a>
          <a href="/academics/primary" className="nav-link">
            Primary
          </a>
          <a href="/academics/pre-primary" className="nav-link">
            Pre Primary
          </a>
          <a href="/academics/middle" className="nav-link">
            Middle
          </a>
          <a href="/academics/senior-school" className="nav-link">
            Senior School
          </a>
          <a href="/academics/our-partners" className="nav-link">
            Our Partners
          </a>
          <a
            href="/academics/music-arts-partner"
            className="nav-link active"
          >
            Music & Arts
          </a>
        </div>

        {/* INTRO SECTION */}
        <section className="my-12 md:my-16">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-8 md:p-12 hover:shadow-md transition-shadow duration-300">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
                Creative Learning
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-6">
                Online Music and Art Classes for Kids with Partner Academies
              </h2>

              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Creative subjects help children express themselves, build
                discipline and enjoy learning. Alongside the school timetable,
                Edulectual K12 Online School gives learners access to music,
                dance and art classes through partner academies. Families
                choose the activity, and classes are scheduled around the
                school day.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a
                  href="#contact"
                  className="px-7 py-3 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-950 transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  Book a Free 2-Week Trial
                </a>

                <a
                  href="#activities"
                  className="px-7 py-3 bg-blue-50 text-blue-950 font-bold rounded-xl border border-blue-200 hover:bg-blue-100 transition-all duration-300 hover:-translate-y-1"
                >
                  Explore Activities
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITIES SECTION */}
        <section id="activities" className="academics-section my-16">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-bold tracking-widest text-sm uppercase">
              Discover Your Passion
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">
              What Children Can Learn
            </h2>

            <p className="section-description max-w-3xl mx-auto text-slate-700">
              Children can explore a variety of creative activities, develop new
              skills and discover their interests through guided learning
              experiences.
            </p>
          </div>

          <div className="approach-grid">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="approach-item bg-white border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-900 font-extrabold text-lg mb-5 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                  {activity.number}
                </div>

                <h3 className="text-xl font-extrabold text-blue-950 mb-4">
                  {activity.title}
                </h3>

                <p className="text-slate-700 leading-relaxed">
                  {activity.description}
                </p>

                <div className="mt-6 h-1 w-12 bg-blue-700 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNER ACADEMIES */}
        <section className="academics-section my-16">
          <div className="bg-blue-100 border border-blue-200 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-blue-800 font-bold tracking-widest text-sm uppercase">
                Learning Beyond Academics
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-6">
                Our Partner Academies
              </h2>

              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Edulectual K12 works with partner academies to help children
                explore music, dance and arts beyond their regular academic
                classes. Partner activities, locations and class formats will
                be shared as they are confirmed.
              </p>
            </div>
          </div>

          <div className="approach-grid mt-8">
            <div className="approach-item bg-white border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-extrabold text-blue-950 mb-3">
                Music Learning
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Opportunities to explore musical instruments, vocals and
                different musical traditions through guided classes.
              </p>
            </div>

            <div className="approach-item bg-white border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-extrabold text-blue-950 mb-3">
                Dance & Movement
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Creative movement and dance classes designed to help learners
                develop confidence, coordination and expression.
              </p>
            </div>

            <div className="approach-item bg-white border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-extrabold text-blue-950 mb-3">
                Art & Creativity
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Creative learning opportunities through drawing, painting,
                craft and other visual arts activities.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="academics-section my-16">
          <div className="text-center mb-10">
            <span className="text-blue-700 font-bold tracking-widest text-sm uppercase">
              A Simple Process
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">
              How It Works
            </h2>

            <p className="section-description max-w-3xl mx-auto text-slate-700">
              Getting started with a creative activity is easy. Our team helps
              families find the right activity and plan classes around their
              child's learning schedule.
            </p>
          </div>

          <div className="approach-grid">
            {steps.map((step, index) => (
              <div
                key={index}
                className="approach-item bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-950 border border-blue-200 flex items-center justify-center text-xl font-extrabold mb-6">
                  {step.number}
                </div>

                <h3 className="text-xl font-extrabold text-blue-950 mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY ARTS */}
        <section className="academics-section my-16">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-blue-800 font-bold text-sm tracking-widest uppercase">
                Beyond the Classroom
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-6">
                Why the Arts Belong in School
              </h2>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Practising an instrument or learning dance teaches focus,
                patience and resilience. Performing builds confidence, while
                creative activities help children express their ideas and
                emotions. For online learners, music and arts also offer a
                welcome change from screen-based academic study.
              </p>
            </div>
          </div>
        </section>

        {/* CHOOSING AN ACTIVITY */}
        <section className="academics-section my-16">
          <div className="bg-white border border-blue-100 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">
              Choosing an Activity
            </h2>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Let your child try an activity before committing. A trial class
              helps families discover whether the child enjoys the activity
              and connects with the teacher. Consider practice time too: an
              instrument may need a few short practice sessions each week,
              while art and dance can often fit into weekends. Our team can
              help you plan a timetable that leaves enough time for learning
              and rest.
            </p>
          </div>
        </section>

        {/* PERFORMING AND SHARING */}
        <section className="academics-section my-16">
          <div className="bg-blue-100 border border-blue-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">
              Performing and Sharing
            </h2>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Learners can share their performances and artwork through online
              showcases and our Student Spotlight, giving them opportunities
              to celebrate their creativity and progress with the school
              community, with parental consent.
            </p>
          </div>
        </section>

        {/* SOCIAL HIGHLIGHTS */}
        <section className="social-highlights my-16">
          <div className="highlight-card blue rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="font-extrabold text-xl">
              Music
            </h3>
            <p>
              Discover melodies, instruments and musical expression.
            </p>
          </div>

          <div className="highlight-card green rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="font-extrabold text-xl">
              Dance
            </h3>
            <p>
              Build confidence, coordination and creativity through movement.
            </p>
          </div>

          <div className="highlight-card purple rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="font-extrabold text-xl">
              Art
            </h3>
            <p>
              Turn ideas and imagination into creative works.
            </p>
          </div>
        </section>

        {/* ADMISSIONS CTA */}
        <section id="contact" className="my-16">
          <div className="bg-blue-100 border border-blue-200 rounded-3xl p-8 md:p-14 text-center shadow-md">
            <span className="inline-block px-5 py-2 rounded-full bg-white text-blue-800 border border-blue-200 text-sm font-bold tracking-widest uppercase mb-6">
              Admissions 2027-28
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 mb-6">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="text-slate-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-800 text-white font-extrabold rounded-xl hover:bg-blue-950 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Book a Free 2-Week Trial
              </a>

              <a
                href="/admissions"
                className="px-8 py-4 bg-white text-blue-950 font-extrabold rounded-xl border border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
              >
                Apply for 2027-28
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MusicArtsPartner;