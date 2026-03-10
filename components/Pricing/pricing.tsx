"use client"
import { SERVICES } from "@/lib/constants";
import { ImageCarousel } from "../shared/ImageCarousel";
import { ScrollAnimation } from "../shared/ScrollAnimation";
import { Icon } from "../shared/Icon";

export default function PricingComponent() {
    const images = [
        "/one.jpg",
        "/two.png"
    ];

    return (
        <div className="bg-[#f8f6f1] min-h-screen">
            <section className="relative bg-gradient-to-br py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <ImageCarousel images={images} interval={3000} overlayOpacity="bg-gray-800/70" />
                </div>
                <div className="relative z-10 animate-fade-in-down">
                    <span className="font-['DM_Sans'] text-xs text-yellow-600 font-semibold tracking-widest uppercase">PRICING & PAYMENTS</span>
                    <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">Transparent Pricing</h1>
                    <p className="font-['DM_Sans'] text-base text-white/70 mt-3">No hidden charges. Quality care at fair prices.</p>
                </div>
            </section>
            <section className="max-w-[900px] mx-auto pt-16 px-6">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
                    <div className="bg-green-900 px-7 py-5">
                        <h3 className="font-['DM_Sans'] text-lg text-white font-semibold">Service Pricing</h3>
                    </div>
                    <div>
                        {SERVICES.map((s, i) => (
                            <ScrollAnimation>
                            <div key={s.id} className="group relative flex justify-between items-center py-7.5 px-7 border-b border-gray-100 last:border-b-0 hover:bg-green-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                <div className="absolute inset-0 right-full bg-gradient-to-r from-green-400 to-green-300 transition-all duration-500 ease-in-out group-hover:right-0" />
                                    <div className="relative z-10 flex justify-between items-center w-full">
                                        <div className="flex items-center py-5 gap-3">
                                            <span className="text-5xl">{s.icon}</span>
                                            <span className="font-['DM_Sans'] text-sm text-gray-800">{s.title}</span>
                                        </div>
                                        <span className="font-['DM_Sans'] text-base text-green-900 font-bold transition-colors duration-500 ">{s.price}</span>
                                    </div>
                            </div>
                             </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-[900px] mx-auto pt-10 px-6">
                <ScrollAnimation delay={0.2}> 
                    <div className="bg-white p-9 rounded-2xl shadow-lg mb-8 hover:bg-green-100">
                        <h3 className="font-['DM_Sans'] text-xl text-green-900 font-semibold mb-6">Payment Methods Accepted</h3>
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                            {[
                                { name: "Cash", emoji: "💵" },
                                { name: "Google Pay (UPI)", emoji: "📱" },
                                { name: "PhonePe", emoji: "📲" },
                                { name: "Paytm", emoji: "💳" },
                                { name: "Bank Transfer", emoji: "🏦" },
                                { name: "Card", emoji: "💳" },
                            ].map((m, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-green-300">
                                    <span className="text-6xl">{m.emoji}</span>
                                    <span className="font-['DM_Sans'] text-sm text-gray-700 font-medium">{m.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
            <section className="max-w-[900px] mx-auto py-10 px-6">
                <ScrollAnimation delay={0.2}>
                <div className="bg-white p-9 rounded-2xl shadow-lg mb-8 hover:bg-green-100">
                    <h3 className="font-['DM_Sans'] text-xl text-green-900 font-semibold mb-6">Session Packages</h3>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
                        {[
                            { sessions: 1, label: "Single Session", price: "Regular price", tag: "" },
                            { sessions: 6, label: "Starter Pack", price: "5% discount", tag: "POPULAR" },
                            { sessions: 12, label: "Recovery Pack", price: "10% discount", tag: "BEST VALUE ⭐" },
                            { sessions: 24, label: "Complete Rehab", price: "15% discount", tag: "MAX SAVINGS" },
                        ].map((pkg, i) => (
                            <div key={i} className={`p-6 rounded-xl border-2 border-green-500 relative text-center hover:border-green-900 hover:bg-green-300`}>
                                {pkg.tag && (
                                    <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-green-900 text-white px-3 py-1 rounded-full font-['DM_Sans'] text-xs font-semibold tracking-tight">
                                        {pkg.tag}
                                    </span>
                                )}
                                <div className="font-['Playfair_Display'] text-9xl text-green-900 font-bold mb-1">{pkg.sessions}</div>
                                <div className="font-['DM_Sans'] text-xs text-gray-500 mb-1">sessions</div>
                                <div className="font-['DM_Sans'] text-sm text-gray-800 font-semibold">{pkg.label}</div>
                                <div className="font-['DM_Sans'] text-xs text-green-900 font-semibold mt-2">{pkg.price}</div>
                            </div>
                        ))}
                    </div>
                    <p className="font-['DM_Sans'] text-xs text-gray-500 text-center mt-5">
                        Contact us for exact package pricing based on your treatment plan.
                    </p>
                </div>
                </ScrollAnimation>
                </section>
        </div>
    );
}