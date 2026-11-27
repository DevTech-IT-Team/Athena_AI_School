import React from 'react';
import '../../Academics.css';

const EdexcelInternationalGCSE = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Edexcel International GCSE
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Courses, Assessment and Exams
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Edexcel International GCSE
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>Edexcel International GCSE Online: Courses and Exams</h2>
            <p>
              This page focuses on the Pearson Edexcel International GCSE
              qualification itself: how it is graded, when exams take place
              and how entries work for an online student. For our Grades 9–10
              programme as a whole, see our online IGCSE school page.
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

          {/* Qualification */}
          <div className="academics-section">
            <h2>About the Qualification</h2>
            <p>
              Pearson Edexcel International GCSEs are qualifications for
              students of around 14 to 16, designed for an international
              audience. Each subject is assessed mainly through written
              exams at the end of the course and graded 9 to 1. Many
              students take between five and nine subjects.
            </p>
          </div>

          {/* Exam Series */}
          <div className="academics-section">
            <h2>Exam Series</h2>
            <p>
              Pearson runs International GCSE exams in set exam series each
              year, with the main series in the summer and further series
              for some subjects. Teachers plan the course so students are
              ready for the series they enter.
            </p>
            <p>
              [PLACEHOLDER: Confirm which series Edulectual K12 students
              usually enter.]
            </p>
          </div>

          {/* Exam Centres */}
          <div className="academics-section">
            <h2>Exam Centres and Entries for Online Students</h2>
            <p>
              Because Edulectual K12 is an online school, students sit
              their exams in person at a Pearson-approved exam centre,
              often a local school or British Council office that accepts
              external candidates. We will:
            </p>

            <ul>
              <li>
                Help you find a centre near your home in India, the Gulf,
                the UK or elsewhere.
              </li>
              <li>
                Explain entry deadlines, which are usually several months
                before the exam.
              </li>
              <li>
                Provide coursework or endorsement evidence where a subject
                needs it.
              </li>
            </ul>

            <p>
              Exam entry fees are set by the exam centre and paid directly
              to it, so they are not part of our tuition.
            </p>
          </div>

          {/* Preparation */}
          <div className="academics-section">
            <h2>How We Prepare Students</h2>
            <ul>
              <li>
                Topic-by-topic teaching mapped to the Pearson specification.
              </li>
              <li>
                Timed past-paper practice with mark schemes.
              </li>
              <li>
                Mock exams and individual feedback.
              </li>
              <li>
                Exam-technique workshops in the final term.
              </li>
            </ul>
          </div>

          {/* Choosing Exam Centre */}
          <div className="academics-section">
            <h2>Choosing an Exam Centre</h2>
            <p>
              When choosing a centre, check that it accepts external
              candidates for the subjects your child takes, how far it is
              from home, its entry deadlines and its fees. Centres in the
              Gulf, India and the UK publish this information on their
              websites or will confirm it by email. We share a checklist
              so families can compare centres easily.
            </p>
          </div>

          {/* Results */}
          <div className="academics-section">
            <h2>Results and Certificates</h2>
            <p>
              Results are released by Pearson on a set date after each
              series, and certificates follow later through the exam
              centre. We help students understand their results and plan
              the next step.
            </p>
          </div>

          {/* FAQs */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <div className="notes-section">
              <div className="note-item">
                <h4>How is the Edexcel International GCSE graded?</h4>
                <p>
                  International GCSEs are graded from 9 (highest) to 1.
                </p>
              </div>

              <div className="note-item">
                <h4>Can online students sit Edexcel exams?</h4>
                <p>
                  Yes. They sit exams in person at a Pearson-approved
                  exam centre that accepts external candidates.
                </p>
              </div>

              <div className="note-item">
                <h4>Who pays the exam fees?</h4>
                <p>
                  Families pay exam entry fees directly to the exam
                  centre. They are not included in tuition.
                </p>
              </div>
            </div>
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

export default EdexcelInternationalGCSE;