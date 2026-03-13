"use client";

import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-teal-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-teal-600 rounded-full animate-spin"></div>
            </div>
            <div className="text-blue-900 font-['DM_Sans'] font-semibold text-lg animate-pulse">
              Loading...
            </div>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
