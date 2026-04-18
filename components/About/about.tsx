import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { Icon } from "@/components/shared/Icon";

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
      <ScrollAnimation delay={0.2}>
        <section className="max-w-[1200px] mx-auto py-16 px-6">
          <div className="text-center mb-12">
            <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">MEET OUR EXPERT</span>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] text-primary mt-3">About Our Senior Physiotherapist</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[800px] overflow-hidden">
                <div className="flex flex-col gap-6 h-full overflow-y-auto scroll-smooth px-4 py-8" 
                     style={{ scrollSnapType: 'y mandatory' }}>
                  {[
                    "/dr1.jpeg",
                    "/dr2.jpeg", 
                    "/dr3.jpeg",
                    "/dr4.jpeg"
                  ].map((image, index) => (
                    <div 
                      key={index}
                      className="relative flex-shrink-0 transition-all duration-300 ease-out"
                      style={{ 
                        scrollSnapAlign: 'center',
                        minHeight: '200px',
                        maxHeight: '600px'
                      }}
                    >
                      <img
                        src={image}
                        alt={`Dr. Deepti Srivastava ${index + 1}`}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                        style={{ 
                          maxHeight: '600px',
                          minHeight: '200px'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Physiotherapist Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h3 className="font-['Playfair_Display'] text-2xl text-primary font-bold">Dr. Deepti Srivastava</h3>
                <p className="font-['DM_Sans'] text-lg text-muted-foreground font-semibold">Senior Physiotherapist & Clinic Director</p>
                <p className="font-['DM_Sans'] text-base text-foreground leading-relaxed">
                  A highly experienced and dedicated physiotherapist with over 17 years of clinical expertise, 
                  specializing in advanced manual and rehabilitative therapies. Proficient in techniques such as Dry Needling, 
                  Myofascial Release (MFR), MIASTM, Cupping Therapy, and Neuro Rehabilitation, with a strong focus on patient-centered care and functional recovery. Recognized for clinical excellence, continuous learning, and delivering evidence-based treatments, the individual has earned multiple prestigious awards and certifications, reflecting both skill and commitment to advancing physiotherapy practice.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-['DM_Sans'] text-base text-primary font-semibold">Awards & Achievements</h4>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 Best Clinical Award (2022)</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 Youth Icon & Dynamic Physio Award (2023)</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 Clinical Eminence Award – Senior (2025)</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 Best Clinician Award (2023)</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 Physio Social Excellence Award</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 Significant Achievement Award</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">🏆 IAP Women Cell Appreciation Award</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="heart" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-['DM_Sans'] text-base text-primary font-semibold">Educational Qualifications</h4>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">BPT (Bachelor of Physiotherapy)</p>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">MPT (Master of Physiotherapy)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="star" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-['DM_Sans'] text-base text-primary font-semibold">Certifications & Professional Training</h4>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">International Seminar on Advances in Physiotherapy<br/>
                      Myofascial Release Techniques<br/>
                      Ankle Sprain Taping & Bandaging<br/>
                      Therapeutic Taping<br/>
                      Chiropractic Spinal & Pelvic Adjustment<br/>
                      Stroke Rehabilitation<br/>
                      Osteo-Radio Integration in Modern Musculoskeletal Practice<br/>
                      MIASTM & Therapeutic Cupping Therapy<br/>
                      Dry Needling Therapy for Trigger Points<br/>
                      Shoulder Rehabilitation (Basic & Advanced)<br/>
                      Hands-on Healing Manual Therapy<br/>
                      Virtual Orthopaedic Physio Summit<br/>
                      Comprehensive Program in Orthopaedic Rehabilitation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}