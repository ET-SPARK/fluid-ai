import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSecond from "@/components/HeroSecond";
import Image from "next/image";
import React from "react";
import HeroBg from "../../assets/heroBg.png";
import HeroTh from "@/components/HeroTh";
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
      {/* <HeroTh /> */}
    </div>
  );
}

export default HomePage;
