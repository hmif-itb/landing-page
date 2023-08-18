import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new Client({ auth: process.env.NOTION_SECRETS });

export default async function notionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log("Masuk ke handler");
    
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const pages = await client.databases.query({
      database_id: databaseId ? databaseId : "",
    });

    res.status(200).json(pages.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
}
