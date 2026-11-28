import { useState } from "react";
import {
  Search,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

function CourseFinder() {
  const [formData, setFormData] = useState({
    age: "",
    interests: [],
    schedule: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const ageGroups = [
    { value: "3-5", label: "Early Years (3-5)" },
    { value: "5-7", label: "Key Stage 1 (5-7)" },
    { value: "7-11", label: "Key Stage 2 (7-11)" },
    { value: "11-14", label: "Key Stage 3 (11-14)" },
    { value: "14-16", label: "Key Stage 4 (14-16)" },
    { value: "16-18", label: "Key Stage 5 (16-18)" },
  ];

  const interests = [
    { value: "stem", label: "STEM" },
    { value: "arts", label: "Arts & Music" },
    { value: "languages", label: "Languages" },
    { value: "humanities", label: "Humanities" },
    { value: "sports", label: "Sports & Wellness" },
    { value: "leadership", label: "Leadership & Entrepreneurship" },
  ];

  const schedules = [
    { value: "full-time", label: "Full-Time Program" },
    { value: "part-time", label: "Part-Time Program" },
    { value: "flexible", label: "Flexible Schedule" },
    { value: "summer", label: "Summer Program" },
  ];

  const locations = [
    { value: "online", label: "Online Learning" },
    { value: "hybrid", label: "Hybrid Model" },
    { value: "campus", label: "Campus-Based" },
    { value: "international", label: "International Program" },
  ];

  const recommendedCourses = [
    {
      title: "Foundation Programme",
      age: "3-5 years",
      ageValue: "3-5",
      duration: "1 year",
      format: "Online",
      description:
        "Early childhood development with play-based learning and foundational skills.",
    },
    {
      title: "Key Stage 1",
      age: "5-7 years",
      ageValue: "5-7",
      duration: "2 years",
      format: "Online",
      description:
        "Build foundational literacy, numeracy and essential learning skills.",
    },
    {
      title: "Primary Curriculum",
      age: "7-11 years",
      ageValue: "7-11",
      duration: "4 years",
      format: "Online",
      description:
        "Develop knowledge, creativity and confidence across primary subjects.",
    },
    {
      title: "Lower Secondary",
      age: "11-14 years",
      ageValue: "11-14",
      duration: "3 years",
      format: "Online",
      description:
        "Explore core subjects and prepare for advanced secondary learning.",
    },
    {
      title: "IGCSE Preparation",
      age: "14-16 years",
      ageValue: "14-16",
      duration: "2 years",
      format: "Online",
      description:
        "Prepare for International General Certificate of Secondary Education.",
    },
    {
      title: "A-Levels",
      age: "16-18 years",
      ageValue: "16-18",
      duration: "2 years",
      format: "Online",
      description:
        "Advanced Level qualifications designed to prepare students for university.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);

      setFormData((prev) => ({
        ...prev,
        interests: updatedInterests,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredCourses = submitted
    ? recommendedCourses.filter((course) => course.ageValue === formData.age)
    : recommendedCourses;

  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-20 md:py-24 px-5 sm:px-8 lg:px-12">

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">

          <span className="inline-flex items-center gap-2 bg-[#FFF2C7] text-blue-950 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <GraduationCap size={18} />
            Course Guidance
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 leading-tight">
            Find the Right
            <span className="text-[#E5AD29]"> Course</span>
            <br className="hidden sm:block" />
            for Your Child
          </h2>

          <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover the ideal learning programme based on your child's
            age, interests, preferred schedule and learning environment.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* Course Finder Form */}
          <div className="bg-white rounded-3xl border border-[#E9E5D9] shadow-sm p-6 sm:p-8 lg:p-10">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF2C7] flex items-center justify-center">
                <Search className="w-7 h-7 text-blue-950" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  Course Finder
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Personalise your search
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-blue-950 mb-3">
                  Child's Age Group
                </label>

                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#FFFDF7] text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select age group</option>

                  {ageGroups.map((group) => (
                    <option key={group.value} value={group.value}>
                      {group.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-semibold text-blue-950 mb-3">
                  Interests & Strengths
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map((interest) => {
                    const selected = formData.interests.includes(
                      interest.value
                    );

                    return (
                      <label
                        key={interest.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          selected
                            ? "border-blue-400 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest.value}
                          checked={selected}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-blue-600"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          {interest.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Schedule */}
              <div>
                <label className="block text-sm font-semibold text-blue-950 mb-3">
                  Preferred Schedule
                </label>

                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#FFFDF7] text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select schedule</option>

                  {schedules.map((sched) => (
                    <option key={sched.value} value={sched.value}>
                      {sched.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-blue-950 mb-3">
                  Learning Location
                </label>

                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#FFFDF7] text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select location</option>

                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-blue-950 text-white py-4 px-6 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Search size={18} />
                Find Recommended Courses
                <ArrowRight size={18} />
              </button>

            </form>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-3xl border border-[#E9E5D9] shadow-sm p-6 sm:p-8 lg:p-10">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-blue-700" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  {submitted ? "Your Course Matches" : "Explore Programmes"}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {submitted
                    ? "Courses based on your selected age group"
                    : "Explore our learning pathways"}
                </p>
              </div>
            </div>

            {/* Course Cards */}
            <div className="space-y-5">

              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <div
                    key={course.title}
                    className="group rounded-2xl border border-slate-200 p-5 sm:p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300 bg-[#FFFDF7]"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          Programme {index + 1}
                        </span>

                        <h4 className="text-lg md:text-xl font-bold text-blue-950 mt-2">
                          {course.title}
                        </h4>
                      </div>

                      <span className="bg-[#FFF2C7] text-blue-950 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                        {course.format}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-blue-600" />
                        {course.age}
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-600" />
                        {course.duration}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {course.description}
                    </p>

                    <a
                      href="/programmes"
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-blue-950 transition-colors"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />

                  <h4 className="font-bold text-blue-950 mb-2">
                    No Course Found
                  </h4>

                  <p className="text-sm text-slate-500">
                    Please select an age group to explore the available
                    learning programme.
                  </p>
                </div>
              )}

            </div>

            {/* Consultation */}
            <div className="mt-8 pt-7 border-t border-slate-200">

              <div className="bg-[#FFF2C7] rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-blue-950 mt-1 shrink-0" />

                  <h4 className="font-bold text-blue-950">
                    Need Personalised Guidance?
                  </h4>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  Our education consultants can help you choose
                  the programme that best fits your child's needs.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-950 px-5 py-3 rounded-full font-semibold text-sm hover:bg-blue-950 hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 md:mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 md:p-12 text-white">

            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#E5AD29]/20 rounded-full" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Every Child Deserves the Right Learning Path
                </h3>

                <p className="text-blue-100 leading-relaxed">
                  Explore our programmes and help your child
                  build a strong foundation for their future.
                </p>
              </div>

              <a
                href="/apply-now"
                className="inline-flex items-center gap-3 bg-[#E5AD29] text-blue-950 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 whitespace-nowrap"
              >
                Explore Admissions
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CourseFinder;