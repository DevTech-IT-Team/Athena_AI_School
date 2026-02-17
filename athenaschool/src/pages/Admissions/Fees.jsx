import { useState } from 'react';
import { Calculator, Phone, ChevronDown, ChevronUp, Users, Award, CreditCard, Gift, GraduationCap, BookOpen, Palette, HelpCircle, ArrowRight, Lightbulb, RefreshCw, UserPlus } from 'lucide-react';

function Fees() {
  const [selectedLearner, setSelectedLearner] = useState('indian');
  const [selectedGrade, setSelectedGrade] = useState('grade1');
  const [selectedBatch, setSelectedBatch] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState('annual');
  const [selectedLearning, setSelectedLearning] = useState('capstone');
  const [selectedSchoolType, setSelectedSchoolType] = useState('21kschool');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const grades = ['Nursery', 'KG 1', 'KG 2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  const indianFees = { tuition: 67100, learning: 5000, assessment: 3000, textbooks: 2900, activities: 1500, total: 79500 };
  const britishFees = { tuition: 97500, learning: 7500, assessment: 4500, textbooks: 6900, activities: 3000, cambridge: 3500, total: 122900 };


  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* SECTION 1: HERO (Inspired by "Corporate Business Company" Slide) */}
      <section className="relative flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/2 bg-[#020617] (blue-950) p-12 md:p-24 flex flex-col justify-center text-white">
          <span className="text-blue-300 font-bold tracking-widest uppercase mb-4 text-sm">Investment in Excellence</span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Future-Proof <br />Education.
          </h1>
          <p className="text-blue-100 text-lg max-w-md opacity-80 border-l-2 border-blue-300 pl-6">
            Quality global education at transparent prices. Choose your pathway with flexible payment options.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative bg-slate-200">
          {/* Placeholder for the office/student image from the template */}
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" alt="Students" className="w-full h-full object-cover grayscale" />
          <div className="absolute bottom-0 left-0 bg-white p-10 max-w-xs hidden md:block">
            <div className="text-blue-950 text-4xl font-black">₹61,400</div>
            <div className="text-slate-500 uppercase tracking-tighter font-bold">Starting Annual Fee</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS (Inspired by "Project Numbers" Slide) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { n: '01', label: 'Pathways', val: '2' },
              { n: '02', label: 'Scholarship Tiers', val: '4' },
              { n: '03', label: 'Batch Sizes', val: '3' },
              { n: '04', label: 'Global Reach', val: '24/7' }
            ].map((stat) => (
              <div key={stat.n} className="border-t-2 border-blue-950 pt-6">
                <span className="text-blue-300 font-bold block mb-2">{stat.n}</span>
                <div className="text-4xl font-black text-blue-950 mb-1">{stat.val}</div>
                <div className="text-slate-500 uppercase text-xs font-bold tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SCHOOL TYPE TOGGLE */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="flex bg-white p-2 rounded-2xl shadow-xl">
              <button
                onClick={() => setSelectedSchoolType('21kschool')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-all ${selectedSchoolType === '21kschool' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>
                <span className="text-xl">🏫</span>
                <span className="font-bold">Athena AI School</span>
              </button>
              <button
                onClick={() => setSelectedSchoolType('21klearning')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-all ${selectedSchoolType === '21klearning' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>
                <span className="text-xl">📖</span>
                <span className="font-bold">Athena AI Learning</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ATHENA AI LEARNING */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">

          <div className="max-w-6xl mx-auto">
            {/* Athena AI Learning Content */}
            {selectedSchoolType === '21klearning' && (
              <>
                {/* Program Type Toggle */}
                <div className="flex flex-col md:flex-row gap-4 bg-white p-2 rounded-xl shadow-lg mb-12">
                  <button
                    onClick={() => setSelectedLearning('capstone')}
                    className={`flex-1 py-6 px-6 text-center transition-all rounded-lg ${selectedLearning === 'capstone' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100'}`}>
                    <div className="text-2xl mb-2">📖</div>
                    <div className="text-lg font-black uppercase">Capstone Programs</div>
                    <div className="text-xs font-medium opacity-60 mt-1">Financial Literacy, AI, Public Speaking & more</div>
                  </button>
                  <button
                    onClick={() => setSelectedLearning('languages')}
                    className={`flex-1 py-6 px-6 text-center transition-all rounded-lg ${selectedLearning === 'languages' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100'}`}>
                    <div className="text-2xl mb-2">🌍</div>
                    <div className="text-lg font-black uppercase">Languages</div>
                    <div className="text-xs font-medium opacity-60 mt-1">Hindi, Tamil, French, Spanish, Japanese & more</div>
                  </button>
                  <button
                    onClick={() => setSelectedLearning('mastery')}
                    className={`flex-1 py-6 px-6 text-center transition-all rounded-lg ${selectedLearning === 'mastery' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100'}`}>
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="text-lg font-black uppercase">Mastery Pathway</div>
                    <div className="text-xs font-medium opacity-60 mt-1">English, Math, Science, IELTS (Grades 1-12)</div>
                  </button>
                </div>

                {/* Pricing Cards */}
                {selectedLearning === 'capstone' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Athena AI School */}
                    <div className="bg-blue-950 rounded-2xl p-8 text-white">
                      <div className="text-blue-300 text-sm font-bold uppercase mb-4">Athena AI School Students</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-blue-900">
                          <span className="text-blue-200">Grades 1-6</span>
                          <span className="text-2xl font-black">₹5,999–₹7,999/yr</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-200">Grades 7-12</span>
                          <span className="text-2xl font-black">₹9,999/yr</span>
                        </div>
                      </div>
                    </div>
                    {/* Non-Athena AI School */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                      <div className="text-slate-500 text-sm font-bold uppercase mb-4">Non-Athena AI School Students +18% GST</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                          <span className="text-slate-600">Grades 1-6</span>
                          <span className="text-2xl font-black text-blue-950">₹7,999–₹9,999/yr</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Grades 7-12</span>
                          <span className="text-2xl font-black text-blue-950">₹11,999/yr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedLearning === 'languages' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Athena AI School */}
                    <div className="bg-blue-950 rounded-2xl p-8 text-white">
                      <div className="text-blue-300 text-sm font-bold uppercase mb-4">Athena AI School</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-blue-900">
                          <span className="text-blue-200">Indian (1-8)</span>
                          <span className="text-2xl font-black">₹8,700/yr</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-200">Foreign (1-8)</span>
                          <span className="text-2xl font-black">₹11,000/yr</span>
                        </div>
                      </div>
                    </div>
                    {/* Non-Athena AI School */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                      <div className="text-slate-500 text-sm font-bold uppercase mb-4">Non-Athena AI School Students +18% GST</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                          <span className="text-slate-600">Indian (1-8)</span>
                          <span className="text-2xl font-black text-blue-950">₹10,799/yr</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Foreign (1-8)</span>
                          <span className="text-2xl font-black text-blue-950">₹13,000/yr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedLearning === 'mastery' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Athena AI School */}
                    <div className="bg-blue-950 rounded-2xl p-8 text-white">
                      <div className="text-blue-300 text-sm font-bold uppercase mb-4">Athena AI School Students</div>
                      <div className="text-center py-4">
                        <div className="text-4xl font-black mb-2">₹21,999</div>
                        <div className="text-blue-200">per subject/year</div>
                      </div>
                    </div>
                    {/* Non-Athena AI School */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                      <div className="text-slate-500 text-sm font-bold uppercase mb-4">Non-Athena AI School Students +18% GST</div>
                      <div className="text-center py-4">
                        <div className="text-4xl font-black text-blue-950 mb-2">₹24,499</div>
                        <div className="text-slate-500">per subject/year</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Limited Time Offer */}
                <div className="mt-12 bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl p-8 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Gift className="text-blue-300" size={24} />
                        <span className="text-blue-300 font-bold uppercase tracking-wider text-sm">Limited Time Offer</span>
                      </div>
                      <h3 className="text-2xl font-black mb-2">Pay Annually & Save 5%</h3>
                      <p className="text-blue-200 text-sm">Choose full payment at checkout and your discount is automatically applied to your total fee.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-sm">One-time payment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-sm">Instant savings</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-sm">No hidden charges</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-black text-blue-300">5%</div>
                      <div className="text-sm font-bold uppercase tracking-wider">OFF</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION: ATHENA AI LEARNING FAQ */}
      {selectedSchoolType === '21klearning' && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500">Everything you need to know about Athena AI Learning programs</p>
              <div className="h-1 w-20 bg-blue-300 mx-auto mt-6"></div>
            </div>

            <div className="space-y-4">
              {[
                { q: "What are Capstone Programs?", a: "Capstone Programs are specialized courses in Financial Literacy, AI, Public Speaking, and more. They help students develop essential 21st-century skills beyond traditional academics." },
                { q: "Who can enroll in Athena AI Learning?", a: "Athena AI Learning programs are open to all students - both Athena AI School students and non-Athena AI learners who want to enhance their skills and knowledge." },
                { q: "How does One-on-One Tutoring work?", a: "Our One-on-One Tutoring provides personalized attention with dedicated educators who tailor the learning experience to your child's specific needs and learning pace." },
                { q: "Can I combine multiple programs?", a: "Yes! You can enroll in multiple programs simultaneously. Many students combine Capstone Programs with Language courses or Mastery Pathway for comprehensive learning." },
                { q: "What are Athena AI Learning programmes and how do they support my child's learning?", a: "Athena AI Learning programmes are supplementary educational programs designed to enhance traditional schooling. They focus on skill development, practical knowledge, and personalized learning approaches." },
                { q: "How do Mastery Pathway help learners improve academically?", a: "Mastery Pathway provides structured, in-depth learning in core subjects with personalized pacing. Students master concepts before advancing, ensuring strong foundational knowledge." },
                { q: "What is included in Capstone and Language programmes?", a: "Capstone programmes include specialized skill courses with hands-on projects. Language programmes include interactive sessions, practice materials, and cultural context for comprehensive language learning." },
                { q: "Are these learning programmes suitable for both Athena AI School and non-Athena AI learners?", a: "Absolutely! These programs are designed for all learners. Athena AI School students get integrated access, while non-Athena AI learners can join as standalone enrichment programs." },
                { q: "How is learning progress tracked and shared with parents?", a: "Parents receive regular progress reports, assessment results, and personalized feedback. Our digital platform allows real-time tracking of your child's achievements and areas for improvement." },
                { q: "Do these programmes run alongside regular school learning?", a: "Yes, all Athena AI Learning programs are designed to complement regular schooling. Flexible scheduling ensures they enhance rather than conflict with your child's existing academic commitments." }
              ].map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-all"
                  >
                    <span className="font-bold text-blue-950 pr-4">{faq.q}</span>
                    {expandedFAQ === index ? <ChevronUp className="text-blue-300 flex-shrink-0" /> : <ChevronDown className="text-blue-300 flex-shrink-0" />}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedSchoolType === '21kschool' && (
        <>
          {/* SECTION 4: CONFIGURE YOUR PLAN */}
          <section className="py-8 bg-white">
            <div className="container mx-auto px-6">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic">Configure Your Plan</h2>
                <div className="h-1 w-20 bg-blue-300 mx-auto mt-4"></div>
              </div>

              <div className="max-w-5xl mx-auto space-y-12">
                {/* Learner Type Toggle */}
                <div className="flex flex-col md:flex-row gap-4 bg-slate-50 p-2 rounded-xl shadow-xl">
                  <button
                    onClick={() => setSelectedLearner('indian')}
                    className={`flex-1 py-8 px-6 text-left transition-all rounded-lg ${selectedLearner === 'indian' ? 'bg-blue-950 text-white' : 'hover:bg-white'}`}>
                    <div className="text-sm font-bold opacity-60 mb-2">RESIDING IN INDIA</div>
                    <div className="text-2xl font-black uppercase">Indian Learner</div>
                  </button>
                  <button
                    onClick={() => setSelectedLearner('international')}
                    className={`flex-1 py-8 px-6 text-left transition-all rounded-lg ${selectedLearner === 'international' ? 'bg-blue-950 text-white' : 'hover:bg-white'}`}>
                    <div className="text-sm font-bold opacity-60 mb-2">OUTSIDE INDIA</div>
                    <div className="text-2xl font-black uppercase">International Learner</div>
                  </button>
                </div>

                {/* Grade Selection Grid */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {grades.map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setSelectedGrade(grade.toLowerCase().replace(' ', ''))}
                      className={`py-4 font-bold text-xs uppercase tracking-widest border transition-all ${selectedGrade === grade.toLowerCase().replace(' ', '')
                        ? 'bg-blue-300 border-blue-300 text-blue-950'
                        : 'bg-white border-slate-200 text-slate-400 hover:border-blue-950 hover:text-blue-950'
                        }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: FEE CARDS (Inspired by "Meet the Team" Slide Circles) */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-0 border border-slate-200 overflow-hidden rounded-3xl">
                {/* Indian Pathway */}
                <div className="p-12 md:p-20 border-r border-slate-100 bg-white">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">🇮🇳</div>
                    <div>
                      <h3 className="text-2xl font-black text-blue-950">Indian Pathway</h3>
                      <p className="text-xs font-bold text-blue-300 uppercase">National Curriculum Framework</p>
                    </div>
                  </div>
                  <ul className="space-y-6 mb-12">
                    {[
                      { label: 'Tuition Fee', val: indianFees.tuition },
                      { label: 'Learning Support', val: indianFees.learning },
                      { label: 'Assessment', val: indianFees.assessment },
                      { label: 'Textbooks', val: indianFees.textbooks },
                      { label: 'Activities', val: indianFees.activities },
                    ].map((item) => (
                      <li key={item.label} className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="text-slate-500 font-medium">{item.label}</span>
                        <span className="font-bold text-blue-950">₹{item.val.toLocaleString('en-IN')}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 p-8 rounded-2xl">
                    <div className="text-slate-500 text-sm mb-1 uppercase font-bold">Total Annual Investment</div>
                    <div className="text-4xl font-black text-blue-950">₹{indianFees.total.toLocaleString('en-IN')}</div>
                  </div>
                </div>

                {/* British Pathway (Blue Dark Version) */}
                <div className="p-12 md:p-20 bg-blue-950 text-white">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-3xl">🇬🇧</div>
                    <div>
                      <h3 className="text-2xl font-black">British Pathway</h3>
                      <p className="text-xs font-bold text-blue-300 uppercase">Cambridge • IGCSE • A-Levels</p>
                    </div>
                  </div>
                  <ul className="space-y-6 mb-12 opacity-80">
                    {[
                      { label: 'Tuition Fee', val: britishFees.tuition },
                      { label: 'Cambridge Resources', val: britishFees.cambridge },
                      { label: 'Learning Support', val: britishFees.learning },
                      { label: 'Assessment', val: britishFees.assessment },
                      { label: 'Textbooks', val: britishFees.textbooks },
                    ].map((item) => (
                      <li key={item.label} className="flex justify-between border-b border-blue-900 pb-2">
                        <span className="font-medium">{item.label}</span>
                        <span className="font-bold">₹{item.val.toLocaleString('en-IN')}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-900/50 p-8 rounded-2xl border border-blue-800">
                    <div className="text-blue-300 text-sm mb-1 uppercase font-bold">Total Annual Investment</div>
                    <div className="text-4xl font-black">₹{britishFees.total.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: PAYMENT OPTIONS */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="mb-16 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CreditCard className="text-blue-300" size={32} />
                  <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic">Payment Options</h2>
                </div>
                <div className="h-1 w-20 bg-blue-300 mx-auto"></div>
              </div>

              <div className="max-w-5xl mx-auto">
                {/* Payment Type Toggle */}
                <div className="flex flex-col md:flex-row gap-4 bg-white p-2 rounded-xl shadow-xl mb-12">
                  <button
                    onClick={() => setSelectedPayment('annual')}
                    className={`flex-1 py-8 px-6 text-left transition-all rounded-lg ${selectedPayment === 'annual' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100'}`}>
                    <div className="text-sm font-bold opacity-60 mb-2">SAVE 5%</div>
                    <div className="text-2xl font-black uppercase">Full Payment</div>
                  </button>
                  <button
                    onClick={() => setSelectedPayment('installment')}
                    className={`flex-1 py-8 px-6 text-left transition-all rounded-lg ${selectedPayment === 'installment' ? 'bg-blue-950 text-white' : 'hover:bg-slate-100'}`}>
                    <div className="text-sm font-bold opacity-60 mb-2">FLEXIBLE</div>
                    <div className="text-2xl font-black uppercase">Instalment</div>
                  </button>
                </div>

                {/* Payment Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Indian Pathway */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">🇮🇳</span>
                      <h3 className="text-xl font-black text-blue-950">Indian Pathway</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Payment Type</span>
                        <span className="font-bold text-blue-950">{selectedPayment === 'annual' ? 'One-time Annual' : 'Monthly Instalments'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">You Pay</span>
                        <span className="text-3xl font-black text-blue-950">
                          ₹{selectedPayment === 'annual' ? '75,525' : '6,294'}
                          {selectedPayment === 'installment' && <span className="text-sm font-normal text-slate-400 block text-right">/month</span>}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* British Pathway */}
                  <div className="bg-blue-950 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">🇬🇧</span>
                      <h3 className="text-xl font-black text-white">British Pathway</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-blue-900">
                        <span className="text-blue-200 font-medium">Payment Type</span>
                        <span className="font-bold text-white">{selectedPayment === 'annual' ? 'One-time Annual' : 'Monthly Instalments'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200 font-medium">You Pay</span>
                        <span className="text-3xl font-black text-white">
                          ₹{selectedPayment === 'annual' ? '1,16,755' : '9,730'}
                          {selectedPayment === 'installment' && <span className="text-sm font-normal text-blue-300 block text-right">/month</span>}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Fee Note */}
                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
                  <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">One-Time Registration Fee</h4>
                    <p className="text-amber-800">A one-time registration fee of <strong>₹999</strong> applies for new admissions (not included above).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: BATCH SIZE OPTIONS */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic">Batch Size Options</h2>
                <p className="text-slate-500 mt-4 max-w-xl mx-auto">Choose the class size that best suits your child's learning style</p>
                <div className="h-1 w-20 bg-blue-300 mx-auto mt-6"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Standard Batch */}
                <div className={`rounded-2xl p-8 border-2 transition-all cursor-pointer ${selectedBatch === 'standard' ? 'border-blue-950 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}
                  onClick={() => setSelectedBatch('standard')}>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <Users className="text-blue-950" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-blue-950 mb-2">Standard Batch</h3>
                  <div className="text-2xl font-black text-blue-300 mb-4">1:24-26</div>
                  <p className="text-slate-500 text-sm leading-relaxed">Our standard classroom experience with engaging group dynamics and collaborative learning opportunities.</p>
                </div>

                {/* Premium Batch */}
                <div className={`rounded-2xl p-8 border-2 transition-all cursor-pointer relative ${selectedBatch === 'premium' ? 'border-blue-950 bg-blue-50' : 'border-blue-300 bg-white shadow-xl'}`}
                  onClick={() => setSelectedBatch('premium')}>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-950 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <Users className="text-blue-950" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-blue-950 mb-2">Premium Batch</h3>
                  <div className="text-2xl font-black text-blue-300 mb-4">1:20-22</div>
                  <p className="text-slate-500 text-sm leading-relaxed">Enhanced attention with smaller group sizes for more personalized interaction with teachers.</p>
                </div>

                {/* Elite Batch */}
                <div className={`rounded-2xl p-8 border-2 transition-all cursor-pointer ${selectedBatch === 'elite' ? 'border-blue-950 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}
                  onClick={() => setSelectedBatch('elite')}>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <Users className="text-blue-950" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-blue-950 mb-2">Elite Batch</h3>
                  <div className="text-2xl font-black text-blue-300 mb-4">1:16-18</div>
                  <p className="text-slate-500 text-sm leading-relaxed">Premium personalized learning experience with maximum individual attention from educators.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: SPECIAL DISCOUNTS & BENEFITS */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="mb-16 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Gift className="text-blue-300" size={32} />
                  <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic">Special Discounts & Benefits</h2>
                </div>
                <div className="h-1 w-20 bg-blue-300 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Sibling Discount */}
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <Users className="text-blue-950" size={32} />
                  </div>
                  <h3 className="text-lg font-black text-blue-950 mb-2">Sibling Discount</h3>
                  <div className="text-3xl font-black text-blue-300 mb-2">₹4,599</div>
                  <p className="text-slate-500 text-sm">Per additional child enrolled</p>
                </div>

                {/* Annual Payment */}
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="text-blue-950" size={32} />
                  </div>
                  <h3 className="text-lg font-black text-blue-950 mb-2">Annual Payment</h3>
                  <div className="text-3xl font-black text-blue-300 mb-2">5% OFF</div>
                  <p className="text-slate-500 text-sm">Pay once for the full year</p>
                </div>

                {/* Rollover Students */}
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <RefreshCw className="text-blue-950" size={32} />
                  </div>
                  <h3 className="text-lg font-black text-blue-950 mb-2">Rollover Students</h3>
                  <div className="text-xl font-black text-blue-300 mb-2">Loyalty Bonus</div>
                  <p className="text-slate-500 text-sm">Apply over and above your scholarship</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: FAQ */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-500">Everything you need to know about our fee structure</p>
                <div className="h-1 w-20 bg-blue-300 mx-auto mt-6"></div>
              </div>

              <div className="space-y-4">
                {[
                  { q: "What's included in the tuition fee?", a: "The tuition fee covers all academic instruction, live online classes, recorded sessions, assignments, regular assessments, and progress tracking throughout the academic year." },
                  { q: "What textbooks are included in the fee?", a: "All required textbooks, workbooks, and digital learning resources are included in the fee structure for both Indian and British pathways." },
                  { q: "What payment options are available?", a: "We offer flexible payment options including full annual payment (with 5% discount) or convenient monthly instalments to suit your budget." },
                  { q: "How do scholarships work?", a: "Scholarships are awarded based on entrance assessments and academic merit. They can be combined with sibling discounts and loyalty bonuses for maximum savings." },
                  { q: "What is the Cambridge Learner Fee?", a: "The Cambridge Learner Fee covers registration, examination entries, and certification costs for British Pathway students taking IGCSE and A-Level exams." },
                  { q: "What's the difference between the Indian and British Pathways?", a: "The Indian Pathway follows the National Curriculum Framework (NCF), while the British Pathway follows Cambridge IGCSE and A-Levels with international recognition." },
                  { q: "What does the total annual fee cover?", a: "The total fee includes tuition, learning support, assessments, textbooks, activities, and for British Pathway - Cambridge resources and learner fees." },
                  { q: "Can I pay in instalments or only upfront?", a: "You can choose between full upfront payment (5% discount) or flexible monthly instalments spread across the academic year." },
                  { q: "What is the one-time registration fee?", a: "A one-time registration fee of ₹999 applies for all new admissions to cover administrative and onboarding costs." },
                  { q: "How does batch size affect learning?", a: "Smaller batch sizes (Premium 1:20-22, Elite 1:16-18) provide more personalized attention, while Standard batches (1:24-26) offer dynamic group learning." },
                  { q: "Are there any discounts or benefits?", a: "Yes! We offer sibling discounts (₹4,599 per child), annual payment discount (5%), and loyalty bonuses for continuing students." },
                  { q: "Can I speak to someone before finalising?", a: "Absolutely! Our education counselors are available to discuss your child's needs and help you choose the best pathway and payment option." }
                ].map((faq, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-all"
                    >
                      <span className="font-bold text-blue-950 pr-4">{faq.q}</span>
                      {expandedFAQ === index ? <ChevronUp className="text-blue-300 flex-shrink-0" /> : <ChevronDown className="text-blue-300 flex-shrink-0" />}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Footer - Always visible */}
      <footer className="bg-blue-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black mb-6 uppercase leading-none">Ready to <br /><span className="text-blue-300">Start?</span></h2>
              <p className="text-xl text-blue-100 opacity-60">Speak with our education counselors to find the perfect fit for your child's academic future.</p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="tel:+919663213636" className="bg-white text-blue-950 px-10 py-5 font-black uppercase tracking-widest text-center hover:bg-blue-300 transition-all flex items-center justify-center gap-3">
                <Phone size={20} /> Call Us Now
              </a>
              <button className="border-2 border-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-blue-950 transition-all">
                Schedule Visit
              </button>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-blue-900 flex justify-between text-xs font-bold text-blue-400 uppercase tracking-widest">
            <span>Athena AI School © 2026</span>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Fees;
