import React from "react";
import LeftRectangle from "../components/LeftRectangle";
import Image from "next/image";
import Ellipse4 from "../components/Ellipse4";
import Ellipse5 from "../components/Ellipse5";
const KebutuhanSurat = () => {
  return (
    <div className="relative flex items-center justify-center h-[100vh] bg-[#F8C249] max-w-screen">
      <div className="relative w-full h-[80vh] mt-12 flex items-center justify-center">
        <div className="absolute -top-20 left-0">
          <Ellipse4 />
        </div>
        <div className="absolute -bottom-32 right-0">
          <Ellipse5 />
        </div>
        <div className="absolute -bottom-4 right-0 md:right-4 lg:right-16">
          <span className="block md:hidden">
            <Image
              src={"/clipboard-3.svg"}
              alt="Megaphone"
              width={60}
              height={60}
            />
          </span>
          <span className="hidden md:block">
            <Image
              src={"/clipboard-3.svg"}
              width={130}
              height={130}
              alt="Megaphone"
            />
          </span>
        </div>
        <div className="absolute -top-0 -left-1.5 md:-top-8 md:left-0 lg:left-16">
          <span className="hidden md:block">
            <Image
              src={"/clipboard-2.svg"}
              width={130}
              height={130}
              alt="Clipboard"
            />
          </span>
          <span className="block md:hidden">
            <Image
              src={"/clipboard-2.svg"}
              width={60}
              height={60}
              alt="Clipboard"
            />
          </span>
        </div>
        <div className="flex justify-center bg-[#FBE3A1] z-10 h-full w-3/4 transition duration-500 rounded-[30px]">
          <div className="flex items-center justify-center align-center px-5">
            <span className="hidden lg:block">
              <Image
                src={"/coming-soon.png"}
                width={855}
                height={420}
                alt="Coming Soon"
              />
            </span>
            <span className="hidden md:block lg:hidden">
              <Image
                src={"/coming-soon.png"}
                width={483}
                height={236}
                alt="Coming Soon"
              />
            </span>
            <span className="block md:hidden">
              <Image
                src={"/coming-soon.png"}
                width={278}
                height={136}
                alt="Coming Soon"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KebutuhanSurat;
