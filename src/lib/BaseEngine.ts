import type { BaseEngineConstructorProps } from "../interfaces/BaseEngine";
import type { EngineCrawlerReturnType } from "../interfaces/Engine";
import type { CheerioAPI } from "cheerio";

export default class BaseEngine {
  public namw = "base engine";
  public version = "1.0.0";
  public language: string;
  private $: CheerioAPI;
  
  constructor ({ language }: BaseEngineConstructorProps) {
    this.language = language;
  }
  
  protected setDOM (DOM: CheerioAPI): BaseEngine {
    this.$ = DOM;
    
    return this;
  }
  
  private elementMappings (selector: string) {
    const { $ } = this;
    
    return $(selector).map(function (index, element){
      return {
        text: $(element).text(),
        element: $(element),
        index: index,
      };
    });
  }
  
  public fetchPageData ({ $ }: EngineCrawlerReturnType) {
    const { elementMappings } = this;
    const completions = {};
    
    let pageTitle = $("title").text().trim();
    /*
     * get all <code/> or <pre/> tags
     */
    let codeTags = elementMappings("pre code, code");
    let articles = elementMappings("article, p");
    
    articles.forEach((article, i) => {
      
    });
    
    return {
      status: "success",
      code: 200,
      environment: "local",
      completions: completions,
    }
  }
}