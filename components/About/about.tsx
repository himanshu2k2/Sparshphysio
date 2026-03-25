import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { ImageCarousel } from "@/components/shared/ImageCarousel";

export default function AboutComponent() {
  

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-32 px-6 text-center">
        <ImageCarousel interval={3000} overlayOpacity="bg-gray-800/70" />
        <div className="relative z-10 animate-fade-in-down">
          <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">ABOUT US</span>
          <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">The Sparsh Story</h1>
        </div>
      </section>
      <ScrollAnimation delay={0.2}>
        <section className="max-w-[900px] mx-auto pt-16 px-6">
          <div className="bg-card p-12 rounded-2xl shadow-sm">
            <h2 className="font-['Playfair_Display'] text-2xl text-primary mb-5">Where Healing Meets Science</h2>
            <div className="font-['DM_Sans'] text-base text-gray-700 leading-[1.8]">
              <p className="mb-5">
                Sparsh Physiotherapy Clinic has been Kanpur&apos;s trusted destination for advanced physiotherapy care for over 17 years. Located in the heart of Shyam Nagar, we are dedicated to helping you achieve pain relief, improved mobility, and a better quality of life.
              </p>
              <p className="mb-5">
                Our clinic offers a wide range of treatments — from chronic pain management and post-surgery rehabilitation to neuro physiotherapy and sports injury recovery. What sets us apart is our commitment to evidence-based treatment protocols combined with genuine, compassionate care.
              </p>
              <p className="mb-5">
                Understanding that recovery shouldn&apos;t wait, we also provide home visit physiotherapy services by quality trained professionals across whole Kanpur — ensuring professional care reaches you wherever you are.
              </p>
              <p>
                With a 4.9-star rating on Google (160 reviews) and a perfect 5.0 on JustDial (97 ratings), our results speak for themselves. At Sparsh, your recovery is our mission.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <section className="max-w-[900px] mx-auto pb-16 px-6 pt-8">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 mt-10">
            {[
              { num: "17+", label: "Years of Service" },
              { num: "15,000+", label: "Patients Treated" },
              { num: "4.9 ", label: "Google Rating" },
              { num: "₹250", label: "Consultation Fee" },
            ].map((s, i) => (
              <div key={i} className="bg-card p-7 rounded-2xl text-center shadow-sm">
                <div className="font-['Playfair_Display'] text-[30px] text-primary font-bold">{s.num}</div>
                <div className="font-['DM_Sans'] text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}