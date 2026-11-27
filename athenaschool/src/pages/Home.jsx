import React, { useState } from "react";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Is Edulectual K12 a fully online school?",
      answer: "Yes. All teaching happens online, so your child learns from home. There is no campus to attend.",
    },
    {
      question: "Which curricula do you offer?",
      answer: "Two pathways: the Pearson Edexcel British pathway (Primary, Lower Secondary, International GCSE and International A Level) and the Indian curriculum pathway with NIOS examinations.",
    },
    {
      question: "Which grades can join?",
      answer: "Our programmes cover Nursery to Grade 12. [PLACEHOLDER: confirm which grades are open for 2027-28 admission.]",
    },
    {
      question: "Which countries do you serve?",
      answer: "Families in India, the UAE, Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US and Canada. The curriculum is the same in every country.",
    },
    {
      question: "Can we try a class before enrolling?",
      answer: "Yes. You can book a free 2-week trial or demo class, and the ₹999 / USD 12 registration fee is waived during our launch.",
    },
  ];

  return (
    <main className="g-home">
      {/* Hero */}
      <section className="hero page">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="dots" style={{ left: "46%", top: 60 }} />
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">★ Admissions Open 2027–28</span>
              <h1>Online School for Nursery to Grade 12, Wherever You Live</h1>
              <p className="lead" style={{ margin: "22px 0 0" }}>
                Edulectual K12 Online School is a fully online school for children from Nursery to Grade 12.
                Your child learns from home with qualified teachers in live online classes, follows one clear
                curriculum and works towards recognised qualifications. Admissions are now open for the 2027-28 academic year.
              </p>
              <p style={{ marginTop: 16 }}>
                We offer two pathways, and each one follows the same curriculum in every country we serve.
                The Pearson Edexcel British pathway runs from Primary through Lower Secondary to International
                GCSE and International A Level. The Indian curriculum pathway prepares students for NIOS
                (National Institute of Open Schooling) examinations. Families can join from India, the UAE,
                Qatar, Oman, Kuwait, Bahrain, the UK, Australia, the US and Canada.
              </p>
              <div className="cta-row" style={{ marginTop: 30 }}>
                <a className="btn btn-primary" href="/apply-now#free-trial">
                  Book a free 2-week trial <span className="arr">→</span>
                </a>
                <a className="btn btn-secondary" href="/apply-now#apply">Apply for 2027-28</a>
              </div>
            </div>
            <div className="hero-art">
              <div className="ring" />
              <div className="photo">
                <img src="/images/family-india.jpg" alt="Family learning together at home with a laptop" />
              </div>
              <div className="float f1">
                <span className="ic" style={{ background: "#FFE4E9" }}><span className="live-dot" /></span>
                <span>Live online classes<small>Nursery to Grade 12</small></span>
              </div>
              <div className="float f2">
                <span className="ic" style={{ background: "var(--sun-50)" }}>★</span>
                <span>Admissions open<small>2027-28</small></span>
              </div>
            </div>
          </div>
        </div>
        <svg className="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 50 C 240 90, 480 10, 720 40 S 1200 80, 1440 30 V80 H0Z" fill="#fff" />
        </svg>
      </section>

      {/* Pathways */}
      <section className="sec bg-sky">
        <div className="container">
          <div className="sec-intro">
            <h2>Two pathways, one standard of teaching</h2>
          </div>
          <div className="grid g2">
            <article className="card pastel c2">
              <h3>Pearson Edexcel British pathway</h3>
              <p>
                A British-style education that leads to Pearson Edexcel International GCSEs in Grades 9–10
                and International A Levels in Grades 11–12. It suits families who move between countries,
                who are planning for universities in the UK or abroad, or who simply prefer a British curriculum.
                Exam entries are made through Pearson-approved exam centres.
              </p>
            </article>
             <article className="card pastel c3">
              <h3>Indian curriculum pathway (NIOS)</h3>
              <p>
                An Indian curriculum taught online, with Secondary (Class 10) and Senior Secondary (Class 12)
                examinations through NIOS, the national open schooling board set up by the Government of India.
                It suits families who want an Indian qualification with the flexibility of learning from home,
                in India or overseas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="sec">
        <div className="container">
          <div className="sec-intro"><h2>Why families choose an online school</h2></div>
          <ul className="tick-list">
            <li><span><strong>Learn from anywhere:</strong> the school moves with you, so a relocation or a long trip does not mean changing schools.</span></li>
            <li><span><strong>Same curriculum in every market:</strong> whether you live in Dubai, Delhi or Toronto, your child follows the same programme and the same standards.</span></li>
            <li><span><strong>Small online classes:</strong> [PLACEHOLDER: confirm maximum class size per batch].</span></li>
            <li><span><strong>A daily timetable that fits your time zone:</strong> see our <a href="/batch-timings">batch timings</a> for each region.</span></li>
            <li><span><strong>Parents stay informed:</strong> regular progress updates and parent–teacher meetings online [PLACEHOLDER: confirm reporting frequency].</span></li>
          </ul>
        </div>
      </section>

      {/* Learning stages */}
      <section className="sec bg-peach">
        <div className="container">
          <div className="sec-intro"><h2>What your child learns at each stage</h2></div>
          <p>
                        Early Years (Nursery and Kindergarten) builds language, number sense and confidence through short,
            playful sessions. Primary (Grades 1–5) develops strong reading, writing and maths. Lower Secondary
            or Middle School (Grades 6–8) broadens into science, humanities, languages and computing. In Grades
            9–12, students prepare for International GCSE and A Level, or for NIOS Secondary and Senior Secondary exams.
          </p>
        </div>
      </section>

      {/* Fees */}
      <section className="sec bg-mint">
        <div className="container">
          <div className="sec-intro"><h2>Fees and offers for 2027-28</h2></div>
          <div className="prose">
            <p>
              Annual tuition depends on your child's grade, pathway and country. Fees start from ₹71,000 a year
              in India and USD 2,200 a year for international families; see the fees page for every stage.
              Founding families who enrol by 31 March 2027 receive 25% off year-one tuition with fees locked
              for three years, and every family can start with a free 2-week trial class. Discounts can be
              combined up to a maximum of 35%.
            </p>
            <a className="btn btn-secondary" href="/fees">See full fees and offers →</a>
          </div>
        </div>
      </section>

      {/* Trial */}
      <section className="sec">
        <div className="container split">
          <div className="split-img">
            <span className="dots" />
            <div className="frame">
              <img src="/images/parent-help.jpg" alt="Parent helping a child with learning at home" loading="lazy" />
            </div>
          </div>
          <div className="prose">
            <h2>Start with a free trial</h2>
            <p>
              The best way to know whether online school suits your child is to try it. Book a free 2-week
              trial or demo class, meet the teachers and see a real lesson. During our launch, the ₹999 / USD 12
              registration fee is waived.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/apply-now#free-trial">Book a free 2-week trial</a>
              <a className="btn btn-secondary" href="/apply-now#apply">Apply for 2027-28</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-sec" style={{ padding: "80px 0" }}>
        <div className="container faq-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={openFaq === index} onClick={(e) => {
                e.preventDefault();
                setOpenFaq(openFaq === index ? -1 : index);
              }}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "80px 0 40px" }}>
        <div className="container">
          <div className="band">
            <span className="blob b5" />
            <div className="band-c">
              <h2>Admissions for 2027-28 are open</h2>
              <p>
                Try a free 2-week trial class with our teachers, then apply when you are ready.
                The <span className="money">₹999</span> / <span className="money">USD 12</span> registration fee is waived during our launch.
              </p>
              <p className="band-fees">
                Annual fees from <span className="money">₹71,000</span> (India) / <span className="money">USD 2,200</span> (international families).
                <a className="band-link" href="/fees"> See full fees →</a>
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="/apply-now#free-trial">Book a free 2-week trial <span className="arr">→</span></a>
                <a className="btn btn-light" href="/apply-now#apply">Apply for 2027-28</a>
              </div>
            </div>
            <div className="band-img">
              <img src="/images/family-gulf.jpg" alt="Parent and child learning together on a laptop" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
