interface ActionInput {
  body:{
    status: number;
  };
  headers?: {
    [key: string]: string;
  };
}

interface ActionOutput {
  statusCode: number;
  body: string;
}

export const handler = async (input: string): Promise<ActionOutput> => {
  try {
    // Add business logic here
    const { body, headers } = JSON.parse(input) as ActionInput;
    // You can skip headers if you do not need them
    console.log(headers);

    const { status } = body;
    let response:string;

    if(status==0)
    response = "Game Drawn";
    else if(status==1)
    response = "Player 1 won";
    else if(status==2)
    response = "Player 2 won";
    else
    response = "Error";

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