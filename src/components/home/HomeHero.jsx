import React from "react";
import HeroImage from "../../assets/home.png";

import {
  FaArrowRight,
  FaCalendarCheck,
  FaUserMd,
  FaHeartbeat,
  FaHospital,
} from "react-icons/fa";

const HomeHero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-background to-white overflow-hidden">
      <div className="lg:px-24 xl:px-30 md:py-16 px-5 py-5">

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-14 items-center">

          {/* Right Section (Image) - Mobile me 'order-first' lagaya hai taaki ye top par dikhe */}
          <div className="relative flex justify-center order-first lg:order-last mb-4 lg:mb-0">

            {/* Blue Blob Shape */}
            <div className="absolute w-[280px] h-[240px] sm:w-[420px] sm:h-[340px] md:w-[470px] md:h-[370px] bg-accent-light/30 rounded-[45%] rotate-3"></div>

            {/* Main Hero Illustration */}
            <img
              src={HeroImage}
              alt="Doctor"
              className="relative z-10 w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[850px] rounded-[40px] object-cover"
            />

            {/* Decorative Floating Spheres */}
            <div className="absolute -left-2 top-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-accent-light/40"></div>
            <div className="absolute right-2 bottom-6 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-accent-light/30 opacity-80"></div>

            {/* Animated SVG ECG Graph Tracker */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[180px] sm:w-[250px]">
              <svg width="100%" height="40" viewBox="0 0 250 40">
                <polyline
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="3"
                  points="
                    0,20
                    30,20
                    45,10
                    60,30
                    75,5
                    90,35
                    110,20
                    130,20
                    145,10
                    160,28
                    175,8
                    195,20
                    250,20
                  "
                />
              </svg>
            </div>

          </div>

          {/* Left Section (Content Text) - Desktops par responsive space layout maintain karega */}
          <div className="order-last lg:order-first">

            <p className="uppercase tracking-[3px] text-text-secondary text-xs font-semibold mb-4">
              Welcome to Mendwell Hospitals
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
              Mending Lives,
              <br />
              <span className="text-secondary">
                Together.
              </span>
            </h1>

            <p className="mt-6 text-text-secondary leading-relaxed max-w-lg text-sm sm:text-base">
              Comprehensive healthcare solutions under one roof.
              Clinics, diagnostics, telehealth, and pharmacy services —
              all designed around you.
            </p>

            {/* Call To Actions Wrapper */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="bg-primary hover:bg-primary-dark transition text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-3 font-medium shadow-lg">
                Book Appointment
                <FaArrowRight />
              </button>

              <button className="border border-border hover:border-primary hover:text-primary transition px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-3 text-text-primary">
                Explore Services
                <FaArrowRight size={14} />
              </button>

            </div>

            {/* Highlighted Micro Badges */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-12 sm:mt-14">

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-light/10 flex items-center justify-center text-icon-blue shrink-0">
                  <FaHeartbeat />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base">24×7</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">Emergency Care</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-light/10 flex items-center justify-center text-icon-blue shrink-0">
                  <FaUserMd />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base">Trusted</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">Specialists</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-light/10 flex items-center justify-center text-icon-blue shrink-0">
                  <FaCalendarCheck />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base">Advanced</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">Technology</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-light/10 flex items-center justify-center text-icon-blue shrink-0">
                  <FaHospital />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm sm:text-base">Patient</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">First Care</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeHero;