
 import { generateOutput } from "../utils";
 import { StatusCodes } from "../constants";
 import { ActionOutput, GenericActionInput, ContextSchema } from "../types";


 interface InputSchema {
  status: number;
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
    // You can skip headers if you do not need them

    const { status } = body;
    let response:string;

    if(status==0)
    response = "Game Drawn";
    else if(status==1)
    response = "Player 1 won";
    else if(status==2)
    response = "Player 2 won";
    else
    response = "error";

    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (e) {
    console.error(e);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errorMessage: e.message,
        errorType: "",
      }),
    };
  }
};

//{"headers":{},"body":{"status":1}}