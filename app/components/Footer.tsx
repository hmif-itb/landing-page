import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-screen bg-[#1B1508] h-[300px] filter drop-shadow-lg flex flex-row items-center px-5 shadow-2xl">
      <div className="w-[343px] h-[225px]">
        <Image src="/logo-hmif.png" alt="logo HMIF" width={343} height={225} />
      </div>
      <div className="h-full flex flex-col grid grid-rows-3 items-center ml-8 text-[#FBE3A1]">
        <div className="flex flex-col font-poppins">
          <p className="font-bold text-[22px]">Alamat</p>
          <p className="text-[13px] mt-2">
            Labtek V Gedung Benny Subianto di ITB, Jl Ganesa 10, Bandung
          </p>
        </div>
        <div className="flex flex-col font-poppins">
          <p className="font-bold text-[22px]">Kontak</p>
          <p className="text-[13px] mt-1">
            +62 821-9744-7500 (CP Luar ITB untuk Universitas & Komunitas)
          </p>
          <p className="text-[13px] mt-1">
            +62 813-1122-9890 (CP Luar ITB untuk Perusahaan)
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="relative flex flex-col h-[60px] items-center">
            <div className="h-[50px] items-center">
              <Image
                src={"/instagram.png"}
                alt="Logo instagram"
                width={50}
                height={50}
              />
            </div>
            <p>HMIF ITB</p>
          </div>
          <div className="flex flex-col h-[60px] items-center">
            <div className="h-[50px] items-center">
              <Image
                src={"/linkedin.png"}
                width={38}
                height={35}
                alt="Linked in logo"
              />
            </div>
            <p>HMIF ITB</p>
          </div>
          <div className="flex flex-col h-[60px] items-center">
            <div className="h-[50px] items-center">
              <Image
                src={"/youtube.png"}
                alt="Logo youtube"
                width={50}
                height={50}
              />
            </div>

            <p>HMIF ITB</p>
          </div>
          <div className="flex flex-col h-[60px] items-center">
            <div className="h-[50px] items-center">
              <Image
                src={"/twitter.png"}
                alt="Logo twitter"
                width={40}
                height={40}
              />
            </div>

            <p>HMIF ITB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
