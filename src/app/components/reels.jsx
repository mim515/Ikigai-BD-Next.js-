import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Heart, Share2 } from "lucide-react";

const ReelCard = ({ src, title, description }) => {
  return (
    <div className="relative group flex-shrink-0 snap-center">
      <div className="w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
        <iframe
          src={src}
          width="280"
          height="500"
          scrolling="yes"
          frameBorder="0"
          allow="autoplay; "
          className="w-full h-full object-cover"
          title={title}
        ></iframe>

        <div className="absolute inset-x-0 bottom-0 h-36 from-black/80 to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white pointer-events-none">
          <div>
            <p className="font-semibold text-lg drop-shadow-lg">{title}</p>
            <div className="flex items-center text-xs text-gray-200 drop-shadow-md mt-1">
              <Play className="w-3 h-3 mr-1" />
              {description}
            </div>
          </div>
          <div className="flex flex-col space-y-3 pointer-events-auto opacity-70 group-hover:opacity-100 transition-opacity">
            <Heart className="w-5 h-5 cursor-pointer hover:fill-red-500 hover:text-red-500" />
            <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ReelsSection = () => {
  const scrollRef = useRef(null);
  const [reelsData, setReelsData] = useState([]);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const CARD_WIDTH = 280;
  const GAP = 24;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/data/videos.json");
        const data = await res.json();
        setReelsData(data.filter((video) => video.featured === true));
      } catch (err) {
        console.error("Failed to fetch videos.json", err);
      }
    };
    fetchVideos();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = CARD_WIDTH + GAP;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 5);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;
    checkScrollPosition();
    ref.addEventListener("scroll", checkScrollPosition);
    return () => ref.removeEventListener("scroll", checkScrollPosition);
  }, [reelsData]);

  return (
    <div className="section-container">
      <div className="relative group/carousel">
        {showLeftBtn && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none px-4"
        >
          {reelsData.map((reel) => (
            <ReelCard key={reel.id} {...reel} />
          ))}
        </div>

        {showRightBtn && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl border border-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <p className="md:hidden text-center text-sm text-gray-500 mt-2">
          Swipe to see more reels.
        </p>
      </div>
    </div>
  );
};

const Reel = () => {
  return (
    <div className="section-padding bg-white-50 items-center">
      <div className="section-container">
        <div className="section-heading">
          <h2>
            <span> Engage with Video Content</span>
          </h2>
          <p>
            Seamlessly integrate social media highlights directly into your
            website using a responsive, manual slider carousel.
          </p>
        </div>

        <ReelsSection />

        <div className="text-center mt-10">
          <a
            href="#"
            className="btn-neumorphic border-animated inline-flex items-center color-dark-pink"
          >
            View More Reels
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reel;