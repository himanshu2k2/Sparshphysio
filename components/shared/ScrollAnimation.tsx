"use client";

import { useEffect, useRef, useState } from "react";

export type AnimationType =
  | "fade-in-up"
  | "fade-in-down"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-up"
  | "rotate-in"
  | "slide-up"
  | "zoom-in";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  duration?: number;
}

export function ScrollAnimation({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.1,
  duration = 0.8
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={`${className} transition-all ${isVisible ? animationClass : "opacity-0"}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
}
