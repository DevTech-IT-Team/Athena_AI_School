import { useState, useEffect, memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll effect
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Navigation structure based on the document
  const menuItems = [
    {
      title: "Programmes",
      links: [
        { text: "Early Years (Nursery–KG)", href: "/early-years" },
        { text: "Pre-Primary (Nursery, LKG, UKG)", href: "/pre-primary" },
        { text: "British Primary (Grades 1–5)", href: "/british-primary" },
        { text: "Indian Primary (Grades 1–5)", href: "/primary" },
        {
          text: "British Lower Secondary (Grades 6–8)",
          href: "/british-lower-secondary",
        },
        { text: "Indian Middle School (Grades 6–8)", href: "/middle" },
        { text: "IGCSE (Grades 9–10)", href: "/igcse" },
        { text: "A Levels (Grades 11–12)", href: "/a-levels" },
        {
          text: "NIOS Senior School (Grades 9–12)",
          href: "/senior-school",
        },
      ],
    },
    {
      title: "Pathways",
      links: [
        { text: "British vs Indian Pathway", href: "/pathway" },
        { text: "Pearson Edexcel", href: "/edexcel-uk" },
        {
          text: "Edexcel International GCSE",
          href: "/edexcel-international-gcse",
        },
        {
          text: "Edexcel International A Level",
          href: "/edexcel-international-advanced-level",
        },
        { text: "NCF and the Indian Pathway", href: "/ncf-india" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { text: "How to Apply", href: "/apply-now" },
        { text: "Who Should Register", href: "/who-should-register" },
        { text: "Class Timings", href: "/batch-timings" },
        {
          text: "What You Need at Home",
          href: "/essential-requirements",
        },
        { text: "Refer a Family", href: "/refer-a-parent" },
      ],
    },
    {
      title: "About",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Our Leaders", href: "/our-leaders" },
        { text: "Our Teachers", href: "/meet-our-academic-crew" },
        { text: "Mission, Vision and Values", href: "/values-and-ethos" },
        { text: "Why Choose Us", href: "/what-sets-us-apart" },
        { text: "How Online School Works", href: "/how-it-works" },
        { text: "Accreditation", href: "/affiliations-accreditation" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "FAQs", href: "/faq" },
        { text: "Help and Support", href: "/help-and-support" },
        { text: "Prospectus and Downloads", href: "/resources-downloads" },
        { text: "Blog", href: "/blog" },
      ],
    },
  ];

  // Simple navigation items
  const simpleLinks = [
    { label: "Home", href: "/" },
    { label: "Fees", href: "/fees" },
    { label: "Contact", href: "/contact" },
  ];

  // Dropdown navigation
  const dropdownItems = [
    "Programmes",
    "Pathways",
    "Admissions",
    "About",
    "Resources",
  ];

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>
      {/* ================= ANNOUNCEMENT BAR ================= */}

      <div className="ek-announce">
        <div className="ek-announce-inner">
          <p>
            Admissions for 2027-28 are open. Founding families save 25%
            when they enrol by 31 March 2027.
          </p>

          <Link to="/fees" className="ek-announce-link">
            See fees and offers
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}

      <nav className={`ek-navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="ek-navbar-container">

          {/* LOGO */}

          <Link to="/" className="ek-logo">
            <span className="ek-logo-icon">
              <span>K</span>
            </span>

            <span className="ek-logo-text">
              <strong>
                k12<span>online</span>school
              </strong>

              <small>ONLINE SCHOOL</small>
            </span>
          </Link>

          {/* DESKTOP MENU */}

          <div className="ek-desktop-menu">

            <Link
              to="/"
              className={`ek-nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>

            {menuItems.map((menu) => (
              <div className="ek-dropdown" key={menu.title}>
                <button
                  className={`ek-nav-link ek-dropdown-trigger ${
                    activeDropdown === menu.title ? "active" : ""
                  }`}
                  onClick={() => toggleDropdown(menu.title)}
                  onMouseEnter={() => setActiveDropdown(menu.title)}
                >
                  {menu.title}
                  <ChevronDown size={15} />
                </button>

                {activeDropdown === menu.title && (
                  <div
                    className="ek-dropdown-menu"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menu.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="ek-dropdown-item"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {simpleLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`ek-nav-link ${
                  location.pathname === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}

          <div className="ek-nav-cta">
            <Link to="/contact" className="ek-btn ek-btn-outline">
              Book a free trial
            </Link>

            <Link to="/apply-now" className="ek-btn ek-btn-primary">
              Apply for 2027-28
            </Link>
          </div>

          {/* MOBILE TOGGLE */}

          <button
            className="ek-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {isOpen && (
          <div className="ek-mobile-menu">
            <div className="ek-mobile-menu-inner">

              {/* Quick Links */}

              <div className="ek-mobile-quicklinks">
                {simpleLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Dropdowns */}

              {menuItems.map((menu) => (
                <div className="ek-mobile-dropdown" key={menu.title}>
                  <button
                    onClick={() => toggleDropdown(menu.title)}
                    className="ek-mobile-dropdown-trigger"
                  >
                    {menu.title}

                    <ChevronDown
                      size={18}
                      className={
                        activeDropdown === menu.title ? "rotate-icon" : ""
                      }
                    />
                  </button>

                  {activeDropdown === menu.title && (
                    <div className="ek-mobile-dropdown-content">
                      {menu.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}

              <div className="ek-mobile-cta">
                <Link
                  to="/contact"
                  className="ek-btn ek-btn-outline"
                  onClick={() => setIsOpen(false)}
                >
                  Book a free trial
                </Link>

                <Link
                  to="/apply-now"
                  className="ek-btn ek-btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Apply for 2027-28
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
});

export default Navigation;