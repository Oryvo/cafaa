'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/slider_images/front.jpeg', alt: 'CAFAA Main' },
  { src: '/slider_images/WhatsApp Image 2026-03-02 at 3.24.28 AM (1).jpeg', alt: 'CAFAA Image 1' },
  { src: '/slider_images/WhatsApp Image 2026-03-02 at 3.24.29 AM (1).jpeg', alt: 'CAFAA Image 2' },
  { src: '/slider_images/WhatsApp Image 2026-03-02 at 3.24.29 AM.jpeg', alt: 'CAFAA Image 3' },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false);
              setCurrent(index);
            }}
            aria-label={`Go to image ${index + 1}`}
            className={`w-2 h-2 rounded-full transition ${
              index === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
