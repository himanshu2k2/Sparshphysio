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
    <div className="group relative bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:border hover:border-[2px]  hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-200">
      <div className="absolute inset-0 top-full bg-gradient-to-t from-green-400 to-white transition-all duration-500 ease-in-out group-hover:top-0"></div>
      <div className="relative z-10">
      {displayContent}
      <div className="p-6 rounded-b-2xl border border-2 group-hover:border-green-900 ">
        <h3 className="font-['DM_Sans'] text-xl text-green-900 font-semibold mt-2.5 mb-2.5">{title}</h3>
        <p className="font-['DM_Sans'] text-sm text-gray-600 leading-relaxed mb-2.5">{description}</p>
        <div className="flex justify-between items-center pb-2.5">
          <span className="font-['DM_Sans'] text-lg text-green-900 font-bold">{price}</span>
          <Link href="/booking" className="bg-green-900 text-white px-5 py-2.5 rounded-lg font-['DM_Sans'] font-semibold text-xs no-underline inline-flex items-center gap-1.5"
          >
            Book Now <Icon name="arrowRight" size={14} />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
