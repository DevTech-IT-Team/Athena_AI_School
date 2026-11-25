import React from 'react';

const Languages = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt;{" "}
        <span className="text-gray-600">Languages</span>
      </nav>

      {/* Hero Section */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-6">
          Online Language Classes for Kids at Edulectual K12
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          English is the main language of teaching at Edulectual K12 Online
          School on both pathways. Learning another language as well helps
          children think flexibly, connect with their heritage and open doors
          for study and work later. This page explains our language options
          and how to choose.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Book a free 2-week trial
          </button>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Apply for 2027-28
          </button>
        </div>
      </section>

      {/* Languages Offered */}
      <section className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Languages We Offer
        </h2>

        <p className="text-gray-700 leading-relaxed">
          We offer a range of language options to help students develop
          communication skills, cultural awareness and confidence.
        </p>

        <p className="text-gray-600 mt-3 italic">
          Language options are subject to confirmation.
        </p>
      </section>

      {/* Language Choices by Stage */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          How Language Choices Work by Stage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Early Years and Primary
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Children learn English alongside a second language, building
              vocabulary, listening skills and confidence through age-appropriate
              activities.
            </p>
          </div>

          <div className="bg-white border border-indigo-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Middle School / Lower Secondary
            </h3>

            <p className="text-gray-700 leading-relaxed">
              A second language forms part of the timetable, with an optional
              third language depending on the available choices and programme.
            </p>
          </div>

          <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              Grades 9–12
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Languages can be studied as International GCSE or NIOS subjects,
              depending on the student's chosen pathway and subject availability.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing a Language */}
      <section className="mb-10 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Choosing a Language
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Think about where your family lives and where your child may study
          later. Families in the Gulf often choose Arabic, families planning
          to return to India may choose Hindi or a regional language, and
          others pick a widely used foreign language. Our teachers can advise
          families on choosing a language that suits their child's goals.
        </p>
      </section>

      {/* Teaching Method */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          How We Teach Languages Online
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Our small live online classes focus on speaking and listening,
          supported by reading and writing practice. Students actively
          participate in lessons and develop language skills through
          interaction with teachers and classmates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Early Years and Primary
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Songs, games, storytelling and interactive activities make
              language learning enjoyable and help children develop
              vocabulary and pronunciation.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Middle School and Senior Grades
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Lessons focus on conversation, grammar, reading, writing
              and structured exam practice to develop fluency and
              academic language skills.
            </p>
          </div>
        </div>
      </section>

      {/* Changing Language */}
      <section className="mb-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Changing Language
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Students can usually change their language choice at the start
          of a school year, subject to availability and programme
          requirements. Families can contact our academic team for
          guidance before making a change.
        </p>
      </section>

      {/* Languages and Exams */}
      <section className="mb-10 bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Languages and Exams
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          On the British pathway, a language can be taken as an
          International GCSE subject in Grades 9–10. On the Indian
          pathway, NIOS offers a range of language subjects at
          Secondary and Senior Secondary level.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Choosing a language early and continuing to study it through
          Grade 8 can help students build a stronger foundation and
          prepare more confidently for language examinations in later
          grades. Subject availability depends on the chosen pathway.
        </p>
      </section>

      {/* Supporting Language at Home */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Supporting a Language at Home
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Children improve fastest when they hear and use a language
          outside lessons. Parents can support language development
          through simple everyday habits that make learning natural
          and enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">
              Watch Together
            </h3>

            <p className="text-gray-700">
              Watch a short programme or video in the language your
              child is learning.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-purple-700">
              Read Together
            </h3>

            <p className="text-gray-700">
              Read picture books, stories or simple reading materials
              to build vocabulary and comprehension.
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-pink-700">
              Speak Together
            </h3>

            <p className="text-gray-700">
              Encourage conversations with family members, including
              grandparents, using a home or heritage language.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Admissions for 2027-28 Are Open
        </h2>

        <p className="text-lg text-blue-100 leading-relaxed mb-6">
          Try a free 2-week trial class with our teachers, then apply
          when you are ready. The ₹999 registration fee is waived
          during our launch.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
            Book a free 2-week trial
          </button>

          <button className="bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Apply for 2027-28
          </button>
        </div>
      </section>
    </div>
  );
};

export default Languages;