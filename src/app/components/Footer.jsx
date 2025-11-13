import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer text-color-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Ikigai Info */}
          <div>
            <h3 className="text-2xl font-bold  mb-6 flex items-center color-dark-pink ">
              <i className="fas fa-heart mr-2"></i> Ikigai Daycare & Preschool
            </h3>
            <p className="text-sm mb-4 soft-white">
              Nurturing joy and curiosity in every child through playful
              learning and discovery in a safe, loving environment.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-sm">
                <i className="fas fa-map-marker-alt color-yellow mr-2"></i>
                Dhaka, Bangladesh
              </p>
              <p className="flex items-center text-sm">
                <i className="fas fa-phone-alt color-yellow mr-2"></i>
                <a
                  href="tel:+8801772523070"
                  className="hover:color-yellow transition-colors duration-300"
                >
                  +880-1772-523070
                </a>
              </p>
              <p className="flex items-center text-sm">
                <i className="fas fa-envelope color-yellow mr-2"></i>
                <a
                  href="mailto:info@ikigaibd.com"
                  className="hover:color-yellow transition-colors duration-300"
                >
                  info@ikigaibd.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold color-dark-pink  mb-6 flex items-center">
              <i className="fas fa-link mr-2"></i> Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-info-circle mr-2"></i> About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-graduation-cap mr-2"></i> Programs
                </a>
              </li>
              <li>
                <a
                  href="#activity"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-palette mr-2"></i> Activities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i> Contact
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-2xl font-bold color-dark-pink  mb-6 flex items-center">
              <i className="fas fa-star mr-2"></i> Our Programs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#programs"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-baby mr-2"></i> Daycare (6m - 2y)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-child mr-2"></i> Preschool (2y - 5y)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-users mr-2"></i> Parenting Support
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:color-yellow transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-clock mr-2"></i> Short Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-2xl font-bold color-dark-pink  mb-6 flex items-center">
              <i className="fas fa-share-alt mr-2"></i> Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/Ikigai121"
                target="_blank"
                rel="noreferrer"
                className="social-icon text-[var(--color-white)] haptic-feedback"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/ikigai_120/"
                target="_blank"
                rel="noreferrer"
                className="social-icon text-[var(--color-white)] haptic-feedback"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="social-icon text-[var(--color-white)] haptic-feedback"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@ikigaidaycarepre-school"
                target="_blank"
                rel="noreferrer"
                className="social-icon text-[var(--color-white)] haptic-feedback"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold color-yellow mb-4 flex items-center">
                <i className="fas fa-newspaper mr-2"></i> Stay Updated
              </h4>
              <p className="text-sm mb-4 text-gray-300">
                Get updates about our programs and activities.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-lg bg-white/10 text-[var(--color-white)] placeholder-gray-300 border border-white/20 focus:outline-none focus:border-ikigai-yellow transition-colors duration-300"
                />
                <button
  type="submit"
  className="p-3 cursor-pointer bg-dark-pink text-white rounded-lg font-semibold hover:hover-bg-light-yellow hover:text-ikigai-blue-deep transition-colors duration-300 haptic-feedback"
>
  <i className="fas fa-paper-plane mr-2"></i> Subscribe
</button>

              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              &copy; 2025 Ikigai Daycare & Preschool. All Rights Reserved.
              <span className="ml-2">
                <i className="fas fa-heart color-dark-pink "></i>
              </span>
            </p>
            <div className="text-sm text-gray-300">
              Developed with{" "}
              <i className="fas fa-heart color-dark-pink  mx-1"></i> by
              <a
                href="https://brainicontech.com"
                target="_blank"
                rel="noreferrer"
                className="text-brainicon-cyan hover:text-[var(--color-white)] transition-colors duration-300 ml-1"
              >
                Brainicon Technology
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
