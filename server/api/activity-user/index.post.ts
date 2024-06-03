import { UserActivity } from "~/server/models/UserActivity.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let res;
  try {
    const userAct = await UserActivity.find({ userId: body.userId });
    if (userAct.length > 0) {
      res = await UserActivity.updateOne({ userId: body.userId }, body);
    } else {
      res = await UserActivity.create(body);
    }

    return { data: res, message: "activity user hasbeen saved" } as ApiResponse<
      [],
      string
    >;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
