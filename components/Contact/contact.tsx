import { ScrollAnimation } from "../shared/ScrollAnimation";
import { ImageCarousel } from "../shared/ImageCarousel";
import { ADDRESS, CALL_LINK, MAPS_LINK, WHATSAPP_LINK, HOURS } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";

export default function Contact() {

    return (
        <div className="bg-background min-h-screen">
            <section className="relative bg-gradient-to-br py-32 px-6 text-center overflow-hidden h-[500px]">
                <div className="absolute inset-0">
                    <ImageCarousel  interval={3000} />
                </div>
                <div className="relative z-10 flex flex-col justify-center h-full animate-fade-in-down">
                    <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">CONTACT US</span>
                    <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">Find Us & Reach Out</h1>
                </div>
            </section>
            <section className="max-w-[1200px] mx-auto py-16 px-6">
                <ScrollAnimation>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8">
                        <div className="rounded-2xl overflow-hidden min-h-[400px] shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d80.39!3d26.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37!2sSparsh+Physiotherapy+Clinic!5e0!3m2!1sen!2sin!4v1"
                                className="w-full h-full min-h-[400px] border-0"
                                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="group relative bg-card p-7 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="absolute inset-0 right-full bg-gradient-to-r from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:right-0"></div>
                                <div className="relative z-10">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-secondary/20 rounded-xl p-3 flex-shrink-0 text-primary transition-colors duration-500 group-hover:text-primary-foreground"><Icon name="mapPin" size={22} /></div>
                                        <div>
                                            <h3 className="font-['DM_Sans'] text-base text-primary font-semibold mb-1.5 transition-colors duration-500 group-hover:text-primary-foreground">Address</h3>
                                            <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed transition-colors duration-500 group-hover:text-primary-foreground/90">{ADDRESS}</p>
                                            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-2.5 text-primary font-['DM_Sans'] text-sm font-semibold no-underline transition-colors duration-500 group-hover:text-primary-foreground"
                                            >
                                                Get Directions <Icon name="arrowRight" size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ScrollAnimation>
                                <div className="group relative bg-card p-7 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="absolute inset-0 right-full bg-gradient-to-r from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:right-0"></div>
                                <div className="relative z-10">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-secondary/20 rounded-xl p-3 flex-shrink-0 text-primary transition-colors duration-500 group-hover:text-primary-foreground"><Icon name="phone" size={22} /></div>
                                        <div>
                                            <h3 className="font-['DM_Sans'] text-base text-primary font-semibold mb-1.5 transition-colors duration-500 group-hover:text-primary-foreground">Phone & WhatsApp</h3>
                                            <div className="flex items-center gap-4">
                                                <a href={CALL_LINK} className="font-['DM_Sans'] text-lg text-primary font-bold no-underline transition-colors duration-500 group-hover:text-primary-foreground">079056 51137</a>
                                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-['DM_Sans'] font-semibold text-xs no-underline inline-flex items-center gap-1.5 transition-colors duration-500"
                                                >
                                                    <Icon name="whatsapp" size={16} /> Chat on WhatsApp
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-4 mt-2.5">
                                                <a href={CALL_LINK} className="font-['DM_Sans'] text-lg text-primary font-bold no-underline transition-colors duration-500 group-hover:text-primary-foreground">090445 32990</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <div className="group relative bg-card p-7 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="absolute inset-0 top-full bg-gradient-to-b from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:top-0"></div>
                                <div className="relative z-10">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-secondary/20 rounded-xl p-3 flex-shrink-0 text-primary transition-colors duration-500 group-hover:text-primary-foreground"><Icon name="clock" size={22} /></div>
                                        <div className="w-full">
                                            <h3 className="font-['DM_Sans'] text-base text-primary font-semibold mb-3 transition-colors duration-500 group-hover:text-primary-foreground">Working Hours</h3>
                                            {HOURS.map((h, i) => (
                                                <div key={i} className="flex justify-between py-2 border-b border-border last:border-b-0">
                                                    <span className="font-['DM_Sans'] text-sm text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/90">{h.day}</span>
                                                    <div className="text-right">
                                                        <span className="font-['DM_Sans'] text-sm text-primary font-semibold transition-colors duration-500 group-hover:text-primary-foreground">{h.morning}</span>
                                                        {h.evening && h.evening !== "Closed" && (
                                                            <>
                                                                <br />
                                                                <span className="font-['DM_Sans'] text-sm text-primary font-semibold transition-colors duration-500 group-hover:text-primary-foreground">{h.evening}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ScrollAnimation>    
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
        </div>
    );
}