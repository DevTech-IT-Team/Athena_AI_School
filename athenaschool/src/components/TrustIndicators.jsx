import { Award, BookOpen, Globe, ShieldCheck } from "lucide-react";

function TrustIndicators() {
  const trustItems = [
    {
      icon: Award,
      title: "Pearson Edexcel",
      description: "International GCSE & A Level qualifications",
      color: "bg-[#FFF2D9]",
      iconColor: "text-[#D99A19]",
    },
    {
      icon: BookOpen,
      title: "NIOS Pathway",
      description: "Secondary & Senior Secondary examinations",
      color: "bg-[#E8F2FF]",
      iconColor: "text-[#4776C5]",
    },
    {
      icon: Globe,
      title: "Global Learning",
      description: "Online education for families across countries",
      color: "bg-[#E6F7F0]",
      iconColor: "text-[#32976B]",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Recognition",
      description: "Qualifications issued by recognised exam boards",
      color: "bg-[#F1EAFE]",
      iconColor: "text-[#8B64CC]",
    },
  ];

  return (
    <section className="relative w-full bg-[#FFF9F2] py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#FFEBC5] text-[#73521A] text-sm font-semibold mb-4">
            Recognition & Trust
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14215B] leading-tight mb-5">
            Learning That Leads
            <span className="text-[#E6A52E]"> to Recognised </span>
            Qualifications
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our students follow internationally recognised examination pathways
            through Pearson Edexcel and the National Institute of Open Schooling.
          </p>
        </div>

        {/* Horizontal Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#EAEFF5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon
                    size={28}
                    className={item.iconColor}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[#14215B] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* Qualification Pathways */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* British Pathway */}
          <div className="bg-[#EAF3FF] rounded-3xl p-8 md:p-10 border border-[#D7E6F8]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Award className="text-[#315FAD]" size={25} />
              </div>

              <div>
                <span className="text-sm font-semibold text-[#315FAD]">
                  British Pathway
                </span>

                <h3 className="text-2xl font-bold text-[#14215B]">
                  Pearson Edexcel
                </h3>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-5">
              Students on the British pathway take Pearson Edexcel International
              GCSE and International A Level qualifications.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white text-[#315FAD] text-sm font-semibold">
                International GCSE
              </span>

              <span className="px-4 py-2 rounded-full bg-white text-[#315FAD] text-sm font-semibold">
                International A Level
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-5 leading-relaxed">
              Certificates are issued by Pearson.
            </p>
          </div>

          {/* Indian Pathway */}
          <div className="bg-[#E8F7EE] rounded-3xl p-8 md:p-10 border border-[#D5ECDD]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <BookOpen className="text-[#31845C]" size={25} />
              </div>

              <div>
                <span className="text-sm font-semibold text-[#31845C]">
                  Indian Pathway
                </span>

                <h3 className="text-2xl font-bold text-[#14215B]">
                  NIOS
                </h3>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-5">
              Students on the Indian pathway take Secondary and Senior
              Secondary examinations through the National Institute of
              Open Schooling.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white text-[#31845C] text-sm font-semibold">
                Secondary
              </span>

              <span className="px-4 py-2 rounded-full bg-white text-[#31845C] text-sm font-semibold">
                Senior Secondary
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-5 leading-relaxed">
              Certificates are issued by NIOS.
            </p>
          </div>

        </div>

        {/* Bottom Information */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-[#EAEFF5] rounded-2xl px-6 py-5 shadow-sm">

            <ShieldCheck
              size={26}
              className="text-[#32976B] flex-shrink-0"
            />

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We believe in transparent education. Families can request
              information to verify qualifications directly with the
              examination boards.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustIndicators;