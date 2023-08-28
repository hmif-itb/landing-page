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
  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setSelected(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <div className="fixed top-0 h-[90px] bg-[#F8C249] w-screen flex items-center grid gap-4 pr-8 z-50 mb-12">
      <div className="ml-5 w-[100px] h-[66px]">
        <Image src="/hmif.png" width={100} height={66} alt="Logo HMIF" />
      </div>
      <div
        className="absolute right-3 block md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Image src={"navbar.svg"} width={30} height={30} alt="Navbar" />
      </div>
      {isSiderbarOpen && (
        <>
          <div
            className="fixed bg-black top-0 left-0 w-full h-full opacity-70 transition-all ease-in-out duration-300"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="rounded-l-[20px] fixed top-0 right-0 h-screen min-h-[100vh] z-50 w-3/4 max-w-[308px] bg-[#FBE3A1] px-10">
            <div className="flex flex-col mt-16">
              <div className="relative flex flex-row">
                <h1 className="font-StretchPro text-[15px] text-[#1B1508]">
                  Menu
                </h1>
                <div
                  className="absolute right-2"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Image
                    src={"x-button.svg"}
                    width={20}
                    height={20}
                    alt="Button X"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col mt-4">
                <div className="w-full text-right py-3 border-b-0.7 border-b-[#966F16]" onClick={()=>router.push("/")}>
                  <p className="font-bold text-[12px] lg:text-[15px] font-poppins text-[#966F16]">
                    Tentang
                  </p>
                </div>
                <div className="w-full text-right py-3 border-b-0.7 border-b-[#966F16]" onClick={()=>router.push("/acara")}>
                  <p className="font-bold text-[12px] lg:text-[15px] font-poppins text-[#966F16]">
                    Acara
                  </p>
                </div>
                <div className="w-full text-right py-3 border-b-0.7 border-b-[#966F16]" onClick={()=>router.push("/prestasi")}>
                  <p className="font-bold text-[12px] lg:text-[15px] font-poppins text-[#966F16]">
                    Prestasi
                  </p>
                </div>
                <div className="w-full text-right py-3" onClick={()=>router.push("/kebutuhan-surat")}>
                  <p className="font-bold text-[12px] lg:text-[15px] font-poppins text-[#966F16]">
                    Kebutuhan Surat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="hidden md:flex absolute right-3 flex-row h-full mr-14 items-center font-StretchPro cursor-pointer">
        <p
          className="mx-6 text-[12px] lg:text-[15px]"
          onClick={() => router.push("/")}
          style={{ color: selected === "" ? "#966F16" : "#1B1508" }}
        >
          Tentang
        </p>
        <p
          className="mx-6 text-[12px] lg:text-[15px]"
          onClick={() => router.push("/acara")}
          style={{ color: selected === "acara" ? "#966F16" : "#1B1508" }}
        >
          Acara
        </p>
        <p
          className="mx-6 text-[12px] lg:text-[15px]"
          onClick={() => router.push("/prestasi")}
          style={{ color: selected === "prestasi" ? "#966F16" : "#1B1508" }}
        >
          Prestasi
        </p>
        <p
          className="ml-6 text-[12px] lg:text-[15px]"
          onClick={() => router.push("/kebutuhan-surat")}
          style={{ color: selected === "surat" ? "#966F16" : "#1B1508" }}
        >
          Kebutuhan Surat
        </p>
      </div>
    </div>
  );
}

export default Navbar;
