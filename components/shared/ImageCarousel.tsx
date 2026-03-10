"use client";

import { useState, useEffect, useRef } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  overlayOpacity?: string;
}

export function ImageCarousel({ 
  images, 
  interval = 5000, 
  className = "",
  overlayOpacity = "bg-black/80" 
}: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 ${className} overflow-hidden`}>
      {images.map((image, index) => (
        <div key={image} className={`absolute inset-0 overflow-hidden ${
          index === currentImage 
            ? 'translate-y-0 opacity-100 z-10' 
            : 'translate-y-full opacity-0 z-0'
        }`}>
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
    </div>
  );
}
