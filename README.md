# crawl-ai
tools that present data from search engine search results.

## how to usage

```javascript
import { AI } from "./src/index";

( async () => {
  let ai = new AI({
    language: "id",
    engine: "google"
  });
  let question = "siapa presiden Indonesia ?";
  let answer = await ai.completion(question);
  
  console.log(answer);
})()
```