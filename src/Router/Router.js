import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <DashboardRoutes />
      </Router>
    </>
  );
};
