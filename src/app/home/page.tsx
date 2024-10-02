import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSecond from "@/components/HeroSecond";
import Image from "next/image";
import React from "react";
import HeroBg from "../../assets/heroBg.png";
import HeroTh from "@/components/HeroTh";

function HomePage() {
  return (
    <div>
      <Hero />
      <HeroSecond />
      {/* <HeroTh /> */}
    </div>
  );
}

export default HomePage;
