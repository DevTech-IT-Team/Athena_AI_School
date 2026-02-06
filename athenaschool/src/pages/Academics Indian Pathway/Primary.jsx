import React from 'react';
import '../../Academics.css';

const Primary = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Primary</h1>
            <p className="text-lg md:text-xl font-light opacity-90">NCF India</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Primary
          </div>

      <div className="academics-nav">
        <a href="/academics/learning-culture" className="nav-link">Learning Culture</a>
        <a href="/academics/primary" className="nav-link active">Primary</a>
        <a href="/academics/pre-primary" className="nav-link">Pre Primary</a>
        <a href="/academics/middle" className="nav-link">Middle</a>
        <a href="/academics/senior-school" className="nav-link">Senior School</a>
        <a href="/academics/ncf-india" className="nav-link">NCF India</a>
        <a href="/academics/music-arts-partner" className="nav-link">Music & Arts Partner</a>
      </div>

      <div className="academics-quote">
        <p className="quote-text">
          &quot;Express through literary Storytelling - LIT Fest&quot;
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Enquire Now</button>
          <button className="btn-secondary">Download Prospectus</button>
        </div>
      </div>

      <div className="academics-section">
        <h2>Primary</h2>
        <p className="section-description">The Primary Program at Athena AI School is designed for learners aged 6 to 10 years (Grade 1 to 5), a crucial stage in their personal, social, and academic growth. At this age, learners benefit from a curriculum that is both challenging and creative, providing them with clear goals that inspire focus and motivation to reach their full potential.</p>

        <p className="section-text">The Primary Program covers the following subjects:</p>

        <h3>Grade 1 &amp; 2:</h3>
        <ul className="program-list">
          <li>English (First Language)</li>
          <li>Second Language - Compulsory</li>
          <li>Third Language - Optional</li>
          <li>Mathematics</li>
          <li>EVS</li>
          <li>Digital Media &amp; Arts</li>
          <li>Music &amp; Movement</li>
          <li>Physical Fitness &amp; Mindfulness</li>
          <li>Athena AI Skills Program</li>
          <li>Computational Thinking &amp; Coding</li>
        </ul>

        <h3>Grade 3 &amp; 5:</h3>
        <ul className="program-list">
          <li>English (First Language)</li>
          <li>Second Language - Compulsory</li>
          <li>Third Language - Optional</li>
          <li>Mathematics</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Selective Activity (Digital Media &amp; Arts/ Music &amp; Movement/ Physical Fitness &amp; Mindfulness)</li>
          <li>Athena AI Skills Program</li>
          <li>Computational Thinking &amp; Coding</li>
        </ul>

        <h3>Language Choices</h3>
        <p className="section-text">Learners can select their second and third language from the below-mentioned list.</p>
        <p className="section-text">The third language classes will be conducted in the afternoon for Morning Batches and in the morning for the Afternoon Batches.</p>
        <p className="section-text">Learners can opt for Third Language at an additional fee.</p>

        <h3>Foreign Language Choices</h3>
        <h3>Regional Languages Choices</h3>
        <div className="program-table">
          <table>
            <thead>
              <tr>
                <th>Arabic</th>
                <th>Hindi</th>
                <th>Sanskrit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>French</td>
                <td>Kannada</td>
                <td>Tamil</td>
              </tr>
              <tr>
                <td>Japanese</td>
                <td>Malayalam</td>
                <td>Telugu</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>Marathi</td>
                <td>Urdu</td>
              </tr>
              <tr>
                <td>ESOL (English)</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Learning Material Kit delivered home for written work and home work:</h3>
        <ul className="program-list">
          <li>Skill-based, engaging Textbooks/Workbooks for English, 2nd Language, Social Studies / EVS, Science and Mathematics.</li>
          <li>Subscription to eWorkBooks and e-CourseBooks</li>
          <li>Access to AI-driven personalised learning platform (Grade 2 onwards)</li>
          <li>Access to vast collection of books, videos and more from our Digital Library</li>
          <li>Learner Merchandise- ID card, Almanac, T-Shirt and Annual Planner</li>
          <li>3rd Language Book (If opted)</li>
        </ul>

        <h3>Special Education Needs (SEN)</h3>
        <p className="section-text">
          We provide limited academic support to learners with special education needs through our qualified, trained, experienced team of child psychologists, Special Educators and Counsellors. Talk to our Admissions Advisor in complete confidence to discuss how we can help you and your child.
        </p>

        <ul className="program-list">
          <li>Based on Indian National Curriculum Framework 2005</li>
          <li>Textbooks &amp; Workbooks delivered at home</li>
          <li>Small interactive class size of 25 learners for personal attention</li>
          <li>3 hours of Live Classes, Monday to Friday &amp; alternate Saturday</li>
          <li>Academic structure and support to parents for stress-free learning</li>
          <li>Access instant progress report of your child</li>
        </ul>
      </div>

      <div className="social-highlights">
        <div className="highlight-card blue">
          <h3>#Being Athena AI</h3>
          <p>Learning a new skill is always exciting</p>
        </div>

        <div className="highlight-card green">
          <h3>#Being Athena AI</h3>
          <p>A Little art and a little maths</p>
        </div>

        <div className="highlight-card purple">
          <h3>#Being Athena AI</h3>
          <p>Tiya Grade-2A Shows us there is more than one way to learn the tables</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Primary;
