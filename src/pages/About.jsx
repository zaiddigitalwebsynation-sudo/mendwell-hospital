import React from "react";

import AboutHero from "../components/about/AboutHero";
import MissionVersion from "../components/about/MissionVision"
import Stats from "../components/about/Stats";
import Leadership from "../components/about/Leadership";
import Accreditions from "../components/about/Accreditation";
import CTA from "../components/about/CTA";

function About() {
  return (
    <section className="w-full bg-white py-16">
      <AboutHero />
      <MissionVersion/>
      <Stats />
      <Leadership />
      <Accreditions />
      <CTA />
</section>

    
  );
}

export default About;