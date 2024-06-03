import { Activity } from "~/server/models/Activity.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";
import Joi from "joi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const activityValidation = Joi.object({
      activity_id: Joi.string().required(),
      name: Joi.string().required(),
      href: Joi.string().required(),
      icon: {
        class: Joi.string().required(),
        text: Joi.string().required(),
      },
      activity_parent: [Joi.string().optional(), Joi.allow(null)],
    });

    const { error } = activityValidation.validate(body);
    if (error) {
      throw createError({
        statusCode: 422,
        statusMessage: error.details[0].message,
      });
    }

    const res = await Activity.create(body);

    return { data: res, message: "Activity hasbeen saved" } as ApiResponse<
      [],
      string
    >;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});
