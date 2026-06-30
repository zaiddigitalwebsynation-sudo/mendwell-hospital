import React, { useState } from 'react';

const HeroBannerSlider = () => {
  // Pagination Active Indicator State
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full p-4 flex flex-col items-center gap-4">
      
      {/* Top Slider Carousel Indicators */}
      <div className="flex gap-2 items-center select-none">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-6 h-2 bg-secondary' : 'w-2 h-2 bg-border'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main Promo Banner Wrapper */}
      <div className="w-full bg-primary-dark rounded-3xl relative overflow-hidden min-h-[260px] md:h-[280px] flex flex-col md:flex-row items-center justify-between shadow-md">
        
        {/* Left Side: Doctor Image with Smooth CSS Fade Mask */}
        <div className="relative w-full md:w-1/3 h-[200px] md:h-full flex items-end overflow-hidden shrink-0">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" 
            alt="Doctor"
            className="w-full h-full object-cover object-top select-none z-10"
          />
          {/* Subtle gradient overlay to simulate the medical corridor blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 via-transparent to-primary-dark z-20 pointer-events-none md:block hidden" />
        </div>

        {/* Center Section: Core Text Contents & CTA Button */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-start text-left z-20 justify-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-2">
            Your Health is Our Priority
          </h1>
          <p className="text-text-light text-xs md:text-sm max-w-md font-normal leading-relaxed mb-6 opacity-90">
            Book an appointment today and experience <br /> the MendWell difference.
          </p>

          {/* Book Appointment CTA Button */}
          <button className="bg-secondary hover:bg-secondary-dark text-white font-semibold text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2 transition-all duration-300 shadow-sm">
            Book Appointment Now 
            <span className="text-base font-bold">&rarr;</span>
          </button>
        </div>

        {/* Right Side: Decorative Vectors (Heartbeat Line Graph + Leaves Vector) */}
        <div className="absolute right-0 bottom-0 h-full w-1/3 opacity-20 pointer-events-none md:flex hidden items-center justify-end p-6 z-10">
          {/* Heartbeat Line Shape Container */}
          <div className="absolute right-[40px] bottom-[40px] text-accent">
            <svg width="220" height="60" viewBox="0 0 220 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 30H60L70 10L80 50L90 25L95 35L100 30H220" />
            </svg>
          </div>
          
          {/* Faded Background Leave Design */}
          <div className="text-primary-light/30 transform rotate-12 translate-y-6 translate-x-6">
            <svg width="180" height="180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 7 19 7 19S16 17 20 9C21 7 19 6 17 8Z"/>
              <path d="M12 3C5 5 4 13 4 13S11 11 14 5C15 3 13 2 12 3Z" opacity="0.7"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroBannerSlider;