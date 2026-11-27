import React from 'react';
import '../../Academics.css';

const SeniorSchool = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              NIOS Senior School (Grades 9–12)
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Flexible Indian schooling with live teaching, structure and support.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; NIOS Senior School
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
            <a href="/academics/middle" className="nav-link">
              Middle
            </a>
            <a href="/academics/senior-school" className="nav-link active">
              Senior School
            </a>
            <a href="/academics/ncf-india" className="nav-link">
              NCF India
            </a>
            <a href="/academics/music-arts-partner" className="nav-link">
              Music & Arts Partner
            </a>
          </div>

          {/* Introduction */}
          <div className="academics-section">
            <h2>NIOS Online School for Class 10 and Class 12</h2>

            <p>
              Senior School on the Edulectual K12 Indian pathway covers Grades
              9 to 12. Students study for the National Institute of Open
              Schooling (NIOS) Secondary examination in Class 10 and the
              Senior Secondary examination in Class 12. NIOS is the open
              schooling board set up by the Government of India, and its
              certificates are national school qualifications. We add what
              NIOS study alone does not give a student: daily live teaching,
              a timetable, teachers who follow each student's progress and
              full exam preparation.
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

          {/* Why Families Choose NIOS */}
          <div className="academics-section">
            <h2>Why Families Choose NIOS With Us</h2>

            <ul className="program-list">
              <li>
                A recognised Indian qualification with the flexibility of
                open schooling.
              </li>
              <li>
                A wide choice of subjects, so students can build a
                combination that suits their goals.
              </li>
              <li>
                Time for sport, the arts or other serious commitments.
              </li>
              <li>
                Live online teaching and structure, not just self-study.
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div className="academics-section">
            <h2>Subjects</h2>

            <p>
              <strong>Subjects Offered:</strong> [PLACEHOLDER: Confirm the
              NIOS subjects Edulectual K12 teaches at Secondary and Senior
              Secondary, e.g. English, Hindi, Mathematics, Science and
              Technology, Social Science, Physics, Chemistry, Biology,
              Accountancy, Business Studies, Economics, Computer Science.]
            </p>
          </div>

          {/* Teaching Method */}
          <div className="academics-section">
            <h2>How We Teach</h2>

            <ul className="program-list">
              <li>
                Live lessons mapped to the NIOS syllabus and study material.
              </li>
              <li>
                Help with Tutor Marked Assignments (TMAs) and practicals.
              </li>
              <li>
                Practice papers and mock exams before each exam session.
              </li>
              <li>
                Revision classes and doubt-clearing sessions.
              </li>
            </ul>
          </div>

          {/* Registration and Exams */}
          <div className="academics-section">
            <h2>Registration and Exams</h2>

            <p>
              Students are registered with NIOS and sit their exams at NIOS
              exam centres. We guide families through registration, subject
              selection and exam dates.
            </p>

            <p>
              [PLACEHOLDER: Confirm whether NIOS registration and exam fees
              are paid separately, and whether Edulectual K12 is a NIOS
              study centre.]
            </p>
          </div>

          {/* After Class 12 */}
          <div className="academics-section">
            <h2>After Class 12</h2>

            <p>
              NIOS Senior Secondary students can apply to universities and
              colleges in India and abroad, and can sit entrance exams.
              Our teachers help students plan their next step.
            </p>
          </div>

          {/* Fees */}
          <div className="academics-section">
            <h2>Fees</h2>

            <p>
              Indicative 2027-28 tuition on the Indian pathway is
              ₹95,000–₹1,05,000 for Grades 9–10 and ₹1,10,000–₹1,25,000
              for Grades 11–12 in India. Gulf and international fees are
              listed on the fees page. Final fees are still to be confirmed.
            </p>

            <div className="overview-table">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Grades 9–10</strong>
                    </td>
                    <td>₹95,000–₹1,05,000</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Grades 11–12</strong>
                    </td>
                    <td>₹1,10,000–₹1,25,000</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gulf & International Fees</strong>
                    </td>
                    <td>Listed on the fees page</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fee Status</strong>
                    </td>
                    <td>Final fees are still to be confirmed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Balancing Commitments */}
          <div className="academics-section">
            <h2>Balancing Study With Other Commitments</h2>

            <p>
              Many NIOS students combine school with sport, arts or work
              experience. Our timetable and teacher support help them keep
              a steady pace.
            </p>
          </div>

          {/* FAQ */}
          <div className="academics-section">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>Is NIOS recognised?</h3>
              <p>
                NIOS is a national board set up by the Government of India,
                and its Secondary and Senior Secondary certificates are
                recognised school qualifications. Check the entry
                requirements of specific universities.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can NIOS students take entrance exams?</h3>
              <p>
                NIOS Senior Secondary students can generally appear for
                entrance exams. Check each exam's eligibility rules.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are NIOS exam fees included?</h3>
              <p>
                [PLACEHOLDER: Confirm.]
              </p>
            </div>
          </div>

          {/* Admissions */}
          <div className="academics-section">
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

          {/* Social Highlights */}
          <div className="social-highlights">
            <div className="highlight-card blue">
              <h3>#Being Edulectual K12</h3>
              <p>Flexible learning, meaningful progress.</p>
            </div>

            <div className="highlight-card green">
              <h3>#Being Edulectual K12</h3>
              <p>Learning beyond the classroom.</p>
            </div>

            <div className="highlight-card purple">
              <h3>#Being Edulectual K12</h3>
              <p>Supporting every learner's journey.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SeniorSchool;