"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Doctor Photo */}
          <ScrollAnimation animation="fade-in-up" delay={200} className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/dr.jpeg"
                  alt="Dr. Deepti Srivastava"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Doctor Name Below Photo */}
              <div className="mt-6 text-center">
                <h3 className="font-['Playfair_Display'] text-2xl text-primary font-bold">Dr. Deepti Srivastava</h3>
                <p className="font-['DM_Sans'] text-lg text-muted-foreground mt-1">Senior Physiotherapist</p>
                <p className="font-['DM_Sans'] text-sm text-secondary font-semibold mt-2">17+ Years of Experience</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Text Content */}
          <ScrollAnimation animation="fade-in-up" delay={200} className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-primary leading-tight">
                  Expert Physiotherapy Care in Kanpur
                </h1>
                <p className="font-['DM_Sans'] text-medium text-foreground leading-relaxed">
                 A highly experienced and dedicated physiotherapist with over 17 years of clinical expertise, specializing in advanced manual and rehabilitative therapies. Proficient in techniques such as Dry Needling, Myofascial Release (MFR), MIASTM, Cupping Therapy, and Neuro Rehabilitation, with a strong focus on patient-centered care and functional recovery. Recognized for clinical excellence, continuous learning, and delivering evidence-based treatments, the individual has earned multiple prestigious awards and certifications, reflecting both skill and commitment to advancing physiotherapy practice.
                </p>
                <p className="font-['DM_Sans'] text-medium text-foreground leading-relaxed">
                 We specialize in a wide range of modern and evidence-based therapies, including Dry Needling,
                 Myofascial Release (MFR), MIASTM, Cupping Therapy, and Neuro Rehabilitation. Our goal is not
                 just to treat symptoms, but to identify root causes and help patients regain strength, mobility, 
                 and confidence in their daily lives.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                     ✔️ 17+ years of trusted clinical experience
                    </h3>
                    <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                     ✔️ Expertise in advanced physiotherapy techniques
                    </h3>
                     <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                     ✔️ Personalized, patient-focused treatment plans
                     </h3>
                     <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                     ✔️ Strong background in orthopaedic & neuro rehabilitation
                     </h3>
                     <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                     ✔️ Award-winning clinical excellence
                     </h3>
                     <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                     ✔️ Commitment to continuous learning and innovation
                     </h3>
                    
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">Specialized in:</h3>
                    <p className="font-['DM_Sans'] text-sm text-muted-foreground">Dry Needling (Trigger Point Therapy)<br/>
                     Myofascial Release (MFR)<br/>
                     MIASTM (Instrument-Assisted Soft Tissue Mobilization)<br/>
                     Cupping Therapy<br/>
                     Neuro Rehabilitation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-['DM_Sans'] text-base text-primary font-semibold">
                        At our clinic, your recovery is our priority. We strive to help you move better,
                        feel stronger, and live pain-free.
                    </h3>
                  </div>
                </div>

            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}