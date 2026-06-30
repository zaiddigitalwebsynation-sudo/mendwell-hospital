import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const leadershipData = [
  {
    name: "Dr. Rajiv Malhotra",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in healthcare administration and operations.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Chief Medical Officer",
    bio: "15+ years of expertise in clinical excellence and patient care.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dr. Vivek Mehta",
    role: "Director – Operations",
    bio: "Expert in healthcare operations, quality and patient safety.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dr. Priya Nair",
    role: "Director – Nursing",
    bio: "Leading with compassion and commitment to nursing excellence.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dr. Arjun Kapoor",
    role: "Director – Strategy",
    bio: "Driving innovation and strategic growth for better healthcare.",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
  },
];

function Leadership() {
  const [index, setIndex] = useState(0);

  // how many cards are visible at once (matches lg:grid-cols-5 / sm:grid-cols-2 below,
  // but on mobile we slide one-at-a-time using this index + scroll-snap)
  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(leadershipData.length - 1, i + 1));

  return (
    <section className="bg-white py-14">
      <div className="px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-[#0B2147] sm:text-3xl">
          Meet Our Leadership
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-500">
          A team of visionaries and healthcare professionals leading with expertise and compassion.
        </p>

        {/* ---------- Desktop / Tablet grid ---------- */}
        <div className="relative mt-10 hidden sm:block">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute -left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4 text-[#0B2147]" />
          </button>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
            {leadershipData.map((person) => (
              <LeadershipCard key={person.name} person={person} />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute -right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50"
          >
            <ChevronRight className="h-4 w-4 text-[#0B2147]" />
          </button>
        </div>

        {/* ---------- Mobile horizontal scroll-snap slider ---------- */}
        <div className="mt-8 sm:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {leadershipData.map((person) => (
              <div key={person.name} className="w-[75%] flex-shrink-0 snap-center">
                <LeadershipCard person={person} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-2 flex justify-center gap-1.5">
            {leadershipData.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-orange-500" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipCard({ person }) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      <img
        src={person.img}
        alt={person.name}
        className="h-44 w-full object-cover sm:h-40 lg:h-44"
      />
      <div className="p-4 text-center">
        <p className="font-bold text-[#0B2147]">{person.name}</p>
        <p className="mb-2 text-xs font-semibold text-orange-500">{person.role}</p>
        <p className="text-xs leading-relaxed text-slate-500">{person.bio}</p>
      </div>
    </div>
  );
}

export default Leadership;