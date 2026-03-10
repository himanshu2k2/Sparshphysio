"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/shared/Icon";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/services", label: "Services" },
    { id: "/about", label: "About" },
    { id: "/reviews", label: "Reviews" },
    { id: "/pricing", label: "Pricing" },
    { id: "/faq", label: "FAQ" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(250,247,242,0.95)] backdrop-blur-[12px] border-b border-black/10">
        <div className={`${scrolled ? 'hidden' : 'block'} flex items-center justify-between bg-[#A0D585] text-black text-center px-4 py-2 font-['DM_Sans'] text-sm font-semibold w-[full]`}>
          <span className="px-16"> ₹ Pay here</span>
          <span className="px-16 flex items-center gap-2">
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          </span>
        </div>
        <div className="max-w-[1200px] mx-auto h-[70px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-xl bg-green-900 flex items-center justify-center text-white font-['Playfair_Display'] text-xl font-bold">S</div>
            <span className="font-['Playfair_Display'] text-xl text-green-900 font-bold">Sparsh</span>
          </Link>

          <div className="flex items-center gap-1.5 desktop-nav">
            {navItems.map(item => {
              const isActive = pathname === item.id;
              return (
                <Link key={item.id} href={item.id} className={`${isActive ? "text-green-900" : "text-gray-600"
                  } px-3.5 py-2 rounded-lg cursor-pointer font-['DM_Sans'] text-sm font-semibold transition-all duration-200 no-underline ${!isActive ? "font-medium" : ""
                  }`}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/booking" className="bg-green-900 text-white px-6 py-2.5 rounded-xl cursor-pointer font-['DM_Sans'] text-sm font-semibold transition-all duration-200 no-underline desktop-book-btn">
              Book Now
            </Link>
          </div>

          <div className="flex items-center gap-3 mobile-actions">
            <Link href="/booking" className="bg-green-900 text-white px-6 py-2.5 rounded-xl cursor-pointer font-['DM_Sans'] text-sm font-semibold transition-all duration-200 no-underline mobile-book-btn hidden">
              Book Now
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="bg-transparent border-0 cursor-pointer hidden text-green-900 mobile-toggle">
              <Icon name={menuOpen ? "x" : "menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="bg-white px-6 pt-4 pb-6 border-t border-gray-200 flex flex-col gap-1 mobile-menu">
            {navItems.map(item => {
              const isActive = pathname === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setMenuOpen(false)}
                  className={`${isActive ? "bg-green-50 text-gray-800" : "text-gray-800"
                    } px-4 py-3.5 rounded-xl cursor-pointer text-left font-['DM_Sans'] text-base font-semibold no-underline block ${!isActive ? "font-medium" : ""
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}

        <style jsx global>{`
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
          .mobile-book-btn { display: none !important; }
          .mobile-actions { display: none !important; }
          .desktop-book-btn { display: flex !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .mobile-book-btn { display: flex !important; }
          .mobile-actions { display: flex !important; }
          .desktop-book-btn { display: none !important; }
        }
      `}</style>
      </nav>
    </div>

  );
}
