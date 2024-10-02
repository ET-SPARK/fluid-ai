"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Use Next.js Image component
import Logo from "../assets/logo.png"; // Logo image
import HeroBg from "../assets/heroBg.png"; // Background image
import Inc from "../assets/inc.png"; // Replace with your image path
import { motion } from "framer-motion";
import Header from "./Header";
import Dubai from "../assets/dubai.png"; // Replace with your image path
import Event from "../assets/Event.png";
import Tab from "../assets/Tab.png";
import Ticket from "../assets/ticket.png";
import Renew from "../assets/renew.png";
import Kite from "../assets/kite.png";
import Bookf from "../assets/bookf.png";
import Trip from "../assets/trip.png";
import Reservation from "../assets/Reservation.png";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerTranslateY = scrollY < 350 ? 0 : -scrollY + 350; // Header translateY
  const logoScale = scrollY < 350 ? 1 - scrollY / 1000 : 0.5; // Scale logo based on scroll (min scale 0.5)
  const imageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 253; // Move from -53 to 0 based on scroll

  // Calculate the x position based on scroll for Inc image
  const incImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 0;
  const tabImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 353;
  const ticketImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 253;
  const renewImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 200;
  const KiteImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 100;
  const bookFImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 0;
  const TripImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 53;
  const ReservationImageX = (Math.min(Math.max(scrollY, 0), 250) / 250) * 103;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-800`}
        style={{ transform: `translateY(${headerTranslateY}px)` }}
      >
        <Header />
        <div className="w-full flex justify-center items-center mt-[40vh] max-[460px]:mt-[20vh]">
          <motion.div
            className="transition-transform duration-800"
            style={{ scale: logoScale }} // Apply scale transformation
          >
            <Image
              src={Logo}
              alt="logo"
              width={300}
              className="max-[460px]:w-[200px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Container for Hero Background and Text */}
      <div className="relative z-10 mt-[60vh] max-[460px]:mt-[80vh]">
        <Image src={HeroBg} alt="Background" className="w-full" />
        <motion.div
          className="absolute top-[30%] "
          style={{ left: `${imageX}px` }} // Move from left 0 to left 53 based on scroll
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image
            src={Dubai}
            alt="Dubai"
            className="w-full max-[460px]:w-[100px]"
          />
        </motion.div>

        <motion.div
          className="absolute top-[55%]"
          style={{ left: `${incImageX}px` }} // Move from left 0 to desired position based on scroll
          transition={{ duration: 0.5 }}
        >
          <Image src={Inc} alt="inc" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[65%]"
          style={{ left: `${incImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Event} alt="Event" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[75%]"
          style={{ left: `${tabImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Tab} alt="Tab" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[85%]"
          style={{ left: `${ticketImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Ticket}
            alt="Ticket"
            className="w-full max-[460px]:w-1/2"
          />
        </motion.div>

        <motion.div
          className="absolute top-[30%]"
          style={{ right: `${renewImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Renew} alt="Renew" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[40%]"
          style={{ right: `${KiteImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Kite} alt="Kite" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[55%]"
          style={{ right: `${bookFImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Bookf} alt="Bookf" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[65%]"
          style={{ right: `${TripImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Trip} alt="Trip" className="w-full max-[460px]:w-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[75%]"
          style={{ right: `${ReservationImageX}px` }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Reservation}
            alt="Reservation"
            className="w-full max-[460px]:w-1/2"
          />
        </motion.div>

        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <div className="text-[42px] max-[460px]:text-[24px] mt-10 max-[460px]:mt-20 text-center flex flex-col">
            <span>Unlock Seamless</span>
            <span>Efficiency</span>
          </div>
          <div className="flex justify-center text-sm max-[460px]:text-[10px] mt-4">
            <button className="bg-white text-black p-4 rounded-[28px] w-[167px] h-[52px] max-[460px]:w-[100px] shadow-[0_0_15px_2px_rgba(255,255,255,1)]">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
