import getAchievement from "@/lib/getAchievement";
import getEvent from "@/lib/getEvent";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import About from "./components/About";
import CurrentEvent from "./components/CurrentEvent";
import Prestasi from "./components/Prestasi";
import getLastEvent from "@/lib/getLastEvent";
import { DataAchivement, DataEvent } from "@/types/type";
import getLastAchievement from "@/lib/getLastAchievement";

export default async function Home() {
  const achievements = await getAchievement();
  const lastEvent = await getLastEvent() as DataEvent;
  const lastAchievement = await getLastAchievement() as DataAchivement;
  return (
    <main className="flex flex-col max-w-screen">
      <About />
      <CurrentEvent event={lastEvent} />
      <Prestasi lastAchievement={lastAchievement} />
    </main>
  );
}
