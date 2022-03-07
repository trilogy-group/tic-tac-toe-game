import { handler } from "./index";
import { StatusCodes } from "../constants";

describe("Template functionality tests", () => {
  test("Success response", async () => {
    const delayTime = 1000;
    const timestamp1 = Date.now();
    const output = await handler(
      JSON.stringify({
        headers: {},
        body: { delayTime },
        context: {
          "flow_execution_id" : "Root=9-999999-9999999",
          "oauth": {}
        }
      })
    );
    const timestamp2 = Date.now();
    expect(output.statusCode).toBe(StatusCodes.OK);
    const bodyAsJson = JSON.parse(output.body);
    expect(bodyAsJson.message).toBe(
      `Returning this message after a delay of ${delayTime}`
    );
    expect(timestamp2 - timestamp1).toBeGreaterThan(delayTime);
    expect(timestamp2 - timestamp1).toBeLessThan(delayTime + 1000);
  });
});
