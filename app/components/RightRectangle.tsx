import Image from "next/image";
import React from "react";

const RightRectangle = () => {
  return (
    <>
      <div className="hidden md:block">
        <Image
          src={"/Rectangle 15.svg"}
          width={159}
          height={118}
          alt="Rectangle"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={"/Rectangle 15.svg"}
          width={72}
          height={56}
          alt="Rectangle"
        />
      </div>
    </>
  );
};

export default RightRectangle;
