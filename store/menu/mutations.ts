const INITIAL_MENU = [
  {
    name: "Dashboard",
    icon: { class: "material-symbols-outlined", text: "dashboard" },
    href: "/",
  },
  {
    name: "Sale",
    icon: {
      class: "material-symbols-outlined",
      text: "admin_panel_settings",
    },
    children: [
      {
        href: "/sale/promotions",
        name: "Promotions",
      },
      {
        href: "/sale/termsofpayment",
        name: "Terms Of Payment",
      },
      {
        href: "/sale/customer",
        name: "Customer",
      },
      {
        href: "/sale/salesorder",
        name: "Sales Order",
      },
      {
        href: "/sale/transaction",
        name: "Transaction",
      },
    ],
  },
  {
    name: "Purchasing",
    icon: {
      class: "material-symbols-outlined",
      text: "admin_panel_settings",
    },
    children: [
      {
        href: "/purchasing/vendor",
        name: "Vendor",
      },
      {
        href: "/purchasing/order",
        name: "Order",
      },
      {
        href: "/purchasing/reception",
        name: "Reception",
      },
      {
        href: "/purchasing/retur",
        name: "Retur",
      },
      {
        href: "/purchasing/invoice-ap",
        name: "Invoice AP",
      },
      {
        href: "/purchasing/debt-aging",
        name: "Debt Aging",
      },
    ],
  },
  {
    name: "Admin",
    icon: {
      class: "material-symbols-outlined",
      text: "admin_panel_settings",
    },
    children: [
      {
        href: "/admin/activity",
        name: "Activity",
      },
      {
        href: "/admin/users",
        name: "Users",
      },
    ],
  },
];

export async function setUserMenu(state, payload) {
  const checkPermissions = (href) => {
    const item = payload.permissions.find((permit) => permit.href === href);
    return Boolean(item);
  };

  const item = INITIAL_MENU.filter((menu) => {
    if (!menu?.children && checkPermissions(menu.href)) {
      return menu;
    }

    if (menu?.children.length > 0) {
      const children = menu.children.filter((child) => {
        if (checkPermissions(child.href)) return child;
      });

      if (children.length > 0) return (menu.children = children);
    }
  });

  state.menu_item = item;
}

export function clearMenu(state: any) {
  state.menu_item = [];
}
