import React from "react";
import Image from "next/image";

interface NextArrowProps{
    nextPage : ()=>void;
}

const NextArrow = ({nextPage} : NextArrowProps) => {
  return (
    <div className="hover:opacity-70 absolute right-4 lg:right-12 top-2/4 cursor-pointer" onClick={nextPage}>
      <span className="hidden md:block">
        <Image src={"next-arrow.svg"} alt="next arrow" width={80} height={80} />
      </span>
      <span className="block md:hidden z-50">
        <Image src={"next-arrow.svg"} alt="next arrow" width={35} height={35} />
      </span>
    </div>
  );
};

export default NextArrow;
