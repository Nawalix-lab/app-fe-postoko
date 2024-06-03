const INITIAL_STATE = {
  name: null,
  email: null,
  passwrod: null,
  role: null,
};

export function setUser(state: any, payload: Array<any>) {
  state.form_input = { ...state.form_input, ...payload };
}

export function setDataList(state: any, payload: Array<any>) {
  state.data = payload;
}

export function clearUsers(state: any) {
  state.form_input = INITIAL_STATE;
}
