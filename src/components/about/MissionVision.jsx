import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const missionData = [
  {
    title: "Our Mission",
    description:
      "To deliver high-quality, affordable, and compassionate healthcare through innovation, integrity, and teamwork.",
    icon: Target,
    titleColor: "text-[#FF7A21]",
    bgColor: "bg-[#FFF3EB]",
    iconColor: "text-[#FF7A21]",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted and preferred healthcare network, empowering communities to live healthier lives.",
    icon: Eye,
    titleColor: "text-[#00A6C7]",
    bgColor: "bg-[#EAFBFF]",
    iconColor: "text-[#00A6C7]",
  },
  {
    title: "Our Values",
    description:
      "Compassion, Excellence, Integrity, Respect, Accountability, and Patient-Centered Care guide everything we do.",
    icon: Heart,
    titleColor: "text-[#0B2147]",
    bgColor: "bg-[#EEF4FF]",
    iconColor: "text-[#0B2147]",
  },
];

function MissionVersion() {
  return (
    <section className="bg-white py-20">
      <div className=" px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2147]">
            Our Mission, Vision & Values
          </h2>

          <div className="w-24 h-1 bg-[#FF7A21] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {missionData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center mb-6`}
                >
                  <Icon
                    size={32}
                    className={`${item.iconColor} stroke-[2.5]`}
                  />
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 ${item.titleColor}`}
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionVersion;