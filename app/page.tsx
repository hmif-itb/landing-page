import getData from "@/lib/getData";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((user) => {
        return (
          <div className="white">
            <p>Nama : {user.nama}</p>
            <p>Jurusan : {user.jurusan}</p>
            <p>Angkatan : {user.angkatan}</p>
          </div>
        );
      })}
    </main>
  );
}
