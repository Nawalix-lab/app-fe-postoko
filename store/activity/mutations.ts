import { v4 as uuidv4 } from "uuid";
const INITIAL_STATE = {
  activity_id: null,
  name: null,
  href: null,
  icon: {
    class: "material-symbols-outlined",
    text: null,
  },
  activity_parent: null,
};
export function setActivity(state: any, payload: Array<any>) {
  state.form_input = { ...state.form_input, ...payload };
}

export function setDataList(state: any, payload: Array<any>) {
  state.data = payload;
}

export function setActivityParent(state: any, payload: Array<any>) {
  state.parent = payload.map((item) => {
    return { value: item.activity_id, label: item.name };
  });
}

export function clearActivity(state: any) {
  state.form_input = INITIAL_STATE;
  state.form_input.activity_id = uuidv4();
}

export function setActivityPermissionList(state, payload) {
  state.permissions = [];
  const permissions = [];

  const hasChildern = (parent) => {
    const item = payload.activity.find(
      (item) => item.activity_parent === parent
    );
    return Boolean(item);
  };

  const getActions = (data) => {
    const item = payload.permissions.find(
      (item) => item.activity_id === data.activity_id
    );

    if (item) {
      return item.actions;
    } else {
      return { view: false, create: false, edit: false, delete: false };
    }
  };

  payload.activity.forEach((item) => {
    if (item.activity_parent === null && !hasChildern(item.activity_id)) {
      permissions.push({
        ...item,
        actions: getActions(item),
      });
    }

    if (item.activity_parent != null) {
      permissions.push({
        ...item,
        actions: getActions(item),
      });
    }
  });

  state.permissions = permissions;
}

export function changeActivityPermissions(state, payload) {
  const newPermissions = state.permissions.map((permission) => {
    if (permission._id === payload._id) {
      return {
        ...permission,
        actions: { ...permission.actions, ...payload.actions },
      };
    }

    return permission;
  });

  state.permissions = newPermissions;
}

export function clearActivityPermissions(state, payload) {
  state.permissions = [];
}
