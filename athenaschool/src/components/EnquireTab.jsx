import { useState, useEffect, lazy, Suspense } from "react";
import { X, ArrowRight } from "lucide-react";

const EnquiryForm = lazy(() => import("./EnquiryForm"));

function EnquireTab() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  useEffect(() => {
    if (!isPanelOpen) return;

    const handleScroll = () => {
      setIsPanelOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsPanelOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isPanelOpen]);

  return (
    <>
      {/* Floating Enquiry Tab */}
      <button
        type="button"
        onClick={togglePanel}
        aria-expanded={isPanelOpen}
        aria-label="Open enquiry form"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60]
        bg-[#F4C542] text-[#14204B]
        py-8 px-3
        rounded-l-2xl
        shadow-[0_8px_25px_rgba(20,32,75,0.18)]
        hover:bg-[#EFBF32]
        hover:px-4
        transition-all duration-300
        cursor-pointer
        border border-[#E6B82D]"
      >
        <div className="flex items-center gap-2">
          <span className="transform -rotate-90 origin-center whitespace-nowrap font-bold text-sm tracking-wide">
            Enquire Now
          </span>
        </div>
      </button>

      {/* Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-[#14204B]/30 backdrop-blur-[2px] z-[70]
          transition-opacity duration-300"
          onClick={closePanel}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 h-full
        w-[90vw] sm:w-[420px] max-w-[450px]
        bg-[#FFFDF7]
        shadow-[-10px_0_40px_rgba(20,32,75,0.15)]
        z-[80]
        transform transition-transform duration-500 ease-in-out
        ${
          isPanelOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        aria-hidden={!isPanelOpen}
      >
        <div className="h-full flex flex-col overflow-y-auto">

          {/* Panel Header */}
          <div className="flex items-center justify-between
          px-5 py-4
          bg-[#14204B]
          border-b border-white/10">

            <div>
              <p className="text-[#F4C542] text-xs font-semibold uppercase tracking-wider">
                Edulectual K12
              </p>

              <h2 className="text-white text-lg font-bold mt-1">
                Enquire Now
              </h2>
            </div>

            <button
              type="button"
              onClick={closePanel}
              aria-label="Close enquiry panel"
              className="w-10 h-10 rounded-full
              flex items-center justify-center
              bg-white/10 text-white
              hover:bg-[#F4C542] hover:text-[#14204B]
              transition-all duration-300"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 p-4 sm:p-5">

            <div className="mb-4">
              <p className="text-[#14204B] text-sm leading-relaxed">
                Have questions about our online school or programmes?
                Fill in the form and our team will get in touch with you.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-4 border-[#F4C542]
                  border-t-[#14204B] rounded-full animate-spin" />
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Panel Footer */}
          <div className="p-4 bg-[#F4F8FF] border-t border-[#E5EAF5]">
            <p className="text-xs text-[#14204B]/70 text-center">
              Admissions for 2027–28 are open.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnquireTab;