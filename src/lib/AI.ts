import type { AiConstructorProps, AiCompletionProps, AiResponseType } from "../interfaces/AI";
import Processor from "./Processor";

export default class AI extends Processor {
  public language: string;
  public engineName: string;
  
  constructor ({ language = "id", engineName = "google" }: AiConstructorProps) {
    super()
    
    this.language = language;
    this.engineName = engineName;
    this.useEngine({
      language: language,
      name: engineName
    });
  }
  
  public async completion ({ question, type = "text", lotsOfResponse = 3, exceptions = [] }: AiCompletionProps): Promise<AiResponseType> {
    const { engine } = this;
    const answer = await engine.completion({
      type: type,
      lotsOfResponse: lotsOfResponse,
      exceptions: exceptions,
      question: question,
    });
    
    return answer;
  }
}