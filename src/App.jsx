import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <main className="main">{useRoutes(routes)}</main>
      <AppFooter />
    </div>
  );
});

export default App;
