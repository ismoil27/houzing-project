import { ReactComponent as dashboard } from "../components/assets/icons/dashboard.svg";
import { ReactComponent as user } from "../components/assets/icons/user.svg";
import { ReactComponent as search } from "../components/assets/icons/search.svg";
import { ReactComponent as invoice } from "../components/assets/icons/invoice.svg";
import { ReactComponent as home } from "../components/assets/icons/home.svg";
import { ReactComponent as heart } from "../components/assets/icons/heart.svg";
import { ReactComponent as plusDashed } from "../components/assets/icons/plus-dashed.svg";
import { ReactComponent as msg } from "../components/assets/icons/msg.svg";
import { ReactComponent as logout } from "../components/assets/icons/logout.svg";

import Generic from "../components/Generic";
import DashboardComponent from "../components/Sell/Dashboarddd";

import Favorites from "../components/Sell/Dashboarddd/Favorites";
import InBoxing from "../components/Sell/Dashboarddd/InBoxing";
import NewProperty from "../components/Sell/Dashboarddd/NewProperty";
import MyProperties from "../components/Sell/Dashboarddd/MyProperties";
import Edit from "../components/Sell/Dashboarddd/MyProperties/Edit";

export const Dashboarddata = [
  {
    id: 1,
    title: "Dashboard",
    path: "/sell/dashboard",
    element: <DashboardComponent />,
    child: [],
    Icon: dashboard,
    // role: ["admin"],
  },
  {
    id: 2,
    title: "My Profile",
    path: "/my-profile",
    // element: <Generic />,
    element: <Favorites />,
    child: [],
    Icon: user,
    // role: ["admin"],
  },
  {
    id: 3,
    title: "My Properties List",
    path: "/my-properties-list",
    element: <MyProperties />,
    child: [],
    Icon: home,
    // role: ["admin"],
  },
  {
    id: 4,
    title: "Add New Property",
    path: "/add-new-property",
    element: <NewProperty />,
    child: [],
    Icon: plusDashed,
    role: ["admin"],
  },
  {
    id: 5,
    title: "Favorites",
    path: "/favorites",
    element: <Favorites />,
    child: [],
    Icon: heart,
    // role: ["admin"],
  },
  {
    id: 6,
    title: "Saved Searches",
    path: "/saved-searches",
    element: <Edit />,
    child: [],
    Icon: search,
    // role: ["admin"],
  },
  {
    id: 7,
    title: "My Invoices",
    path: "/my-invoices",
    // element: <Generic />,
    element: <InBoxing />,
    child: [],
    Icon: invoice,
    // role: ["admin"],
  },
  {
    id: 8,
    title: "Inbox",
    path: "/inbox",
    element: <InBoxing />,
    child: [],
    Icon: msg,
    // role: ["admin"],
  },
  {
    id: 9,
    title: "Logout",
    path: "/logout",
    element: <DashboardComponent />,
    child: [],
    Icon: logout,
  },
];
