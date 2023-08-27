import React from "react";
import Image from "next/image";

interface PrevArrowProps {
  prevPage: () => void;
}
const PrevArrow = ({ prevPage }: PrevArrowProps) => {
  return (
    <div
      className="hover:opacity-70 absolute left-4 md:left-12 top-2/4 cursor-pointer"
      onClick={prevPage}
    >
      <span className="hidden md:block">
        <Image src={"prev-arrow.svg"} alt="Prev arrow" width={80} height={80} />
      </span>
      <span className="block md:hidden z-50">
        <Image src={"prev-arrow.svg"} alt="Prev arrow" width={35} height={35} />
      </span>
    </div>
  );
};

export default PrevArrow;
