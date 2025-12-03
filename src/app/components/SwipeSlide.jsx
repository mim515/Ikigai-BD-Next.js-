"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsData = [
  {
    name: "Aisha K.",
    role: "Parent of a 4-year-old",
    quote:
      "Ikigai has been a wonderful second home for our child. The teachers are so caring and attentive, and we've seen incredible growth in their confidence and learning.",
    imgSrc: "/images/img_4215.jpg",
    alt: "Parent Aisha K.",
  },
  {
    name: "Rohan M.",
    role: "Parent of a 3-year-old",
    quote:
      "The play-based learning at Ikigai is fantastic! Our son going to school every day and is always excited to share what he's learned. The environment is so positive.",
    imgSrc: "/images/img_7331.jpg",
    alt: "Parent Rohan M.",
  },
  {
    name: "Farzana L.",
    role: "Parent of a 2-year-old",
    quote:
      "We are so grateful for the team at Ikigai. The is excellent, the facilities are inviting, and most importantly, our daughter is happy and learning so much!",
    imgSrc: "/images/img_7853.jpg",
    alt: "Parent Farzana L.",
  },
  {
    name: "David P.",
    role: "Parent of a 5-year-old",
    quote:
      "The pre-K program prepared our son perfectly for kindergarten. The balance of play and academics is just right. The staff truly cares about each child's development.",
    imgSrc: "/images/play.jpg",
    alt: "Parent David P.",
  },
];

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <div className="relative">
      {/* Custom Arrows */}
      <button
        ref={prevRef}
        className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full bg-blue-300/50 shadow-md flex items-center justify-center cursor-pointer"
      >
        <i className="fa-solid fa-arrow-left text-xl md:text-2xl text-black"></i>
      </button>
      <button
        ref={nextRef}
        className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full bg-blue-300/50 shadow-md flex items-center justify-center cursor-pointer"
      >
        <i className="fa-solid fa-arrow-right text-xl md:text-2xl text-black"></i>
      </button>

      {loaded && (
        <>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = nextRef.current;
              swiper.params.navigation.nextEl = prevRef.current;
            }}
            navigation={{ prevEl: nextRef.current, nextEl: prevRef.current }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {testimonialsData.map(
              ({ name, role, quote, imgSrc, alt }, index) => (
                <SwiperSlide key={index}>
                  <div className="py-8 flex justify-center">
                    <div className="rounded-3xl neumorphic-gradient-card-green bg-opacity-10 shadow-md flex flex-col items-center justify-between min-h-[400px] card-padding">
                      <i className="fa-solid fa-quote-left w-10 h-10 color-dark-pink text-3xl mb-2"></i>
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={imgSrc}
                          alt={alt}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                          priority={index < 2} // prioritize first two slides
                          sizes="(max-width: 768px) 100vw, 128px"
                          placeholder="empty" // optional: adds a blur effect while loading
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-lg color-blue-h1">
                          {name}
                        </h3>
                        <small className="text-sm color-dark-pink font-medium">
                          {role}
                        </small>
                        <p className="text-sm mt-2 color-gray-dark">{quote}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* Pagination below slides */}
          <div className="custom-pagination mt-4 flex justify-center"></div>
        </>
      )}
    </div>
  );
}
