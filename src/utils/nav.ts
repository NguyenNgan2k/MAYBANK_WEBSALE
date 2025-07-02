export interface NavItems {
  name: string;
  url: string;
  icon: string;
  right: string[];
  children?:
    | {
        name: string;
        url: string;
        right: string[];
      }[]
    | undefined;
}

export const navItems: NavItems[] = [
  {
    name: "Trang chủ",
    url: "/home",
    icon: "dashboard",
    right: ["ALL"],
  },
  {
    name: "Khách hàng",
    url: "/customers",
    icon: "customers",
    right: ["ALL"],
  },
  {
    name: "Đặt mua",
    url: "/orders",
    icon: "orders",
    right: ["ALL"],
  },
  {
    name: "Sổ lệnh",
    url: "/order-book",
    icon: "order-book",
    right: ["ALL"],
  },
  {
    name: "Hợp đồng",
    url: "/contracts",
    icon: "contracts",
    right: ["ALL"],
  },
  {
    name: "Tiện ích",
    url: "/extensions",
    icon: "extensions",
    right: ["ALL"],
  },
];
