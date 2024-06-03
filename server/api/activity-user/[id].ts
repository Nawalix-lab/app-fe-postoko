import { UserActivity } from "~/server/models/UserActivity.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");

    const res = await UserActivity.find({ userId: id });

    return { data: res, message: "" } as ApiResponse<[], string>;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
