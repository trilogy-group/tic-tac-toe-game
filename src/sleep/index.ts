/**
 * Sample action "sleep"
 * - to demonstrate an async-await delay
 * - remove if not needed
 *
 * Returns the input after a delay as specified by the property "delayTime" in the input
 */
import delay from "./delay";
import { ActionOutput, GenericActionInput, ContextSchema } from "../types";
import { generateOutput } from "../utils";
import { StatusCodes } from "../constants";

// The following interface would match with your input schema as set on the DevFlows UI
interface InputSchema {
  delayTime: number;
}

// The following interface would match with your output schema as set on the DevFlows UI
interface OutputSchema {
  message: string;
}

interface ActionInput extends GenericActionInput {
  body: InputSchema;
  context: ContextSchema;
}

export const handler = async (input: string): Promise<ActionOutput> => {
  try {
    // Add business logic here
    const inputAsJson: ActionInput = JSON.parse(input);
    const { body } = inputAsJson;
    const { context } = inputAsJson;
    if (!context?.flow_execution_id) {
      return generateOutput(StatusCodes.BAD_REQUEST, {
        errorMessage: "Flow Execution ID (flow_execution_id) not specified in context",
        errorType: "Bad Request"
      });
    }
    const { delayTime } = body;
    await delay(delayTime);

    const output: OutputSchema = {
      message: `Returning this message after a delay of ${delayTime}`,
    };

    return generateOutput(StatusCodes.OK, output);
  } catch (e) {
    console.error(e.stackTrace);

    return generateOutput(e.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, {
      errorMessage: e.message,
      // Provide any custom classification of error types if required
      errorType: "",
      errorTrace: e.stack,
    });
  }
};
