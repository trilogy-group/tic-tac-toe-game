import { StatusCodes } from "./constants";
import { ActionOutput } from "./types";

export class OutputError extends Error {
  public statusCode: number;

  constructor(code: number, message = "") {
    super(message);
    this.statusCode = code;
    this.message = message;
  }
}

export const generateOutput = (
  statusCode: StatusCodes,
  bodyAsJsonType: unknown
): ActionOutput => {
  return {
    statusCode,
    body: JSON.stringify(bodyAsJsonType),
  };
};
