import React from 'react';
import '../../Academics.css';

const BritishLowerSecondary = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              British Lower Secondary
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Grades 6–8 | Pearson Edexcel Curriculum
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; British Lower Secondary
          </div>

          {/* Main Introduction */}
          <div className="academics-section">
            <h2>British Lower Secondary Online (Grades 6–8)</h2>

            <p className="section-description">
              British Lower Secondary at Edulectual K12 covers Grades 6–8,
              roughly ages 11 to 14. These are the years when students move
              from learning the basics to thinking like a scientist, a historian
              or a writer. Our Pearson Edexcel-based curriculum builds the
              knowledge and study habits students need before they start
              International GCSE courses in Grade 9.
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
                <strong>English:</strong> Analysing fiction, non-fiction
                and poetry; writing essays, reports and stories.
              </li>

              <li>
                <strong>Mathematics:</strong> Algebra, geometry, ratio
                and proportion, probability and statistics.
              </li>

              <li>
                <strong>Science:</strong> Biology, chemistry and physics
                taught as distinct strands, with virtual and at-home practicals.
              </li>

              <li>
                <strong>Humanities and Global Perspectives:</strong> History,
                geography and current issues.
              </li>

              <li>
                <strong>Computing:</strong> Programming concepts, data
                and digital safety.
              </li>

              <li>
                <strong>Additional Languages and the Arts:</strong>
                Placeholder – confirm options.
              </li>
            </ul>
          </div>

          {/* Teaching and Independent Study */}
          <div className="academics-section">
            <h2>Teaching and Independent Study</h2>

            <p className="section-text">
              Students join live lessons on a regular timetable, work in
              small groups and take on longer projects. We gradually expect
              more independent study, such as planning work, meeting deadlines
              and revising, so students are ready for the pace of International
              GCSE.
            </p>
          </div>

          {/* Assessment */}
          <div className="academics-section">
            <h2>Assessment and Reporting</h2>

            <p className="section-text">
              Teachers use regular quizzes, written tasks and end-of-term
              assessments. Parents receive reports and can meet teachers
              online.
            </p>

            <p className="section-text">
              <strong>Pearson Edexcel iLowerSecondary Achievement Tests:</strong>
              Placeholder – confirm whether learners take these tests.
            </p>
          </div>

          {/* Subject Selection */}
          <div className="academics-section">
            <h2>Choosing International GCSE Subjects</h2>

            <p className="section-text">
              In Grade 8, students and parents meet with teachers to choose
              International GCSE subjects for Grades 9–10, based on strengths,
              interests and future plans.
            </p>
          </div>

          {/* Fees */}
          <div className="academics-section">
            <h2>Fees</h2>

            <p className="section-text">
              Indicative 2027-28 tuition for Grades 6–8 on the Edexcel
              pathway is ₹1,35,000–₹1,50,000 in India, AED 7,500–9,500
              in the Gulf and USD 3,000–3,800 in the UK, US, Canada and
              Australia. Final fees are still to be confirmed.
            </p>
          </div>

          {/* Typical Week */}
          <div className="academics-section">
            <h2>A Typical Week in Lower Secondary</h2>

            <p className="section-text">
              A week mixes live lessons in each subject with independent
              tasks, a science practical that can be done at home, a group
              project session and time for reading. Teachers set clear
              deadlines on the learning platform, and parents can see what
              is due and what has been handed in.
            </p>
          </div>

          {/* Preparation for IGCSE */}
          <div className="academics-section">
            <h2>Preparing for International GCSE</h2>

            <p className="section-text">
              By the end of Grade 8, students should be comfortable writing
              extended answers, solving multi-step maths problems, carrying
              out and writing up simple experiments and revising for tests.
              These are the core skills International GCSE courses build on,
              and we teach them on purpose rather than leaving them to chance.
            </p>
          </div>

          {/* FAQ */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <h3>Which grades are Lower Secondary?</h3>

            <p className="section-text">
              Grades 6, 7 and 8, roughly ages 11 to 14.
            </p>

            <h3>
              Can my child join in Grade 7 or 8 from another curriculum?
            </h3>

            <p className="section-text">
              Yes. We use a placement check and may suggest some bridging work.
            </p>

            <p className="section-text">
              <strong>Placement Check:</strong> Placeholder – confirm details.
            </p>

            <h3>What comes after Grade 8?</h3>

            <p className="section-text">
              International GCSE courses in Grades 9–10, then International A Level.
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

          {/* Highlights */}
          <div className="social-highlights">
            <div className="highlight-card blue">
              <h3>Think Critically</h3>
              <p>
                Develop analytical thinking, problem-solving and curiosity
                through meaningful learning.
              </p>
            </div>

            <div className="highlight-card green">
              <h3>Learn Independently</h3>
              <p>
                Build study habits, organisation and responsibility
                for future academic success.
              </p>
            </div>

            <div className="highlight-card purple">
              <h3>Prepare for International GCSE</h3>
              <p>
                Strengthen subject knowledge and academic skills for
                the next stage of education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BritishLowerSecondary;