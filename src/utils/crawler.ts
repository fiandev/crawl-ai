import axios from "axios";
import cheerio from "cheerio";
import type { EngineCrawlerReturnType } from "../interfaces/Engine";

export default async function crawler (url: string): Promise<EngineCrawlerReturnType> {
  const response = await axios.get(url);
  const html = response.data;
  const DOM = cheerio.load(html);
  
  return {
    html: html,
    $: DOM
  }
} 