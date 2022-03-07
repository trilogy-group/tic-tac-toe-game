export interface ActionOutput {
  statusCode: number;
  // Body's object shape (when parsed) matches with Output Schema on Devflows UI
  body: string;
}

export interface GenericActionInput {
  // Body's object shape matches with Input Schema on Devflows UI
  body: any;
  context: ContextSchema;
  headers?: {
    [key: string]: string;
  };
}

export interface ContextSchema {
  flow_execution_id: string;
  oauth?: object;
}
