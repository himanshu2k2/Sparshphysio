"use client";

import { Icon } from "@/components/shared/Icon";
import Link from "next/link";

interface ServiceTileProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  icon?: string;
  whatsappLink?: string;
}

export default function ServiceTile({ title, description, price, image, icon, whatsappLink }: ServiceTileProps) {
  const displayContent = image ? (
    <img src={image} alt={title} className="w-full h-auto object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
  ) : (
    <div className="text-9xl mb-4">{icon}</div>
  );

  return (
    <div className="group relative bg-card rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:border hover:border-[2px] hover:text-card-foreground hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20 cursor-pointer">
      <div className="absolute inset-0 top-full bg-gradient-to-t from-secondary to-card transition-all duration-500 ease-in-out group-hover:top-0"></div>
      <div className="relative z-10 overflow-hidden">
        <div className="overflow-hidden rounded-t-2xl">
          {displayContent}
        </div>
        <div className="p-6 rounded-b-2xl border border-2 group-hover:border-primary transition-all duration-500">
          <h3 className="font-['DM_Sans'] text-xl text-primary font-semibold mt-2.5 mb-2.5 transition-all duration-500 group-hover:text-primary">{title}</h3>
          <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed mb-2.5 transition-all duration-500 group-hover:text-foreground">{description}</p>
          <div className="flex justify-between items-center pb-2.5">
            <span className="font-['DM_Sans'] text-lg text-primary font-bold transition-all duration-500 group-hover:scale-110 inline-block">{price}</span>
            <Link href="/booking" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-['DM_Sans'] font-semibold text-xs no-underline inline-flex items-center gap-1.5 transition-all duration-500 group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-105 group-hover:shadow-lg"
            >
              Book Now <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
