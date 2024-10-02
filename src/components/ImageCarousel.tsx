"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image1 from "../assets/image.png"; // Logo image
import Famly from "../assets/family.png"; // Logo image
import Friend from "../assets/friends.png"; // Logo image

const carouselItems = [
  {
    image: Image1,
    alt: "Time for friends",
  },
  {
    image: Famly,
    alt: "Time for friends",
  },
  {
    image: Friend,
    alt: "Time for friends",
  },
];

export default function ImageCarousel() {
  return (
    <div className="">
      <div className="mt-48 max-[480px]:mt-24 mb-10 text-4xl max-[480px]:text-xl max-[480px]:px-10 max-[480px]:w-full w-[800px] px-20">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </div>
      <Carousel className="w-full max-w-8xl mx-auto px-">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[16/9] overflow-hidden ">
                <Image src={item.image} alt={item.alt} height={900} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[55%] left-10  bg-slate-200/30" />
        <CarouselNext className="absolute top-[55%] right-10 bg-slate-200/30 " />
      </Carousel>
    </div>
  );
}
