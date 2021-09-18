import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </>
  );
};
