import { Created, DataAchivement, Image, Page, Text, Title } from "@/types/type";
import { Client } from "@notionhq/client";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export default async function getAchievement() {
  const client = new Client({ auth: process.env.NOTION_SECRETS });
  const databaseId = process.env.ACHIEVEMENTS_DATABASE_ID;
  const response = await client.databases.query({
    database_id: databaseId ? databaseId : "",
  });
  const pages = response.results as Page[];
  const achievements : DataAchivement[] = [];
  if (pages) {
    pages.map((page) => {
      const { properties } = page as Page;
      try {        
        const penyelenggara = properties["Penyelenggara"] as Text;
        const created = properties["Created"] as Created;
        const image = properties["Image"] as Image;
        const name = properties["Name"] as Title;
        
        const penyelenggaraValue = penyelenggara.rich_text[0].plain_text;
        const createdValue = created.created_time;
        
        const imageValue = image.files[0].file.url
        const nameValue = name.title[0].plain_text
        achievements.push({
          penyelenggara : penyelenggaraValue,
          date : new Date(createdValue),
          image : imageValue,
          name : nameValue
        })
      } catch (error) {

      }
    });
  }
  return achievements;
}
