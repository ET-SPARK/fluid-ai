"use client";
import React, { useState } from "react";
import ContactBg from "../assets/contactBg.png";
import Hand from "../assets/hand.png";
import Image from "next/image";
import Uae from "../assets/uae.png";
import Usa from "../assets/usa.png";
import Pol from "../assets/pol.png";
import Fra from "../assets/fra.png";

// Define the type for country objects
interface Country {
  name: string;
  flag: StaticImageData; // Assuming you're using Next.js Image with imported static images
}

function Contact() {
  const countries: Country[] = [
    { name: "United Arab Emirates", flag: Uae },
    { name: "USA", flag: Usa },
    { name: "Poland", flag: Pol },
    { name: "France", flag: Fra },
  ];

  // Track selected country and dropdown visibility
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle country selection
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country.name);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative mt-64 max-[480px]:mt-24 h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: `url(${ContactBg.src})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white p-8">
        <h1 className="text-4xl max-[480px]:text-xl font-bold mt-16 max-[480px]:mt-8 max-[480px]:ml-5 max-[480px]:w-full ml-10 w-[300px]">
          Join the Fluid AI Waitlist Today!
        </h1>
        <div className="mt-8 ml-10 max-[480px]:mt-4 max-[480px]:ml-2 w-[400px] max-[480px]:w-full">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-transparent border-b border-white text-white outline-none py-2"
            placeholder="Name"
            onFocus={() => setDropdownOpen(false)} // Close dropdown when input is clicked
          />
        </div>
        <div className="mt-8 ml-10 max-[480px]:mt-4 max-[480px]:ml-2 w-[400px] max-[480px]:w-full">
          <input
            type="text"
            id="email"
            name="email"
            className="w-full bg-transparent border-b border-white text-white outline-none py-2"
            placeholder="Email"
            onFocus={() => setDropdownOpen(false)} // Close dropdown when input is clicked
          />
        </div>

        {/* Country Selection */}
        <div className="mt-8 ml-10 max-[480px]:mt-4 max-[480px]:ml-2 w-[400px] max-[480px]:w-full">
          <div className="relative">
            <div
              className="bg-transparent border-b border-white py-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
            >
              <div className="flex items-center">
                <Image
                  src={
                    countries.find((c) => c.name === selectedCountry)?.flag ||
                    Uae
                  }
                  alt={selectedCountry}
                  width={30}
                  height={20}
                />
                <span className="ml-2">{selectedCountry}</span>
              </div>
            </div>

            {/* Dropdown List */}
            {dropdownOpen && (
              <div className="absolute bg-black w-full mt-2 rounded z-20">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <Image
                      src={country.flag}
                      alt={country.name}
                      width={30}
                      height={20}
                    />
                    <span className="ml-2">{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 ml-10  max-[480px]:mt-4 max-[480px]:ml-2">
          <button className="bg-white text-black p-4 rounded-[28px] w-[167px]   h-[52px] shadow-[0_0_15px_2px_rgba(255,255,255,1)]">
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Hand Image on Top */}
      <div className="absolute bottom-0 right-0 z-50">
        <Image src={Hand} alt="hand" width={900} />
      </div>
    </div>
  );
}

export default Contact;
