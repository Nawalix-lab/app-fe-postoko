import { User } from "~/server/models/User.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const res = await User.deleteMany(body);
    if (res.deletedCount <= 0) {
      throw new Error("failed to delete item");
    }
    return {
      data: [],
      message: "User success fully deleteted",
    } as ApiResponse<[], string>;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
