import {
  PostSendMessageParams,
  PostSendMessageResponse,
} from "@/types/chatbot";
import { Return } from "@/types/returns";
import { api } from "@/utils/api";
import { BASE_URL, BASE_URL_CHATBOT } from "./api";
import { apiParams } from "@/utils/constants";
import { BaseResponse } from "@/types/responses";

export async function sendMessage(
  params: PostSendMessageParams
): Promise<Return<BaseResponse<PostSendMessageResponse>>> {
  try {
    const response = await api<BaseResponse<PostSendMessageResponse>>(
      BASE_URL + `/v1/beneficiary-ownership/chatbot`,
      "POST",
      JSON.stringify(params)
    );
    return { success: response };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else if (typeof error === "string") {
      return { error };
    }
    return { error: "Unexpected error" };
  }
}
