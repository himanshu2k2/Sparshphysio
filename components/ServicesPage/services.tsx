"use client";

import { ImageCarousel } from "@/components/shared/ImageCarousel";
import ServiceTile from "@/components/shared/ServiceTile";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export default function ServicesComponent() {
  

  const services = [
    {
      id: 1,
      title: "Neuro Physiotherapy",
      desc: "Specialized rehabilitation for stroke, paralysis, nerve injuries, and neurological conditions. Restoring movement and independence.",
      price: "₹350/session",
      icon: "/Neuro.png"
    },
    {
      id: 2,
      title: "Orthopedic Rehab",
      desc: "Treatment for fractures, joint replacements, arthritis, and musculoskeletal disorders with hands-on manual therapy.",
      price: "₹300/session",
      icon: "/orthopedicRehab.png"
    },
    {
      id: 3,
      title: "Sports Injury Recovery",
      desc: "Get back in the game. Targeted therapy for ligament tears, sprains, muscle strains, and sports-related injuries.",
      price: "₹350/session",
      icon: "/Sports.png"
    },
    {
      id: 4,
      title: "PIVD / Disc Treatment",
      desc: "Specialised non-surgical treatment for slipped disc, sciatica, and prolapsed intervertebral disc conditions.",
      price: "₹350/session",
      icon: "/disc.webp"
    },
    {
      id: 5,
      title: "Post-Surgery Rehab",
      desc: "Faster recovery after knee replacement, hip surgery, spinal surgery, and other surgical procedures.",
      price: "₹350/session",
      icon: "/post.png"
    },
    {
      id: 6,
      title: "Chronic Pain Management",
      desc: "Long-term relief from persistent back pain, neck pain, frozen shoulder, and chronic pain conditions.",
      price: "₹300/session",
      icon: "/chronic.png"
    },
    {
      id: 7,
      title: "Hand Therapy",
      desc: "Specialized rehabilitation for hand and wrist injuries, carpal tunnel syndrome, and post-fracture recovery.",
      price: "₹300/session",
      icon: "/hand.png"
    },
    {
      id: 8,
      title: "Geriatric Physiotherapy",
      desc: "Specialized branch of physical therapy focused on improving mobility, strength, balance, and independence in older adults.",
      price: "₹300/session",
      icon: "/Geriatricp.jpg"
    },
    {
      id: 9,
      title: "Home Visit Therapy",
      desc: "Can't visit the clinic? We come to you. Professional physiotherapy at your doorstep in Kidwai Nagar, Barra & Juhi.",
      price: "₹500/visit",
      icon: "/HomeVisit.jpg"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-32 px-6 text-center">
        <ImageCarousel interval={3000} overlayOpacity="bg-gray-800/70" />
        <div className="relative z-10 animate-fade-in-down">
          <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">OUR SERVICES</span>
          <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">Treatments & Therapies</h1>
          <p className="font-['DM_Sans'] text-base text-white/70 mt-4 max-w-[600px] mx-auto">
            Comprehensive physiotherapy services — from assessment to full recovery
          </p>
        </div>
      </section>
      <div className="h-16 text-center mt-8 mb-20 relative z-10 animate-fade-in-up">
        <span className="font-['DM_Sans'] text-[36px] text-secondary font-semibold tracking-widest uppercase underline">OUR SERVICES</span>
        <p className="font-['DM_Sans'] text-base text-muted-foreground mt-4 max-w-[600px] mx-auto">
          These are some services
        </p>
        <span className="font-['Playfair_Display'] text-[36px] text-secondary font-semibold tracking-widest uppercase underline">What we do & What we offer</span>

      </div>
      <section className="max-w-[1200px] mx-auto pt-16 px-6 pb-5">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-6">
          {services.map((service, index) => {
            const row = Math.floor(index / 3); // Assuming 3 columns per row on large screens
            const delay = row * 0.2; // 200ms delay per row

            return (
              <div key={service.id}>
                <ScrollAnimation delay={delay}>
                  <ServiceTile
                    title={service.title}
                    description={service.desc}
                    price={service.price}
                    image={service.icon}
                  />
                </ScrollAnimation>
                
              </div>
            );
          })}
        </div>
      </section>
      <div className="text-center mb-10">
        <p className="font-['DM_Sans'] text-base text-[20px] text-muted-foreground mt-4 max-w-[600px] mx-auto">
          But not limited to only these there are many more.......
        </p>
      </div>
    </div>
  );
}