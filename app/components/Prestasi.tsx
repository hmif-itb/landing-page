import Image from "next/image";
import React from "react";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";

const Prestasi = () => {
  return (
    <div className="relative md:h-fit bg-[#F8C249] max-w-screen pt-2">
      <div className="hidden md:block absolute -top-16 z-10">
        <Image width={300} height={300} src={"/Ellipse 4.png"} alt="Ellpise" />
      </div>
      <div className="block md:hidden absolute -top-16 z-10">
        <Image width={200} height={200} src={"/Ellipse 4.png"} alt="Ellpise" />
      </div>
      <div className="w-full px-12 mt-8">
        <p className="self-start mt-4 text-[15px] md:text-[40px] text-left text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] font-StretchPro">
          Prestasi Mahasiswa HMIF ITB
        </p>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 md:min-h-[60vh] gap-x-4">
          <div className="py-4 px-5 flex items-center justify-center mt-3">
            <div className="relative py-4 px-5 w-fit">
              <div className="absolute top-0 left-0">
                <LeftRectangle />
              </div>
              <div className="z-20">
                <Image
                  src={"/prestasi.png"}
                  width={400}
                  height={400}
                  alt="Foto About Us"
                />
              </div>
              <div className="absolute bottom-0 right-0">
                <RightRectangle />
              </div>
            </div>
          </div>
          <div className="py-4 md:mt-3 text-[11px] md:text-[15px] pr-4 flex justify-center font-poppins text-[#1B1508] font-semibold text-left flex flex-col items-center lg:items-start">
            <p className="text-center lg:text-left">
             Penyelenggara : <br></br>
             Universitas Padjajaran
            </p>
            <button className="lg:self-start rounded-[20px] bg-[#966F16] w-[150px] md:w-[300px] h-[27px] md:h-[50px] shadow-1xl mt-5">
              <p className="text-[11px] md:text-[15px] font-poppins text-[#1B1508] font-semibold text-[#FBE3A1]">
                Lihat prestasi lainnya
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
