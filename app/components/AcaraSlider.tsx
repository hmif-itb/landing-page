"use client";
import getEvent from "@/lib/getEvent";
import { DataEvent } from "@/types/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";

interface SliderProps {
  events: DataEvent[] | undefined;
}
export default function AcaraSlider({ events }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPage = () => {
    if (currentIndex === 0) {
      if (events) {
        setCurrentIndex(events?.length - 1);
      }
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPage = () => {
    if (events) {
      if (currentIndex === events.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="relative w-full h-[80vh] mt-12 flex items-center justify-center">
      <div className="absolute -top-20 left-0">
        <Image src={"/Ellipse 4.png"} width={300} height={300} alt="Ellipse" />
      </div>
      <div className="absolute -bottom-32 right-0">
        <Image src={"/Ellipse 5.png"} width={300} height={300} alt="Ellipse" />
      </div>
      <div className="absolute -bottom-4 right-6">
        <Image 
          src={"/megaphone-3.svg"}
          width={120}
          height={120}
          alt="Megaphone"
        />
      </div>
      <div className="absolute -top-8 left-6">
        <Image 
          src={"/megaphone-2.svg"}
          width={120}
          height={120}
          alt="Megaphone"
        />
      </div>
      <PrevArrow prevPage={prevPage} />
      <NextArrow nextPage={nextPage} />
      <div className="flex bg-[#FBE3A1] z-10 h-full w-3/4 transition duration-500 rounded-[30px]">
        <div className="w-full px-10 py-6 h-[80vh]">
          <div className="h-1/6">
            {events && (
              <>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] z-30 font-StretchPro text-left text-[40px]">
                  {events[currentIndex].name}
                </h1>
                <p className="font-poppins text-[#1B1508] text-[18px] font-semibold text-left">
                  {events[currentIndex].subtitle}
                </p>
              </>
            )}
          </div>
          <div className="h-5/6 flex flex-col items-center">
            <div className="w-full grid grid-cols-2 min-h-2/4 gap-x-4 font-poppins text-[#1B1508] mt-8">
              <div className="relative py-3 px-3 mt-3 flex items-center justify-center">
                <div className="absolute left-0 top-0">
                  <LeftRectangle />
                </div>
                <img
                  src={"/prestasi.png"}
                  alt="Acara"
                  width={300}
                  height={300}
                />
                <div className="absolute right-0 bottom-0">
                  <RightRectangle />
                </div>
              </div>
              <div className="px-5 mt-3 flex flex-col font-poppins text-[#1B1508] text-[15px] font-semibold text-justify">
                <p>{events && events[currentIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
