import { Page, Text, Created, Image, Title } from "@/types/type";
import { Client } from "@notionhq/client";

export default async function getLastAchievement() {
  const client = new Client({ auth: process.env.NOTION_SECRETS });
  const databaseId = process.env.ACHIEVEMENTS_DATABASE_ID;
  const response = await client.databases.query({
    database_id: databaseId ? databaseId : "",
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });
  if (response.results) {
    const pages = response.results as Page[];
    const page = pages[0];
    const { properties } = page;
    const penyelenggara = properties["Penyelenggara"] as Text;
    const created = properties["Created"] as Created;
    const image = properties["Image"] as Image;
    const name = properties["Name"] as Title;

    const penyelenggaraValue = penyelenggara.rich_text[0].plain_text;
    const createdValue = created.created_time;

    const imageValue = image.files[0].file.url;
    const nameValue = name.title[0].plain_text;
    return {
      penyelenggara: penyelenggaraValue,
      date: new Date(createdValue),
      image: imageValue,
      name: nameValue,
    };
  }
}
