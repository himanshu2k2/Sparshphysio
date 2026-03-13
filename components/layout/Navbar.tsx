"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/shared/Icon";
import { PaymentModal } from "@/components/Payment/PaymentModal";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
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
      <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-background/95 backdrop-blur-[12px] border-b border-border transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className={`${scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} transition-all duration-500 overflow-hidden flex items-center justify-between bg-primary text-primary-foreground text-center px-4 py-2 font-['DM_Sans'] text-sm font-semibold w-[full]`}>
          <button
            onClick={() => setPaymentModalOpen(true)}
            className="px-16 bg-transparent border-0 cursor-pointer text-primary-foreground hover:text-secondary transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
            Pay here
          </button>
          <span className="px-16 flex items-center gap-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </span>
        </div>
        <div className="max-w-[1200px] mx-auto h-[70px] flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-['Playfair_Display'] text-xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">S</div>
            <span className="font-['Playfair_Display'] text-xl text-primary font-bold transition-all duration-300 group-hover:text-secondary">Sparsh</span>
          </Link>

          <div className="flex items-center gap-1.5 desktop-nav">
            {navItems.map(item => {
              const isActive = pathname === item.id;
              return (
                <Link key={item.id} href={item.id} className={`${isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted hover:text-secondary"
                  } px-3.5 py-2 rounded-lg cursor-pointer font-['DM_Sans'] text-sm font-semibold transition-all duration-300 no-underline ${!isActive ? "font-medium" : ""
                  } hover:scale-105`}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/booking" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl cursor-pointer font-['DM_Sans'] text-sm font-semibold transition-all duration-300 no-underline desktop-book-btn hover:bg-secondary hover:text-secondary-foreground hover:scale-105 hover:shadow-lg">
              Book Now
            </Link>
          </div>

          <div className="flex items-center gap-3 mobile-actions">
            <Link href="/booking" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl cursor-pointer font-['DM_Sans'] text-sm font-semibold transition-all duration-300 no-underline mobile-book-btn hidden hover:bg-secondary hover:text-secondary-foreground hover:scale-105">
              Book Now
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="bg-transparent border-0 cursor-pointer hidden text-primary mobile-toggle transition-transform duration-300 hover:scale-110">
              <Icon name={menuOpen ? "x" : "menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="bg-card px-6 pt-4 pb-6 border-t border-border flex flex-col gap-1 mobile-menu animate-slide-down">
            {navItems.map((item, index) => {
              const isActive = pathname === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setMenuOpen(false)}
                  className={`${isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/10"
                    } px-4 py-3.5 rounded-xl cursor-pointer text-left font-['DM_Sans'] text-base font-semibold no-underline block ${!isActive ? "font-medium" : ""
                    } transition-all duration-300 hover:translate-x-2`}
                  style={{ animationDelay: `${index * 50}ms` }}
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
      <PaymentModal open={paymentModalOpen} onOpenChange={setPaymentModalOpen} />
    </div>

  );
}
