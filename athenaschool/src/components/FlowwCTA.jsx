import React from "react";
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from "lucide-react";

const FlowwCTA = () => {
  const benefits = [
    {
      title: "Free Consultation",
      description: "Discuss your child's learning journey with our team.",
      icon: Phone,
      color: "bg-[#FFF8DC]",
      iconColor: "text-[#D6A800]",
    },
    {
      title: "Personalised Assessment",
      description: "Discover your child's strengths and learning needs.",
      icon: Sparkles,
      color: "bg-[#EAF2FF]",
      iconColor: "text-[#2563EB]",
    },
    {
      title: "Flexible Batches",
      description: "Choose a schedule that fits your child's routine.",
      icon: CheckCircle2,
      color: "bg-[#FFF0E8]",
      iconColor: "text-[#E76F35]",
    },
    {
      title: "Works With Any School",
      description: "Learning support that complements school education.",
      icon: CheckCircle2,
      color: "bg-[#F3EAFE]",
      iconColor: "text-[#7C3AED]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-16 px-5 sm:px-8 md:px-16">

      {/* Decorative Background */}
      <div className="absolute -top-20 -right-20 w-72 h-72
      bg-[#F4C542]/15 rounded-full blur-3xl" />

      <div className="absolute -bottom-20 -left-20 w-72 h-72
      bg-[#2563EB]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CTA Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2
          px-4 py-2 rounded-full
          bg-[#FFF4C7] text-[#14204B]
          text-sm font-semibold mb-5">
            <Sparkles size={16} />
            Discover Your Child's Potential
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl
          font-bold text-[#14204B] leading-tight mb-5">
            Ready to Unlock Your Child's
            <span className="text-[#2563EB]"> FLOWW?</span>
          </h2>

          <p className="text-[#14204B]/70 text-base md:text-lg
          max-w-3xl mx-auto leading-relaxed">
            FLOWW exists to help learners discover their strengths early,
            build skills that matter for life, and learn with confidence,
            clarity, and purpose.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-5 mb-12">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className={`${benefit.color}
                rounded-2xl p-6
                border border-white
                shadow-[0_5px_20px_rgba(20,32,75,0.04)]
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(20,32,75,0.08)]
                transition-all duration-300`}
              >

                <div className={`w-12 h-12 rounded-xl bg-white
                flex items-center justify-center mb-4
                ${benefit.iconColor}`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-[#14204B] font-bold text-lg mb-2">
                  {benefit.title}
                </h3>

                <p className="text-[#14204B]/65 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row
        justify-center items-center gap-4">

          {/* Primary CTA */}
          <a
            href="/contact"
            className="w-full sm:w-auto
            inline-flex items-center justify-center gap-2
            bg-[#F4C542] text-[#14204B]
            font-bold py-4 px-8
            rounded-full
            shadow-[0_4px_15px_rgba(244,197,66,0.25)]
            hover:bg-[#EFBF32]
            hover:-translate-y-0.5
            hover:shadow-[0_6px_20px_rgba(244,197,66,0.35)]
            transition-all duration-300"
          >
            Enquire Now
            <ArrowRight size={18} />
          </a>

          {/* Secondary CTA */}
          <a
            href="/contact"
            className="w-full sm:w-auto
            inline-flex items-center justify-center gap-2
            border-2 border-[#14204B]
            text-[#14204B]
            font-bold py-4 px-8
            rounded-full
            hover:bg-[#14204B]
            hover:text-white
            transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#14204B]/55">
            Let's build a learning journey that works for your child.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FlowwCTA;