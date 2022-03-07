/**
 * Sample action "echo" - remove/reuse if not required
 * */

import { generateOutput } from "../utils";
import { StatusCodes } from "../constants";
import { ActionOutput, GenericActionInput, ContextSchema } from "../types";

// The following interface would match with your input schema as set on the DevFlows UI
interface InputSchema {
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
    return generateOutput(StatusCodes.OK, body);
  } catch (e) {
    console.error(e);

    return generateOutput(e.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, {
      errorMessage: e.message,
      // Provide any custom classification of error types if required
      errorType: "",
      errorTrace: e.stack,
    });
  }
};
