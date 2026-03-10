"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Icon } from "@/components/shared/Icon";

interface ServiceTileProps {
  service: typeof SERVICES[0];
}

export default function ServiceTile({ service }: ServiceTileProps) {
  return (
    <Link
      key={service.id}
      href="/services"
      className="group p-7 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 bg-white no-underline block hover:bg-green-800 hover:-translate-y-1 hover:shadow-lg hover:border-green-800"
    >
      <div className="text-8xl mb-4 transition-colors duration-300 group-hover:text-white">{service.icon}</div>
      <h3 className="font-['DM_Sans'] text-lg text-green-900 font-semibold mb-2 transition-colors duration-300 group-hover:text-white">{service.title}</h3>
      <div className="font-['DM_Sans'] text-sm text-green-800 font-semibold transition-colors duration-300 group-hover:text-white mb-1">{service.price}</div>
      <p className="font-['DM_Sans'] text-sm text-white leading-tight transition-all duration-300 opacity-0 max-h-0 translate-y-1 group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0 overflow-hidden">{service.desc}</p>
    </Link>
  );
}

export function ViewAllServicesButton() {
  return (
    <Link href="/services" className="bg-transparent border-2 border-green-800 text-green-800 py-3.5 px-9 rounded-xl font-['DM_Sans'] font-semibold text-base cursor-pointer transition-all duration-300 inline-flex items-center gap-2 no-underline hover:bg-green-800 hover:text-white"
    >
      View All Services <Icon name="arrowRight" size={18} />
    </Link>
  );
}