"use client";

import { useState, useEffect, useRef } from "react";

interface ImageCarouselProps {
  interval?: number;
  className?: string;
  overlayOpacity?: string;
  kenBurns?: boolean;
  images?: string[];
}

export function ImageCarousel({
  interval = 5000,
  className = "",
  overlayOpacity = "bg-black/80",
  kenBurns = true
}: ImageCarouselProps) {

  const images = [
    "/one.jpg",
    "/two.png",
    "/five.webp"
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % images.length;
        setNextImage((next + 1) % images.length);
        return next;
      });
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 ${className} overflow-hidden pointer-events-none`}>
      {images.map((image, index) => {
        const isActive = index === currentImage;
        const isPrevious = index === (currentImage - 1 + images.length) % images.length;

        return (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              isActive
                ? 'opacity-100 z-10 scale-100'
                : isPrevious
                ? 'opacity-0 z-5 scale-105'
                : 'opacity-0 z-0 scale-95'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${
                  kenBurns && isActive ? 'animate-kenburns' : ''
                }`}
              />
            </div>
            <div className={`absolute inset-0 ${overlayOpacity} transition-opacity duration-1000`} />
          </div>
        );
      })}
    </div>
  );
}
