import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdLock,
  MdHome,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Tableau de bord",
    layout: "/admin",
    path: "/dashboard",
    sidebar: true,
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Interceptors",
    layout: "/admin",
    path: "/interceptors",
    sidebar: true,
    icon: (
      <Icon
        as={MdPerson}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: DataTables,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "Connexion",
    layout: "/auth",
    path: "/sign-in",
    sidebar: false,
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
