import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/views/home"));
const Detail = lazy(() => import("@/views/detail"));
const Entire = lazy(() => import("@/views/entire"));
const Test = lazy(() => import("@/views/test"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];

export default routes;
