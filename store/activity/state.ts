import { v4 as uuidv4 } from "uuid";

export default function (): any {
  return {
    form_input: {
      activity_id: uuidv4(),
      name: null,
      href: null,
      icon: {
        class: "material-symbols-outlined",
        text: null,
      },
      activity_parent: null,
    },
    data: [],
    parent: [],
    permissions: [],
  };
}
