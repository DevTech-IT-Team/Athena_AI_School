import { useState } from "react";
import {
  BookOpen,
  Users,
  GraduationCap,
  ClipboardCheck,
  Brain,
  MessageCircle,
  HeartHandshake,
  ShieldCheck,
  Laptop,
  Globe,
  Palette,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const tabs = [
  {
    id: "learners",
    title: "For Learners",
    icon: BookOpen,
  },
  {
    id: "parents",
    title: "For Parents",
    icon: Users,
  },
  {
    id: "support",
    title: "Support",
    icon: HeartHandshake,
  },
];

const learnerFeatures = [
  {
    title: "Live Classes",
    description:
      "Join structured online lessons and interact with teachers and classmates in a virtual classroom.",
    icon: GraduationCap,
    color: "#218F83",
    bg: "#E9F7F3",
  },
  {
    title: "Engagement and Progress",
    description:
      "Stay involved in learning activities and follow your academic progress throughout the learning journey.",
    icon: ClipboardCheck,
    color: "#D99A22",
    bg: "#FFF6DF",
  },
  {
    title: "Assessments",
    description:
      "Understand your learning through assessments and regular academic feedback.",
    icon: BookOpen,
    color: "#E77C52",
    bg: "#FFF0E9",
  },
  {
    title: "Learning Tools and Skills",
    description:
      "Build useful academic and digital skills through online learning resources and activities.",
    icon: Laptop,
    color: "#8061CE",
    bg: "#F1ECFF",
  },
  {
    title: "Learning Support",
    description:
      "Get guidance and assistance to help you stay confident and engaged in your studies.",
    icon: MessageCircle,
    color: "#C34D91",
    bg: "#FCECF5",
  },
];

const parentFeatures = [
  "Regular updates about your child's learning and progress.",
  "Information to help you understand your child's academic journey.",
  "Opportunities to stay connected with teachers and school activities.",
  "Guidance to support your child's learning at home.",
];

const supportFeatures = [
  {
    title: "Learning Support",
    description:
      "Guidance and assistance to help learners understand their lessons and progress with confidence.",
    icon: BookOpen,
    color: "#3679D8",
  },
  {
    title: "Technical Support",
    description:
      "Help with accessing online learning tools and resolving technical difficulties.",
    icon: Laptop,
    color: "#269B91",
  },
  {
    title: "Student Wellbeing",
    description:
      "A supportive learning environment that considers students' confidence, comfort and wellbeing.",
    icon: HeartHandshake,
    color: "#E7A928",
  },
];

const enrichmentFeatures = [
  {
    title: "Computational Thinking",
    description:
      "Develop logical thinking and problem-solving skills.",
    icon: Brain,
  },
  {
    title: "Languages",
    description:
      "Explore language learning and improve communication skills.",
    icon: Globe,
  },
  {
    title: "Creative Activities",
    description:
      "Discover creativity through artistic and practical activities.",
    icon: Palette,
  },
  {
    title: "Learning Garage",
    description:
      "Explore ideas, experiments and creative learning opportunities.",
    icon: Lightbulb,
  },
];

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("learners");

  const renderLearners = () => (
    <div className="space-y-8">

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
          Student experience
        </span>

        <h3 className="mt-2 text-2xl font-extrabold text-[#172554]">
          Learning designed around students
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
          Explore the learning experiences and resources that help students
          participate, develop skills and make progress in an online school.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        {learnerFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: feature.bg,
                  color: feature.color,
                }}
              >
                <Icon size={23} />
              </div>

              <h4 className="text-lg font-bold text-[#172554]">
                {feature.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );

  const renderParents = () => (
    <div className="space-y-8">

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
          Family partnership
        </span>

        <h3 className="mt-2 text-2xl font-extrabold text-[#172554]">
          Keeping parents connected
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
          Parents play an important role in a child's education. We aim to
          keep families informed and connected throughout the learning journey.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#3679D8]">
            <Users size={25} />
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#172554]">
              Your child's learning journey
            </h4>

            <p className="text-sm text-gray-500">
              Stay informed and involved.
            </p>
          </div>

        </div>

        <div className="space-y-4">

          {parentFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl bg-[#F7FAFF] p-4 transition hover:bg-[#EFF5FF]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9E2FF] text-[#8061CE]">
                <CheckCircle2 size={15} />
              </span>

              <p className="text-sm leading-6 text-gray-700">
                {feature}
              </p>
            </div>
          ))}

        </div>
      </div>

      <div className="rounded-2xl border border-[#BFE8DC] bg-[#EAF8F3] p-6 md:p-8">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#218F83]">
            <HeartHandshake size={25} />
          </div>

          <div>
            <h4 className="font-bold text-[#172554]">
              Parents are our partners
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              A positive learning experience works best when parents and
              teachers work together to support the child.
            </p>
          </div>

        </div>
      </div>

    </div>
  );

  const renderSupport = () => (
    <div className="space-y-8">

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
          Here to help
        </span>

        <h3 className="mt-2 text-2xl font-extrabold text-[#172554]">
          Support throughout the journey
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
          A positive online learning experience needs more than lessons.
          Learners and families need guidance, assistance and a supportive
          school environment.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        {supportFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                <Icon size={24} />
              </div>

              <h4 className="text-lg font-bold text-[#172554]">
                {feature.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>

      <div className="rounded-2xl border border-[#F2DDAA] bg-[#FFF8E8] p-6">

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D99A22]" size={25} />

          <h4 className="font-bold text-[#172554]">
            A supportive learning environment
          </h4>
        </div>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          We want students and families to feel supported as they navigate
          online education, classroom activities and everyday learning needs.
        </p>

      </div>

    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "learners":
        return renderLearners();

      case "parents":
        return renderParents();

      case "support":
        return renderSupport();

      default:
        return renderLearners();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F6FF] via-white to-[#FFF7F1] px-6 py-16 md:px-12 md:py-20">

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-10 text-center">

          <span className="inline-block rounded-full bg-[#DDF4EF] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#168477]">
            Online school features
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-[#172554] md:text-4xl">
            What Students Get at Edulectual K12
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Discover the learning experience, family involvement and support
            that make up our online school environment.
          </p>

        </div>

        {/* Main tabs container */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">

          {/* Tab navigation */}
          <div className="border-b border-gray-100 bg-[#FAFCFF] p-3 md:p-4">

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={isActive}
                    className={`flex items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#1769AA] text-white shadow-md"
                        : "bg-white text-gray-600 hover:bg-[#EAF2FF] hover:text-[#1769AA]"
                    }`}
                  >
                    <Icon size={19} />
                    {tab.title}
                  </button>
                );
              })}

            </div>
          </div>

          {/* Tab content */}
          <div className="p-6 md:p-10">
            {renderContent()}
          </div>

        </div>

        {/* Optional enrichment */}
        <div className="mt-16">

          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#218F83]">
              Beyond the classroom
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-[#172554] md:text-3xl">
              Optional Enrichment
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
              Give learners opportunities to explore interests, discover
              creativity and develop additional skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {enrichmentFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF3D9] text-[#D99A22]">
                    <Icon size={22} />
                  </div>

                  <h4 className="font-bold text-[#172554]">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#1769AA] to-[#218F83] p-7 text-white shadow-lg md:p-10">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#D8F5EC]">
                <Sparkles size={17} />
                Discover online learning
              </div>

              <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
                Ready to explore Edulectual K12?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
                Experience our online learning environment and discover
                the right educational journey for your child.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F9C842] px-7 py-3.5 text-sm font-bold text-[#172554] transition hover:-translate-y-1 hover:bg-white"
            >
              Book a free trial
              <ArrowRight size={17} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default TabbedContent;