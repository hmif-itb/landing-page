"use client";
import { DataAchivement } from "@/types/type";
import Image from "next/image";
import React, { useState } from "react";

interface SliderProps {
  achievements: DataAchivement[] | undefined;
}
export default function PrestasiSlider({ achievements }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPage = () => {
    if (currentIndex === 0) {
      if (achievements) {
        setCurrentIndex(achievements?.length - 1);
      }
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPage = () => {
    if (achievements) {
      if (currentIndex === achievements.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };
  return (
    <div className="relative w-full max-w-screen h-[80vh] mt-12 flex items-center justify-center">
      <div className="absolute left-12 top-2/4" onClick={prevPage}>
        <Image src={"prev-arrow.svg"} alt="Prev arrow" width={80} height={80} />
      </div>
      <div className="absolute right-12 top-2/4" onClick={nextPage}>
        <Image src={"next-arrow.svg"} width={80} height={80} alt="arrow" />
      </div>
      <div className="flex bg-[#FBE3A1] h-full w-3/4 transition duration-500">
        <div className="w-full px-10 py-6 h-[80vh]">
          <div className="h-1/6">
            {achievements && (
              <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] z-30 font-StretchPro text-left text-[35px]">
                {achievements[currentIndex].name}
              </h1>
            )}
          </div>
          <div className="h-5/6 flex items-center justify-center">
            <div className="w-full grid grid-cols-2 min-h-2/4 gap-x-4 font-poppins text-[#1B1508] mt-8">
              <div className="px-5 mt-3 flex flex-col font-poppins text-[#1B1508] text-[15px] font-semibold text-justify">
                <p>
                  {achievements && achievements[currentIndex].penyelenggara}
                </p>
              </div>
              <div className="relative px-5 flex justify-center items-center">
                {achievements && (
                  <img
                    src={achievements[currentIndex].image}
                    alt="Acara"
                    width={300}
                    height={300}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
