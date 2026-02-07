import React from "react";
import {
  Download,
  MessageSquare,
  User,
  ShieldCheck,
  GraduationCap,
  Zap,
  Quote,
} from "lucide-react";

const OurLearnerCouncil = () => {
  const sidebarCategories = [
    "Refer and Earn",
    "Meet Our Academic Crew",
    "Parents Speak",
    "Press",
    "Awards",
    "Our Learner Council",
  ];

  const middleSchoolCouncil = [
    { name: "Rohith Nagarajan", position: "PRESIDENT", house: "General" },
    { name: "Keya Hatkar", position: "VICE PRESIDENT", house: "General" },
    { name: "Rijul Sohith Aadarsh S", position: "AMAZON CEO", house: "Amazon" },
    { name: "Aarna Chauhan", position: "APPLE CEO", house: "Apple" },
    { name: "Aishwarya K Jingade", position: "GOOGLE CEO", house: "Google" },
    { name: "Zainab Sayed", position: "MICROSOFT CEO", house: "Microsoft" },
  ];

  const seniorSchoolCouncil = [
    { name: "Shobhit Malekar", position: "PRESIDENT", house: "General" },
    { name: "Diya Vaishnavi", position: "VICE PRESIDENT", house: "General" },
    { name: "Kaitlin", position: "AMAZON CEO", house: "Amazon" },
    { name: "Agamjot", position: "APPLE CEO", house: "Apple" },
    { name: "Revathy", position: "GOOGLE CEO", house: "Google" },
    { name: "Tanvi Mukka", position: "MICROSOFT CEO", house: "Microsoft" },
  ];

  const getHouseColor = (house) => {
    switch (house) {
      case "Apple":
        return "border-gray-400 text-gray-600";
      case "Amazon":
        return "border-orange-400 text-orange-600";
      case "Google":
        return "border-blue-500 text-blue-600";
      case "Microsoft":
        return "border-blue-300 text-blue-400";
      default:
        return "border-[#FFB400] text-[#003366]";
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#333]">
      <div className="relative h-100 w-full flex items-center justify-center bg-[#001D3D] overflow-hidden mt-14">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#FFB400 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-tr from-[#001D3D] via-[#003366] to-[#001D3D]"></div>

        <div className="relative z-10 text-center px-4">
          <GraduationCap className="text-[#FFB400] w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Our Learner Council
          </h1>
          <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-sm">
            Empowering the Leaders of Tomorrow
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20">
        <div className="bg-white rounded-t-[40px] shadow-2xl overflow-hidden border-x border-t border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-[#F4F7F9] p-8 border-r border-gray-100">
              <ul className="space-y-1 sticky top-24">
                {sidebarCategories.map((item, i) => (
                  <li
                    key={i}
                    className={`p-3 text-sm font-semibold cursor-pointer rounded transition-all ${item === "Our Learner Council" ? "bg-[#003366] text-white shadow-md" : "text-gray-700 hover:bg-gray-200"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-4">
                <div className="border-t-4 border-[#FFB400] pt-4">
                  <p className="text-[11px] italic text-gray-500 mb-6 text-center leading-relaxed font-medium">
                    "The beauty of online schooling is that you can be anywhere
                    and yet have access to quality education - our students come
                    from all over the world."
                  </p>
                </div>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-[#e5a200] shadow-sm flex items-center justify-center gap-2">
                  <MessageSquare size={14} /> Enquire Now
                </button>
                <button className="w-full bg-[#FFB400] text-white py-4 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-[#e5a200] shadow-sm flex items-center justify-center gap-2">
                  <Download size={14} /> Prospectus
                </button>
              </div>
            </div>

            <div className="flex-1 p-8 lg:p-16">
              <nav className="text-[11px] mb-8 flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                <span>Home</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-gray-400">Being Athena</span>
                <span className="text-gray-300">&gt;</span>
                <span className="text-[#074D8D]">Our Learner Council</span>
              </nav>

              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <Quote className="text-[#FFB400] w-10 h-10 opacity-50" />
                  <h2 className="text-[#003366] text-3xl font-bold leading-tight">
                    Leadership is the capacity to translate vision into reality.
                  </h2>
                </div>
                <p className="text-gray-500 font-bold mb-6">— Warren Bennis</p>
                <div className="space-y-4 text-gray-600 leading-relaxed max-w-4xl">
                  <p>
                    Leadership is the ability of an individual or a group of
                    individuals to influence and guide followers or other
                    members of an organisation.
                  </p>
                  <p>
                    Leadership involves making sound — and sometimes difficult —
                    decisions, creating and articulating a clear vision,
                    establishing achievable goals, and providing followers with
                    the knowledge and tools necessary to achieve those goals.
                  </p>
                </div>
              </section>

              <section className="mb-16 bg-[#F8FAFC] p-8 lg:p-12 rounded-3xl border-l-8 border-[#FFB400]">
                <h2 className="text-[#003366] text-2xl font-bold mb-6">
                  Building Tomorrow's Leaders
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    To instil the skills of leadership among the learners, the
                    first-ever School Learner Board was created in Athena AI
                    School in the month of August 2021 after a lot of hard work
                    and planning put in by the election committee and the
                    management.
                  </p>
                  <p>
                    Athena AI School learners are divided into four houses
                    namely{" "}
                    <strong>
                      Apple house, Amazon house, Google house, and Microsoft
                      House
                    </strong>
                    . The school learner board consisted of 6 members each from
                    the morning and afternoon batch respectively. The
                    designations that the Learner Council held were the
                    President, The Vice President, and the CEOs of the four
                    houses. Learners in grades 7 and 8 nominated themselves for
                    the various positions that would help them become the
                    leaders of tomorrow.
                  </p>
                </div>
              </section>

              <section className="mb-20">
                <h2 className="text-[#003366] text-2xl font-bold mb-6">
                  Council Achievements
                </h2>
                <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Throughout the year the members of the council made a lot of
                    contributions to the various events and celebrations that
                    were conducted in the school. Many successful events like
                    the celebration of Independence Day and Republic Day were
                    conducted under the guidance of the council members. One
                    such event was facilitators' day which was entirely
                    conducted by the learners and it was a huge success.
                  </p>

                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                    <h4 className="text-[#003366] font-bold mb-3 flex items-center gap-2">
                      <Zap className="text-[#FFB400] w-4 h-4" /> The Echo of
                      Athena AI
                    </h4>
                    <p>
                      The most important and outstanding achievement of the
                      members of the school learner board was the planning and
                      execution of 'The Echo of Athena AI' i.e. the first
                      learner-led podcast. Three successful episodes, under the
                      series 'Behind The Scenes', have already been released and
                      available to watch.
                    </p>
                  </div>

                  <p>
                    The members of the school learner board participated in
                    various other events like Shark Tank Stand-Up Comedy, and
                    Model United Nations and were among the star performers of
                    these events. Not just co-curricular activities but the
                    school council members are also doing exceptionally well in
                    academics in their assessments, activities, and assignments.
                  </p>
                </div>
              </section>

              <div className="mb-20 border-t border-gray-100 pt-16">
                <h2 className="text-[#003366] text-2xl font-bold mb-2 text-center lg:text-left">
                  School Learner Board
                </h2>
                <p className="text-gray-400 text-sm font-medium mb-12 uppercase tracking-widest text-center lg:text-left">
                  Academic Year 2024-25
                </p>

                {[
                  { title: "Indian Middle School", data: middleSchoolCouncil },
                  { title: "Indian Senior School", data: seniorSchoolCouncil },
                ].map((group, gIdx) => (
                  <div key={gIdx} className="mb-16">
                    <h3 className="text-[#003366] text-lg font-bold mb-8 border-b border-gray-50 pb-2">
                      {group.title}
                    </h3>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {group.data.map((member, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all group"
                        >
                          <div
                            className={`w-24 h-24 bg-[#F1F5F9] rounded-full mx-auto mb-4 flex items-center justify-center border-4 ${getHouseColor(member.house).split(" ")[0]} shadow-inner`}
                          >
                            <User size={40} className="text-gray-300" />
                          </div>
                          <h4 className="text-[#003366] font-bold text-md mb-1">
                            {member.name}
                          </h4>
                          <span
                            className={`text-[9px] font-black tracking-[0.2em] uppercase ${getHouseColor(member.house).split(" ")[1]}`}
                          >
                            {member.position}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#003366] rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <ShieldCheck className="text-[#FFB400] w-8 h-8" /> #Being
                    Athena AI
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                      <h5 className="font-bold text-[#FFB400] text-xs uppercase mb-3">
                        Responsibility
                      </h5>
                      <p className="text-xs text-blue-100 italic">
                        "It is never too early to take up responsibility."
                      </p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                      <h5 className="font-bold text-[#FFB400] text-xs uppercase mb-3">
                        Execution
                      </h5>
                      <p className="text-xs text-blue-100 italic">
                        "Actions Speak louder than words."
                      </p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                      <h5 className="font-bold text-[#FFB400] text-xs uppercase mb-3">
                        Community
                      </h5>
                      <p className="text-xs text-blue-100 italic">
                        "Starting the weekend with love we get from our
                        students."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default OurLearnerCouncil;
