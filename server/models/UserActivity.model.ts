import { Schema, model } from "mongoose";

const Actions = new Schema(
  {
    view: { type: Boolean },
    create: { type: Boolean },
    edit: { type: Boolean },
    delete: { type: Boolean },
  },
  { _id: false }
);

const Permissions = new Schema(
  {
    activity_id: { type: String },
    name: { type: String },
    href: { type: String },
    icon: {
      class: { type: String },
      text: { type: String },
    },
    actions: { type: Actions },
    activity_parent: { type: String },
  },
  { _id: false }
);

export const UserActivitySchema = new Schema({
  userId: { type: String },
  name: { type: String },
  email: { type: String },
  permissions: [Permissions],
});

export const UserActivity = model<any>("UserActivity", UserActivitySchema);
