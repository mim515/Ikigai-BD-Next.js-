import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-ikigai-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-ikigai-blue-deep mb-4 animate-slide-up">
            Happy Families, Thriving Children
          </h2>
          <p className="text-lg text-ikigai-blue-deep opacity-90 max-w-3xl mx-auto animate-fade-in">
            Hear what parents have to say about their experience with Ikigai
            Daycare & Preschool.
          </p>
        </div>
        <div className="relative" role="region" aria-label="Testimonials carousel">
          <div id="testimonialCarousel" className="overflow-hidden" aria-live="polite">
            <div className="flex" id="carouselSlides" role="group" aria-label="Testimonials">
              <div
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4 carousel-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="Testimonial 1"
              >
                <div className="glass p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://placehold.co/60x60/78C0E0/FFFFFF?text=AK"
                      alt="Parent Aisha K."
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-ikigai-gray-dark">
                        Aisha K.
                      </h4>
                      <p className="text-sm text-ikigai-gray">
                        Parent of a 4-year-old
                      </p>
                    </div>
                  </div>
                  <p className="text-ikigai-gray italic">
                    "Ikigai has been a wonderful second home for our child.
                    The teachers are so caring and attentive, and we've seen
                    incredible growth in their confidence and learning. Highly
                    recommend!"
                  </p>
                </div>
              </div>
              <div
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4 carousel-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="Testimonial 2"
              >
                <div className="glass p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://placehold.co/60x60/A0D2DB/1A3A4A?text=RM"
                      alt="Parent Rohan M."
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-ikigai-gray-dark">
                        Rohan M.
                      </h4>
                      <p className="text-sm text-ikigai-gray">
                        Parent of a 3-year-old
                      </p>
                    </div>
                  </div>
                  <p className="text-ikigai-gray italic">
                    "The play-based learning approach at Ikigai is fantastic!
                    Our son loves going to school every day and is always
                    excited to share what he's learned. The environment is so
                    positive."
                  </p>
                </div>
              </div>
              <div
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4 carousel-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="Testimonial 3"
              >
                <div className="glass p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://placehold.co/60x60/5DA9C7/FFFFFF?text=FL"
                      alt="Parent Farzana L."
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-ikigai-gray-dark">
                        Farzana L.
                      </h4>
                      <p className="text-sm text-ikigai-gray">
                        Parent of a 2-year-old
                      </p>
                    </div>
                  </div>
                  <p className="text-ikigai-gray italic">
                    "We are so grateful for the team at Ikigai. The
                    communication is excellent, the facilities are clean and
                    inviting, and most importantly, our daughter is happy and
                    learning so much!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            id="prevTestimonial"
            className="absolute left-0 sm:left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-ikigai-blue text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-ikigai-blue-deep transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ikigai-blue-deep z-10"
            aria-label="Previous testimonial"
            aria-controls="carouselSlides"
          >
            <i className="fas fa-chevron-left fa-fw"></i>
          </button>
          <button
            id="nextTestimonial"
            className="absolute right-0 sm:right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-ikigai-blue text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-ikigai-blue-deep transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ikigai-blue-deep z-10"
            aria-label="Next testimonial"
            aria-controls="carouselSlides"
          >
            <i className="fas fa-chevron-right fa-fw"></i>
          </button>
          <div
            className="flex justify-center mt-6 space-x-2"
            role="tablist"
            aria-label="Carousel navigation dots"
          >
            <button
              className="w-3 h-3 rounded-full bg-ikigai-blue-light hover:bg-ikigai-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ikigai-blue carousel-dot"
              aria-label="Go to testimonial 1"
              data-slide="0"
              role="tab"
              aria-selected="true"
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-ikigai-blue-light hover:bg-ikigai-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ikigai-blue carousel-dot"
              aria-label="Go to testimonial 2"
              data-slide="1"
              role="tab"
              aria-selected="false"
            ></button>
            <button
              className="w-3 h-3 rounded-full bg-ikigai-blue-light hover:bg-ikigai-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ikigai-blue carousel-dot"
              aria-label="Go to testimonial 3"
              data-slide="2"
              role="tab"
              aria-selected="false"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
