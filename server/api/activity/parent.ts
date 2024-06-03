import { Activity } from "~/server/models/Activity.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";
// import { Types } from 'mongoose';

export default defineEventHandler(async (event) => {
  try {
    const res = await Activity.find({ activity_parent: null });

    return { data: res, message: "" } as ApiResponse<[], string>;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
