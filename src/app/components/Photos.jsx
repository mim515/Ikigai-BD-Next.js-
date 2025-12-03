'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- GALLERY ITEM COMPONENT ---
const GalleryItem = ({ image }) => {
  // Map "height" to number of rows in the Masonry grid
  const gridRowSpan = image.height === 'tall' ? 40 : image.height === 'medium' ? 30 : 20;

  // Featured styling
  const borderClasses = image.featured
    ? 'ring-4 ring-pink-500/70 shadow-2xl transition-all duration-300 transform hover:scale-[1.01]'
    : 'ring-1 ring-gray-300 hover:ring-2 hover:ring-gray-400';

  return (
    <div
      className={`relative  overflow-hidden rounded-lg cursor-pointer group bg-gray-900`}
      style={{ gridRowEnd: `span ${gridRowSpan}` }}
    >
      {image.src ? (
        <div className="relative w-full h-full">
          <Image
            src={image.src || '/images/placeholder.jpg'} // fallback to placeholder
            alt={image.alt || 'Photo'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition duration-500 ease-in-out group-hover:opacity-80 ${borderClasses}`}
          />
        </div>
      ) : (
        <div className="w-full h-full  flex items-center justify-center text-gray-600">
          No Image
        </div>
      )}

      {/* Overlay: Heart & Menu */}
      <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start text-white bg-gradient-to-b from-black/50 to-transparent">
        <span className={`text-xl ${image.featured ? 'text-pink-500' : 'text-white/70'} hover:text-red-400 transition`}>
          {image.featured ? '❤️' : '🤍'}
        </span>
        
      </div> 
    </div>
  );
};

// --- MAIN GALLERY PAGE ---
export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch JSON from public folder
        const res = await fetch('/data/photos.json');
        if (!res.ok) throw new Error('Failed to fetch photos.json');

        const data = await res.json();
        // Filter out entries with empty src
        setImages(data.filter(img => img.src && img.src.trim() !== ''));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white-50 section-padding">
      <div className="section-container">
        <div className="section-heading ">
          <h2 className="">
            <span>The Art of Moments</span>
          </h2>
          <p className="">
            A gallery that turns ordinary moments into art. Featured images draw focus to the highlights, while the complete collection tells a richer story.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <span className="text-lg text-gray-700">Loading Images...</span>
          </div>
        ) : (
          <div
            className="grid gap-4 justify-center"
            style={{ 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              
            }}
          >
            {images.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
