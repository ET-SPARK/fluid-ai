import React from "react";
import Image from "next/image"; // Use Next.js Image component
import Logo from "../assets/logo.png"; // Logo image

function Footer() {
  return (
    <div className="p-20 h-[400px]  max-[480px]:p-10">
      <div className="flex justify-between  max-[480px]:flex flex-col">
        <div>
          <div>
            <Image src={Logo} alt="logo" width={150} />
          </div>
          <div className="mt-10 text-sm">2024 Fluid AI</div>
        </div>
        <div className="grid gap-36 grid-cols-2  max-[480px]:mt-10 ">
          <div>
            <div className="mb-2">Our Features</div>
            <div className="mb-2">Areas</div>
            <div className="mb-2">FAQs</div>
            <div className="mb-2">The Waitlist</div>
            <div className="mb-2">Contact us</div>
          </div>
          <div>
            <div className="mb-2">Terms of Service</div>
            <div className="mb-2">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
