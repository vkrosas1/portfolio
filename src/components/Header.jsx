import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { UserData } from "../data/UserData";
import "../styles/Header.css";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { resumeUrl } = UserData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`header-container ${isScrolling ? "sticky" : ""}`}
      role="banner"
    >
      <nav className="nav-hidden-lg-block">
        <div className="div-cursor-pointer">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            to="Home-section"
          >
            <a
              tabIndex="0"
              href="#home"
              className={
                activeSection === "Home-section" ? "active" : "web-link"
              }
              aria-label="Navigate to the Home section"
            >
              Home
            </a>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="About-section"
          >
            <a
              tabIndex="0"
              href="#about"
              className={
                activeSection === "About-section" ? "active" : "web-link"
              }
              aria-label="Navigate to the About section"
            >
              About
            </a>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact-section"
          >
            <a
              tabIndex="0"
              href="#contact"
              className={
                activeSection === "Contact-section" ? "active" : "web-link"
              }
              aria-label="Navigate to the Contact section"
            >
              Contact
            </a>
          </Link>
          <div>
            <button
              tabIndex="0"
              onClick={() => {
                window.open(resumeUrl);
              }}
              className="resume-button"
              aria-label="Open resume in a new tab"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      <div className="block-lg-hidden">
        {" "}
        {/* Show on small screens */}
        <button className="button-menu_small-screen" onClick={toggleMobileMenu}>
          <CgMenuRight size={32} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className="nav-mobile-menu"
          role="navigation"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className={`navbar-bg__mobile`}>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
            >
              <a
                className={
                  activeSection === "Home-section"
                    ? "active-mobile"
                    : "mobile-link"
                }
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
            >
              <a
                className={
                  activeSection === "About-section"
                    ? "active-mobile"
                    : "mobile-link"
                }
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
            >
              <a
                className={
                  activeSection === "Contact-section"
                    ? "active-mobile"
                    : "mobile-link"
                }
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </Link>
            <div>
              <button
                onClick={() => {
                  window.open(resumeUrl);
                }}
                className="resume-button__mobile"
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
