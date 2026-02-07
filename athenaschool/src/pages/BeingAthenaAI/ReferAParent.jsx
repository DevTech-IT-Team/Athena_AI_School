import React, { useState } from "react";
import {
  Plus,
  Minus,
  CheckCircle2,
  Send,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import ReferParentImg1 from '../../assets/optimized/refer-page-image1.webp';
import ReferParentImg2 from '../../assets/optimized/refer-page-image2.webp';
import RewardImg from '../../assets/optimized/rewards.webp';


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
            Being Athena AI
          </span>
          <span className="text-gray-300 font-light"> &gt; </span>
          <span className="text-[#074D8D]">Refer A Parent</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-[#074D8D] text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
              Help a Family Find <br />
              <span className="text-[#2563EB]">the Right Path</span>
            </h1>
            <h2 className="text-[#074D8D] text-xl md:text-2xl font-bold mb-8 opacity-90">
              Refer a Parent. Earn ₹7,500. Make a Difference.
            </h2>
            <div className="space-y-4 text-gray-500 text-lg mb-10 leading-relaxed max-w-xl">
              <p>Refer a friend, colleague, or family member today.</p>
              <p>
                We'll guide them, support them—and if their child joins Athena
                AI, you earn ₹7,500.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "No limits.",
                "No extra steps.",
                "Just shared purpose.",
                "Rewards that matter.",
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
              Refer Now and Grow Together
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-4xl p-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
              <h3 className="text-[#074D8D] font-black text-xl mb-8 relative z-10">
                Get your Unique Referral Code
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
                  Submit your registered primary contact E-mail ID in the box
                  above to generate your unique referral code that can be shared
                  over social media, WhatsApp, or friends.
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
                alt="Student"
                loading="lazy"
                className="w-full h-112.5 object-cover rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-[#074D8D] text-4xl font-black mb-8 leading-tight">
                Together, let's create a <br />
                <span className="underline decoration-[#FFC107] decoration-4 underline-offset-8">
                  brighter tomorrow
                </span>{" "}
                for our children.
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  Athena AI School is re-imagining education with our
                  transparent, personalised and flexible learning model.
                </p>
                <p>
                  Founded in{" "}
                  <span className="text-[#074D8D] font-bold">2020</span>, today,
                  our community includes{" "}
                  <span className="text-[#FFC107] font-extrabold underline">
                    7500+
                  </span>{" "}
                  happy students from 500+ cities and 78+ countries.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-right">
              <h2 className="text-[#074D8D] text-4xl font-black mb-8 leading-tight">
                Our Promise to <span className="text-[#FFC107]">you</span>{" "}
                <br />& your Friend
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                When you recommend a friend to Athena AI School, please tell
                them we'll be in touch. We will make a single connection with
                them to talk about our school programmes offered and
                personalised learning. If they're interested, we'll continue the
                conversation; if not, we value your privacy and won't reach out
                further.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src={ReferParentImg2}
                loading="lazy"
                alt="Friends connecting"
                className="w-full h-112.5 object-cover rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-40 bg-gray-50 rounded-[3rem] p-16 md:p-24 text-center border border-gray-100">
          <h3 className="text-[#074D8D] text-2xl font-black mb-20 uppercase tracking-[0.4em]">
            How does this work?
          </h3>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/512/3121/3121530.png",
                title: "FILL UP THE REFERRAL FORM",
                desc: "to generate your own referral link to share",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/2168/2168531.png",
                title: "GET FEE WAIVER OF Rs. 7,500",
                desc: "For every successful confirmed admission",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/1162/1162280.png",
                title: "GET AMAZING REWARDS!",
                desc: "Referrals on before 31st May, 2025",
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
              alt="Gift reward"
              loading="lazy"
              className="w-full h-87.5 object-cover rounded-4xl shadow-2xl"
            />
          </div>
          <div className="w-full md:w-7/12">
            <h3 className="text-[#074D8D] text-4xl font-black mb-8 uppercase tracking-tighter">
              Exciting <span className="text-[#FFC107]">Reward</span>:
            </h3>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
              <p>
                For every successful admission using your referral code, you'll
                earn a rebate of ₹7,500 on the final instalment of fees!
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-[#074D8D]/60 italic">
                Grow our community—enter your email ID now!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FFC107] text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg">
                Get your Unique Referral Code
              </button>
              <button className="bg-[#074D8D] text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg">
                Share Parent Details
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
              Terms & Conditions
            </h4>
            <div
              className={`p-2 rounded-full transition-all ${isTermsOpen ? "bg-[#074D8D] text-white rotate-180" : "bg-gray-50 text-gray-400"}`}
            >
              {isTermsOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-700 ${isTermsOpen ? "max-h-500 mt-10 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 pb-20">
              {[
                "The Student Referral Program is open to all parents, or legal guardians enrolled in Athena AI School.",
                "Employees and associates cannot participate in the Student Referral Program directly.",
                "A tuition fee waiver will be given for referring new families/students.",
                "Referred students cannot have a sibling currently or previously enrolled.",
                "All referrals must be acknowledged using the unique referral link only during admission.",
                "The tuition fee waiver will be applied to your last Instalment of the academic year.",
                "The Tuition fee waiver is applied only to the Annual School Tuition Fees.",
                "The benefits are passed only to the younger child if a parent has more than one child.",
                "Referral rebates cannot be combined with any other promotions or discounts.",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAParent;
