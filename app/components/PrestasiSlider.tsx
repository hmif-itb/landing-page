"use client";
import { DataAchivement } from "@/types/type";
import Image from "next/image";
import React, { useState } from "react";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";

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
    <div className="relative w-full max-w-screen h-[90vh] mt-12 flex items-center justify-center">
      <div className="absolute -top-20 left-0">
        <Image src={"/Ellipse 4.png"} width={300} height={300} alt="Ellipse" />
      </div>
      <div className="absolute -bottom-32 right-0">
        <Image src={"/Ellipse 5.png"} width={300} height={300} alt="Ellipse" />
      </div>
      <div className="absolute -bottom-4 right-6">
        <Image src={"/trophy-3.svg"} width={120} height={120} alt="trophy" />
      </div>
      <div className="absolute -top-8 left-6">
        <Image src={"/trophy-2.svg"} width={120} height={120} alt="trophy" />
      </div>
      <PrevArrow prevPage={prevPage} />
      <NextArrow nextPage={nextPage} />
      <div className="flex bg-[#FBE3A1] z-10 h-[90vh] w-3/4 transition duration-500 rounded-[30px]">
        <div className="w-full px-10 py-6 h-[80vh]">
          <div className="h-1/6">
            {achievements && (
              <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] z-30 font-StretchPro text-left text-[35px]">
                {achievements[currentIndex].name}
              </h1>
            )}
          </div>
          <div className="h-5/6 flex flex-col items-center justify-center">
            {achievements && (
              <>
                <div className="relative py-3 px-3 max-h-[320px]">
                  <div className="absolute -top-2 -left-4">
                    <LeftRectangle />
                  </div>
                  <div className="absolute -bottom-4 -right-4">
                    <RightRectangle />
                  </div>
                  <img
                    src={achievements[currentIndex].image}
                    width={300}
                    height={300}
                    alt={achievements[currentIndex].name}
                  />
                </div>
                <div className="flex flex-col font-poppins text-[#1B1508] text-[18px] font-semibold text-center mt-4">
                  <p>Penyelenggara :</p>
                  <p>{achievements[currentIndex].penyelenggara}</p>
                </div>

              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
