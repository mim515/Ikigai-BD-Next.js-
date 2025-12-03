"use client";

import React, { useState, useEffect } from "react";

// --- REELS ITEM COMPONENT ---
const ReelsItem = ({ reel }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer group bg-gray-900`}
    >
      {/* Heart Overlay */}
      <div className="absolute top-2 left-2 text-xl z-10">
        {reel.featured ? "❤️" : "🤍"}
      </div>

      {reel.src ? (
        <div className="relative w-full aspect-[9/16]">
  <iframe
    src={reel.src}
    title={reel.title || "Facebook Video Reel"}
    className="absolute top-0 left-0 w-full h-full"
    frameBorder="0"
    allowFullScreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  />
</div>
      ) : (
        <div className="w-full h-64 bg-red-800 flex items-center justify-center text-white">
          No Reel Source
        </div>
      )}

      {/* Overlay: Title and Views */}
      <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col text-white bg-gradient-to-t from-black/70 to-transparent">
        <span className="text-sm font-semibold truncate">{reel.title}</span>
        <span className="text-xs text-gray-300">👁️ {reel.views}</span>
      </div>
    </div>
  );
};

// --- MAIN REELS PAGE ---
export default function ReelsPage() {
  const [reels, setReels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/data/videos.json");
        if (!res.ok) throw new Error("Failed to fetch videos.json");

        const data = await res.json();
        setReels(data.filter((reel) => reel.src && reel.src.trim() !== ""));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reels:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white-50 section-padding">
      <div className="section-container">
        <div className="section-heading">
          <h2>
            <span>Trending Reels & Highlights</span>
          </h2>
          <p>
            Watch our latest and most popular video reels. Featured videos are
            highlighted with a red heart.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <span className="text-lg text-gray-700">Loading Reels...</span>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reels.map((reel) => (
              <ReelsItem key={reel.id} reel={reel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
