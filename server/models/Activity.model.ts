import { Schema, model } from "mongoose";

export const ActivitySchema = new Schema({
  activity_id: { type: String },
  name: { type: String },
  href: { type: String },
  icon: {
    class: { type: String },
    text: { type: String },
  },
  activity_parent: { type: String },
});

export const Activity = model<any>("Activity", ActivitySchema);
