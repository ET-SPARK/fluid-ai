"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Use Next.js Image component
import Logo from "../assets/logo.png"; // Logo image
import HeroBg from "../assets/heroBg.png"; // Background image
import Inc from "../assets/inc.png"; // Replace with your image path
import { motion } from "framer-motion";
import Header from "./Header";
import Dubai from "../assets/dubai.png"; // Replace with your image path
import Dots from "../assets/3dot.png";
import Event from "../assets/Event.png";
import Tab from "../assets/Tab.png";
import Ticket from "../assets/ticket.png";
import Renew from "../assets/renew.png";
import Kite from "../assets/kite.png";
import Bookf from "../assets/bookf.png";
import Trip from "../assets/trip.png";
import Reservation from "../assets/Reservation.png";

function HeroTh() {
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

  const headerTranslateY = scrollY < 250 ? 0 : -scrollY + 250; // Header translateY
  const logoScale = scrollY < 250 ? 1 - scrollY / 1000 : 0.5; // Scale logo based on scroll (min scale 0.5)

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
        <div className="w-full flex justify-center items-center mt-[40vh]">
          <motion.div
            className="transition-transform duration-800"
            style={{ scale: logoScale }} // Apply scale transformation
          >
            <Image src={Logo} alt="logo" width={300} />
          </motion.div>
        </div>
      </div>

      {/* Container for Hero Background and Text */}
      <div className="relative z-10 mt-[60vh]">
        <Image src={HeroBg} alt="Background" className="w-full" />

        <motion.div
          className="absolute top-[10%]"
          style={{ left: `${imageX}px` }} // Move from left 0 to left 53 based on scroll
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <div className="relative">
            <Image src={Dubai} alt="dubai" className="w-full" />
            <span className="absolute top-2 left-2 bg-slate-200 text-white bg-opacity-30 text-sm py-1 px-2 rounded-[38px]">
              Restaurant
            </span>
            <div className="font-semibold">
              <span className="absolute top-2 right-2 text-white text-sm">
                <Image src={Dots} alt="dot" />
              </span>
              <span className="absolute bottom-8 left-2 text-white text-[16px]">
                Clap Dubai
              </span>
              <span className="absolute bottom-2 left-2 text-gray-200 text-[14px]">
                4.4 • $$$$ • Japanese • 123
              </span>
            </div>
          </div>
        </motion.div>

        {/* Inc Image moving from left to its position */}
        <motion.div
          className="absolute top-[35%]"
          style={{ left: `${incImageX}px` }} // Move from left 0 to desired position based on scroll
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Inc} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[45%]"
          style={{ left: `${incImageX}px` }} // Move from left 0 to desired position based on scroll
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Event} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[55%]"
          style={{ left: `${tabImageX}px` }} // Move from left 0 to desired position based on scroll
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Tab} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[65%]"
          style={{ left: `${ticketImageX}px` }} // Move from left 0 to desired position based on scroll
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Ticket} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[10%]"
          style={{ right: `${renewImageX}px` }} // Move from off-screen (right) to final position
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Renew} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[20%]"
          style={{ right: `${KiteImageX}px` }} // Move from off-screen (right) to final position
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Kite} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[35%]"
          style={{ right: `${bookFImageX}px` }} // Move from off-screen (right) to final position
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Bookf} alt="inc" className="w-full" />
        </motion.div>

        <motion.div
          className="absolute top-[45%]"
          style={{ right: `${TripImageX}px` }} // Move from off-screen (right) to final position
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Trip} alt="inc" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute top-[45%]"
          style={{ right: `${TripImageX}px` }} // Move from off-screen (right) to final position
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Trip} alt="inc" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute top-[55%]"
          style={{ right: `${ReservationImageX}px` }} // Move from off-screen (right) to final position
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <Image src={Reservation} alt="inc" className="w-full" />
        </motion.div>

        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <div className="text-[42px] mt-10 text-center flex flex-col">
            <span>Unlock Seamless</span>
            <span>Efficiency</span>
          </div>
          <div className="flex justify-center text-sm mt-4">
            <button className="bg-white text-black p-4 rounded-[28px] w-[167px] h-[52px] shadow-[0_0_15px_2px_rgba(255,255,255,1)]">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroTh;
