import Image from "next/image";
import { Client } from "@notionhq/client";

interface SelectOption {
  id: string;
  name: string;
  color: string;
}

interface Property {
  id: string;
  type: string;
  select?: SelectOption;
  title?: string[];
  // Tambahkan tipe lain yang mungkin Anda perlukan di sini
}

interface Page {
  id: string;
  object: string;
  properties: {
    [key: string]: Property;
  };
}
export default function Home() {
  // Notion Connection's Secret Key
  const client = new Client({ auth: process.env.NOTION_SECRETS });
  // Database Id
  const databaseId = process.env.NOTION_DATABASE_ID;
  const fetchData = async () => {
    // Get all data
    const pages = await client.databases.query({
      database_id: databaseId ? databaseId : "",
    });
    // Hasil fetch datanya akan berupa array of Page
    const result = pages.results as Page[];

    // Iterate seluruh page kalau mau extract seluruh data
    result.map(async (page) => {
      try {
        const { properties } = page;
        // KODE DI BAWAH HANYA CONTOH
        
        // const jurusan = properties["Jurusan"];
        // const angkatan = properties["Angkatan"];
        // const nama = properties["Nama"];
        // const { select } = jurusan;
        // console.log("Ini select : ",select?.name);
        
      } catch (error) {
        console.log(error);
      }
    });
  };
  fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hai
    </main>
  );
}
