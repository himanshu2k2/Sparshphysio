"use client";

import Link from "next/link";
import { ADDRESS, CALL_LINK, MAPS_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";

export function Footer() {
  const quickLinks = [
    { id: "/", label: "Home" },
    { id: "/services", label: "Services" },
    { id: "/about", label: "About" },
    { id: "/reviews", label: "Reviews" },
    { id: "/pricing", label: "Pricing" },
    { id: "/faq", label: "FAQ" },
    { id: "/contact", label: "Contact" },
    { id: "/booking", label: "Book Appointment" },
  ];

  return (
    <footer className="bg-primary/95 py-16 px-6 pb-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground font-['Playfair_Display'] text-lg font-bold">S</div>
              <span className="font-['Playfair_Display'] text-xl text-primary-foreground font-bold">Sparsh</span>
            </div>
            <p className="font-['DM_Sans'] text-sm text-primary-foreground/60 leading-relaxed">
              Kanpur&apos;s trusted physiotherapy clinic. 17+ years of healing, one patient at a time.
            </p>
          </div>

          <div>
            <h4 className="font-['DM_Sans'] text-sm text-secondary font-semibold mb-4 tracking-wide">QUICK LINKS</h4>
            {quickLinks.map(link => (
              <Link key={link.id} href={link.id} className="block text-primary-foreground/60 font-['DM_Sans'] text-sm py-1 no-underline transition-colors duration-200 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-['DM_Sans'] text-sm text-secondary font-semibold mb-4 tracking-wide">CONTACT</h4>
            <p className="font-['DM_Sans'] text-sm text-primary-foreground/60 leading-relaxed mb-2">{ADDRESS}</p>
            <a href={CALL_LINK} className="font-['DM_Sans'] text-sm text-primary-foreground no-underline block mb-1">📞 079056 51137</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-['DM_Sans'] text-sm text-secondary no-underline block">💬 WhatsApp Us</a>
          </div>

          <div>
            <h4 className="font-['DM_Sans'] text-sm text-secondary font-semibold mb-4 tracking-wide">HOURS</h4>
            <p className="font-['DM_Sans'] text-sm text-primary-foreground/60 leading-[1.8]">
              Mon – Sat: 9 AM – 8 PM<br />Sunday: 10 AM – 2 PM
            </p>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-secondary font-['DM_Sans'] text-sm font-semibold no-underline">
              <Icon name="mapPin" size={14} /> Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="font-['DM_Sans'] text-xs text-primary-foreground/40">
            © 2025 Sparsh Physiotherapy Clinic, Kanpur. All rights reserved.
          </p>
        </div>
      </div>

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[999] w-15 h-15 rounded-full bg-secondary flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-200 text-secondary-foreground hover:scale-110"
      >
        <Icon name="whatsapp" size={30} />
      </a>
    </footer>
  );
}
