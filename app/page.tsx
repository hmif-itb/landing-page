import getEvent from "@/lib/getEvent";

export default async function Home() {
  const events = await getEvent()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {events?.map((event)=>{
        return(
          <div>
            <h1>{event.name}</h1>
            <h3>{event.subtitle}</h3>
            <p>{event.description}</p>
            <p>{event.date.toLocaleDateString()}</p>
          </div>
        )
      })}
    </main>
  );
}
