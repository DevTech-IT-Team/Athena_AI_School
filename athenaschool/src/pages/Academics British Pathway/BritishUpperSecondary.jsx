import React from 'react';
import '../../Academics.css';

const BritishUpperSecondary = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              IGCSE
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Grades 9–10 | Pearson Edexcel International GCSE
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; British Upper Secondary
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Online IGCSE School for Grades 9–10</h2>

            <p className="section-description">
              British Upper Secondary at Edulectual K12 covers Grades 9 and 10,
              when students study for International GCSE qualifications. These
              are the first formal qualifications on the British pathway.
              Universities, sixth forms and employers look at them when students
              apply for the next stage. We teach the Pearson Edexcel
              International GCSE live online, with full exam preparation.
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

          {/* What is IGCSE */}
          <div className="academics-section">
            <h2>What is an International GCSE?</h2>

            <p className="section-text">
              The International GCSE is a two-year, subject-based qualification
              for students aged around 14 to 16. Each subject is assessed by
              exams at the end of the course and graded 9 to 1, with 9 the
              highest. Students usually take several subjects, and these grades
              shape A Level choices and university applications.
            </p>
          </div>

          {/* Subjects */}
          <div className="academics-section">
            <h2>Subjects We Offer</h2>

            <p className="section-text">
              Placeholder – confirm the subject list, e.g. English Language,
              English Literature, Mathematics, Further Pure Mathematics,
              Biology, Chemistry, Physics, Computer Science, Economics,
              Business, Geography, History and a second language.
            </p>
          </div>

          {/* Teaching Approach */}
          <div className="academics-section">
            <h2>How We Teach International GCSE Online</h2>

            <ul className="program-list">
              <li>
                Live lessons on a fixed timetable for each region.
              </li>
              <li>
                Regular past-paper practice and teacher feedback on exam
                technique.
              </li>
              <li>
                Mock exams before the real series.
              </li>
              <li>
                Revision sessions in the run-up to exams.
              </li>
            </ul>
          </div>

          {/* Exams */}
          <div className="academics-section">
            <h2>Sitting the Exams</h2>

            <p className="section-text">
              Students sit Pearson Edexcel exams in person at an approved
              exam centre. We help families find a centre nearby and explain
              the entry process and deadlines. Exam entry fees are not part
              of tuition and are paid directly to the exam centre.
            </p>
          </div>

          {/* After IGCSE */}
          <div className="academics-section">
            <h2>After International GCSE</h2>

            <p className="section-text">
              Most students continue to International A Level with us in
              Grades 11–12. Our A Level page explains subject choices
              and university routes.
            </p>
          </div>

          {/* Fees */}
          <div className="academics-section">
            <h2>Fees</h2>

            <p className="section-text">
              Indicative 2027-28 tuition for Grades 9–10 on the Edexcel
              pathway is ₹1,60,000–₹1,80,000 in India, AED 9,000–11,000
              in the Gulf and USD 3,500–4,500 in the UK, US, Canada and
              Australia. Final fees are still to be confirmed.
            </p>
          </div>

          {/* Workload */}
          <div className="academics-section">
            <h2>A Realistic Workload</h2>

            <p className="section-text">
              International GCSE years are busy. We help students plan a
              weekly routine that balances lessons, homework and revision
              with rest and activities, and teachers flag early if a
              student's workload needs adjusting.
            </p>

            <h3>Support Between Lessons</h3>

            <p className="section-text">
              Students can post questions to teachers on the learning
              platform between lessons and get help before small problems
              become big ones.
            </p>
          </div>

          {/* FAQ */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <h3>Is the IGCSE recognised for university?</h3>

            <p className="section-text">
              International GCSE grades are widely used by schools, colleges
              and universities as evidence of achievement at age 16.
              Check each university's entry requirements.
            </p>

            <h3>Where will my child sit the exams?</h3>

            <p className="section-text">
              At a Pearson-approved exam centre near you. We help you find one.
            </p>

            <h3>Are exam fees included?</h3>

            <p className="section-text">
              No. Exam entry fees are paid directly to the exam centre.
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
              <h3>Exam Preparation</h3>
              <p>
                Build confidence through structured revision and
                exam-focused practice.
              </p>
            </div>

            <div className="highlight-card green">
              <h3>Expert Teaching</h3>
              <p>
                Learn through live online classes and personalised
                teacher feedback.
              </p>
            </div>

            <div className="highlight-card purple">
              <h3>Future Opportunities</h3>
              <p>
                Prepare for International A Levels and future academic
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BritishUpperSecondary;