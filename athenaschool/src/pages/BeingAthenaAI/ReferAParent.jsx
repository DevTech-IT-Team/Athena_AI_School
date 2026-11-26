import React, { useState } from "react";
import {
  Plus,
  Minus,
  CheckCircle2,
  Send,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import ReferParentImg1 from "../../assets/optimized/refer-page-image1.webp";
import ReferParentImg2 from "../../assets/optimized/refer-page-image2.webp";
import RewardImg from "../../assets/optimized/rewards.webp";

const ReferAParent = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <div className="container mx-auto px-6 pt-12 pb-20 max-w-7xl">
        <nav className="text-[10px] mb-10 mt-8 flex items-center gap-2 font-bold tracking-[0.2em] uppercase text-gray-400">
          <span className="hover:text-[#074D8D] cursor-pointer transition-colors">
            Home
          </span>
          <span className="text-gray-300 font-light">&gt; </span>
          <span className="hover:text-[#074D8D] cursor-pointer transition-colors">
            Being k12onlineschool
          </span>
          <span className="text-gray-300 font-light"> &gt; </span>
          <span className="text-[#074D8D]">Refer a Family</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-[#074D8D] text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
              Refer a Family <br />
              <span className="text-[#2563EB]">and Get ₹5,000</span>
            </h1>

            <h2 className="text-[#074D8D] text-xl md:text-2xl font-bold mb-8 opacity-90">
              Refer a Family to Our Online School and You Both Get ₹5,000
            </h2>

            <div className="space-y-4 text-gray-500 text-lg mb-10 leading-relaxed max-w-xl">
              <p>
                If you know a family looking for a flexible, well-structured
                school, introduce them to Edulectual K12 Online School.
              </p>
              <p>
                When their child joins, both families receive a fee credit of
                ₹5,000 (USD 60). Thank you for spreading the word and helping
                another family find the right learning environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "No limit on referrals",
                "₹5,000 for both families",
                "Easy referral process",
                "Share the learning experience",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#FFC107]"
                    fill="currentColor"
                    stroke="white"
                  />
                  <span className="font-bold text-[#074D8D] text-[11px] uppercase tracking-wider">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <button className="group bg-[#074D8D] text-white px-8 py-5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#063d70] transition-all flex items-center gap-3">
              Get My Referral Code
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-4xl p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
              <h3 className="text-[#074D8D] font-black text-xl mb-8 relative z-10">
                Get Your Unique Referral Code
              </h3>

              <div className="space-y-6 relative z-10">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3">
                    Registered Primary Email *
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#074D8D] transition-all outline-none"
                  />
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed italic">
                  Enter your registered email address to request your unique
                  referral code. You can then share it with friends, relatives,
                  or colleagues who are looking for an online school.
                </p>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-[#5D5DFF] text-white py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 shadow-lg transition-all flex items-center justify-center gap-2">
                    <Send size={14} /> Submit
                  </button>

                  <button className="px-6 border border-gray-200 text-gray-400 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <RotateCcw size={14} /> Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-40 mb-40">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
              <img
                src={ReferParentImg1}
                alt="Families discovering flexible online education"
                loading="lazy"
                className="w-full h-112.5 object-cover rounded-[2.5rem] shadow-2xl"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-[#074D8D] text-4xl font-black mb-8 leading-tight">
                How the <br />
                <span className="underline decoration-[#FFC107] decoration-4 underline-offset-8">
                  referral programme
                </span>{" "}
                works.
              </h2>

              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  <span className="text-[#074D8D] font-bold">
                    1. Get your referral code:
                  </span>{" "}
                  Current Edulectual K12 families can find their personal
                  referral code on their parent dashboard or request one from
                  our admissions team.
                </p>

                <p>
                  <span className="text-[#074D8D] font-bold">
                    2. Share it:
                  </span>{" "}
                  Share your code with friends, relatives or colleagues who may
                  be looking for an online school. They can enter the code on
                  their application form.
                </p>

                <p>
                  <span className="text-[#074D8D] font-bold">
                    3. They enrol:
                  </span>{" "}
                  Once the referred child's place is confirmed and their first
                  fee payment is made, your referral is complete.
                </p>

                <p>
                  <span className="text-[#074D8D] font-bold">
                    4. You both get credit:
                  </span>{" "}
                  Both families receive a ₹5,000 (USD 60) fee credit towards
                  tuition.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-right">
              <h2 className="text-[#074D8D] text-4xl font-black mb-8 leading-tight">
                Who can <span className="text-[#FFC107]">refer?</span>
                <br />
                Everyone in our community.
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                Any parent or legal guardian of a current Edulectual K12 learner
                can refer a new family. If you know someone who could benefit
                from flexible, structured online learning, share your referral
                code with them. You can refer multiple families and help more
                children discover a learning experience that works for them.
              </p>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src={ReferParentImg2}
                loading="lazy"
                alt="Parents sharing their online school experience"
                className="w-full h-112.5 object-cover rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-40 bg-gray-50 rounded-[3rem] p-16 md:p-24 text-center border border-gray-100">
          <h3 className="text-[#074D8D] text-2xl font-black mb-20 uppercase tracking-[0.4em]">
            How Does the Referral Programme Work?
          </h3>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/512/3121/3121530.png",
                title: "GET YOUR REFERRAL CODE",
                desc: "Request or access your personal code as a current family.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/2168/2168531.png",
                title: "SHARE WITH A NEW FAMILY",
                desc: "Share your code with someone interested in online schooling.",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/1162/1162280.png",
                title: "GET ₹5,000 CREDIT EACH",
                desc: "Both families receive a tuition fee credit after successful enrolment.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="mb-10 p-8 bg-white rounded-3xl shadow-lg w-48 h-48 flex items-center justify-center">
                  <img src={item.img} alt="icon" className="h-24 opacity-80" />
                </div>

                <h4 className="text-[#FFC107] font-black text-[10px] uppercase tracking-widest mb-4">
                  {item.title}
                </h4>

                <p className="text-[11px] text-gray-400 font-bold max-w-50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
          <div className="w-full md:w-5/12">
            <img
              src={RewardImg}
              alt="Referral programme reward"
              loading="lazy"
              className="w-full h-87.5 object-cover rounded-4xl shadow-2xl"
            />
          </div>

          <div className="w-full md:w-7/12">
            <h3 className="text-[#074D8D] text-4xl font-black mb-8 uppercase tracking-tighter">
              Why <span className="text-[#FFC107]">Families Refer</span> Us:
            </h3>

            <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
              <p>
                Parents tell friends when something works. Online school may
                have made family life easier after a move, alongside sport or
                other activities, or by offering a better learning environment
                at home.
              </p>

              <p>
                If Edulectual K12 has been the right choice for your family,
                someone else may be looking for the same option. Your
                recommendation can help another family find a school that fits
                their needs.
              </p>

              <p className="text-sm font-bold uppercase tracking-widest text-[#074D8D]/60 italic">
                Share your experience. Help another family. Get ₹5,000 credit
                each.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FFC107] text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg">
                Get My Referral Code
              </button>

              <button className="bg-[#074D8D] text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg">
                Book a Free 2-Week Trial
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-16">
          <div
            className="flex items-center justify-between cursor-pointer py-6 group"
            onClick={() => setIsTermsOpen(!isTermsOpen)}
          >
            <h4 className="text-gray-900 font-black text-sm uppercase tracking-[0.3em] group-hover:text-[#074D8D] transition-colors">
              Terms & Conditions and FAQs
            </h4>

            <div
              className={`p-2 rounded-full transition-all ${
                isTermsOpen
                  ? "bg-[#074D8D] text-white rotate-180"
                  : "bg-gray-50 text-gray-400"
              }`}
            >
              {isTermsOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-700 ${
              isTermsOpen
                ? "max-h-500 mt-10 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 pb-20">
              {[
                "The referral programme is available to parents or legal guardians of current Edulectual K12 learners.",
                "The referred family must be new to Edulectual K12 Online School.",
                "Both the referring family and the referred family receive a ₹5,000 (USD 60) tuition fee credit after successful enrolment.",
                "A referral is considered successful once the referred child's place is confirmed and the first fee payment is made.",
                "Referral credit is applied towards tuition fees and cannot be exchanged for cash.",
                "Referral credit may be combined with other offers, subject to the overall discount cap of 35%.",
                "The referral code must be provided during the application process to qualify for the programme.",
                "The referral programme is subject to the school's applicable admissions and fee policies.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-gray-50/50 border border-gray-100"
                >
                  <div className="bg-[#BCA47A] rounded-full p-1 mt-1 shrink-0">
                    <CheckCircle2
                      size={10}
                      className="text-white"
                      fill="currentColor"
                    />
                  </div>

                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-10 pb-16">
              <h4 className="text-[#074D8D] font-black text-xl mb-8">
                Frequently Asked Questions
              </h4>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    question: "How much is the referral reward?",
                    answer:
                      "Both the referring family and the new family receive a ₹5,000 (USD 60) tuition fee credit after a successful enrolment.",
                  },
                  {
                    question: "When is the referral credit applied?",
                    answer:
                      "The referral credit is applied after the referred child's place is confirmed and the first fee payment is made.",
                  },
                  {
                    question: "Can I refer more than one family?",
                    answer:
                      "Yes, current families can refer multiple new families to Edulectual K12 Online School.",
                  },
                  {
                    question: "Who is eligible for the referral programme?",
                    answer:
                      "Any parent or legal guardian of a current Edulectual K12 learner can participate in the referral programme.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-gray-50/50 border border-gray-100"
                  >
                    <h5 className="text-[#074D8D] font-bold text-sm mb-3">
                      {faq.question}
                    </h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center bg-[#074D8D] rounded-[3rem] p-16 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-8 leading-tight">
              Admissions for <span className="text-[#FFC107]">2027-28</span> Are
              Open
            </h2>

            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Help another family discover Edulectual K12 Online School. Book a
              free 2-week trial and explore our learning programmes. Apply when
              you're ready. The ₹999 registration fee is waived during our
              launch period.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#FFC107] text-[#074D8D] px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-white transition-all">
                Book a Free 2-Week Trial
              </button>

              <button className="bg-white text-[#074D8D] px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-50 transition-all">
                Apply for 2027-28
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAParent;