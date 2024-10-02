import React from "react";
import IPhone1 from "../assets/iPhone1.png";
import IPhone2 from "../assets/iPhone2.png";
import IPhone3 from "../assets/iPhone3.png";
import IPhone4 from "../assets/iPhone4.png";
import Image from "next/image";

function HeroSecond() {
  return (
    <div className="mt-20">
      <div className="text-center text-sm my-10 font-light">Our Features</div>
      <div className="flex justify-center text-center text-4xl max-[480px]:text-xl">
        Fluid AI was born out of a
      </div>
      <div className="flex justify-center text-center text-4xl max-[480px]:text-xl">
        desire to simplify and
      </div>
      <div className="flex justify-center text-center text-4xl max-[480px]:text-xl">
        streamline modern life.
      </div>

      <div>
        <div className="grid grid-cols-3 items-center mt-10 gap-20 max-[480px]:grid-cols-1">
          <div className="px-10 ">
            <div className="text-2xl max-[480px]:text-[18px] mb-10 max-[480px]:text-xl max-[480px]:mb-4 ">
              Fluid AI: Simplify, Organize, and Achieve More
            </div>
            <div>
              <div className="text-sm">
                In a world where daily tasks, communication, and goals often
                become overwhelming, Fluid AI offers an innovative solution.
                Combining advanced AI technology with a user-friendly interface,
                it brings together to-do lists, chats, saved items, and bucket
                lists into one seamless platform.
              </div>
            </div>
          </div>
          <div className="">
            <Image src={IPhone1} alt="IPhone1" height={783} width={386} />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-3 items-center mt-10 gap-20 max-[480px]:flex flex-col-reverse  ">
          <div></div>
          <div className="">
            <Image src={IPhone2} alt="IPhone1" height={783} width={386} />
          </div>

          <div className="px-10 ">
            <div className="text-2xl max-[480px]:text-[18px] mb-10 max-[480px]:text-xl max-[480px]:mb-4 ">
              Fluid AI: Simplify, Organize, and Achieve More
            </div>
            <div>
              <div className="text-sm">
                In a world where daily tasks, communication, and goals often
                become overwhelming, Fluid AI offers an innovative solution.
                Combining advanced AI technology with a user-friendly interface,
                it brings together to-do lists, chats, saved items, and bucket
                lists into one seamless platform.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center mt-10 gap-20 max-[480px]:grid-cols-1">
          <div className="px-10 ">
            <div className="text-2xl max-[480px]:text-[18px] mb-10 max-[480px]:text-xl max-[480px]:mb-4 ">
              Fluid AI: Simplify, Organize, and Achieve More
            </div>
            <div>
              <div className="text-sm">
                In a world where daily tasks, communication, and goals often
                become overwhelming, Fluid AI offers an innovative solution.
                Combining advanced AI technology with a user-friendly interface,
                it brings together to-do lists, chats, saved items, and bucket
                lists into one seamless platform.
              </div>
            </div>
          </div>
          <div className="">
            <Image src={IPhone3} alt="IPhone1" height={783} width={386} />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-3 items-center mt-10 gap-20 max-[480px]:flex flex-col-reverse">
          <div></div>
          <div className="">
            <Image src={IPhone4} alt="IPhone1" height={783} width={386} />
          </div>

          <div className="px-10 ">
            <div className="text-2xl max-[480px]:text-[18px] mb-10 max-[480px]:text-xl max-[480px]:mb-4 ">
              Fluid AI: Simplify, Organize, and Achieve More
            </div>
            <div>
              <div className="text-sm">
                In a world where daily tasks, communication, and goals often
                become overwhelming, Fluid AI offers an innovative solution.
                Combining advanced AI technology with a user-friendly interface,
                it brings together to-do lists, chats, saved items, and bucket
                lists into one seamless platform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSecond;
