"use client"
import { ScrollAnimation } from "../shared/ScrollAnimation";
import { ImageCarousel } from "../shared/ImageCarousel";
import { useState } from "react";
import { FAQS, WHATSAPP_LINK } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";

export default function FAQs() {
    
    const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative bg-gradient-to-br py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
            <ImageCarousel interval={3000} overlayOpacity="bg-gray-800/70" />
        </div>
        <div className="relative z-10 animate-fade-in-down">
            <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">FAQ</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">Frequently Asked Questions</h1>
        </div> 
      </section>
      <section className="max-w-[800px] mx-auto py-16 px-6">
        <div className="flex flex-col gap-3 animate-fade-in-up">
          {FAQS.map((faq, i) => (
            <ScrollAnimation>
                <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm animate-fade-in-up border border-transparent transition-all duration-300 ${open === i ? 'border-primary' : ''} hover:bg-secondary/10">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-5 flex justify-between items-center bg-transparent border-0 cursor-pointer text-left"
              >
                <span className="font-['DM_Sans'] text-base text-primary font-semibold pr-4">{faq.q}</span>
                <span className={`transition-transform duration-300 text-primary flex-shrink-0 ${open === i ? 'rotate-180' : ''}`}>
                  <Icon name="chevDown" size={20} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-[200px] py-5' : 'max-h-0'} px-6`}>
                <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
            </ScrollAnimation>

          ))}
        </div>
        <ScrollAnimation>
            <div className="text-center mt-12">
          <p className="font-['DM_Sans'] text-base text-muted-foreground mb-4">Still have questions?</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-secondary text-secondary-foreground py-3.5 px-8 rounded-xl font-['DM_Sans'] font-semibold text-base no-underline inline-flex items-center gap-2"
          >
            <Icon name="whatsapp" size={20} /> Ask Us on WhatsApp
          </a>
        </div>
        </ScrollAnimation>
        
      </section>
    </div>
  );
}
