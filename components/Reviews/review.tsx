import { REVIEWS } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { ScrollAnimation } from "../shared/ScrollAnimation";

export default function ReviewsComponent() {


  return (
    <div className="bg-background min-h-screen">
      <section className="relative bg-gradient-to-br py-32 px-6 text-center">
        <ImageCarousel interval={3000} overlayOpacity="bg-gray-800/70" />
        <div className="relative z-10 animate-fade-in-down">
          <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">PATIENT REVIEWS</span>
          <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">What Kanpur Says About Us</h1>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="font-['Playfair_Display'] text-[42px] text-secondary font-bold">4.9</div>
              <div className="flex gap-0.5 justify-center mx-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-amber-500"><Icon name="star" size={16} /></span>)}
              </div>
              <div className="font-['DM_Sans'] text-xs text-white/60 mt-1">139 Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="font-['Playfair_Display'] text-[42px] text-secondary font-bold">5.0</div>
              <div className="flex gap-0.5 justify-center mx-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-amber-500"><Icon name="star" size={16} /></span>)}
              </div>
              <div className="font-['DM_Sans'] text-xs text-white/60 mt-1">97 JustDial Ratings</div>
            </div>
          </div>
        </div>
      </section>
      <ScrollAnimation delay={0.2}>
        <section className="max-w-[900px] mx-auto pt-16 px-6">
        <div className="flex flex-col gap-5">
          {REVIEWS.map((r, i) => (
            <ScrollAnimation key={i} delay={i * 0.1}>
              <div className="group relative bg-card p-8 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 right-full bg-gradient-to-r from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:right-0"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
                    <div>
                      <div className="font-['DM_Sans'] text-base text-primary font-semibold transition-colors duration-500 group-hover:text-primary-foreground">{r.name}</div>
                      <div className="font-['DM_Sans'] text-xs text-muted-foreground mt-0.5 transition-colors duration-500 group-hover:text-primary-foreground/80">Treatment: {r.condition}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, j) => <span key={j} className="text-amber-500"><Icon name="star" size={18} /></span>)}
                    </div>
                  </div>
                  <p className="font-['DM_Sans'] text-base text-foreground leading-relaxed italic transition-colors duration-500 group-hover:text-primary-foreground">&quot;{r.text}&quot;</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
      </ScrollAnimation>
      <ScrollAnimation delay={0.3}>
      <section className="max-w-[900px] mx-auto pb-16 px-6">
        <div className="text-center mt-10 hover:scale-105 transition-transform">
          <a href="https://www.google.com/search?q=Sparsh+Physiotherapy+Clinic+Kanpur+reviews" target="_blank" rel="noopener noreferrer"
            className="bg-primary text-primary-foreground py-3.5 px-9 rounded-xl font-['DM_Sans'] font-semibold text-base no-underline inline-flex items-center gap-2"
          >
            See All Google Reviews <Icon name="arrowRight" size={18} />
          </a>
        </div>
      </section>
      </ScrollAnimation>
    </div>
  );
}