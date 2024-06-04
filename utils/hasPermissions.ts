const { data } = useAuth();

type Action = "view" | "create" | "edit" | "delete";
interface RequestPermissions {
  path: string;
  action: Action;
}

export function hasPermissions({ path, action }: RequestPermissions): boolean {
  try {
    const { permissions } = data.value || [];
    if (permissions) {
      const hasPermissions = permissions.find((item) => item.href === path);

      if (hasPermissions) {
        return hasPermissions.actions[action];
      } else return false;
    }
    return false;
  } catch (error) {
    showNotify({ name: "[hasPermissions]", type: "Error", error });
    return false;
  }
}
