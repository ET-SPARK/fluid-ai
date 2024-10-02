import Hero from "@/components/Hero";
import HeroSecond from "@/components/HeroSecond";
import React from "react";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

function HomePage() {
  return (
    <div>
      <Hero />
      <HeroSecond />
      <ImageCarousel />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
