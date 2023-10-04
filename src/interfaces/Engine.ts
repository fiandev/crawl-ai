 import type { CheerioAPI } from "cheerio";
 
 export type EngineConstructorProps = {
   language: string;
 }
 export type EngineCrawlerProps = {
   question: string;
   language?: string;
 }
 export type EngineCrawlerReturnType = {
   html: any;
   $: CheerioAPI;
 }
 export type EngineCompletionProps = {
  question: string;
  type?: "text" | "image";
  lotsOfResponse?: number;
  exceptions?: string[];
}

export interface EngineInterface {
  name: string;
  version: string;
  constructor();
  completion(args: EngineCompletionProps)
  crawler(args: EngineCrawlerProps): EngineCrawlerReturnType;
 
}