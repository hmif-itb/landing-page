import { Client } from "@notionhq/client";
import React from "react";

interface DataEvent {
  name: string;
  subtitle: string;
  date: Date;
  description: string;
}

interface EventDate {
  date: {
    start: string;
  };
}
interface SubTitle {
  plain_text: string;
}
interface Description {
  rich_text: SubTitle[];
}
interface subtitle {
  rich_text: SubTitle[];
}
interface Name {
  title: SubTitle[];
}

interface Page {
  id: string;
  object: string;
  properties: {
    [key: string]: EventDate | Name | Description;
  };
}

export default async function getEvent() {
  const client = new Client({ auth: process.env.NOTION_SECRETS });
  const databaseId = process.env.EVENTS_DATABASE_ID;
  const response = await client.databases.query({
    database_id: databaseId ? databaseId : "",
  });
  const dataEvents: DataEvent[] = [];

  if (response.results) {
    const pages = response.results as Page[];
    pages.map((page) => {
      try {
        const { properties } = page;

        // Destructure date properties
        const date = properties["Date"] as EventDate;
        const dateString = date.date.start;
        const dateArray = dateString.split("-");
        const dateFormatted = new Date(
          parseInt(dateArray[0]),
          parseInt(dateArray[1]) - 1,
          parseInt(dateArray[2]) + 1
        );
        // Destructure name property
        const name = properties["Name"] as Name;
        const nameValue = name.title[0].plain_text;

        // Destructure the description property
        const description = properties["Description"] as Description;
        const descValue = description.rich_text[0].plain_text;

        // Destrucutre the subtitle propery
        const subtitle = properties["subtitle"] as subtitle;
        const subtitleValue = subtitle.rich_text[0].plain_text;
        
        dataEvents.push({
            name : nameValue,
            subtitle : subtitleValue,
            date : dateFormatted,
            description : descValue
        })
      } catch (error) {}
    });
    return dataEvents;    
  }
}
