import React from "react";

import Navbar from "../Navbar";
import Buy from "../Buy";
import Rent from "../Rent";
import Sell from "../Sell";
import FindRealtors from "../FindRealtors";
import MyProperties from "../MyProperties";
import MyHome from "../MyHome";
import RegisterAsRealtor from "../RegisterAsRealtor";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Buy />
      <Sell />
      <Rent />
      <FindRealtors />
      <MyProperties />
      <MyHome />
      <RegisterAsRealtor />
    </div>
  );
};

export default Root;
