import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            About Edulectual K12
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            About Edulectual K12 Online School
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Edulectual K12 Online School is an online school for children from
            Nursery to Grade 12. We teach two pathways, the Pearson Edexcel
            British curriculum and the Indian curriculum with NIOS examinations,
            and each one follows the same curriculum in every country where we
            have families. We are opening admissions for the 2027-28 academic
            year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Book a free 2-week trial
            </a>

            <a
              href="/apply-now"
              className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Apply for 2027-28
            </a>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why we started an online school
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-6">
            Many families need a school that does not depend on where they live.
            Parents relocate for work, children train seriously in a sport or the
            arts, some live far from a good school, and others simply want more
            say in how and when their child learns. We built Edulectual K12 for
            them: a structured school day delivered online, with real teachers, a
            clear curriculum and recognised exams at the end of it.
          </p>

          <p className="text-gray-600 leading-8 text-lg">
            We are not a tuition service or a recorded-video course. We aim to
            give children everything a good school gives them, including a
            timetable, a class, teachers who know them and a path to
            qualifications, without the commute or the campus.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our founders
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-10">
            Edulectual K12 Online School is led by the co-founders of Athena
            LMS, the learning platform company behind our technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">
                PaulMichael Rowland, Co-Founder
              </h3>

              <p className="text-gray-600 leading-7">
                A leader with over 15 years of experience in educational
                technology, PaulMichael is passionate about building learning
                solutions that transform lives and bridge the gap between
                traditional and digital education.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">
                [PLACEHOLDER: second co-founder's full name], Co-Founder
              </h3>

              <p className="text-gray-600 leading-7">
                An education specialist with 25 years of experience, including 8
                years in e-learning and content writing, and an expert in
                designing learning experiences that captivate and educate.
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-600">
            Read more about the people who run the school on our{" "}
            <a
              href="/leadership"
              className="text-blue-600 font-semibold hover:underline"
            >
              leadership page
            </a>
            .
          </p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What we believe
          </h2>

          <div className="space-y-4">
            {[
              "Every child can do well when teaching fits how they learn.",
              "Technology should support teachers, not replace them.",
              "Parents are partners, so they should always know how their child is doing.",
              "A school's claims should be easy to check, so we publish our curriculum, fees and policies openly.",
            ].map((belief, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-5 rounded-xl bg-blue-50"
              >
                <span className="text-blue-600 text-xl font-bold">✓</span>
                <p className="text-gray-700 leading-7">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Where we are</h2>

          <p className="text-gray-600 text-lg leading-8">
            Edulectual K12 is fully online, and we do not run a physical campus.
            Our team is reachable through our India and USA offices{" "}
            <span className="text-gray-800 font-medium">
              [PLACEHOLDER: Farah to confirm the addresses shown on the contact
              page]
            </span>
            . Families join us from India, the UAE, Qatar, Oman, Kuwait, Bahrain,
            the UK, Australia, the US and Canada.
          </p>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Facts at a glance
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              ["Grades", "Nursery to Grade 12."],
              ["Pathways", "Pearson Edexcel British; Indian curriculum (NIOS)."],
              ["Academic year now enrolling", "2027-28."],
              ["Founded", "[PLACEHOLDER: founding year]."],
              [
                "Registered legal name",
                "[PLACEHOLDER: legal entity name].",
              ],
            ].map(([title, value], index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-blue-600 mb-2">{title}</h3>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Frequently asked questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Does Edulectual K12 have a campus?
              </h3>
              <p className="text-gray-600 leading-7">
                No. We are a fully online school. All classes, assessments and
                parent meetings take place online.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Who founded Edulectual K12 Online School?
              </h3>
              <p className="text-gray-600 leading-7">
                The school is led by co-founders PaulMichael Rowland and
                [PLACEHOLDER: second co-founder's full name], who also
                co-founded Athena LMS.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Which curricula do you teach?
              </h3>
              <p className="text-gray-600 leading-7">
                The Pearson Edexcel British pathway and the Indian curriculum
                pathway with NIOS examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Admissions for 2027-28 are open
          </h2>

          <p className="text-lg md:text-xl text-blue-100 leading-8 mb-8">
            Try a free 2-week trial class with our teachers, then apply when you
            are ready. The ₹999 registration fee is waived during our launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Book a free 2-week trial
            </a>

            <a
              href="/apply-now"
              className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-blue-700 transition"
            >
              Apply for 2027-28
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;