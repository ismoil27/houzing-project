import Home from "../components/Home";
import Buy from "../components/Buy";
import Rent from "../components/Rent";
import Sell from "../components/Sell";
import FindRealtors from "../components/FindRealtors";
import MyProperties from "../components/MyProperties";
import MyHome from "../components/MyHome";
import RegisterAsRealtor from "../components/RegisterAsRealtor";
import Login from "../components/Login";
import Registration from "../components/Registration";

export const navbar = [
  {
    id: 1,
    // title: "Home",
    path: "/",
    element: <Home />,
    child: [],
  },

  {
    id: 2,
    title: "Buy",
    path: "/buy",
    element: <Buy />,
    child: [],
  },
  {
    id: 3,
    title: "Sell",
    path: "/sell",
    element: <Sell />,
    child: [],
  },
  {
    id: 4,
    title: "Rent",
    path: "/rent",
    element: <Rent />,
    child: [],
  },
  {
    id: 5,
    title: "Find Realtors",
    path: "/find_realtors",
    element: <FindRealtors />,
    child: [],
  },
  {
    id: 6,
    title: "My Properties",
    path: "/my_properties",
    element: <MyProperties />,
    child: [],
  },
  {
    id: 7,
    title: "My Home",
    path: "/my_home",
    element: <MyHome />,
    child: [],
  },
  {
    id: 8,
    title: "Register as Realtor",
    path: "/register_as_realtor",
    element: <RegisterAsRealtor />,
    child: [],
  },
  {
    id: 9,
    title: "Login",
    path: "/login",
    element: <Login />,
    child: [],
  },
  {
    id: 10,
    title: "",
    path: "/register",
    element: <Registration />,
    child: [],
  },
];
