"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../build/main/index");
const main = async () => {
    let ai = new index_1.AI({
        language: "id",
        engine: "google"
    });
    let question = "siapa presiden Indonesia ?";
    let answer = await ai.completion(question);
    return answer;
};
(0, globals_1.describe)("AI Module", () => {
    (0, globals_1.test)("testing the AI response", async () => {
        let answer = await main();
        (0, globals_1.expect)(answer).toBeInstanceOf(index_1.AI);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQUkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFJLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUQ7QUFDckQsK0NBQXlDO0FBRXpDLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ3RCLElBQUksRUFBRSxHQUFHLElBQUksVUFBRSxDQUFDO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsUUFBUTtLQUNqQixDQUFDLENBQUM7SUFDSCxJQUFJLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQztJQUM1QyxJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBRUQsSUFBQSxrQkFBUSxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDekIsSUFBQSxjQUFJLEVBQUMseUJBQXlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDekMsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFBLGdCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==