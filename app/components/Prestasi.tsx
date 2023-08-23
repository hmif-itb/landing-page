import Image from "next/image";
import React from "react";

const Prestasi = () => {
  return (
    <div className="relative max-h-[110vh] bg-[#F8C249] max-w-screen align-middle">
      <div className="absolute z-10 top-8 right-0">
        <Image
          src={"/Ellipse 5.png"}
          width={300}
          height={300}
          alt="Ellipse Decoration"
        />
      </div>
      <div className="w-full px-12 mt-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#5D42E1] to-[#966F16] z-30 font-StretchPro text-left text-[40px]">
          Prestasi Mahasiswa HMIF ITB
        </h1>
        <div className="w-full grid grid-cols-2 h-5/6">
          <div className="relative py-4 px-5 flex items-center mt-3">
            <div className="absolute top-0 left-0">
              <Image
                src={"/Rectangle 14.svg"}
                width={150}
                height={118}
                alt="Rectangle"
              />
            </div>
            <div className="z-20">
              <Image
                src={"/prestasi.png"}
                width={440}
                height={440}
                alt="Prestasi"
              />
            </div>
            <div className="absolute bottom-0 right-24">
              <Image
                src={"/Rectangle 15.svg"}
                width={159}
                height={118}
                alt="Rectangle"
              />
            </div>
          </div>
          <div className="py-4 px-5 flex items-center mt-3 font-poppins text-[#1B1508] text-[15px] font-semibold text-justify">
            <p>
              Selamat kepada Tim wahoo.ai IF19 yang telah meraih penghargaan
              Juara 1 dalam Kompetisi Dunia Kreatif 2023 kategori pengembangan
              tools, dengan fokus pada Generative AI.
              <br /> <br />
              Kompetisi ini dipersembahkan oleh Korika, sebuah lembaga bergengsi
              dalam pengembangan teknologi dan inovasi, yang bertujuan untuk
              mendorong para inovator dari seluruh indonesia untuk merangkul
              potensi teknologi Generative AI dalam menciptakan solusi yang
              kreatif dan revolusioner.
              <br />
              <br />
              Kompetisi Dunia Kreatif dengan Generative AI 2023 <br />
              Penyelenggara: Korika <br />
              Juara 1: Wahoo.ai <br />
              13519028 Hafid Abi Daniswara <br />
              13519100 Aulia Adila <br />
              13519140 Fabian Savero Diaz Pranoto
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10">
        <Image src={"/Ellipse 5.png"} width={300} height={300} alt="Ellipse " />
      </div>
    </div>
  );
};

export default Prestasi;
