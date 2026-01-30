import { useState } from 'react';
import { Calculator, Phone, ChevronDown, ChevronUp, Users, Award, CreditCard, Gift, GraduationCap, BookOpen, Palette, HelpCircle } from 'lucide-react';

function Fees() {
  const [selectedLearner, setSelectedLearner] = useState('indian');
  const [selectedGrade, setSelectedGrade] = useState('grade1');
  const [selectedBatch, setSelectedBatch] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState('annual');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const grades = [
    'Nursery', 'KG 1', 'KG 2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  const indianFees = {
    tuition: 67100,
    learning: 5000,
    assessment: 3000,
    textbooks: 2900,
    activities: 1500,
    total: 79500
  };

  const britishFees = {
    tuition: 97500,
    learning: 7500,
    assessment: 4500,
    textbooks: 6900,
    activities: 3000,
    cambridge: 3500,
    total: 122900
  };

  const faqs = [
    {
      question: "What's included in the tuition fee?",
      answer: "The tuition fee covers all academic instruction, live online classes, recorded sessions, assignments, regular assessments, and progress tracking throughout the academic year."
    },
    {
      question: "What textbooks are included in the fee?",
      answer: "All essential textbooks and learning materials required for the selected grade are included. Digital resources and supplementary materials are also provided at no additional cost."
    },
    {
      question: "What payment options are available?",
      answer: "We offer flexible payment options including one-time annual payment with 5% discount, or convenient installment plans spread across the academic year."
    },
    {
      question: "How do scholarships work?",
      answer: "Every student is eligible for scholarships across 4 tiers. Scholarships are awarded based on merit, need, and special achievements. Apply during admission to determine your eligibility."
    },
    {
      question: "What is the Cambridge Learner Fee?",
      answer: "The Cambridge Learner Fee covers registration with Cambridge Assessment International Education, access to Cambridge resources, and international certification fees."
    },
    {
      question: "What's the difference between the Indian and British Pathways?",
      answer: "Indian Pathway follows NCF (National Curriculum Framework) designed for Indian students, while British Pathway offers Cambridge IGCSE and A-Levels recognized globally."
    },
    {
      question: "What does the total annual fee cover?",
      answer: "The total annual fee includes tuition, learning support, assessments, textbooks, activities, and all essential educational services for the complete academic year."
    },
    {
      question: "Can I pay in instalments or only upfront?",
      answer: "Both options are available. Choose between one-time annual payment with 5% discount or flexible installment plans to suit your financial preferences."
    },
    {
      question: "What is the one-time registration fee?",
      answer: "A one-time registration fee of ₹999 applies for new admissions. This covers administrative processing and is not included in the annual fees shown above."
    },
    {
      question: "How does batch size affect learning?",
      answer: "Smaller batch sizes provide more personalized attention. Standard (1:24-26), Premium (1:20-22), and Elite (1:16-18) batches offer different levels of teacher-student interaction."
    },
    {
      question: "Are there any discounts or benefits?",
      answer: "Yes! We offer sibling discounts (₹4,599 per additional child), annual payment discounts (5% OFF), and loyalty bonuses for rollover students."
    },
    {
      question: "Can I speak to someone before finalising?",
      answer: "Absolutely! Our education counselors are available to help you choose the perfect program. Call us at +91-9663213636 or schedule a consultation."
    }
  ];

  const batchSizes = [
    {
      id: 'standard',
      name: 'Standard Batch',
      ratio: '1:24-26',
      description: 'Our standard classroom experience with engaging group dynamics and collaborative learning opportunities.',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Batch',
      ratio: '1:20-22',
      description: 'Enhanced attention with smaller group sizes for more personalized interaction with teachers.',
      popular: false
    },
    {
      id: 'elite',
      name: 'Elite Batch',
      ratio: '1:16-18',
      description: 'Premium personalized learning experience with maximum individual attention from educators.',
      popular: false
    }
  ];

  const discounts = [
    { icon: Users, title: 'Sibling Discount', description: '₹4,599 per additional child enrolled' },
    { icon: CreditCard, title: 'Annual Payment', description: '5% OFF Pay once for the full year' },
    { icon: Award, title: 'Rollover Students', description: 'Loyalty Bonus Apply over and above your scholarship' }
  ];

  const calculateDiscountedPrice = (basePrice) => {
    if (selectedPayment === 'annual') {
      return Math.round(basePrice * 0.95);
    }
    return basePrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invest in Your Child's Future with Clear, Affordable Fees
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Quality global education at transparent prices. Choose between Indian and British curriculum pathways with flexible payment options.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Gift className="text-yellow-500" size={24} />
            <span className="text-lg font-semibold text-gray-800">Scholarship available for every student!</span>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-6 inline-block">
            <div className="text-3xl font-bold mb-2">₹61,400</div>
            <div className="text-lg">Starting From</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-gray-600">Pathways</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">Scholarship Tiers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Batch Sizes</div>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
              <Calculator size={20} />
              Calculate Your Fees ↓
            </button>
          </div>
        </div>

        {/* Counselor CTA */}
        <div className="bg-blue-50 rounded-lg p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Phone className="text-blue-600" size={20} />
            <span className="text-lg font-semibold text-gray-800">Talk to Counselor</span>
          </div>
        </div>

        {/* School Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🏫</div>
              <div>
                <h3 className="font-bold text-lg">Athena AI School</h3>
                <p className="text-sm text-gray-600">Indian Curriculum</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">📖</div>
              <div>
                <h3 className="font-bold text-lg">Athena AI Learning</h3>
                <p className="text-sm text-gray-600">British Curriculum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Select Learner Type</h2>
          <p className="text-center text-gray-600 mb-6">Choose based on your location</p>

          {/* Learner Type Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedLearner('indian')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedLearner === 'indian'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">🇮🇳</div>
              <h3 className="font-bold text-lg mb-1">Indian Learner</h3>
              <p className="text-sm text-gray-600">Residing in India</p>
            </button>
            <button
              onClick={() => setSelectedLearner('international')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedLearner === 'international'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold text-lg mb-1">International Learner</h3>
              <p className="text-sm text-gray-600">Outside India</p>
            </button>
          </div>

          {/* Grade Selection */}
          <h3 className="text-xl font-bold text-center mb-4">Select Your Grade</h3>
          <p className="text-center text-gray-600 mb-6">Choose a grade to compare fees across both Indian and British curriculum</p>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8 max-w-4xl mx-auto">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade.toLowerCase().replace(' ', ''))}
                className={`p-3 rounded-lg border transition-all ${
                  selectedGrade === grade.toLowerCase().replace(' ', '')
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>

          {/* Registration Fee Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="text-yellow-600" size={20} />
              <span className="font-semibold text-gray-800">✓ New Admission Fee</span>
            </div>
          </div>

          {/* Fee Comparison */}
          <h3 className="text-2xl font-bold text-center mb-2">Grade 1 Fee Comparison</h3>
          <p className="text-center text-gray-600 mb-8">Indian Learner • AY 2026-27</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Indian Pathway */}
            <div className="border-2 border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-2xl">🇮🇳</div>
                <div>
                  <h4 className="font-bold text-lg">Indian Pathway</h4>
                  <p className="text-sm text-gray-600">Indian NCF(National Curriculum Framework)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-gray-600" />
                    Tuition Fee
                  </span>
                  <span className="font-semibold">₹{indianFees.tuition.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <BookOpen size={18} className="text-gray-600" />
                    Learning Support
                  </span>
                  <span className="font-semibold">₹{indianFees.learning.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <HelpCircle size={18} className="text-gray-600" />
                    Assessment
                  </span>
                  <span className="font-semibold">₹{indianFees.assessment.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <BookOpen size={18} className="text-gray-600" />
                    Textbooks
                  </span>
                  <span className="font-semibold">₹{indianFees.textbooks.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Palette size={18} className="text-gray-600" />
                    Activities
                  </span>
                  <span className="font-semibold">₹{indianFees.activities.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total Annual Fee</span>
                  <span className="font-bold text-xl text-blue-600">₹{indianFees.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">💳 Payment Options</h5>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setSelectedPayment('annual')}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedPayment === 'annual' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                    }`}
                  >
                    Full Payment
                  </button>
                  <button
                    onClick={() => setSelectedPayment('installment')}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedPayment === 'installment' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                    }`}
                  >
                    Instalment
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {selectedPayment === 'annual' ? 'Save 5%' : 'Flexible'}
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="text-sm text-gray-600 mb-1">🇮🇳 Indian Pathway</div>
                  <div className="text-sm text-gray-600 mb-2">Payment Type: {selectedPayment === 'annual' ? 'One-time Annual' : 'Installment'}</div>
                  <div className="font-bold text-lg">
                    You Pay ₹{calculateDiscountedPrice(indianFees.total).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>

            {/* British Pathway */}
            <div className="border-2 border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-2xl">🇬🇧</div>
                <div>
                  <h4 className="font-bold text-lg">British Pathway</h4>
                  <p className="text-sm text-gray-600">Cambridge • IGCSE • A-Levels</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-gray-600" />
                    Tuition Fee
                  </span>
                  <span className="font-semibold">₹{britishFees.tuition.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <BookOpen size={18} className="text-gray-600" />
                    Learning Support
                  </span>
                  <span className="font-semibold">₹{britishFees.learning.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <HelpCircle size={18} className="text-gray-600" />
                    Assessment
                  </span>
                  <span className="font-semibold">₹{britishFees.assessment.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <BookOpen size={18} className="text-gray-600" />
                    Textbooks
                  </span>
                  <span className="font-semibold">₹{britishFees.textbooks.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Palette size={18} className="text-gray-600" />
                    Activities
                  </span>
                  <span className="font-semibold">₹{britishFees.activities.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Award size={18} className="text-gray-600" />
                    Cambridge Fee
                  </span>
                  <span className="font-semibold">₹{britishFees.cambridge.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total Annual Fee</span>
                  <span className="font-bold text-xl text-green-600">₹{britishFees.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">💳 Payment Options</h5>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setSelectedPayment('annual')}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedPayment === 'annual' ? 'bg-green-500 text-white' : 'bg-gray-100'
                    }`}
                  >
                    Full Payment
                  </button>
                  <button
                    onClick={() => setSelectedPayment('installment')}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedPayment === 'installment' ? 'bg-green-500 text-white' : 'bg-gray-100'
                    }`}
                  >
                    Instalment
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {selectedPayment === 'annual' ? 'Save 5%' : 'Flexible'}
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="text-sm text-gray-600 mb-1">🇬🇧 British Pathway</div>
                  <div className="text-sm text-gray-600 mb-2">Payment Type: {selectedPayment === 'annual' ? 'One-time Annual' : 'Installment'}</div>
                  <div className="font-bold text-lg">
                    You Pay ₹{calculateDiscountedPrice(britishFees.total).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Fee Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="text-blue-600" size={20} />
            <span className="font-semibold text-gray-800">💡 One-Time Registration Fee</span>
          </div>
          <p className="text-gray-700">A one-time registration fee of ₹999 applies for new admissions (not included above).</p>
        </div>

        {/* Batch Size Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-4">Batch Size Options</h2>
          <p className="text-center text-gray-600 mb-8">Choose the class size that best suits your child's learning style</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {batchSizes.map((batch) => (
              <div
                key={batch.id}
                className={`relative bg-white rounded-lg shadow-md p-6 border-2 cursor-pointer transition-all ${
                  selectedBatch === batch.id
                    ? 'border-blue-500'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedBatch(batch.id)}
              >
                {batch.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <Users size={40} className="mx-auto mb-4 text-gray-600" />
                  <h3 className="font-bold text-lg mb-2">{batch.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-3">{batch.ratio}</div>
                  <p className="text-gray-600 text-sm">{batch.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Discounts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">🎁 Special Discounts & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {discounts.map((discount, index) => {
              const Icon = discount.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <Icon size={40} className="mx-auto mb-4 text-blue-600" />
                  <h3 className="font-bold text-lg mb-2">{discount.title}</h3>
                  <p className="text-gray-600">{discount.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-8">Everything you need to know about our fee structure</p>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-6">Talk to our education counselors to find the perfect program for your child. We're here to help you make the right choice.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:+91-9663213636" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone size={20} />
              Call Us: +91-9663213636
            </a>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fees;
