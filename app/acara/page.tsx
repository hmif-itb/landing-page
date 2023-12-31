import React, { Component } from "react";
import Slider from "../components/AcaraSlider";
import getEvent from "@/lib/getEvent";
import AcaraSlider from "../components/AcaraSlider";
export default async function Acara() {
  const events = await getEvent();
  
  return (
    <div className="relative flex items-center justify-center h-[110vh] bg-[#F8C249] max-w-screen">
      <AcaraSlider events={events} />
    </div>
  );
}