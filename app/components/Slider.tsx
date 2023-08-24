"use client";
import getEvent from "@/lib/getEvent";
import { DataEvent } from "@/types/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SliderProps {
  events: DataEvent[] | undefined;
}
export default function Slider({ events }: SliderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(events);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    console.log("Next page");
    if (events) {
      if (currentIndex === events.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      console.log("Masuk atas");
    }
  };

  return (
    <div className="relative w-5/6 h-[80vh] mt-12 flex items-center justify-center">
      <div className="absolute left-0 top-2/4" onClick={prevPage}>
        <Image src={"prev-arrow.svg"} width={80} height={80} alt="arrow" />
      </div>
      <div className="absolute right-0 top-2/4" onClick={nextPage}>
        <Image src={"next-arrow.svg"} width={80} height={80} alt="arrow" />
      </div>
      <div className="flex bg-[#FBE3A1] h-full w-3/4 transition duration-500">
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

          <div className="w-full grid grid-cols-2 h-2/4 gap-x-4 font-poppins text-[#1B1508] mt-8">
            <div className="relative px-5 flex items-center mt-3">
              <Image
                src={"/prestasi.png"}
                alt="Acara"
                width={440}
                height={440}
              />
            </div>
            <div className="px-5 mt-3 flex flex-col font-poppins text-[#1B1508] text-[15px] font-semibold text-justify">
              <p>{events && events[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
