"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function NavbarText(content: string) {
  return <p className="mx-2">{content}</p>;
}

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(pathname.replace("/", ""));
  }, [pathname]);
  return (
    <div className="fixed top-0 h-[90px] bg-[#F8C249] w-screen flex items-center grid gap-4 pr-8 z-50 mb-12">
      <div className="ml-5 w-[100px] h-[66px]">
        <Image src="/hmif.png" width={100} height={66} alt="Logo HMIF" />
      </div>
      <div className="absolute right-3 flex flex-row h-full mr-14 items-center font-StretchPro cursor-pointer">
        <p
          className="mx-6 text-lg"
          onClick={() => router.push("/")}
          style={{ color: selected === "" ? "#966F16" : "#1B1508" }}
        >
          Tentang
        </p>
        <p
          className="mx-6 text-lg"
          onClick={() => router.push("/acara")}
          style={{ color: selected === "acara" ? "#966F16" : "#1B1508" }}
        >
          Acara
        </p>
        <p
          className="mx-6 text-lg"
          onClick={() => router.push("/prestasi")}
          style={{ color: selected === "prestasi" ? "#966F16" : "#1B1508" }}
        >
          Prestasi
        </p>
        <p
          className="ml-6 text-lg"
          onClick={() => router.push("/surat")}
          style={{ color: selected === "surat" ? "#966F16" : "#1B1508" }}
        >
          Kebutuhan Surat
        </p>
      </div>
    </div>
  );
}

export default Navbar;
