import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "@/views/home"));
const Detail = lazy(() =>
  import(/* webpackChunkName: "detail" */ "@/views/detail")
);
const Entire = lazy(() =>
  import(/* webpackChunkName: "entire" */ "@/views/entire")
);

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
];

export default routes;
