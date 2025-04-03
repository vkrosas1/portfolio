import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { UserData } from "../data/UserData";
// import logo from "../Assets/images/logor.png";
import "../styles/Header.css"; // Make sure to import your CSS file for styling

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
    <header className={`header-container ${isScrolling ? "sticky" : ""}`}>
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
            <p
              className={
                activeSection === "Home-section" ? "active" : "text-white"
              }
            >
              Home
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="About-section"
          >
            <p
              className={
                activeSection === "About-section" ? "active" : "text-white"
              }
            >
              About
            </p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact-section"
          >
            <p
              className={
                activeSection === "Contact-section" ? "active" : "text-white"
              }
            >
              Contact
            </p>
          </Link>
          <div>
            <button
              onClick={() => {
                window.open(resumeUrl);
              }}
              className="resume-button"
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
          <CgMenuRight size={32} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="nav-mobile-menu">
          <div className={`navbar-bg__mobile`}>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
            >
              <p
                className={
                  activeSection === "Home-section"
                    ? "active-mobile"
                    : "mobile-link"
                }
                onClick={toggleMobileMenu}
              >
                Home
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
            >
              <p
                className={
                  activeSection === "About-section"
                    ? "active-mobile"
                    : "mobile-link"
                }
                onClick={toggleMobileMenu}
              >
                About
              </p>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
            >
              <p
                className={
                  activeSection === "Contact-section"
                    ? "active-mobile"
                    : "mobile-link"
                }
                onClick={toggleMobileMenu}
              >
                Contact
              </p>
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
