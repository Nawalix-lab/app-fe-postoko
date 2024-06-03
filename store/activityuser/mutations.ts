const INITIAL_STATE = {
  userId: null,
  name: null,
  email: null,
  permissions: [],
};

export function setFormData(state: any, payload: Array<any>) {
  state.form_data.userId = payload._id;
  state.form_data.name = payload.name;
  state.form_data.email = payload.email;
  state.form_data.permissions = payload.permissions;
}

export function clearFormData(state: any) {
  state.form_data = INITIAL_STATE;
}
