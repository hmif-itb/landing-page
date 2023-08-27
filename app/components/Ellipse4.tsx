import React from "react";
import Image from "next/image";
const Ellipse4 = () => {
  return (
    <>
      <span className="hidden md:block">
        <Image src={"/Ellipse 4.png"} width={300} height={300} alt="Ellipse" />
      </span>
      <span className="block md:hidden">
        <Image src={"/Ellipse 4.png"} width={200} height={200} alt="Ellipse" />
      </span>
    </>
  );
};

export default Ellipse4;
