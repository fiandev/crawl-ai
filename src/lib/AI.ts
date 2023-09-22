// import AI_Interface from "../interfaces/AI";

export default class AI {
  private static isInitiated: boolean = false;
  constructor () {
    
  }
  
  public static init (): void | boolean {
    /*
     * returned self class when it has been initiated
     */
    if (AI.isInitiated) return;
    
    AI.prototype.constructor();
  }
}