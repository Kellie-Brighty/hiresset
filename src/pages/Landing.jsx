import React from "react";
import ClientSection from "../components/landing/ClientSection";
import LandingCategories from "../components/landing/LandingCategories";
import LandingFooter from "../components/landing/LandingFooter";
import LandingHeader from "../components/landing/LandingHeader";
import LandingHero from "../components/landing/LandingHero";
import TalentSection from "../components/landing/TalentSection";
// import CoinpontApp from "@coinpont/optimism-sdk-backends/dist/CoinpontApp";

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <LandingHero />
      <LandingCategories />
      <ClientSection />
      <TalentSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
