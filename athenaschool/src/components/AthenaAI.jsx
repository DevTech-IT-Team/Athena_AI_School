import React from 'react';
import { Link } from 'react-router-dom';

const K12OnlineSchoolPage = () => {
  return (
    <div className="bg-white text-blue-900 font-serif selection:bg-blue-100">

      {/* --- COVER SPREAD / HERO SECTION --- */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-12 border-b-8 border-blue-900">

        <div className="md:col-span-7 p-8 md:p-20 flex flex-col justify-center border-r border-slate-200">
          <div>
            <span className="uppercase tracking-[0.3em] text-sm font-sans font-bold text-blue-400 block mb-6">
              Admissions Open · 2027-28
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-8xl leading-none font-black tracking-tighter mb-6">
              Edulectual <br />
              <span className="text-blue-500">K12</span>
            </h1>

            <p className="text-3xl italic leading-tight text-slate-700 max-w-md">
              Online School for Nursery to Grade 12, Wherever You Live.
            </p>

            <p className="text-lg text-slate-600 mt-8 max-w-xl leading-relaxed">
              Edulectual K12 Online School is a fully online school for children
              from Nursery to Grade 12. Your child learns from home with
              qualified teachers in live online classes, follows one clear
              curriculum and works towards recognised qualifications.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 font-sans">
              <Link
                to="/apply-now#free-trial"
                className="bg-blue-900 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 transition"
              >
                Book a Free 2-Week Trial
              </Link>

              <Link
                to="/apply-now#apply"
                className="border-2 border-blue-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-blue-900 hover:text-white transition"
              >
                Apply for 2027-28
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative bg-blue-900 overflow-hidden min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
            alt="Students learning together"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
          />

          <div className="relative h-full p-12 flex flex-col justify-end text-white">
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-widest">
              Online <br /> Learning
            </h2>

            <div className="h-1 w-20 bg-blue-400 mt-4"></div>

            <p className="text-lg mt-6 text-blue-100 max-w-md">
              A structured school day, real teachers, a clear curriculum and
              recognised qualifications — all from home.
            </p>
          </div>
        </div>
      </section>

      {/* --- INTRO SPREAD --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

        <div className="p-8 md:p-20 bg-slate-50 flex flex-col justify-center">
          <h3 className="text-blue-400 uppercase font-sans tracking-widest mb-4">
            About Edulectual
          </h3>

          <h2 className="text-5xl mb-8 leading-tight">
            A School That <br />
            Moves With You
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Edulectual K12 is a fully online school for children from Nursery
            to Grade 12. We offer two pathways, the Pearson Edexcel British
            curriculum and the Indian curriculum with NIOS examinations.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-6 max-w-lg">
            Families can learn from anywhere while following the same curriculum
            and teaching standards across the countries we serve.
          </p>
        </div>

        <div className="relative p-8 md:p-20 flex items-center justify-center">

          {/* IMAGE BOX */}
          <div className="relative z-10 w-full aspect-square border-4 border-blue-900 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000"
              alt="Child learning at home"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-1/2 left-0 w-3/4 h-1/2 bg-blue-900 -z-0 translate-y-[-50%] hidden md:block"></div>

          <div className="absolute bottom-10 right-10 z-20 bg-white p-6 shadow-xl max-w-xs border-l-4 border-blue-500">
            <p className="text-sm font-sans font-bold uppercase text-blue-500 mb-2">
              Our Approach
            </p>

            <p className="text-lg italic">
              One school, two pathways, learning without borders.
            </p>
          </div>
        </div>
      </section>

      {/* --- TWO CURRICULUM PATHWAYS --- */}
      <section className="bg-blue-900 text-white p-8 md:p-24">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-blue-700 pb-8">

            <div>
              <span className="text-blue-400 font-sans uppercase tracking-widest text-sm">
                Academic Pathways
              </span>

              <h2 className="text-5xl md:text-6xl font-bold italic mt-4">
                Two Pathways
              </h2>
            </div>

            <p className="text-blue-300 font-sans tracking-widest uppercase mt-6 md:mt-0">
              One Standard of Teaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* BRITISH PATHWAY */}
            <div className="border-t border-blue-700 pt-8">

              <span className="text-blue-400 font-sans font-bold text-xs uppercase tracking-widest">
                Pathway 01
              </span>

              <h3 className="text-3xl font-bold mt-4 mb-6">
                Pearson Edexcel British Pathway
              </h3>

              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                A British-style education that leads to Pearson Edexcel
                International GCSEs in Grades 9–10 and International A Levels
                in Grades 11–12.
              </p>

              <div className="space-y-4">

                {[
                  'Primary',
                  'Lower Secondary',
                  'International GCSE',
                  'International A Level',
                ].map((stage, index) => (
                  <div
                    key={index}
                    className="flex items-center border-b border-blue-800 pb-4"
                  >
                    <span className="text-blue-400 font-bold mr-4">
                      0{index + 1}
                    </span>

                    <h4 className="text-xl font-semibold">
                      {stage}
                    </h4>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-8">
                Suitable for families who move between countries, plan for
                universities abroad or prefer a British curriculum.
                Examination entries are made through Pearson-approved
                examination centres.
              </p>
            </div>

            {/* INDIAN PATHWAY */}
            <div className="border-t border-blue-700 pt-8">

              <span className="text-blue-400 font-sans font-bold text-xs uppercase tracking-widest">
                Pathway 02
              </span>

              <h3 className="text-3xl font-bold mt-4 mb-6">
                Indian Curriculum Pathway
              </h3>

              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                An Indian curriculum taught online, with Secondary and
                Senior Secondary examinations through NIOS, the national
                open schooling board.
              </p>

              <div className="space-y-4">

                {[
                  'Primary',
                  'Middle School',
                  'Secondary (Class 10)',
                  'Senior Secondary (Class 12)',
                ].map((stage, index) => (
                  <div
                    key={index}
                    className="flex items-center border-b border-blue-800 pb-4"
                  >
                    <span className="text-blue-400 font-bold mr-4">
                      0{index + 1}
                    </span>

                    <h4 className="text-xl font-semibold">
                      {stage}
                    </h4>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-8">
                Suitable for families who want an Indian qualification
                with the flexibility of learning from home, in India
                or overseas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY FAMILIES CHOOSE US --- */}
      <section className="py-20 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">

        <div className="md:col-span-4">
          <h2 className="text-5xl font-bold text-blue-900 leading-none sticky top-10">
            Why <br />
            Families <br />
            Choose Us
          </h2>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">

          {[
            {
              n: '01',
              t: 'Learn From Anywhere',
              d: 'The school moves with your family, so relocating or travelling does not mean changing schools.',
            },
            {
              n: '02',
              t: 'Same Curriculum',
              d: 'Whether you live in Dubai, Delhi or Toronto, your child follows the same curriculum and teaching standards.',
            },
            {
              n: '03',
              t: 'Live Teaching',
              d: 'Real teachers, interactive lessons, discussions, group work and feedback rather than learning through recorded videos alone.',
            },
            {
              n: '04',
              t: 'Time-Zone Friendly',
              d: 'Class batches are arranged by region so that lessons fit your family’s daily schedule.',
            },
            {
              n: '05',
              t: 'Parents Stay Informed',
              d: 'Regular progress updates and online parent–teacher meetings help parents stay connected with learning.',
            },
            {
              n: '06',
              t: 'Recognised Qualifications',
              d: 'Students work towards Pearson Edexcel qualifications or NIOS examinations through their chosen pathway.',
            },
          ].map((item) => (
            <div key={item.n} className="group">

              <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500">
                {item.n}
              </span>

              <div className="-mt-6 relative z-10">
                <h4 className="text-2xl font-bold mb-2">
                  {item.t}
                </h4>

                <p className="text-slate-500 leading-relaxed">
                  {item.d}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- WHAT YOUR CHILD LEARNS --- */}
      <section className="bg-slate-50 py-20 px-8 md:px-20">

        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <span className="text-blue-500 uppercase tracking-widest font-sans font-bold text-sm">
              Learning Journey
            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-4">
              From Nursery <br />
              to Grade 12
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                g: 'Nursery & Kindergarten',
                f: 'Early Years',
                d: 'Language, number sense and confidence through short, playful sessions.',
              },
              {
                g: 'Grades 1–5',
                f: 'Primary',
                d: 'Strong foundations in reading, writing, mathematics and the wider world.',
              },
              {
                g: 'Grades 6–8',
                f: 'Middle School',
                d: 'Science, humanities, languages, computing and independent study.',
              },
              {
                g: 'Grades 9–12',
                f: 'Senior School',
                d: 'Preparation for International GCSE, A Level or NIOS Secondary and Senior Secondary examinations.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-t-2 border-blue-900 pt-6"
              >

                <span className="text-blue-500 font-sans font-bold text-xs uppercase tracking-widest">
                  Stage 0{index + 1}
                </span>

                <h4 className="text-2xl font-bold mt-4 mb-4">
                  {item.g}
                </h4>

                <p className="text-blue-600 text-sm mb-4 font-sans font-semibold italic">
                  {item.f}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- COUNTRIES WE SERVE --- */}
      <section className="py-20 px-8 md:px-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-blue-500 uppercase tracking-widest font-sans font-bold text-sm">
              A Global School
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight">
              Wherever You Live, <br />
              School Continues
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">
              Families can join from multiple countries. Our curriculum
              remains consistent, and classes are arranged by time zone
              to make online learning fit your day.
            </p>
          </div>

          <div className="bg-blue-900 p-8 md:p-12 text-white">

            <h3 className="text-3xl font-bold mb-8">
              Countries We Serve
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {[
                'India',
                'UAE',
                'Qatar',
                'Oman',
                'Kuwait',
                'Bahrain',
                'United Kingdom',
                'Australia',
                'United States',
                'Canada',
              ].map((country, index) => (
                <div
                  key={index}
                  className="border-b border-blue-700 pb-3 text-blue-100"
                >
                  {country}
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* --- FEES AND OFFERS --- */}
      <section className="bg-blue-50 py-20 px-8 md:px-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <span className="text-blue-500 uppercase tracking-widest font-sans font-bold text-sm">
              Admissions 2027-28
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight">
              Fees & <br />
              Offers
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Annual tuition depends on your child’s grade, pathway
              and country. Indicative fee ranges are published on our
              fees page. Final fees are still to be confirmed.
            </p>

            <Link
              to="/fees"
              className="inline-block mt-8 bg-blue-900 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 transition"
            >
              View Fees
            </Link>
          </div>

          <div className="bg-blue-900 text-white p-8 md:p-12 shadow-xl">

            <span className="text-blue-400 uppercase tracking-widest font-sans font-bold text-sm">
              Founding Family Offer
            </span>

            <h3 className="text-6xl md:text-7xl font-black mt-6">
              25% OFF
            </h3>

            <p className="text-xl text-blue-200 mt-4 leading-relaxed">
              Founding families who enrol by 31 March 2027 receive
              25% off year-one tuition with fees locked for three years.
            </p>

            <div className="border-t border-blue-700 mt-8 pt-8">

              <p className="text-lg font-semibold">
                Discounts can be combined up to a maximum of 35%.
              </p>

              <p className="text-blue-300 mt-4">
                Every family can start with a free 2-week trial class.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-blue-900">

        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1500"
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
          alt="Students learning"
        />

        <div className="relative text-center text-white px-4 max-w-5xl">

          <span className="text-blue-300 font-sans uppercase tracking-widest text-sm font-bold">
            Admissions Open · 2027-28
          </span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 mt-6 uppercase tracking-tighter">
            Start With <br />
            A Free Trial
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10">
            The best way to know whether online school suits your child
            is to try it. Meet our teachers and experience a real lesson.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/apply-now#free-trial"
              className="bg-blue-500 hover:bg-white hover:text-blue-900 text-white px-10 py-5 text-lg font-bold uppercase tracking-widest transition-all shadow-2xl"
            >
              Book a Free 2-Week Trial
            </Link>

            <Link
              to="/apply-now#apply"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-5 text-lg font-bold uppercase tracking-widest transition-all"
            >
              Apply for 2027-28
            </Link>

          </div>

          <p className="text-blue-200 mt-8 text-sm">
            During our launch, the ₹999 registration fee is waived.
          </p>

        </div>
      </section>

    </div>
  );
};

export default K12OnlineSchoolPage;