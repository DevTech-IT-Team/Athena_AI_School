import { useState, useEffect, memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();

  // Lock body scroll while mobile menu is open
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
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const menuItems = [
    {
      title: "Programmes",
      links: [
        { text: "All Programmes", href: "/programmes" },
        { text: "Early Years (Nursery–KG)", href: "/early-years" },
        { text: "Pre-Primary", href: "/pre-primary" },
        { text: "British Primary", href: "/british-primary" },
        { text: "Indian Primary", href: "/primary" },
        { text: "British Lower Secondary", href: "/british-lower-secondary" },
        { text: "Indian Middle School", href: "/middle" },
        { text: "IGCSE", href: "/igcse" },
        { text: "A Levels", href: "/a-levels" },
        { text: "NIOS Senior School", href: "/senior-school" },
        { text: "Special Education", href: "/special-education" },
      ],
    },
    {
      title: "Pathways",
      links: [
        { text: "British vs Indian Pathway", href: "/pathway" },
        { text: "Pearson Edexcel", href: "/edexcel-uk" },
        { text: "International GCSE", href: "/edexcel-international-gcse" },
        {
          text: "International A Level",
          href: "/edexcel-international-advanced-level",
        },
        { text: "NCF and Indian Pathway", href: "/ncf-india" },
        {
          text: "Computational Thinking and Coding",
          href: "/computational-thinking",
        },
        { text: "Habits of Mind", href: "/habits-of-mind" },
        { text: "Languages", href: "/languages" },
        { text: "FLOWW English and Maths", href: "/floww" },
        { text: "Learning Garage", href: "/learning-garage" },
        { text: "Music and Arts", href: "/music-arts" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { text: "How to Apply", href: "/apply-now" },
        { text: "Fees 2027–28", href: "/fees" },
        { text: "Who Should Register", href: "/who-should-register" },
        { text: "Class Timings", href: "/batch-timings" },
        { text: "What You Need at Home", href: "/essential-requirements" },
        { text: "Refer a Family", href: "/refer-a-parent" },
      ],
    },
    {
      title: "About",
      links: [
        { text: "About Edulectual K12", href: "/about" },
        { text: "Our Leaders", href: "/our-leaders" },
        { text: "Our Teachers", href: "/meet-our-academic-crew" },
        { text: "Mission, Vision and Values", href: "/values-and-ethos" },
        { text: "Why Choose Edulectual", href: "/what-sets-us-apart" },
        { text: "K12 Online School", href: "/k12-online-school" },
        { text: "Accreditation", href: "/affiliations-accreditation" },
      ],
    },
    {
      title: "Online Learning",
      links: [
        { text: "How Online School Works", href: "/how-it-works" },
        { text: "Why Online School", href: "/why-online-school" },
        { text: "Features and Technology", href: "/features" },
        { text: "Learning Culture", href: "/learning-culture" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "FAQs", href: "/faq" },
        { text: "Help and Support", href: "/help-and-support" },
        { text: "Prospectus and Downloads", href: "/resources-downloads" },
      ],
    },
  ];

  const simpleLinks = [
    { label: "Home", href: "/" },
    { label: "Fees", href: "/fees" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const closeMenus = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="ek-announce">
        <div className="ek-announce-inner">
          <p>
            Admissions for 2027–28 are open. Founding families save 25% when
            they enrol by 31 March 2027.
          </p>

          <Link to="/fees" className="ek-announce-link">
            View fees and offers
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className={`ek-navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="ek-navbar-container">

          {/* LOGO */}
          <Link to="/" className="ek-logo" aria-label="Edulectual K12 Home">
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
              onClick={closeMenus}
              className={`ek-nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>

            {menuItems.map((menu) => (
              <div
                className="ek-dropdown"
                key={menu.title}
                onMouseEnter={() => setActiveDropdown(menu.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`ek-nav-link ek-dropdown-trigger ${
                    activeDropdown === menu.title ? "active" : ""
                  }`}
                  onClick={() => toggleDropdown(menu.title)}
                  aria-expanded={activeDropdown === menu.title}
                >
                  <span>{menu.title}</span>
                  <ChevronDown
                    size={14}
                    className={`ek-chevron ${
                      activeDropdown === menu.title ? "rotated" : ""
                    }`}
                  />
                </button>

                {activeDropdown === menu.title && (
                  <div className="ek-dropdown-menu">
                    {menu.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="ek-dropdown-item"
                        onClick={closeMenus}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="ek-nav-cta">
            <Link to="/contact" className="ek-btn ek-btn-outline">
              Book a free 2-week trial
            </Link>

            <Link to="/apply-now" className="ek-btn ek-btn-primary">
              Apply for 2027–28
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="ek-mobile-toggle"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setActiveDropdown(null);
            }}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="ek-mobile-menu">
            <div className="ek-mobile-menu-inner">

              {/* QUICK LINKS */}
              <div className="ek-mobile-quicklinks">
                {simpleLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenus}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* MOBILE DROPDOWNS */}
              {menuItems.map((menu) => (
                <div className="ek-mobile-dropdown" key={menu.title}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(menu.title)}
                    className="ek-mobile-dropdown-trigger"
                    aria-expanded={activeDropdown === menu.title}
                  >
                    <span>{menu.title}</span>

                    <ChevronDown
                      size={18}
                      className={`ek-chevron ${
                        activeDropdown === menu.title ? "rotated" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === menu.title && (
                    <div className="ek-mobile-dropdown-content">
                      {menu.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={closeMenus}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* MOBILE CTA */}
              <div className="ek-mobile-cta">
                <Link
                  to="/contact"
                  className="ek-btn ek-btn-outline"
                  onClick={closeMenus}
                >
                  Book a free 2-week trial
                </Link>

                <Link
                  to="/apply-now"
                  className="ek-btn ek-btn-primary"
                  onClick={closeMenus}
                >
                  Apply for 2027–28
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;