import React from "react";
import Image from "next/image";

function NavbarText(content : string){
  return(
    <p className="mx-2">{content}</p>
  )
}

function Navbar() {
  return (
    <div className="fixed top-0 h-[90px] bg-[#F8C249] w-screen flex items-center grid gap-4 pr-8">
      <div className="ml-5 w-[100px] h-[66px]">
        <Image src="/hmif.png" width={100} height={66} alt="Logo HMIF" />
      </div>
      <div className="absolute right-3 flex flex-row h-full mr-14 items-center text-[#1B1508] font-StretchPro">
        <p className="mx-6 text-lg">Tentang</p>
        <p className="mx-6 text-lg">Acara</p>
        <p className="mx-6 text-lg">Prestasi</p>
        <p className="ml-6 text-lg">Kebutuhan Surat</p>
      </div>
    </div>
  );
}

export default Navbar;
