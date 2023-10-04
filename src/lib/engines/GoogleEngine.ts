import BaseEngine from "../Engine";
import crawler from "../../utils/crawler";
import { trimCharacter, parseQuestionToKeyword } from "../../utils/string";
import type { EngineInterface, EngineConstructorProps, EngineCrawlerProps, EngineCrawlerReturnType, EngineCompletionProps } from "../interfaces/Engine";

export default class GoogleEngine extends BaseEngine implements EngineInterface {
  public name = "google engine";
  public version = "v1.0.0";
  
  constructor (args: EngineConstructorProps) {
    const { language } = args;
    
    super({ language });
  }
  
  private async crawler ({ question, language = "id" }: EngineCrawlerProps): Promise<EngineCrawlerReturnType> {
    const keyword = parseQuestionToKeyword(question);
    const url = `https://google.com/search?q=${ keyword }&lang=${ language }`;
    const data = await crawler(url);
    
    return data;
  }
  
  public async completion(args: EngineCompletionProps) {
    const { crawler, fetchPageData, setDOM } = this;
    const { lotsOfResponse, exceptions, type } = args;
    const data: Promise<EngineCrawlerReturnType> = await crawler(args);
    
    return setDOM($).fetchPageData(data)
  }
}