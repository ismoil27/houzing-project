import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return <div>{children}</div>;
};

export default PrivateRoute;
