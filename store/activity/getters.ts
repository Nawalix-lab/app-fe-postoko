export const getActivity = (state: any) => {
  return state.form_input;
};

export const getActivityList = (state: any) => {
  return state.data;
};

export const getActivityParent = (state: any) => {
  return state.parent;
};

export const getActivityPermissions = (state) => {
  return state.permissions;
};
