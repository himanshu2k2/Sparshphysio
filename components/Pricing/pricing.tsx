"use client"
import { SERVICES } from "@/lib/constants";
import { ImageCarousel } from "../shared/ImageCarousel";
import { ScrollAnimation } from "../shared/ScrollAnimation";

export default function PricingComponent() {


    return (
        <div className="bg-background min-h-screen">
            <section className="relative bg-gradient-to-br py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <ImageCarousel interval={3000} overlayOpacity="bg-gray-800/70" />
                </div>
                <div className="relative z-10 animate-fade-in-down">
                    <span className="font-['DM_Sans'] text-xs text-secondary font-semibold tracking-widest uppercase">PRICING & PAYMENTS</span>
                    <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">Transparent Pricing</h1>
                    <p className="font-['DM_Sans'] text-base text-white/70 mt-3">No hidden charges. Quality care at fair prices.</p>
                </div>
            </section>
            <section className="max-w-[900px] mx-auto pt-16 px-6">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg mb-8">
                    <div className="bg-primary px-7 py-5">
                        <h3 className="font-['DM_Sans'] text-lg text-primary-foreground font-semibold">Service Pricing</h3>
                    </div>
                    <div>
                        {SERVICES.map((s, i) => (
                            <ScrollAnimation>
                            <div key={s.id} className="group relative flex justify-between items-center py-7.5 px-7 border-b border-border last:border-b-0 hover:bg-secondary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="absolute inset-0 right-full bg-gradient-to-r from-secondary to-primary/60 transition-all duration-500 ease-in-out group-hover:right-0" />
                                    <div className="relative z-10 flex justify-between items-center w-full">
                                        <div className="flex items-center py-5 gap-3">
                                            <span className="text-5xl">{s.icon}</span>
                                            <span className="font-['DM_Sans'] text-sm text-foreground group-hover:text-primary-foreground">{s.title}</span>
                                        </div>
                                        <span className="font-['DM_Sans'] text-base text-primary font-bold transition-colors duration-500 group-hover:text-primary-foreground">{s.price}</span>
                                    </div>
                            </div>
                             </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-[900px] mx-auto pt-10 px-6">
                <ScrollAnimation delay={0.2}>
                    <div className="bg-card p-9 rounded-2xl shadow-lg mb-8 hover:bg-secondary/10">
                        <h3 className="font-['DM_Sans'] text-xl text-primary font-semibold mb-6">Payment Methods Accepted</h3>
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                            {[
                                { name: "Cash", emoji: "💵" },
                                { name: "Google Pay (UPI)", emoji: "📱" },
                                { name: "PhonePe", emoji: "📲" },
                                { name: "Paytm", emoji: "💳" },
                                { name: "Bank Transfer", emoji: "🏦" },
                                { name: "Card", emoji: "💳" },
                            ].map((m, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted hover:bg-secondary/10">
                                    <span className="text-6xl">{m.emoji}</span>
                                    <span className="font-['DM_Sans'] text-sm text-foreground font-medium">{m.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
            <section className="max-w-[900px] mx-auto py-10 px-6">
                <ScrollAnimation delay={0.2}>
                <div className="bg-card p-9 rounded-2xl shadow-lg mb-8 hover:bg-secondary/10">
                    <h3 className="font-['DM_Sans'] text-xl text-primary font-semibold mb-6">Session Packages</h3>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
                        {[
                            { sessions: 1, label: "Single Session", price: "Regular price", tag: "" },
                            { sessions: 6, label: "Starter Pack", price: "5% discount", tag: "POPULAR" },
                            { sessions: 12, label: "Recovery Pack", price: "10% discount", tag: "BEST VALUE ⭐" },
                            { sessions: 24, label: "Complete Rehab", price: "15% discount", tag: "MAX SAVINGS" },
                        ].map((pkg, i) => (
                            <div key={i} className={`p-6 rounded-xl border-2 border-secondary relative text-center hover:border-primary hover:bg-secondary/10`}>
                                {pkg.tag && (
                                    <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full font-['DM_Sans'] text-xs font-semibold tracking-tight">
                                        {pkg.tag}
                                    </span>
                                )}
                                <div className="font-['Playfair_Display'] text-9xl text-primary font-bold mb-1">{pkg.sessions}</div>
                                <div className="font-['DM_Sans'] text-xs text-muted-foreground mb-1">sessions</div>
                                <div className="font-['DM_Sans'] text-sm text-foreground font-semibold">{pkg.label}</div>
                                <div className="font-['DM_Sans'] text-xs text-primary font-semibold mt-2">{pkg.price}</div>
                            </div>
                        ))}
                    </div>
                    <p className="font-['DM_Sans'] text-xs text-muted-foreground text-center mt-5">
                        Contact us for exact package pricing based on your treatment plan.
                    </p>
                </div>
                </ScrollAnimation>
                </section>
        </div>
    );
}