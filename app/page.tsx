import getAchievement from "@/lib/getAchievement";
import getEvent from "@/lib/getEvent";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css"
import Footer from "./components/Footer";
import About from "./components/About";
import CurrentEvent from "./components/CurrentEvent";
import Prestasi from "./components/Prestasi";

export default async function Home() {
  const achievements = await getAchievement();
  return (
    <main className="flex flex-col max-w-screen">
      <About />
      <CurrentEvent />
      <Prestasi />
    </main>
  );
}
