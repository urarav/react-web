import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "@/views/home"));
const Detail = lazy(() => import(/* webpackChunkName: "detail" */ "@/views/detail"));
const Entire = lazy(() => import(/* webpackChunkName: "entire" */ "@/views/entire"));
const Test = lazy(() => import(/* webpackChunkName: "test" */ "@/views/test"));

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
