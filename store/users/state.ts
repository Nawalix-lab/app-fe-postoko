export default function (): any {
  return {
    form_input: {
      name: null,
      email: null,
      password: null,
      role: null,
    },
    data: [],
    opt_role: [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
    ],
  };
}
