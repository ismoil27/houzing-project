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
import DashboardComponent from "../components/Sell/Dashboard";
import Favorite from "../components/Sell/Dashboard/Favorite";
import InBoxing from "../components/Sell/Dashboard/InBoxing";
import NewProperty from "../components/Sell/Dashboard/NewProperty";
import MyProperties from "../components/Sell/Dashboard/MyProperties";
import Edit from "../components/Sell/Dashboard/MyProperties/Edit";

export const Dashboard = [
  {
    id: 1,
    title: "Dashboard",
    pathname: "/sell/dashboard",
    Component: DashboardComponent,
    child: [],
    Icon: dashboard,
    role: ["admin"],
  },
  {
    id: 2,
    title: "My Profile",
    pathname: "/my-profile",
    Component: Generic,
    child: [],
    Icon: user,
    role: ["admin"],
  },
  {
    id: 3,
    title: "My Properties List",
    pathname: "/my-properties-list",
    Component: MyProperties,
    child: [],
    Icon: home,
    role: ["admin"],
  },
  {
    id: 4,
    title: "Add New Property",
    pathname: "/add-new-property",
    Component: NewProperty,
    child: [],
    Icon: plusDashed,
    role: ["admin"],
  },
  {
    id: 5,
    title: "Favorites",
    pathname: "/sell/dashboard",
    Component: DashboardComponent,
    child: [],
    Icon: dashboard,
    role: ["admin"],
  },
  {
    id: 6,
    title: "Saved Searches",
    pathname: "/saved-searches",
    Component: Edit,
    child: [],
    Icon: search,
    role: ["admin"],
  },
  {
    id: 7,
    title: "My Invoices",
    pathname: "/my-invoices",
    Component: Generic,
    child: [],
    Icon: invoice,
    role: ["admin"],
  },
  {
    id: 8,
    title: "Inbox",
    pathname: "/inbox",
    Component: InBoxing,
    child: [],
    Icon: msg,
    role: ["admin"],
  },
  {
    id: 9,
    title: "Logout",
    pathname: "/logout",
    Component: DashboardComponent,
    child: [],
    Icon: logout,
  },
];
