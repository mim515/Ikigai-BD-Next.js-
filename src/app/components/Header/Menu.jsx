import React from "react";

const MobileMenuToggle = ({ isMenuOpen, openMobileMenu }) => {

  
  return (
    
    <button
      onClick={openMobileMenu}
      className={`xl:hidden hamburger relative w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 ${
        isMenuOpen ? "open" : ""
      }`}
      aria-controls="mobile-menu"
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      {/* Hamburger Line 1 */}
      <div
        className={`hamburger-line absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-400 ${
          isMenuOpen
            ? "top-1/2 -translate-y-1/2 rotate-45"
            : "top-0.5"
        }`}
      ></div>
      {/* Hamburger Line 2 (Middle) */}
      <div
        className={`hamburger-line absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-400 ${
          isMenuOpen
            ? "opacity-0 scale-x-0"
            : "top-1/2 -translate-y-1/2"
        }`}
      ></div>
      {/* Hamburger Line 3 */}
      <div
        className={`hamburger-line absolute w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-400 ${
          isMenuOpen
            ? "bottom-1/2 translate-y-1/2 -rotate-45"
            : "bottom-0.5"
        }`}
      ></div>
    </button>
  );
};

export default MobileMenuToggle;