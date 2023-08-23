import React from "react";
import Image from "next/image";

const CurrentEvent = () => {
  return (
    <div className="relative h-[110vh] bg-[#FBE3A1] max-w-screen">
      <div className="absolute -left-3">
        <Image
          className="rotate-180"
          src={"/Ellipse 4.png"}
          alt="Ellipse"
          width={300}
          height={300}
        />
      </div>
      <div className="w-full h-full flex flex-col px-12 pt-3">
        <p className="font-StretchPro text-[#1B1508] text-[25px]">
          Kegiatan yang sedang berjalan
        </p>
        <p className="self-end mt-4 text-[40px] text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] font-StretchPro">
          SPARTA HMIF 2022
        </p>
        <div className="w-full grid grid-cols-2 h-5/6 gap-x-4 font-poppins text-[#1B1508] mt-8 ">
          <div className="pt-5 px-5 flex flex-col items-center font-semibold text-justify">
            <p className="text-[15px]">
              SPARTA (Simulasi dan Pelatihan Keorganisasian Untuk Anggota)
              adalah kaderisasi tahap awal pada rangkaian masa orientasi anggota
              muda Himpunan Mahasiswa Informatika ITB
            </p>
            <div className="flex flex-col mt-5">
              <h1 className="text-[18px] font-bold">Visi</h1>
              <p className="text-[15px]">
                Mewujudkan SPARTA HMIF ITB 2022 sebagai katalisator gelora
                berkemahasiswaan adiwidia demi mencapai tujuan HMIF ITB dan
                kebutuhan anggotanya.
              </p>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-[18px] font-bold">Misi</h1>
              <p className="text-[15px]">
                1. Memperkenalkan HMIF ITB untuk keberlanjutan asas-asas dan
                nilai kulturalnya <br />
                2. Menanamkan gelora berkemahasiswaan adiwidia sebagai upaya
                kontribusi mahasiswa intelektual yang dapat memberikan dampak
                <br />
                3. Menginisiasi dan membangun rasa kekeluargaan antar setiap
                anggota HMIF yang terlibat Mengembangkan sikap profesional dan
                kemampuan dalam rumpun keinformatikaan yang diminati
                <br />
              </p>
            </div>
            <button className="w-[300px] h-[50px] bg-[#966F16] rounded-2xl mt-8 self-start shadow-1xl">
              <p className="font-Poppins text-[#FBE3A1]">Lihat acara lainnya</p>
            </button>
          </div>
          <div className="relative pt-5 px-5">
            <div className="absolute top-0 left-0">
              <Image
                src={"/Rectangle 14.svg"}
                width={159}
                height={118}
                alt="Rectangle decoration"
              />
            </div>
            <div className="absolute bottom-0 right-8">
              <Image
                src={"/Rectangle 15.svg"}
                width={159}
                height={118}
                alt="Rectangle Decoration"
              />
            </div>
            <div className="absolute top-4 left-8 z-10">
              <Image
                src={"/SPARTA1.png"}
                width={300}
                height={420}
                alt="SPARTA 1"
              />
            </div>
            <div className="absolute bottom-3 right-16">
              <Image
                src={"/SPARTA2.png"}
                width={300}
                height={420}
                alt="SPARTA 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentEvent;
