"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from 'next/image';
// Import the new components
import MobileMenuToggle from "./Menu";
import CtaButton from "../Button";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [isProgramMenuOpen, setIsProgramMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);


  // Set header heights and manage scroll behavior
  useEffect(() => {
    const setHeaderHeights = () => {
      const header = document.getElementById("main-header");
      if (header) {
        const root = document.documentElement;
        root.style.setProperty("--header-height", `${header.offsetHeight}px`);
        document.body.style.paddingTop = "var(--header-height)";
      }
    };

    setHeaderHeights();
    window.addEventListener("resize", setHeaderHeights);

    return () => {
      window.removeEventListener("resize", setHeaderHeights);
    };
  }, []);

  // Scroll handler
  useEffect(() => {
    let lastScrollTop = 0;
    const scrollThreshold = 10;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.getElementById("main-header");
      const topBar = document.getElementById("top-info-bar");

      // Scroll progress indicator
      const scrollPercent =
        (scrollTop /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));

      // Hide/show top bar on scroll
      if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) return;

      if (
        scrollTop > lastScrollTop &&
        scrollTop > (topBar?.offsetHeight || 0)
      ) {
        header?.classList.add("nav-only");
        setIsScrolled(true);
      } else {
        header?.classList.remove("nav-only");
        setIsScrolled(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu functions
  const openMobileMenu = () => {
    setIsMenuAnimating(true);
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden");

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 700);
  };

  const closeMobileMenu = () => {
    setIsMenuAnimating(true);
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsMenuAnimating(false);
    }, 500);
  };

  const toggleProgramMenu = () => {
    setIsProgramMenuOpen(!isProgramMenuOpen);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Staggered animation for menu items
  useEffect(() => {
    if (isMenuOpen) {
      const menuItems = document.querySelectorAll(".mobile-nav-item");
      menuItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(30px)";
        setTimeout(() => {
          item.style.transition =
            "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, 200 + index * 50);
      });
    }
  }, [isMenuOpen]);

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <>
      {/* HEADER SECTION */}
      <header id="main-header" className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar for Contact and Social Media */}
        <div
          id="top-info-bar"
          className="bg-primary backdrop-blur-md transition-all duration-400"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-3 py-2 flex justify-between items-center text-base">
            <div className="flex items-center md:space-x-6 space-x-3">
              <a
                href="tel:+8801772523070"
                className="contact-link flex items-center space-x-2 text-soft-white hover:text-color-dark-pink transition-all duration-300 hover:translate-x-1"
                aria-label="Phone number"
              >
                <i className="fa-solid fa-phone"></i>
                <span className="hidden md:inline font-medium">
                  +880-1772-523070
                </span>
              </a>
              <a
                href="mailto:info@ikigaibd.com" 
                className="contact-link flex items-center space-x-2 text-soft-white hover:text-color-dark-pink transition-all duration-300 hover:translate-x-1"
                aria-label="Email address"
              >
                <i className="fas fa-envelope"></i>
                <span className="hidden md:inline font-medium">
                  info@ikigaibd.com
                </span>
              </a>
            </div>
            <div className="flex items-center md:space-x-4 space-x-2 text-soft-white">
              <a
                href="https://www.facebook.com/Ikigai121"
                aria-label="Facebook"
                className="social-icon  hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]
"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/ikigai_120/"
                aria-label="Instagram"
                className="social-icon  hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="social-icon hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@ikigaidaycarepre-school"
                aria-label="YouTube"
                className="social-icon hover:text-color-dark-pink transition-all duration-300 hover:scale-1.1 hover:-translate-y-[0.2px]"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          id="main-nav"
          className="px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-header-transparent transition-all duration-100"
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center h-16 md:h-20">
              <Link
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "#hero")}
                className="logo-container flex-shrink-0 flex items-center logo-float-animation group"
                aria-label="Ikigai Home"
              >
                <div className="relative h-16 w-80 flex items-center justify-center transition-all duration-150 group-hover:scale-105">
  <Image
    src="/images/ikigai.svg"
    alt="Ikigai daycare and preschool"
    fill
    className="object-contain"
  />
</div>

              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="#hero"
                  onClick={(e) => handleSmoothScroll(e, "#hero")}
                  className="nav-link active"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                  className="nav-link"
                >
                  About Us
                </Link>
                <div className="dropdown relative group">
                  <button
                    className="nav-link flex items-center cursor-pointer"
                    aria-haspopup="true"
                  >
                    Program
                    <i className="fas fa-chevron-down ml-2 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  </button>
                  <div className="dropdown-menu absolute top-full left-0 mt-3 min-w-[220px] frosted-card">
                    <Link
                      href="#programs"
                      onClick={(e) => handleSmoothScroll(e, "#programs")}
                      className="dropdown-item flex items-center px-5 py-3 text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2"
                    >
                      <i className="fas fa-baby mr-3 text-color-dark-pink"></i>Daycare
                    </Link>
                    <Link
                      href="#programs"
                      onClick={(e) => handleSmoothScroll(e, "#programs")}
                      className="dropdown-item flex items-center px-5 py-3 text-color-gray-dark hover:text-color-dark-purple hover:bg-pink-white transition-all duration-300 rounded-xl m-2"
                    >
                      <i className="fas fa-graduation-cap mr-3 text-color-dark-purple"></i>
                      Schooling
                    </Link>
                    <Link
                      href="#programs"
                      onClick={(e) => handleSmoothScroll(e, "#programs")}
                      className="dropdown-item flex items-center px-5 py-3 text-color-gray-dark hover:text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2"
                    >
                      <i className="fas fa-heart mr-3 text-color-dark-pink"></i>
                      Parenting Program
                    </Link>
                    <Link
                      href="#programs"
                      onClick={(e) => handleSmoothScroll(e, "#programs")}
                      className="dropdown-item flex items-center px-5 py-3 text-color-gray-dark hover:text-color-dark-pink hover:bg-pink-white transition-all duration-300 rounded-xl m-2"
                    >
                      <i className="fas fa-clock mr-3 text-blue-500"></i>Short
                      Program
                    </Link>
                  </div>
                </div>
                <Link
                  href="#curriculum"
                  onClick={(e) => handleSmoothScroll(e, "#curriculum")}
                  className="nav-link"
                >
                  Curriculum
                </Link>
                <Link
                  href="#articles"
                  onClick={(e) => handleSmoothScroll(e, "#articles")}
                  className="nav-link"
                >
                  Articles
                </Link>
                <Link
                  href="#activities"
                  onClick={(e) => handleSmoothScroll(e, "#activities")}
                  className="nav-link"
                >
                  Activity
                </Link>
              </div>

              {/* CTA and Mobile Menu Button */}
              <div className="flex items-center space-x-4 ">
                {/* Replaced CTA with the reusable component */}
                <div className="hidden sm:block ">
                  <CtaButton handleSmoothScroll={handleSmoothScroll} className="cta-button inline-block"> <i className="fas fa-star mr-2"></i> Admissions </CtaButton>
                </div>
                
                {/* Replaced Hamburger with the reusable component */}
                <MobileMenuToggle
                  isMenuOpen={isMenuOpen} 
                  openMobileMenu={openMobileMenu} 
                />
              </div>
            </div>
          </div>
          {/* Scroll Progress Indicator */}
          <div
            className="scroll-indicator h-1 bg-gradient-to-r from-pink-500 to-purple-600 z-[1000] transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] mobile-menu-container transition-all duration-500 ease-out ${
          isMenuOpen || isMenuAnimating
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-all duration-500 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`mobile-menu-panel relative z-50 h-full w-4/5 max-w-sm ml-auto transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isMenuOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95"
          } bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl shadow-2xl border-l border-light`}
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-light">
              <h2 className="font-bold text-xl text-color-gray-dark">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full text-color-gray-light hover:text-color-dark-pink hover:bg-pink-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="flex-grow p-4 space-y-2 overflow-y-auto">
              <Link
                href="#hero"
                onClick={(e) => {
                  handleSmoothScroll(e, "#hero");
                  closeMobileMenu();
                }}
                className="mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold text-color-dark-pink bg-pink-white"
              >
                <i className="fas fa-home mr-3"></i>Home
              </Link>
              <Link
                href="#about"
                onClick={(e) => {
                  handleSmoothScroll(e, "#about");
                  closeMobileMenu();
                }}
                className="mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold text-color-gray-dark hover:text-color-dark-pink"
              >
                <i className="fas fa-info-circle mr-3"></i>About Us
              </Link>
              <div>
                <button
                  onClick={toggleProgramMenu}
                  className="mobile-nav-item w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-semibold text-color-gray-dark hover:text-color-dark-pink"
                >
                  <span>
                    <i className="fas fa-graduation-cap mr-3"></i>Program
                  </span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                      isProgramMenuOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                <div
                  className={`${
                    isProgramMenuOpen ? "block" : "hidden"
                  } pl-8 mt-2 space-y-2`}
                >
                  <Link
                    href="#programs"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#programs");
                      closeMobileMenu();
                    }}
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-color-gray-light  hover:text-color-dark-pink hover:bg-pink-white transition-colors"
                  >
                    <i className="fas fa-baby mr-3 text-color-dark-pink"></i>Daycare
                  </Link>
                  <Link
                    href="#programs"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#programs");
                      closeMobileMenu();
                    }}
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-color-gray-light  hover:text-color-dark-pink hover:bg-pink-white transition-colors"
                  >
                    <i className="fas fa-book mr-3 bg-color-dark-purple"></i>Schooling
                  </Link>
                  <Link
                    href="#programs"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#programs");
                      closeMobileMenu();
                    }}
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-color-gray-light hover:text-color-dark-pink hover:bg-pink-white transition-colors"
                  >
                    <i className="fas fa-heart mr-3"></i>Parenting Program
                  </Link>
                  <Link
                    href="#programs"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#programs");
                      closeMobileMenu();
                    }}
                    className="block px-4 py-2 rounded-xl text-sm font-medium text-color-gray-light hover:text-color-dark-pink hover:bg-pink-white transition-colors"
                  >
                    <i className="fas fa-clock mr-3"></i>Short Program
                  </Link>
                </div>
              </div>
              <Link
                href="#curriculum"
                onClick={(e) => {
                  handleSmoothScroll(e, "#curriculum");
                  closeMobileMenu();
                }}
                className="mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold text-color-gray-dark hover:text-color-dark-pink"
              >
                <i className="fas fa-list mr-3"></i>Curriculum
              </Link>
              <Link
                href="#articles"
                onClick={(e) => {
                  handleSmoothScroll(e, "#articles");
                  closeMobileMenu();
                }}
                className="mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold text-color-gray-dark hover:text-color-dark-pink"
              >
                <i className="fas fa-newspaper mr-3"></i>Articles
              </Link>
              <Link
                href="#activity"
                onClick={(e) => {
                  handleSmoothScroll(e, "#activity");
                  closeMobileMenu();
                }}
                className="mobile-nav-item block px-4 py-3 rounded-xl text-base font-semibold text-color-gray-dark hover:text-color-dark-pink"
              >
                <i className="fas fa-play mr-3"></i>Activity
              </Link>
            </div>
            <div className="p-6 border-t border-light">
              {/* Replaced CTA with the reusable component */}
              <CtaButton
                handleSmoothScroll={(e) => {
                  handleSmoothScroll(e, "#contact");
                  closeMobileMenu();
                }}
                className="w-full text-center block cta-button " 
              > Admissions </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;