import React from "react";
import Image from "next/image";
import CtaButton from "./Button";

// Reusable Icon for the arrow
const ArrowIcon = () => (
  <svg
    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

// Individual Activity Card Component
const ActivityCard = ({
  image,
  category,
  bgColor,
  date,
  title,
  description,
}) => {
  return (
    <div className="group transform cursor-pointer overflow-hidden activity-card">
      <div className="overflow-hidden">
        <div className="group h-60 w-full overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized={true}
          />
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-color-white  ${bgColor}`}
          >
            {category}
          </span>
          <span className="text-sm font-medium color-p-blue">{date}</span>
        </div>
        <h3 className="mb-3 text-2xl font-bold color-blue-h1">{title}</h3>
        <p className="mb-6 color-p-blue">{description}</p>
        <a
          href="#"
          className="font-semibold transition-colors duration-300 color-dark-purple"
        >
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

// Main Activities Section Component
const HomeActivity = () => {
  const activitiesData = [
    {
      image: "https://i.ibb.co.com/4Zs0g6vH/Hero.jpg",
      category: "Art & Craft",
      bgColor: "bg-purple-500",
      date: "Sep 28, 2025",
      title: "Splashes of Joy",
      description:
        "Our little artists explored a world of color, creating masterpieces with their hands and hearts.",
    },
    {
      image: "https://i.ibb.co.com/1c6gvT7/parenting-program03.jpg",
      category: "Event",
      bgColor: "bg-pink-500",
      date: "Sep 15, 2025",
      title: "Annual Sports Gala",
      description:
        "A day filled with laughter, friendly competition, and amazing displays of teamwork and sportsmanship.",
    },
    {
      image: "https://i.ibb.co.com/fGqcCWbm/nature.webp",
      category: "Outdoor Fun",
      bgColor: "bg-emerald-500",
      date: "Aug 22, 2025",
      title: "Exploring Nature's Wonders",
      description:
        "We went on an adventure to the local park, discovering fascinating plants, insects, and the beauty around us.",
    },
  ];

  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-white-50 section-padding"
    >
      <div className="absolute inset-0 bg-white-10  backdrop-blur-sm"></div>
      <div className="relative section-container">
        {/* Section Header */}
        <div className="section-heading">
          <h2>
            <span>
            Activities & Latest News
            </span>
          </h2>
          <p>Discover the vibrant and enriching experiences that make every day at Ikigai joyful and educational. Stay updated with our latest activities, events, and stories that inspire curiosity and learning in young minds.</p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {activitiesData.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-20 text-center block">
          <a
            href="#gallery"
            className="group cta-button inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-[7px_7px_15px_#bec3c9,-7px_-7px_15px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_10px_#bec3c9,-4px_-4px_10px_#ffffff] active:shadow-[inset_7px_7px_15px_#bec3c9,inset_-7px_-7px_15px_#ffffff]"
          >
            <span>View Our Activity</span>
           <ArrowIcon />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default HomeActivity;
