"use client";

import { useEffect, useRef, useState } from "react";
import { AnimationType } from "./ScrollAnimation";

interface StaggerAnimationProps {
  children: React.ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
  threshold?: number;
}

export function StaggerAnimation({
  children,
  animation = "fade-in-up",
  staggerDelay = 100,
  className = "",
  itemClassName = "",
  threshold = 0.1
}: StaggerAnimationProps) {
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
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${itemClassName} transition-all ${isVisible ? animationClass : "opacity-0"}`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
            transitionDuration: "0.8s"
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
