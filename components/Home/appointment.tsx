"use client";

import { WHATSAPP_LINK, CALL_LINK } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import Link from "next/link";

export default function AppointmentSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/two.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-primary/60"></div>
      <ScrollAnimation className="max-w-[600px] mx-auto relative z-10" delay={400}>
        <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,40px)] text-white mb-4">
          Book an Appointment
        </h2>
        <p className="font-['DM_Sans'] text-base text-white/70 leading-relaxed mb-9">
          Book your consultation today. First assessment at just ₹100.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/booking" className="border border-white/20 hover:bg-secondary text-white px-9 py-4 rounded-xl font-['DM_Sans'] font-semibold text-base inline-flex items-center gap-2.5 no-underline cursor-pointer"
          >
             Book Now
          </Link>
          <a href={CALL_LINK} className="bg-white/15 text-white px-9 py-4 rounded-xl font-['DM_Sans'] font-semibold text-base border border-white/20 inline-flex items-center gap-2.5 no-underline cursor-pointer hover:bg-secondary"
          >
            <Icon name="phone" size={20} /> 079056 51137
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
}