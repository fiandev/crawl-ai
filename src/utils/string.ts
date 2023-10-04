export function trimCharacter (str: string, character: string): string {
  if (str.slice(-1) === character) str = str.slice(0, -1);
  if (str.slice(0) === character) str = str.slice(1, str.length);
  
  return str;
}

export function parseQuestionToKeyword (question: string): string {
  let character = "+";
  let keyword = trimCharacter(question.replace(/(\s)+/g, character), character);
  
  return keyword
}