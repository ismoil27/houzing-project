import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import { navbar } from "../utilities/navbar";

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
      </Routes>
    </div>
  );
};

export default Root;
