"use client";

import Link from "next/link";
import { WHATSAPP_LINK, CALL_LINK, SERVICES, REVIEWS } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import ServiceTile from "@/components/shared/ServiceTile";
import { ViewAllServicesButton } from "./servicetile";
import AppointmentSection from "./appointment";

const serviceImages: Record<string, string> = {
  neuro: "/neurotherapy.webp",
  ortho: "/orthopedic.webp", 
  sports: "/Sport injury.jpg",
  pivd: "/disc.webp",
  "post-surgery": "/post-surgical-rehabilitation.png",
  chronic: "/Chronic-Pain.webp",
  hand: "/hand.webp",
  geriatric: "/Geriatric-physiotherapy.jpg",
  home: "/HomeVisit.jpg"
};

export default function HomePage() {
  const images = [
    "/one.jpg",
    "/two.png"
  ];

  return (
    <div>
      <section className=" flex items-center relative overflow-hidden py-14">
        <ImageCarousel images={images} interval={5000} overlayOpacity="bg-black/100" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex gap-4 items-center mb-6 flex-wrap">
            <span className="bg-[rgba(200,169,110,0.2)] text-yellow-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide font-['DM_Sans']">
              ⭐ 4.9 RATED · 139 GOOGLE REVIEWS
            </span>
            <span className="bg-white/10 text-black/60 px-4 py-1.5 rounded-full text-sm font-medium font-['DM_Sans']">
              17+ YEARS IN KANPUR
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-[50px] text-white leading-tight mb-2 max-w-[700px] font-bold">
            Healing Hands,<br />
            <span className="text-yellow-600">Lasting Relief.</span>
          </h2>
          <h1 className="font-['Playfair_Display'] text-[60px] text-white leading-tight mb-6 max-w-[700px] font-bold">
            Sparsh Physiotherapy<br /></h1>
          <p className="font-['DM_Sans'] text-[clamp(16px,2vw,20px)] text-white leading-relaxed max-w-[560px] mb-10">
            Kanpur&apos;s trusted physiotherapy clinic. Science-backed treatment for pain relief,
            post-surgery recovery, and complete rehabilitation — at the clinic or at your doorstep.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/booking" className="bg-green-500 text-white px-8 py-4 rounded-xl font-['DM_Sans'] font-semibold text-base inline-flex items-center gap-2.5 no-underline transition-all duration-200 cursor-pointer shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
             Book Now
            </Link>
            <a href={CALL_LINK} className="bg-gray-50 text-black px-8 py-4 rounded-xl font-['DM_Sans'] font-semibold text-base border border-white/20 inline-flex items-center gap-2.5 no-underline transition-all duration-200 cursor-pointer hover:bg-white/15 hover:-translate-y-0.5"
            >
              <Icon name="phone" size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-5 px-6">
        <div className="max-w-[1200px] mx-auto flex justify-center gap-10 flex-wrap items-center">
          {["✅ Verified on Google", "🏆 5.0 on JustDial (97 ratings)", "🏠 Home Visits Available", "₹100 Consultation"].map((t, i) => (
            <span key={i} className="font-['DM_Sans'] text-sm text-gray-600 font-medium">{t}</span>
          ))}
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-white py-20 px-6">
        <ScrollAnimation className="max-w-[1200px] mx-auto" delay={100}>
          <div className="text-center mb-14">
            <span className="font-['DM_Sans'] text-xs text-yellow-600 font-semibold tracking-widest uppercase">WHAT WE TREAT</span>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-green-900 mt-3">Our Specializations</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
            {SERVICES.slice(0, 6).map(s => (
              <ServiceTile 
                key={s.id} 
                title={s.title}
                description={s.desc}
                price={s.price}
                image={serviceImages[s.id]}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <ViewAllServicesButton />
          </div>
        </ScrollAnimation>
      </section>
      
      {/*Why patient trust us */}
      <section className="bg-[#f8f6f1] py-20 px-6">
        <ScrollAnimation className="max-w-[1200px] mx-auto" delay={200}>
          <div className="text-center mb-14">
            <span className="font-['DM_Sans'] text-xs text-yellow-600 font-semibold tracking-widest">WHY SPARSH</span>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-green-900 mt-3">Why Patients Trust Us</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
            {[
              { icon: "shield", title: "17+ Years Experience", desc: "One of Kanpur's longest-serving physiotherapy clinics with proven results." },
              { icon: "heart", title: "Patient-First Care", desc: "Every treatment plan is personalized to your condition, lifestyle, and recovery goals." },
              { icon: "award", title: "4.9 Star Rating", desc: "139 Google reviews and 97 JustDial ratings — consistently top-rated in Kanpur." },
              { icon: "users", title: "Home Visit Service", desc: "Professional physiotherapy at your doorstep in Kidwai Nagar, Barra, Juhi & beyond." },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 right-full bg-gradient-to-l from-green-400 to-green-200 transition-all duration-500 ease-in-out group-hover:right-0"></div>
                <div className="relative z-10">
                  <div className="text-green-800 mb-4 transition-colors duration-500 "><Icon name={item.icon as any} size={28} /></div>
                  <h3 className="font-['DM_Sans'] text-base text-green-900 font-semibold mb-2 transition-colors duration-500 ">{item.title}</h3>
                  <p className="font-['DM_Sans'] text-sm text-gray-600 leading-relaxed transition-colors duration-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>
      
      {/*Testimonials */}
      <section className="bg-white py-20 px-6">
        <ScrollAnimation className="max-w-[1200px] mx-auto" delay={300}>
          <div className="text-center mb-14">
            <span className="font-['DM_Sans'] text-xs text-yellow-600 font-semibold tracking-widest uppercase">TESTIMONIALS</span>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-green-900 mt-3">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <div key={i} className="group relative p-7 rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 right-full bg-gradient-to-r from-green-400 to-green-200 transition-all duration-500 ease-in-out group-hover:right-0"/>
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, j) => <span key={j} className="text-amber-500"><Icon name="star" size={16} /></span>)}
                  </div>
                  <p className="font-['DM_Sans'] text-sm text-gray-700 leading-relaxed mb-4 italic">&quot;{r.text}&quot;</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-['DM_Sans'] text-sm text-green-900 font-semibold">{r.name}</div>
                      <div className="font-['DM_Sans'] text-xs text-gray-500">{r.condition}</div>
                    </div>
                    <span className="text-xs text-green-800 bg-green-50 px-2.5 py-1 rounded-full font-['DM_Sans'] font-medium">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="bg-transparent border-2 border-green-800 text-green-800 py-3.5 px-9 rounded-xl font-['DM_Sans'] font-semibold text-base cursor-pointer transition-all duration-300 no-underline inline-block hover:bg-green-800 hover:text-white"
            >
              Read All Reviews
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      {/*Book an appointment */}
      <AppointmentSection />
    </div>
  );
}
