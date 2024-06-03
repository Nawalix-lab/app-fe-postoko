import { User } from "~/server/models/User.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");

    const res = await User.find({
      _id: id,
    }).select({
      _id: 1,
      name: 1,
      email: 1,
      role: 1,
    });

    return { data: res, message: "" } as ApiResponse<[], string>;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
