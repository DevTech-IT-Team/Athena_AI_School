import React from 'react';
import '../../Academics.css';

const EdexcelUK = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Pearson Edexcel
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Our British Curriculum Pathway
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Pearson Edexcel
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Pearson Edexcel Online School: Our British Pathway</h2>
            <p>
              Edulectual K12 Online School builds its British pathway on Pearson
              Edexcel, a UK awarding organisation that offers qualifications to
              schools around the world. This page explains why we chose Edexcel
              and how the pathway fits together from Grade 1 to Grade 12.
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

          {/* Why Pearson Edexcel */}
          <div className="academics-section">
            <h2>Why Pearson Edexcel</h2>
            <ul>
              <li>
                One clear path from Primary through Lower Secondary,
                International GCSE and International A Level.
              </li>
              <li>
                International versions of each qualification, written for
                students outside the UK.
              </li>
              <li>
                Flexible exam series and unit-based A Levels that suit
                online students.
              </li>
              <li>
                Recognition by universities in the UK and in many other
                countries.
              </li>
            </ul>
          </div>

          {/* Pathway Stages */}
          <div className="academics-section">
            <h2>The Pathway, Stage by Stage</h2>
            <ul>
              <li>
                <strong>Grades 1–5:</strong> British Primary.
              </li>
              <li>
                <strong>Grades 6–8:</strong> British Lower Secondary.
              </li>
              <li>
                <strong>Grades 9–10:</strong> International GCSE.
              </li>
              <li>
                <strong>Grades 11–12:</strong> International A Level.
              </li>
            </ul>
          </div>

          {/* Relationship with Pearson */}
          <div className="academics-section">
            <h2>Our Relationship with Pearson</h2>
            <p>
              [PLACEHOLDER: Farah to confirm Edulectual K12's status with
              Pearson, e.g. approved centre number or partner status. Do not
              publish any logo or claim until this is confirmed.]
            </p>
            <p>
              Where we are not the exam centre, students sit exams at a
              Pearson-approved centre near them, and entry fees are paid
              directly to that centre.
            </p>
          </div>

          {/* International Consistency */}
          <div className="academics-section">
            <h2>Same Curriculum in Every Country</h2>
            <p>
              Whether your family lives in the UAE, India, Qatar, Oman,
              Kuwait, Bahrain, the UK, Australia, the US or Canada, the
              Edexcel pathway at Edulectual K12 follows the same curriculum
              and standards. If you move, your child keeps the same school
              and the same teachers.
            </p>
          </div>

          {/* Practical Learning */}
          <div className="academics-section">
            <h2>What the Pathway Looks Like in Practice</h2>
            <p>
              In Primary and Lower Secondary, the focus is on strong
              foundations in English, mathematics and science, alongside
              computing, humanities and the arts. Students then choose
              their International GCSE subjects at the end of Grade 8 and,
              two years later, the three or four subjects they will take
              to International A Level. At each step, teachers and
              families discuss choices together.
            </p>
          </div>

          {/* Assessment */}
          <div className="academics-section">
            <h2>Assessment Along the Way</h2>
            <p>
              Before the formal exams in Grades 10 to 12, students are
              assessed through class tasks, end-of-unit checks and termly
              assessments. These give parents a clear picture of progress
              and help teachers plan support.
            </p>
            <p>
              [PLACEHOLDER: Confirm whether Pearson iPrimary and
              iLowerSecondary achievement tests are used.]
            </p>
          </div>

          {/* Suitable Students */}
          <div className="academics-section">
            <h2>Who the Edexcel Pathway Suits</h2>
            <ul>
              <li>Families who expect to move between countries.</li>
              <li>
                Students hoping to go to university in the UK or abroad.
              </li>
              <li>
                Families in the Gulf and elsewhere who prefer a British
                curriculum.
              </li>
              <li>
                Students who benefit from flexible, unit-based A Level
                exams.
              </li>
            </ul>

            <p>
              If you are unsure whether the Edexcel pathway suits your
              child, book a free trial class and talk to our British
              pathway team.
            </p>
          </div>

          {/* Admissions */}
          <div className="academics-cta">
            <h2>Admissions for 2027-28 Are Open</h2>
            <p>
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
        </div>
      </div>
    </>
  );
};

export default EdexcelUK;