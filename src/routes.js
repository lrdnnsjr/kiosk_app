import { MenuView, ConfirmOrderView } from "pages";

export const _appRoutes = [
  {
    path: "/",
    exact: true,
    component: MenuView,
    name: "Food Menu",
  },
  {
    path: "/confirm-order",
    exact: true,
    component: ConfirmOrderView,
    name: "Order Confirmation",
  },
];
