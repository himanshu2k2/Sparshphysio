"use client";

import { useState } from "react";
import { PHONE, SERVICES, CALL_LINK } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";
import { ScrollAnimation } from "../shared/ScrollAnimation";
import { ImageCarousel } from "../shared/ImageCarousel";

export default function BookingComponent() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return alert("Please fill in your name and phone number.");
    const msg = `*New Appointment Request*%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service || "General Consultation"}%0APreferred Date: ${form.date || "Flexible"}%0APreferred Time: ${form.time || "Flexible"}%0AMessage: ${form.message || "N/A"}`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#f8f6f1] min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-2xl text-center max-w-[500px] shadow-lg">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <Icon name="check" size={32} />
          </div>
          <h2 className="font-['Playfair_Display'] text-2xl text-green-900 mb-3">Booking Sent!</h2>
          <p className="font-['DM_Sans'] text-base text-gray-600 leading-relaxed mb-6">
            Your appointment request has been sent via WhatsApp. We&apos;ll confirm your slot within 30 minutes.
          </p>
          <a href={CALL_LINK} className="bg-green-900 text-white py-3.5 px-9 rounded-xl font-['DM_Sans'] font-semibold text-base no-underline inline-flex items-center gap-2"
          >
            <Icon name="phone" size={18} /> Or Call Us Directly
          </a>
        </div>
      </div>
    );
  }

  const images = [
    "/one.jpg",
    "/two.png",
  ]

  const inputClassName = "w-full p-3.5 rounded-xl border border-gray-300 font-['DM_Sans'] text-sm outline-none bg-white transition-colors duration-200 box-border focus:border-green-900";

  return (
    <div className="bg-[#f8f6f1] min-h-screen">
      <section className="relative bg-gradient-to-br py-32 px-6 text-center overflow-hidden h-[500px]">
        <div className="absolute inset-0 overflow-hidden">
          <ImageCarousel images={images} interval={3000}/>
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full animate-fade-in-down">
            <span className="font-['DM_Sans'] text-xs text-yellow-600 font-semibold tracking-widest uppercase">BOOK APPOINTMENT</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(32px,5vw,48px)] text-white mt-3">Schedule Your Visit</h1>
            <p className="font-['DM_Sans'] text-base text-white/70 mt-3">First consultation at just ₹100</p>
        </div>
      </section>
      <section className="max-w-[600px] mt-14 mx-auto px-6 pb-16">
        <ScrollAnimation>
        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-lg hover:shadow shadow-md transition-y-1 hover:translate-y-[-2px] hover:bg-green-100">
          <div className="flex flex-col gap-5">
            <div>
              <label className="font-['DM_Sans'] text-sm text-gray-600 font-medium block mb-1.5">Full Name *</label>
              <input className={inputClassName} placeholder="Enter your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="font-['DM_Sans'] text-sm text-gray-600 font-medium block mb-1.5">Phone Number *</label>
              <input className={inputClassName} placeholder="Enter your phone number" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="font-['DM_Sans'] text-sm text-gray-600 font-medium block mb-1.5">Service Required</label>
              <select className={`${inputClassName} cursor-pointer`} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service</option>
                {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title} — {s.price}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-['DM_Sans'] text-sm text-gray-600 font-medium block mb-1.5">Preferred Date</label>
                <input className={inputClassName} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
              <div>
                <label className="font-['DM_Sans'] text-sm text-gray-600 font-medium block mb-1.5">Preferred Time</label>
                <select className={`${inputClassName} cursor-pointer`} value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}>
                  <option value="">Select time</option>
                  <option>9:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 1:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 6:00 PM</option>
                  <option>6:00 PM - 8:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-['DM_Sans'] text-sm text-gray-600 font-medium block mb-1.5">Additional Message</label>
              <textarea className={`${inputClassName} min-h-20 resize-y`} placeholder="Describe your condition briefly..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button onClick={handleSubmit} className="bg-green-500 text-white p-4 rounded-xl border-0 font-['DM_Sans'] font-semibold text-base cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              <Icon name="whatsapp" size={22} /> Send Booking via WhatsApp
            </button>
            <p className="font-['DM_Sans'] text-xs text-gray-500 text-center">
              Or call directly: <a href={CALL_LINK} className="text-green-900 font-semibold">079056 51137</a>
            </p>
          </div>
        </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}