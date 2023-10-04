import type { SupportedEnginesType } from "../includes/interfaces/engines";

export type AiConstructorProps = {
  language: string;
  engineName: SupportedEnginesType;
};


export type AiCompletionProps = {
  question: string;
  type?: "text" | "image";
  lotsOfResponse?: number;
  exceptions?: string[];
}

type CompletionType = {
  answer: string;
  source?: string;
}

export type AiResponseType = {
  status: "success" | "error" | "maintenance";
  code: 200 | 404 | 500;
  environment?: "local" | "development" | "production";
  completions: Array<CompletionType>;
}