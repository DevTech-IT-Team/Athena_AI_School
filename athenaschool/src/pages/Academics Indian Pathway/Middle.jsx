import React from 'react';
import '../../Academics.css';

const Middle = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Indian Middle School
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Grades 6–8 | Indian Curriculum
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Middle
          </div>

          {/* Academic Navigation */}
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
            <a href="/academics/middle" className="nav-link active">
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

          {/* Intro Section */}
          <div className="academics-section">
            <h2>Online Middle School in India (Grades 6–8)</h2>

            <p className="section-description">
              Middle school is where children start to study subjects in depth.
              On the Edulectual K12 Indian curriculum pathway, Grades 6, 7 and
              8 bring separate science and social science topics, more
              demanding maths and more independent work. The programme is
              taught live online and prepares students for Grades 9–12,
              which lead to NIOS Secondary and Senior Secondary exams.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">
                Book a free 2-week trial
              </button>
              <button className="btn-secondary">
                Apply for 2027-28
              </button>
            </div>
          </div>

          {/* Subjects */}
          <div className="academics-section">
            <h2>Subjects</h2>

            <ul className="program-list">
              <li>
                <strong>Mathematics:</strong> Integers, algebra, geometry,
                mensuration and data handling.
              </li>

              <li>
                <strong>Science:</strong> Physics, chemistry and biology
                topics with home-friendly experiments.
              </li>

              <li>
                <strong>Social Science:</strong> History, geography and civics.
              </li>

              <li>
                <strong>English:</strong> Literature, grammar and writing.
              </li>

              <li>
                <strong>Hindi or another language:</strong> Placeholder –
                confirm options.
              </li>

              <li>
                <strong>Computers:</strong> Computers and coding basics.
              </li>
            </ul>
          </div>

          {/* Learning to Learn */}
          <div className="academics-section">
            <h2>Learning to Learn</h2>

            <p className="section-text">
              We help students plan their week, keep notes, revise and
              meet deadlines. These habits matter more each year, and
              they make the move to senior school smoother.
            </p>
          </div>

          {/* Projects */}
          <div className="academics-section">
            <h2>Projects and Activities</h2>

            <p className="section-text">
              Each term includes projects that connect subjects, for example
              a science investigation with a written report or a geography
              map project. Students present their work to the class online.
            </p>
          </div>

          {/* Assessment */}
          <div className="academics-section">
            <h2>Assessment</h2>

            <p className="section-text">
              Regular class tests, assignments and term exams show progress.
              Parents get reports and can meet teachers online.
            </p>

            <p className="section-text">
              <strong>Term Exams:</strong> Placeholder – confirm number
              of term exams.
            </p>
          </div>

          {/* Support */}
          <div className="academics-section">
            <h2>Support When It Is Needed</h2>

            <p className="section-text">
              Students who need extra help can get it from our learner
              support and inclusion team, and those who are ready to go
              further get extension work.
            </p>
          </div>

          {/* Fees */}
          <div className="academics-section">
            <h2>Fees</h2>

            <p className="section-text">
              Indicative 2027-28 tuition for Grades 6–8 on the Indian
              pathway is ₹90,000–₹1,00,000 in India, AED 7,500–9,500
              in the Gulf and USD 3,000–3,800 in the UK, US, Canada and
              Australia. Final fees are still to be confirmed.
            </p>
          </div>

          {/* Typical Day */}
          <div className="academics-section">
            <h2>A Typical Day</h2>

            <p className="section-text">
              A middle school day combines live lessons in core subjects,
              a short break between sessions, independent tasks that build
              on the lesson and, a few times a week, project or activity
              time. Students track their own deadlines on the learning
              platform, and parents can see what is due.
            </p>

            <p className="section-text">
              <strong>Daily Hours:</strong> Placeholder – confirm daily hours.
            </p>
          </div>

          {/* Preparing for Senior School */}
          <div className="academics-section">
            <h2>Preparing for Senior School</h2>

            <p className="section-text">
              By the end of Grade 8, students should be ready for the
              depth of Grades 9–12. On the Indian pathway, that means
              preparing for NIOS Secondary in Grade 10. Teachers discuss
              subject choices with families in Grade 8 so the move feels
              smooth.
            </p>
          </div>

          {/* FAQ */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <h3>Is there a board exam in Grade 8?</h3>

            <p className="section-text">
              No. Board exams on our Indian pathway come at Grade 10
              (NIOS Secondary) and Grade 12 (NIOS Senior Secondary).
            </p>

            <h3>Can my child join from a CBSE or ICSE school?</h3>

            <p className="section-text">
              Yes. We use a placement check and plan any catch-up.
            </p>

            <p className="section-text">
              <strong>Placement Process:</strong> Placeholder – confirm details.
            </p>
          </div>

          {/* Admissions */}
          <div className="academics-cta">
            <h3>Admissions for 2027-28 Are Open</h3>

            <p className="section-text">
              Try a free 2-week trial class with our teachers, then apply
              when you are ready. The ₹999 registration fee is waived
              during our launch.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">
                Book a free 2-week trial
              </button>

              <button className="btn-secondary">
                Apply for 2027-28
              </button>
            </div>
          </div>

          {/* Social Highlights */}
          <div className="social-highlights">
            <div className="highlight-card blue">
              <h3>Learn Beyond the Classroom</h3>
              <p>
                Explore concepts through practical activities and
                meaningful learning experiences.
              </p>
            </div>

            <div className="highlight-card green">
              <h3>Discover and Create</h3>
              <p>
                Encourage curiosity, creativity and collaborative
                learning through projects.
              </p>
            </div>

            <div className="highlight-card purple">
              <h3>Growing Independent Learners</h3>
              <p>
                Develop confidence, responsibility and essential
                academic skills for senior school.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;