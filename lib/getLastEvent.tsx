import { DataEvent, EventDate, Image, Page, Text, Title } from "@/types/type";
import { Client } from "@notionhq/client";
import { data } from "autoprefixer";

export default async function getLastEvent() {
  const client = new Client({ auth: process.env.NOTION_SECRETS });
  const databaseId = process.env.EVENTS_DATABASE_ID;
  const response = await client.databases.query({
    database_id: databaseId ? databaseId : "",
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  if (response.results) {
    const pages = response.results as Page[];
    const page = pages[0];
    const { properties } = page;
    const date = properties["Date"] as EventDate;
    const dateString = date.date.start;
    const dateArray = dateString.split("-");
    const dateFormatted = new Date(
      parseInt(dateArray[0]),
      parseInt(dateArray[1]) - 1,
      parseInt(dateArray[2]) + 1
    );
    // Destructure name property
    const name = properties["Name"] as Title;
    const image = properties["Image"] as Image;
    const nameValue = name.title[0].plain_text;

    // Destructure the description property
    const description = properties["Description"] as Text;
    const descValue = description.rich_text[0].plain_text;

    // Destrucutre the subtitle propery
    const subtitle = properties["subtitle"] as Text;
    const subtitleValue = subtitle.rich_text[0].plain_text;

    // Destucture the image property
    const imageValue = image.files[0].file.url;
    return {name : nameValue,subtitle : subtitleValue, date : dateFormatted,description : descValue,image : imageValue}
    
  }
}
