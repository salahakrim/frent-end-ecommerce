import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { HiViewGridAdd, HiShoppingCart } from "react-icons/hi";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: HiShoppingCart,
    title: "Total Product",
    value: "0",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total Users",
    value: "0",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: HiViewGridAdd,
    title: "Total Categories",
    value: "0",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  // {
  //   color: "orange",
  //   icon: ChartBarIcon,
  //   title: "Sales",
  //   value: "$103,430",
  //   footer: {
  //     color: "text-green-500",
  //     value: "+5%",
  //     label: "than yesterday",
  //   },
  // },
];

export default statisticsCardsData;
