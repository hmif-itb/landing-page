import React from "react";
import Image from "next/image";

interface PrevArrowProps {
  prevPage: () => void;
}
const PrevArrow = ({prevPage} : PrevArrowProps) => {
  return (
    <div className="hover:opacity-70 absolute left-12 top-2/4 cursor-pointer" onClick={prevPage}>
      <Image src={"prev-arrow.svg"} alt="Prev arrow" width={80} height={80} />
    </div>
  );
};

export default PrevArrow;
