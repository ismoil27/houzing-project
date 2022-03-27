import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sell from "../components/Sell";
import { Dashboarddata } from "../utilities/dashboard";
import { navbar } from "../utilities/navbar";

import PrivateRoute from "./PrivateRoute";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {navbar.map((value) => {
          return (
            <Route key={value.id} path={value?.path} element={value.element} />
          );
        })}
        <Route element={<Sell />}>
          {Dashboarddata.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Root;
