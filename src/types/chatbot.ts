export type PostSendMessageParams = {
  thread_id: string;
  user_message: string;
};

export type PostSendMessageResponse = {
  response: string;
  references: any[];
};
