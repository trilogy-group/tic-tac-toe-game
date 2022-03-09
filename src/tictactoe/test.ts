import { StatusCodes } from "../constants";
import { handler } from "./index";

describe("Template functionality tests", () => {
  test("Success response", async () => {
    const message = "Hello World!";
    const inputBody = { message };
    const input = {
      headers: {},
      body: inputBody,
      context: {
        "flow_execution_id" : "Root=9-999999-9999999",
        "oauth": {}
      }
    };
    const output = await handler(JSON.stringify(input));
    expect(output.statusCode).toBe(StatusCodes.OK);
    expect(output.body).toBe(JSON.stringify(inputBody));
  });
  test("Failure response", async () => {
    const message = "Hello World!";
    const inputBody = { message };
    const input = {
      headers: {},
      body: inputBody,
      context: {
        "oauth": {}
      }
    };
    const output = await handler(JSON.stringify(input));
    expect(output.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });
});