import React, { Component } from "react";
import Slider from "../components/Slider";
import getEvent from "@/lib/getEvent";
export default async function Acara() {
  const events = await getEvent();
  
  return (
    <div className="relative flex items-center justify-center h-[110vh] bg-[#F8C249] max-w-screen">
      <Slider events={events} />
    </div>
  );
}

// export default Acara;
