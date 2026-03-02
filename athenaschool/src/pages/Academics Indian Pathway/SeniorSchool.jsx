import React from 'react';
import '../../Academics.css';

const SeniorSchool = () => {
  return (
    <>
      <div className="academics-page">
        <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-white via-blue-400 to-blue-950 flex items-center justify-center text-center overflow-hidden">
          <div className="relative z-10 px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Senior School</h1>
            <p className="text-lg md:text-xl font-light opacity-90">NCF India</p>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="academics-content">
          <div className="academics-breadcrumb">
            <a href="/">Home</a> &gt; Senior School
          </div>

      <div className="academics-nav">
        <a href="/academics/learning-culture" className="nav-link">Learning Culture</a>
        <a href="/academics/primary" className="nav-link">Primary</a>
        <a href="/academics/pre-primary" className="nav-link">Pre Primary</a>
        <a href="/academics/middle" className="nav-link">Middle</a>
        <a href="/academics/senior-school" className="nav-link active">Senior School</a>
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
        <h2>Senior School</h2>
        <p className="section-description">WisdomAI School offers the Senior School Programme under Indian Curriculum through NIOS as a Private Candidate. NIOS, or National Institute of Open Schooling, is a National Board established by the Government of India. NIOS is an &quot;Open School&quot; to cater to the needs of a heterogeneous group of Learners up to the pre-degree level. It was started as a project with in-built flexibilities by the Central Board of Secondary Education (CBSE) in 1979. In 1986, the National Policy on Education suggested strengthening the Open School System for extending open learning facilities in a phased manner at the secondary level all over the country as an independent system with its curriculum and examination leading to certification.</p>

        <p className="section-text">
          Consequently, the Ministry of Education (MOE), Government of India, set up the National Open School (NOS) in November 1989. The pilot project of CBSE on Open Schools was amalgamated with NOS. Through a Resolution (No. F.5-24/90 Sch.3 dated 14 September 1990, published in the Gazette of India on 20 October 1990), the National Open School (NOS) was vested with the authority to register, examine and certify Learners registered with it up to pre-degree level courses. In July 2002, the Ministry of Education (MOE) amended the nomenclature of the organisation from the National Open School (NOS) to the National Institute of Open Schooling (NIOS) with a mission to provide relevant continuing education at the school stage, up to pre-degree level through Open Learning system to prioritised client groups as an alternative to the formal system, in pursuance of the normative national policy documents and in response.
        </p>

        <p className="section-text">To universalisation of education,</p>
        <p className="section-text">To greater equity and justice in society, and</p>
        <p className="section-text">To the evolution of a learning society.</p>
        <p className="section-text">
          NIOS operates through a network of five Departments, 23 Regional Centres, two Sub Regional Centres, two NIOS Cells, and more than 7400 Study Centres (AIs/AVIs) spread all over India and abroad. NIOS is the world's most extensive Open Schooling system, with a cumulative enrollment of 4.13 million (during the last five years). Recently, NIOS has also started its own Virtual School.
        </p>

        <p className="section-text">
          NIOS collaborates with the Commonwealth of Learning (COL) and UNESCO. It also has study centres for Indian expatriates in the United Arab Emirates, Oman, Kuwait, Nepal, Canada, Kingdom of Saudi Arabia, Australia, United Kingdom, New Zealand, Malaysia, Singapore and the United States of America.
        </p>

        <h3>The Curriculum and Progression</h3>
        <h3>Pedagogical Approach</h3>
        <h3>Learner Engagement Activities</h3>
        <h3>Assessment</h3>
        <h3>Facilitators</h3>
        <h3>Learning Kit</h3>
        <h3>Learner Resources</h3>
        <h3>Quick Overview</h3>
        <h3>Frequently Asked Questions about NIOS at WisdomAI School</h3>
        <h3>Success Stories</h3>

        <ul className="program-list">
          <li>Based on National Curriculum Framework</li>
          <li>Highly Engaging facilitator</li>
          <li>Only 10 learners per class</li>
          <li>Personal Attention and Care</li>
          <li>1-2 Hours of Live Engaging Classes, Monday to Friday</li>
          <li>Academic structure and support to parents for stress-free learning</li>
        </ul>
      </div>

      <div className="social-highlights">
        <div className="highlight-card blue">
          <h3>#Being WisdomAI</h3>
          <p>Make Some Rain While The Sun Shines Outside</p>
        </div>

        <div className="highlight-card green">
          <h3>#Being WisdomAI</h3>
          <p>A Little Play in Between Classes</p>
        </div>

        <div className="highlight-card purple">
          <h3>#Being WisdomAI</h3>
          <p>Why did you choose WisdomAI online school for your children?</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default SeniorSchool;
