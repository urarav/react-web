import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import Loading from "./components/loading";
import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={<Loading />}>
        <main className="main">{useRoutes(routes)}</main>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
