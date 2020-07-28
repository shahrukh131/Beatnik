import Savings from "./Products/Savings";
import EarlyCash from "./Products/EarlyCash";
import Chil from "./Products/Chil";
import image2 from "../images/iamge2.jpg";

export const routes = [
  {
    path: "/savings",
    exact: true,

    main: Savings,
  },
  {
    path: "/earlycash",

    main: EarlyCash,
  },
  {
    path: "/children",

    main: Chil,
  },
];
