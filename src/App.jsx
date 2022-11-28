import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
