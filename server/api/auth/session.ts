import { UserActivity } from "~/server/models/UserActivity.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const meta = getMetadata(event);
    meta.permissions = [];

    const res = await UserActivity.find({ userId: meta._id });
    if (res) {
      meta.permissions = res[0]?.permissions;
    }

    return meta;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
