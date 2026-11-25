import React from 'react';
import '../../Academics.css';

const Primary = () => {
  return (
    <>
      <div className="academics-page">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Indian Primary
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              Grades 1–5 | Indian Curriculum
            </p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          {/* Breadcrumb */}
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Primary
          </div>

          {/* Academic Navigation */}
          <div className="academics-nav">
            <a href="/academics/learning-culture" className="nav-link">
              Learning Culture
            </a>
            <a href="/academics/primary" className="nav-link active">
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
            <a href="/academics/ncf-india" className="nav-link">
              NCF India
            </a>
            <a href="/academics/music-arts-partner" className="nav-link">
              Music & Arts Partner
            </a>
          </div>

          {/* Quote and CTA */}
          <div className="academics-quote">
            <p className="quote-text">
              "Strong foundations today, confident learners tomorrow."
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

          {/* Main Content */}
          <div className="academics-section">
            <h2>Online Primary School in India (Grades 1–5)</h2>

            <p className="section-description">
              Our Indian curriculum Primary programme covers Grades 1 to 5.
              It suits families in India and in the Gulf, UK, North America
              and Australia who want their children to learn the Indian way,
              with strong basics, regular practice and room to be curious,
              without a daily school run. It is part of our Indian pathway,
              which leads to NIOS examinations in the senior years.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button className="btn-primary">
                Book a free 2-week trial
              </button>
              <button className="btn-secondary">
                Apply for 2027-28
              </button>
            </div>

            {/* Subjects */}
            <h2>Subjects</h2>

            <ul className="program-list">
              <li>
                <strong>English:</strong> Reading, comprehension, grammar
                and writing.
              </li>
              <li>
                <strong>Mathematics:</strong> Number, operations, fractions,
                measurement, geometry and data, with lots of mental maths.
              </li>
              <li>
                <strong>Environmental Studies (EVS):</strong> Family, food,
                water, plants, animals and our surroundings, leading into
                science and social studies.
              </li>
              <li>
                <strong>Hindi or a second language:</strong> Placeholder –
                confirm language options.
              </li>
              <li>
                <strong>Additional Learning:</strong> Computers, art and
                music, and wellbeing.
              </li>
            </ul>

            {/* Grades 1-2 */}
            <h2>Grades 1–2: Building the Basics</h2>

            <p className="section-text">
              Children become fluent readers and confident with numbers.
              Lessons are short and active, and a parent or carer helps
              with logins and keeps work organised.
            </p>

            {/* Grades 3-5 */}
            <h2>Grades 3–5: Growing Independence</h2>

            <p className="section-text">
              Children read longer texts, write paragraphs, solve
              multi-step problems and start small projects. They begin
              to plan their own work, which prepares them for middle school.
            </p>

            {/* Assessment */}
            <h2>How Children Are Assessed</h2>

            <p className="section-text">
              Teachers check progress through class activities, worksheets
              and short tests, and share regular reports with parents.
              There are no board exams in primary.
            </p>

            {/* Fees */}
            <h2>Fees</h2>

            <p className="section-text">
              Indicative 2027-28 tuition for Nursery to Grade 5 on the
              Indian pathway is ₹65,000–₹95,000 in India, AED 4,500–7,500
              in the Gulf and USD 2,200–3,000 in the UK, US, Canada and
              Australia. Final fees are still to be confirmed.
            </p>

            {/* Typical Day */}
            <h2>A Typical Day</h2>

            <p className="section-text">
              A primary school day includes a few live lessons in core
              subjects, separated by short breaks, followed by practice
              tasks and reading. Younger children have shorter sessions
              with more movement, and older children have longer lessons
              and more independent work.
            </p>

            <p className="section-text">
              <strong>Daily Hours:</strong> Placeholder – confirm daily hours.
            </p>

            {/* Parent Support */}
            <h2>How Parents Can Help at Home</h2>

            <p className="section-text">
              Make reading part of every day, keep a regular routine,
              check the learning platform for tasks and talk with your
              child about what they learned. Teachers share simple ideas
              each term.
            </p>

            {/* Moving to Middle School */}
            <h2>Moving on to Middle School</h2>

            <p className="section-text">
              After Grade 5, children move into our Indian curriculum
              Middle School programme for Grades 6–8 without changing
              school. Teachers share notes on each child's progress so
              the new teachers know where to start.
            </p>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>

            <h3>Which curriculum does the Indian primary programme follow?</h3>

            <p className="section-text">
              An Indian curriculum that leads to NIOS examinations in the
              senior years.
            </p>

            <p className="section-text">
              <strong>Textbooks or Framework:</strong> Placeholder –
              confirm the textbooks or framework used, e.g. NCERT.
            </p>

            <h3>Can NRI families join?</h3>

            <p className="section-text">
              Yes. Families in the UAE, Qatar, Oman, Kuwait, Bahrain,
              the UK, Australia, the US and Canada can all join.
            </p>

            {/* Admissions */}
            <h2>Admissions for 2027-28 Are Open</h2>

            <p className="section-description">
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
              <h3>Learning with Curiosity</h3>
              <p>
                Building strong foundations through everyday learning
                experiences.
              </p>
            </div>

            <div className="highlight-card green">
              <h3>Learning Beyond Books</h3>
              <p>
                Encouraging creativity, exploration and practical learning.
              </p>
            </div>

            <div className="highlight-card purple">
              <h3>Growing Together</h3>
              <p>
                Helping children become confident, curious and independent
                learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Primary;