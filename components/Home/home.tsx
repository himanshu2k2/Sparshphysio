"use client";

import Link from "next/link";
import { CALL_LINK, SERVICES, REVIEWS } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { StaggerAnimation } from "@/components/shared/StaggerAnimation";
import { PageTransition } from "@/components/shared/PageTransition";
import ServiceTile from "@/components/shared/ServiceTile";
import { ViewAllServicesButton } from "./servicetile";
import AppointmentSection from "./appointment";

const serviceImages: Record<string, string> = {
  neuro: "/Neuro.png",
  ortho: "/orthopedicRehab.png",
  sports: "/Sports.png",
  pivd: "/disc.webp",
  "post-surgery": "post.png",
  chronic: "chronic.png",
};

export default function HomePage() {

  return (
    <PageTransition>
      <div>
        <section className="flex items-center relative overflow-hidden py-14 min-h-[600px]">
          <ImageCarousel interval={6000} overlayOpacity="bg-black/50" kenBurns={true} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <ScrollAnimation animation="fade-in-down" delay={200}>
              <div className="flex gap-4 items-center mb-6 flex-wrap">
                <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide font-['DM_Sans'] backdrop-blur-sm">
                  ⭐ 4.9 RATED · 160 GOOGLE REVIEWS
                </span>
                <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium font-['DM_Sans'] backdrop-blur-sm">
                  17+ YEARS IN KANPUR
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-left" delay={400}>
              <h2 className="font-['Playfair_Display'] text-[50px] text-white leading-tight mb-2 max-w-[700px] font-bold">
                Healing Hands,<br />
                <span className="text-secondary">Lasting Relief.</span>
              </h2>
              <h1 className="font-['Playfair_Display'] text-[60px] text-white leading-tight mb-6 max-w-[700px] font-bold">
                Sparsh Physiotherapy<br />
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={600}>
              <p className="font-['DM_Sans'] text-[clamp(16px,2vw,20px)] text-white leading-relaxed max-w-[560px] mb-10">
                Kanpur&apos;s trusted physiotherapy clinic. Science-backed treatment for pain relief,
                post-surgery recovery, and complete rehabilitation — at the clinic or at your doorstep.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={800}>
              <div className="flex gap-4 flex-wrap">
                <Link href="/booking" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-['DM_Sans'] font-semibold text-base inline-flex items-center gap-2.5 no-underline transition-all duration-300 cursor-pointer shadow-lg hover:shadow-secondary/50 hover:-translate-y-1 hover:scale-105"
                >
                 Book Now
                </Link>
                <a href={CALL_LINK} className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-['DM_Sans'] font-semibold text-base border border-white/30 inline-flex items-center gap-2.5 no-underline transition-all duration-300 cursor-pointer hover:bg-white/30 hover:-translate-y-1 hover:scale-105"
                >
                  <Icon name="phone" size={20} /> Call Now
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      <section className="bg-background py-5 px-6 overflow-hidden">
        <StaggerAnimation
          staggerDelay={150}
          animation="fade-in-up"
          className="max-w-[1200px] mx-auto flex justify-center gap-10 flex-wrap items-center"
        >
          {["✅ Verified on Google", "🏆 5.0 on JustDial (97 ratings)", "🏠 Home Visits Available", "₹250 Consultation"].map((t, i) => (
            <span key={i} className="font-['DM_Sans'] text-sm text-gray-600 font-medium">{t}</span>
          ))}
        </StaggerAnimation>
      </section>
      
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <ScrollAnimation animation="zoom-in" delay={0}>
            <div className="text-center mb-14">
              <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">WHAT WE TREAT</span>
              <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-primary mt-3">Our Specializations</h2>
            </div>
          </ScrollAnimation>
          <StaggerAnimation
            staggerDelay={100}
            animation="fade-in-up"
            className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5"
          >
            {SERVICES.slice(0, 6).map(s => (
              <ServiceTile
                key={s.id}
                title={s.title}
                description={s.desc}
                price={s.price}
                image={serviceImages[s.id]}
              />
            ))}
          </StaggerAnimation>
          <ScrollAnimation animation="scale-up" delay={600}>
            <div className="text-center mt-10">
              <ViewAllServicesButton />
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <section className="bg-background py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <ScrollAnimation animation="fade-in-down" delay={0}>
            <div className="text-center mb-14">
              <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest">WHY SPARSH</span>
              <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-primary mt-3">Why Patients Trust Us</h2>
            </div>
          </ScrollAnimation>
          <StaggerAnimation
            staggerDelay={150}
            animation="scale-up"
            className="grid grid-cols-3 gap-6"
          >
            {[
              { icon: "shield", title: "17+ Years Experience", desc: "One of Kanpur's longest-serving physiotherapy clinics with proven results." },
              { icon: "heart", title: "Patient-First Care", desc: "Every treatment plan is personalized to your condition, lifestyle, and recovery goals." },
              { icon: "equipment", title: "Advanced Equipments", desc: "Advanced equipment like laser, shockwave, SWD, MWD, gait trainer, etc..." },
              { icon: "treatment", title: "Modern Treatment", desc: "Treatments including cupping, dry needling, IASTM, chiropractic, taping, etc..." },
              { icon: "users", title: "Home Visit Service", desc: "Trained professionals and quality physiotherapy at your doorstep in whole kanpur." },
              { icon: "award", title: "4.9 Star Rating", desc: "139 Google reviews and 97 JustDial ratings — consistently top-rated in Kanpur." },
            ].map((item, i) => (
              <div key={i} className={`group relative bg-card p-8 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${i >= 4 ? 'col-start-2' : ''}`}>
                <div className="absolute inset-0 right-full bg-gradient-to-l from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:right-0"></div>
                <div className="relative z-10 flexitems-center">
                  <div className="text-primary mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-primary-foreground"><Icon name={item.icon as any} size={28} /></div>
                  <h3 className="font-['DM_Sans'] text-base text-primary font-semibold mb-2 transition-colors duration-500 group-hover:text-primary-foreground">{item.title}</h3>
                  <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed transition-colors duration-500 group-hover:text-primary-foreground/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </StaggerAnimation>
        </div>
      </section>
      
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <ScrollAnimation animation="rotate-in" delay={0}>
            <div className="text-center mb-14">
              <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">TESTIMONIALS</span>
              <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-primary mt-3">What Our Patients Say</h2>
            </div>
          </ScrollAnimation>
          <StaggerAnimation
            staggerDelay={120}
            animation="fade-in-up"
            className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5"
          >
            {REVIEWS.slice(0, 3).map((r, i) => (
              <div key={i} className="group relative p-7 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <div className="absolute inset-0 right-full bg-gradient-to-r from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:right-0"/>
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, j) => <span key={j} className="text-amber-500 transition-transform duration-300 group-hover:scale-110 inline-block"><Icon name="star" size={16} /></span>)}
                  </div>
                  <p className="font-['DM_Sans'] text-sm text-foreground leading-relaxed mb-4 italic group-hover:text-primary-foreground">&quot;{r.text}&quot;</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-['DM_Sans'] text-sm text-primary font-semibold group-hover:text-primary-foreground">{r.name}</div>
                      <div className="font-['DM_Sans'] text-xs text-muted-foreground group-hover:text-primary-foreground/80">{r.condition}</div>
                    </div>
                    <span className="text-xs text-primary bg-secondary/20 px-2.5 py-1 rounded-full font-['DM_Sans'] font-medium transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerAnimation>
          <ScrollAnimation animation="scale-up" delay={400}>
            <div className="text-center mt-10">
              <Link href="/reviews" className="bg-transparent border-2 border-primary text-primary py-3.5 px-9 rounded-xl font-['DM_Sans'] font-semibold text-base cursor-pointer transition-all duration-300 no-underline inline-block hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg"
              >
                Read All Reviews
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

        <ScrollAnimation animation="fade-in-up" delay={0}>
          <AppointmentSection />
        </ScrollAnimation>
      </div>
    </PageTransition>
  );
}
