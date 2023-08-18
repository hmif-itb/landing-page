import { Client } from "@notionhq/client";
import React from "react";
interface SelectOption {
  id: string;
  name: string;
  color: string;
}

interface Text {
  type: string;
  text: { content: string };
  plain_text: string;
}

interface Property {
  id: string;
  type: string;
  select?: SelectOption;
  title?: Text[];
  // Tambahkan tipe lain yang mungkin Anda perlukan di sini
}
interface DataHMIF {
  nama: string;
  jurusan: string;
  angkatan: string;
}
interface Page {
  id: string;
  object: string;
  properties: {
    [key: string]: Property;
  };
}
export default async function getData() {
  //Notion Connection's Secret Key
  const client = new Client({ auth: process.env.NOTION_SECRETS });
  // Database Id
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await client.databases.query({
    database_id: databaseId ? databaseId : "",
  });
  const dataUsers: DataHMIF[] = [];

  if (response.results) {
    const result = response.results as Page[];
    result.map((page) => {
      try {
        const { properties } = page;
        // const jurusan = properties["Jurusan"];
        // const angkatan = properties["Angkatan"];
        // const nama = properties["Nama"];
        // const jurusanValue = jurusan.select?.name;
        // const angkatanValue = angkatan.select?.name;
        // const namaValue = nama.title ? nama.title[0].text.content : "";

        // dataUsers.push({
        //   nama: namaValue,
        //   jurusan: jurusanValue ? jurusanValue : "",
        //   angkatan: angkatanValue ? angkatanValue : "",
        // });
      } catch (error) {
        // console.log(error);
      }
    });

    return dataUsers;
  } else {
    throw new Error("Failed to fetch database");
  }
}
