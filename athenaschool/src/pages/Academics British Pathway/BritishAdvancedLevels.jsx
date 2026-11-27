import React from 'react';
import '../../Academics.css';

const BritishAdvancedLevels = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              A Levels (Grades 11–12)
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Wherever your child wishes to go, help them get there with online A Levels.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; A Levels (Grades 11–12)
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Study A Levels Online (Grades 11–12)</h2>
            <p>
              Grades 11 and 12 at Edulectual K12 are our online sixth form.
              Students specialise in three or four subjects at International A
              Level on the Pearson Edexcel British pathway. A Levels are the
              main entry qualification for universities in the UK and are used
              by universities in many other countries, so this is where your
              child's university plans start to take shape.
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

          {/* A Level Structure */}
          <div className="academics-section">
            <h2>How A Levels Are Structured</h2>
            <p>
              An A Level usually takes two years. The first year leads to the
              International AS, and the second completes the full International
              A Level. Grades run from A* to E. Many subjects are assessed in
              units, so some exams can be taken during the course rather than
              all at the end.
            </p>
          </div>

          {/* Subject Selection */}
          <div className="academics-section">
            <h2>Choosing Subjects</h2>
            <p>
              Students pick subjects based on the degree they hope to study.
              For example, future engineers usually take Mathematics and
              Physics, medicine applicants usually take Chemistry and Biology,
              and economics applicants often take Mathematics. Our teachers
              guide each student through these choices in Grade 10.
            </p>
            <p>
              <strong>Subject List:</strong> [PLACEHOLDER: Confirm the A Level
              subjects offered.]
            </p>
          </div>

          {/* Teaching and Independent Study */}
          <div className="academics-section">
            <h2>Teaching and Independent Study</h2>
            <ul className="program-list">
              <li>Live, discussion-based lessons with small groups.</li>
              <li>Weekly practice questions and written feedback.</li>
              <li>Mock exams and revision programmes.</li>
              <li>
                Coaching in independent research and study skills for university.
              </li>
            </ul>
          </div>

          {/* University and Career Guidance */}
          <div className="academics-section">
            <h2>University and Career Guidance</h2>
            <p>
              We help students research courses, write personal statements and
              meet application deadlines for universities in the UK, India,
              the Gulf, North America and Australia.
            </p>
            <p>
              [PLACEHOLDER: Confirm counselling support offered.]
            </p>
          </div>

          {/* Exams and Fees */}
          <div className="academics-section">
            <h2>Exams and Fees</h2>
            <p>
              Students sit Pearson Edexcel exams at an approved exam centre,
              and exam entry fees are paid separately to the centre.
            </p>

            <h3>Indicative 2027-28 Tuition Fees</h3>
            <div className="overview-table">
              <table>
                <tbody>
                  <tr>
                    <td><strong>India</strong></td>
                    <td>₹1,70,000–₹1,95,000</td>
                  </tr>
                  <tr>
                    <td><strong>Gulf</strong></td>
                    <td>AED 10,000–12,500</td>
                  </tr>
                  <tr>
                    <td><strong>UK, US, Canada and Australia</strong></td>
                    <td>USD 4,000–5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Final fees are still to be confirmed.
            </p>
          </div>

          {/* Online A Level Study */}
          <div className="academics-section">
            <h2>Is Online A Level Study Right for My Child?</h2>
            <p>
              Online A Levels suit students who are motivated, can manage their
              time and want flexibility, for example to train in a sport, live
              abroad or avoid a long commute. Teachers keep a close eye on
              progress through regular tasks and feedback, so students who
              start to fall behind are spotted early and supported.
            </p>
          </div>

          {/* FAQ */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>How many A Levels should my child take?</h3>
              <p>
                Most students take three subjects. Some take four, usually
                including Further Mathematics.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can my child join for Grade 12 only?</h3>
              <p>
                Sometimes, if their Grade 11 subjects match ours. Contact
                admissions to check.
              </p>
              <p>
                [PLACEHOLDER: Confirm.]
              </p>
            </div>

            <div className="faq-item">
              <h3>Are A Level exam fees included?</h3>
              <p>
                No. Pearson Edexcel exam entry fees are paid to the exam centre.
              </p>
            </div>
          </div>

          {/* Admissions */}
          <div className="academics-section">
            <h2>Admissions for 2027-28 Are Open</h2>
            <p>
              Try a free 2-week trial class with our teachers, then apply when
              you are ready. The ₹999 registration fee is waived during our
              launch.
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

export default BritishAdvancedLevels;