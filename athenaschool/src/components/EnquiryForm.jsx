import { useState } from "react";
import { ArrowRight, MessageCircle, User, Mail, Phone } from "lucide-react";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Thank you for your enquiry!");
  };

  const inputStyles = `
    w-full px-4 py-3
    text-sm text-[#14204B]
    bg-[#FFFDF7]
    border border-[#E5E7EB]
    rounded-xl
    placeholder:text-gray-400
    focus:outline-none
    focus:border-[#2563EB]
    focus:ring-2 focus:ring-[#2563EB]/10
    transition-all duration-200
  `;

  return (
    <div className="w-full max-w-[420px] mx-auto">

      {/* Form Card */}
      <div
        className="bg-white rounded-3xl overflow-hidden
        border border-[#E8EAF2]
        shadow-[0_10px_35px_rgba(20,32,75,0.08)]"
      >

        {/* Header */}
        <div className="bg-[#14204B] px-6 py-7 relative overflow-hidden">

          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32
          bg-[#2563EB]/20 rounded-full blur-2xl" />

          <div className="absolute -bottom-10 -left-10 w-24 h-24
          bg-[#F4C542]/20 rounded-full blur-2xl" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2
            bg-white/10 text-[#F4C542]
            px-3 py-1.5 rounded-full
            text-xs font-semibold mb-3">

              <MessageCircle size={14} />
              Admissions Enquiry
            </div>

            <h3 className="text-2xl font-bold text-white leading-tight">
              Leap ahead with
              <span className="text-[#F4C542]"> Edulectual K12</span>
            </h3>

            <p className="text-white/75 text-sm mt-2 leading-relaxed">
              Tell us a little about yourself and our admissions team
              will help you get started.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-6 space-y-5"
        >

          {/* Name Fields */}
          <div>
            <label className="block text-sm font-semibold
            text-[#14204B] mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2
                  -translate-y-1/2 text-[#14204B]/40"
                />

                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`${inputStyles} pl-10`}
                  required
                />
              </div>

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={inputStyles}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold
            text-[#14204B] mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-3">

              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="px-3 py-3
                text-sm text-[#14204B]
                bg-[#FFFDF7]
                border border-[#E5E7EB]
                rounded-xl
                focus:outline-none
                focus:border-[#2563EB]
                focus:ring-2 focus:ring-[#2563EB]/10
                transition-all duration-200"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>

              <div className="relative flex-1">
                <Phone
                  size={16}
                  className="absolute left-3 top-1/2
                  -translate-y-1/2 text-[#14204B]/40"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${inputStyles} pl-10`}
                  required
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold
            text-[#14204B] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2
                -translate-y-1/2 text-[#14204B]/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className={`${inputStyles} pl-10`}
                required
              />
            </div>
          </div>

          {/* Terms */}
          <div className="bg-[#F4F8FF] p-4 rounded-xl
          border border-[#E5EAF5]">

            <label className="flex items-start gap-3
            text-xs text-[#14204B]/70 leading-relaxed">

              <input
                type="checkbox"
                required
                className="mt-1 accent-[#2563EB]
                w-4 h-4 flex-shrink-0 cursor-pointer"
              />

              <span>
                By submitting this form, I agree to Edulectual K12's
                terms, privacy policy and data usage policy.
              </span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
            bg-[#F4C542] text-[#14204B]
            py-3.5 px-5
            rounded-full
            font-bold text-sm
            shadow-[0_4px_12px_rgba(244,197,66,0.25)]
            hover:bg-[#EFBF32]
            hover:shadow-[0_6px_18px_rgba(244,197,66,0.35)]
            hover:-translate-y-0.5
            transition-all duration-300
            cursor-pointer"
          >
            Enquire Now
            <ArrowRight size={18} />
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 leading-relaxed">
            Admissions for the 2027–28 academic year are open.
          </p>

        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;