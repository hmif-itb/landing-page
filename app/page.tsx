import getAchievement from "@/lib/getAchievement";
import getEvent from "@/lib/getEvent";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css"

export default async function Home() {
  const achievements = await getAchievement();
  return (
    <main className="flex flex-col max-w-screen">
      <Navbar />
      {achievements.map((achievement) => {
        return (
          <div>
            <h1>{achievement.name}</h1>
            <p>Penyelenggara : {achievement.penyelenggara}</p>
            <img
              src={achievement.image}
              alt={achievement.name}
            />
          </div>
        );
      })}
    </main>
  );
}
