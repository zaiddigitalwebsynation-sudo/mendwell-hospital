import React from "react";
import { Building2, Users, MapPinned, HeartHandshake, Clock } from "lucide-react";

const statsData = [
  {
    icon: Building2,
    number: "25+",
    title: "Specialties",
    description: "Expert care across multiple disciplines",
  },
  {
    icon: Users,
    number: "150+",
    title: "Experienced Doctors",
    description: "Highly qualified & compassionate team",
  },
  {
    icon: MapPinned,
    number: "5+",
    title: "Centers",
    description: "Across the city to serve you better",
  },
  {
    icon: HeartHandshake,
    number: "1,00,000+",
    title: "Happy Patients",
    description: "Lives touched with trust and care",
  },
  {
    icon: Clock,
    number: "24/7",
    title: "Care & Support",
    description: "Always here for your health needs",
  },
];

function Stats() {
  return (
    <section className="bg-[#0B2147] py-14">
      <div className=" px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {statsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left"
              >
                {/* Icon */}
                <div className="mb-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/5 sm:mb-0">
                  <Icon size={24} className="text-orange-400" strokeWidth={2} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-extrabold leading-tight text-orange-400 lg:text-3xl">
                    {item.number}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 max-w-[160px] text-xs leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;