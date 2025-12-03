"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Tiny 1x1 base64 placeholder
const blurPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAokB9UD0L3UAAAAASUVORK5CYII=";

const GridImage = ({ src, content, onClick }) => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div
      className="group overflow-hidden relative h-full w-full cursor-pointer  bg-gray-800 "
      onClick={onClick}
    >
      <Image
        src={src}
        alt={content?.title || "Grid content"}
        fill
        priority={true}
        placeholder="empty"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover object-center transition-opacity  duration-700 hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          console.error("Failed to load image:", src);
        }}
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-sm md:text-lg mb-4 font-bold text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {content?.title}
        </h3>
      </div>
    </div>
  );
};

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="relative w-auto h-auto max-h-[50vh] max-w-[60vw] lg:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Expanded view"
          width={960}
          height={540}
          placeholder="blur"
          blurDataURL={blurPlaceholder}
          className="object-contain w-auto h-auto max-h-[50vh] max-w-[60vw] transform transition-transform duration-200 hover:scale-105 opacity-100"
        />
      </div>
    </div>
  );
};

const ComplexImageGrid = ({ images, onImageClick, idPrefix }) => (
  <div
    className="grid flex-shrink-0 grid-cols-5 grid-rows-2 h-[250px] md:h-[400px]"
    style={{ width: "min(140vw, 1200px)" }}
    aria-label={`Image grid ${idPrefix}`}
  >
    {images.slice(0, 27).map((img, idx) => (
      <div
        key={idx}
        className={`${
          idx === 0
            ? "col-span-1 row-span-2"
            : idx === 3
            ? "col-span-2 row-span-1"
            : idx === 8
            ? "col-span-1 row-span-2"
            : "col-span-1 row-span-1"
        }`}
      >
        <GridImage
          src={img.src}
          content={img}
          onClick={() => onImageClick(img.src)}
        />
      </div>
    ))}
  </div>
);

const InfiniteImageGridSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [gridImages, setGridImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/data/photos.json");
        const data = await response.json();

        // Filter only featured images
        const featuredImages = data.filter((photo) => photo.featured === true);

        // Map to expected format
        const formattedImages = featuredImages.map((photo) => ({
          src: photo.image || photo.src,
          title: photo.title,
        }));

        setGridImages(formattedImages);
        setLoading(false);
      } catch (error) {
        console.error("Error loading photos:", error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleImageClick = (src) => setSelectedImage(src);
  const handleCloseModal = () => setSelectedImage(null);

  if (loading) return <p className="text-center py-10">Loading gallery...</p>;
  if (gridImages.length === 0)
    return <p className="text-center py-10">No featured photos available.</p>;

  const gridBlock1 = gridImages.slice(0, 9);
  const gridBlock2 = gridImages.slice(9, 18);

  // Fill if less than 9 images
  while (gridBlock1.length < 9)
    gridBlock1.push(...gridImages.slice(0, 9 - gridBlock1.length));
  while (gridBlock2.length < 9 && gridImages.length > 1)
    gridBlock2.push(...gridImages.slice(0, 9 - gridBlock2.length));

  return (
    <div className="w-full section-padding bg-white-10">
      <div data-aos="fade-up" className="section-heading">
        <h2>
          <span>Kids Activity Gallery</span>
          <p className="font-semibold pt-2">
            Capturing joyful moments of learning, play, and creativity at Ikigai
            Daycare & Preschool.
          </p>
        </h2>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        role="region"
        aria-label="Infinite scrolling image gallery"
      >
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          <ComplexImageGrid
            images={gridBlock1}
            onImageClick={handleImageClick}
            idPrefix="grid-1"
          />
          <ComplexImageGrid
            images={gridBlock2}
            onImageClick={handleImageClick}
            idPrefix="grid-2"
          />
          <ComplexImageGrid
            images={gridBlock1}
            onImageClick={handleImageClick}
            idPrefix="grid-3"
          />
          <ComplexImageGrid
            images={gridBlock2}
            onImageClick={handleImageClick}
            idPrefix="grid-4"
          />
        </div>
      </div>

      <ImageModal src={selectedImage} onClose={handleCloseModal} />

      <div className="section-container text-center mt-10">
        <a
          href="#"
          className="btn-neumorphic border-animated inline-flex items-center color-dark-pink"
        >
          View More Moments
        </a>
      </div>
    </div>
  );
};

export default function Gallery() {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex items-center justify-center font-sans overflow-x-hidden"
    >
      <InfiniteImageGridSlider />
    </div>
  );
}
