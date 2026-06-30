import React from "react";
import HomeHero from "../components/home/HomeHero";
import BestAppointment from "../components/home/BestAppointment";
import OurServices from "../components/home/OurServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CareEcosystem from "../components/home/CareEcosystem";
import Testimonials from "../components/home/Testimonials";
import HeroBannerSlider from "../components/home/HeroBannerSlider";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HomeHero />
      <BestAppointment />
      <OurServices />
      <WhyChooseUs />
      <CareEcosystem />
      <Testimonials />
      <HeroBannerSlider />
    </div>
  );
};

export default Home;
