"use client";
import React from "react";
import Image from "next/image";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";
import { DataEvent } from "@/types/type";
import { useRouter } from "next/navigation";
interface CurrentEvent {
  event: DataEvent;
}
const CurrentEvent = ({ event }: CurrentEvent) => {
  const router = useRouter();
  return (
    <div className="relative md:h-fit md:pb-3 lg:min-h-[90vh] bg-[#FBE3A1] max-w-screen pt-2">
      <div className="hidden md:block absolute -top-16 z-10">
        <Image width={300} height={300} src={"/Ellipse 4.png"} alt="Ellpise" />
      </div>
      <div className="block md:hidden absolute -top-16 z-10">
        <Image width={200} height={200} src={"/Ellipse 4.png"} alt="Ellpise" />
      </div>
      <div className="w-full px-12 mt-8">
        <p className="font-StretchPro text-[#1B1508] text-[11px] md:text-[25px]">
          Kegiatan yang sedang berjalan
        </p>
        <p className="self-end mt-4 text-[15px] md:text-[40px] text-right text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] font-StretchPro">
          {event.name}
        </p>
        <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 md:min-h-[60vh] gap-x-4">
          <div className="text-[11px] md:text-[15px] py-4 px-5 flex items-center md:items-start justify-center mt-3 font-poppins text-[#1B1508] font-semibold text-justify flex flex-col">
            <p>
              {event.description} 
            </p>
            <button className="md:self-start rounded-[20px] bg-[#966F16] w-[150px] md:w-[300px] h-[27px] md:h-[50px] shadow-1xl mt-5" onClick={()=>router.push("/acara")}>
              <p className="text-[11px] md:text-[15px] font-poppins text-[#1B1508] font-semibold text-[#FBE3A1]">
                Lihat acara lainnya
              </p>
            </button>
          </div>
          <div className="py-4 px-5 flex items-center justify-center mt-3">
            <div className="relative py-4 px-5 w-fit z-20">
              <div className="absolute top-0 left-0">
                <LeftRectangle />
              </div>
              <div className="z-20">
                <img
                  src={event.image}
                  width={250}
                  height={380}
                  alt={event.description}
                />
              </div>
              <div className="absolute bottom-0 right-0">
                <RightRectangle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentEvent;
