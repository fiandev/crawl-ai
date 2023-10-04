import {describe, expect, test} from '@jest/globals';
import { AI } from "../build/main/index";

const main = async () => {
  let ai = new AI({
    language: "id",
    engine: "google"
  });
  let question = "siapa presiden Indonesia ?";
  let answer = await ai.completion(question);
  
  return answer;
}

describe("AI Module", () => {
  test("testing the AI response", async () => {
    let answer = await main();
    expect(answer).toBeInstanceOf(AI);
  })
})