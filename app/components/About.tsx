import React from "react";
import Image from "next/image";
import LeftRectangle from "./LeftRectangle";
import RightRectangle from "./RightRectangle";

const About = () => {
  return (
    <div className="relative min-h-[90vh]  md:h-fit lg:h-[100vh] bg-[#F8C249] max-w-screen mt-12 pt-8">
      <div className="hidden md:block absolute -top-16 z-10">
        <Image width={300} height={300} src={"/Ellipse 4.png"} alt="Ellpise" />
      </div>
      <div className="block md:hidden absolute -top-16 z-10">
        <Image width={200} height={200} src={"/Ellipse 4.png"} alt="Ellpise" />
      </div>
      <div className="w-full px-12 mt-8">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] z-30 font-StretchPro text-left text-[20px] md:text-[40px]">
          Himpunan Mahasiswa Informatika
        </h1>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 md:min-h-[60vh] gap-x-4">
          <div className="py-4 px-5 flex items-center justify-center mt-3">
            <div className="relative py-4 px-5 w-fit">
              <div className="absolute top-0 left-0">
                <LeftRectangle />
              </div>
              <div className="z-20">
                <Image
                  src={"/about-us.jpg"}
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

          <div className="text-[11px] md:text-[15px] py-4 px-5 flex items-center mt-3 font-poppins text-[#1B1508] font-semibold text-justify">
            <p>
              HMIF ITB atau Himpunan Mahasiswa Informatika Institut Teknologi
              Bandung adalah sebuah organisasi yang beranggotakan mahasiswa ITB
              yang berkeprofesian keinformatikaan. Himpunan ini melingkupi
              mahasiswa dari program studi Teknik Informatika dan Sistem
              Teknologi Informasi. HMIF ITB berdiri pada tanggal 10 November
              1982 dan sekarang bertempat di Labtek V Gedung Benny Subianto di
              ITB, Jl. Ganesa 10, Bandung.
              <br />
              <br />
              HMIF ITB bergerak berasaskan Tri Dharma Pendidikan, yakni: <br />
              1. Pendidikan <br />
              2. Penelitian <br />
              3. Pengabdian Masyarakat
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute -bottom-16 right-0 z-10">
        <Image width={300} height={300} src={"/Ellipse 5.png"} alt="Ellpise" />
      </div>
      <div className="block md:hidden absolute -bottom-16 right-0 z-10">
        <Image width={200} height={200} src={"/Ellipse 5.png"} alt="Ellpise" />
      </div>
    </div>
  );
};

export default About;
