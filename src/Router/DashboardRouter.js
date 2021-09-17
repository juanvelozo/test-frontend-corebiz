import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "../components/Navbar/NavBar";
import { Home } from "../pages/Home";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  );
};
