import React, { useState } from 'react';
import '../../Academics.css';

const LearningCulture = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [activeRoutine, setActiveRoutine] = useState(null);

  const values = [
    {
      title: 'Curiosity',
      icon: '01',
      description:
        'Questions are welcome. Teachers leave time for "why" and "what if", and children are encouraged to follow their interests in projects.',
      detail:
        'Learners are encouraged to ask questions, explore new ideas, challenge assumptions and turn their interests into meaningful projects.',
    },
    {
      title: 'Respect',
      icon: '02',
      description:
        'Cameras on where possible, one speaker at a time and kind, specific feedback. Online manners are taught explicitly from the first day.',
      detail:
        'We build a classroom where every voice matters. Learners practise listening, communicating thoughtfully and treating classmates with kindness.',
    },
    {
      title: 'Effort over speed',
      icon: '03',
      description:
        'We praise good thinking and persistence, not just quick answers. Mistakes are part of learning and are discussed openly.',
      detail:
        'Learners develop confidence through practice, reflection and persistence. We value the learning process as much as the final answer.',
    },
    {
      title: 'Working together',
      icon: '04',
      description:
        'Breakout groups, shared documents and presentations help children learn with and from each other, even across countries.',
      detail:
        'Collaborative activities help learners develop teamwork, communication, empathy and the confidence to share their ideas.',
    },
  ];

  const routines = [
    {
      title: 'Welcome & check-in',
      description: 'A short welcome and check-in at the start of the day.',
      detail:
        'Learners begin their school day by connecting with teachers and classmates, helping create a welcoming and supportive atmosphere.',
    },
    {
      title: 'Clear learning goals',
      description: 'Clear learning goals for each session.',
      detail:
        'Every lesson begins with a clear purpose so learners understand what they are learning and what they should achieve.',
    },
    {
      title: 'Movement & screen breaks',
      description: 'Regular movement and screen breaks.',
      detail:
        'Breaks are built into learning routines to encourage movement, refresh focus and support healthy online learning habits.',
    },
    {
      title: 'Reflection',
      description: 'A quick reflection at the end of lessons.',
      detail:
        'Learners reflect on what they learned, what challenged them and what they would like to explore next.',
    },
  ];

  const cultureTabs = [
    {
      title: 'Shared expectations',
      content:
        'Teachers set expectations together with each class at the start of the year and revisit them each term. Learners understand how to communicate, participate and support each other.',
    },
    {
      title: 'Positive recognition',
      content:
        'Positive behaviour, thoughtful contributions, teamwork and effort are recognised publicly to encourage a supportive learning environment.',
    },
    {
      title: 'Calm resolution',
      content:
        'Problems are handled privately and calmly. Teachers listen, guide learners towards positive choices and involve parents where needed.',
    },
  ];

  return (
    <>
      <div className="academics-page">

        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Learning Culture
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Building curious, confident, respectful and collaborative learners
            </p>

            <div className="cta-buttons mt-8">
              <a href="/trial" className="btn-primary">
                Book a free 2-week trial
              </a>
              <a href="/admissions" className="btn-secondary">
                Apply for 2027-28
              </a>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="academics-content">

          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Learning Culture
          </div>

          {/* Navigation */}
          <div className="academics-nav">
            <a href="/academics/learning-culture" className="nav-link active">
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
            <a href="/academics/music-arts-partner" className="nav-link">
              Music & Arts Partner
            </a>
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Our Online School Learning Culture</h2>

            <p className="section-description">
              A culture of curiosity, kindness, confidence and collaboration
            </p>

            <p className="section-text">
              Culture is what happens in a school when nobody is making a speech
              about it. At Edulectual K12 Online School, it is the way teachers
              greet children at the start of a session, how classmates respond
              to a wrong answer and how families are treated when they ask for
              help. This page describes the culture we work to build in every
              online class.
            </p>

            <div className="cta-buttons mt-6">
              <a href="/trial" className="btn-primary">
                Book a free 2-week trial
              </a>
              <a href="/admissions" className="btn-secondary">
                Apply for 2027-28
              </a>
            </div>
          </div>

          {/* Values */}
          <div className="academics-section">
            <h2>Four Things We Value in Class</h2>

            <p className="section-description">
              The principles that shape how we learn, communicate and grow
              together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveValue(activeValue === index ? null : index)
                  }
                  className={`highlight-card cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    activeValue === index
                      ? 'blue shadow-xl'
                      : index % 4 === 1
                      ? 'green'
                      : index % 4 === 2
                      ? 'purple'
                      : 'blue'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                      {value.icon}
                    </div>

                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>

                  <p>{value.description}</p>

                  {activeValue === index && (
                    <div className="mt-4 pt-4 border-t border-white/30 animate-fade-in">
                      <p className="font-medium">{value.detail}</p>
                    </div>
                  )}

                  <div className="mt-4 text-sm font-semibold opacity-80">
                    {activeValue === index
                      ? '− Click to close'
                      : '+ Explore this value'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Routines */}
          <div className="academics-section">
            <h2>Routines That Make It Work</h2>

            <p className="section-description">
              Small daily routines make online learning structured, engaging and
              meaningful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {routines.map((routine, index) => (
                <div
                  key={index}
                  className="highlight-card blue cursor-pointer transition-all duration-300 hover:shadow-xl"
                  onClick={() =>
                    setActiveRoutine(activeRoutine === index ? null : index)
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold">{routine.title}</h3>
                  </div>

                  <p className="mt-3">{routine.description}</p>

                  {activeRoutine === index && (
                    <div className="mt-4 p-4 rounded-lg bg-white/20 animate-fade-in">
                      <p>{routine.detail}</p>
                    </div>
                  )}

                  <p className="mt-4 text-sm font-semibold">
                    {activeRoutine === index
                      ? '− Show less'
                      : '+ Learn more'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Beyond Lessons */}
          <div className="academics-section">
            <h2>Beyond Lessons</h2>

            <p className="section-description">
              Learning, leadership and friendship beyond the classroom.
            </p>

            <p className="section-text">
              Learners lead a student council, produce a student podcast and run
              clubs. These give children a voice and help them form friendships
              beyond their class.
            </p>

            <div className="social-highlights">
              <div className="highlight-card blue">
                <h3>Student Council</h3>
                <p>
                  Learners have opportunities to share ideas, contribute to
                  their school community and develop leadership skills.
                </p>
              </div>

              <div className="highlight-card green">
                <h3>Student Podcast</h3>
                <p>
                  Learners express ideas, share stories, explore topics and
                  practise communication through podcasting.
                </p>
              </div>

              <div className="highlight-card purple">
                <h3>Student Clubs</h3>
                <p>
                  Clubs encourage learners to discover shared interests,
                  collaborate, explore hobbies and connect with classmates.
                </p>
              </div>
            </div>
          </div>

          {/* Parents as Partners */}
          <div className="academics-section">
            <h2>Parents as Partners</h2>

            <p className="section-description">
              Learning works best when school and home work together.
            </p>

            <div className="academics-quote">
              <p className="quote-text">
                We share what children are learning and how to support it at
                home, so school and home pull in the same direction.
              </p>
            </div>

            <p className="section-text">
              Parents are an important part of the learning journey. By keeping
              families informed about learning goals, progress and classroom
              routines, we help create a supportive environment where children
              can grow both at school and at home.
            </p>
          </div>

          {/* Interactive Culture Section */}
          <div className="academics-section">
            <h2>How Culture Is Built Online</h2>

            <p className="section-description">
              Our culture is built through shared expectations, positive
              encouragement and thoughtful communication.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {cultureTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveRoutine(index + 10)}
                  className={`highlight-card text-left transition-all duration-300 hover:scale-[1.02] ${
                    activeRoutine === index + 10
                      ? 'blue shadow-xl'
                      : index === 1
                      ? 'green'
                      : index === 2
                      ? 'purple'
                      : 'blue'
                  }`}
                >
                  <h3 className="text-xl font-bold">{tab.title}</h3>

                  <p className="mt-3">
                    {activeRoutine === index + 10
                      ? tab.content
                      : 'Click to explore how we put this into practice.'}
                  </p>

                  <span className="block mt-4 text-sm font-semibold">
                    {activeRoutine === index + 10
                      ? '− Selected'
                      : '+ Explore'}
                  </span>
                </button>
              ))}
            </div>

            <p className="section-text mt-8">
              Teachers set expectations together with each class at the start of
              the year and revisit them each term. Positive behaviour is
              recognised publicly, and any problems are dealt with privately
              and calmly, with parents involved where needed.
            </p>
          </div>

          {/* Trial */}
          <div className="academics-section">
            <h2>See It for Yourself</h2>

            <p className="section-description">
              Experience our learning culture firsthand.
            </p>

            <p className="section-text">
              The best way to understand our culture is to join a lesson. Book a
              free 2-week trial class and watch how teachers and students work
              together.
            </p>

            <div className="cta-buttons mt-6">
              <a href="/trial" className="btn-primary">
                Book a free 2-week trial
              </a>
            </div>
          </div>

          {/* Admissions CTA */}
          <div className="academics-quote">
            <h2 className="text-3xl font-bold mb-4">
              Admissions for 2027-28 Are Open
            </h2>

            <p className="quote-text">
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
            </p>

            <div className="cta-buttons mt-6">
              <a href="/trial" className="btn-primary">
                Book a free 2-week trial
              </a>

              <a href="/admissions" className="btn-secondary">
                Apply for 2027-28
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LearningCulture;