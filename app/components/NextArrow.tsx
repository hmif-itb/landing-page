import React from "react";
import Image from "next/image";

interface NextArrowProps{
    nextPage : ()=>void;
}

const NextArrow = ({nextPage} : NextArrowProps) => {
  return (
    <div className="hover:opacity-70 absolute right-12 top-2/4 cursor-pointer" onClick={nextPage}>
      <Image src={"next-arrow.svg"} width={80} height={80} alt="arrow" />
    </div>
  );
};

export default NextArrow;
