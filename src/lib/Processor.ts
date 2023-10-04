import engines from "../includes/engines";
import { ProcessorUseEngineProps } from "../interfaces/Processor";
import type { EngineInterface } from "../interfaces/Engine";

export default class Processor {
  protected memory: any[];
  protected engine: EngineInterface;
  
  constructor () {
    this.memory = [];
    
  }
  
  protected useEngine (args: ProcessorUseEngineProps): void {
    const { name, language } = args;
    const Engine = engines[name];
    const engine = new Engine({
      language: language,
    });
    
    this.engine = engine
  }
}