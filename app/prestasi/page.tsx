import React from "react";
import PrestasiSlider from "../components/PrestasiSlider";
import getAchievement from "@/lib/getAchievement";

export default async function Prestasi() {
  const achievements = await getAchievement();

  return (
    <div className="flex items-center justify-center h-[110vh] ">
      <PrestasiSlider achievements={achievements} />
    </div>
  );
}
