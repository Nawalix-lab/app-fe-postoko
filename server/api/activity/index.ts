import { Activity } from "~/server/models/Activity.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";
// import { Types } from 'mongoose';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const filter = {};

    if (query?.parent) {
      Object.assign(filter, { activity_parent: query.parent });
    }

    const res = await Activity.find(filter);

    return { data: res, message: "" } as ApiResponse<[], string>;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
