import React from "react";
import { NavLink, Outlet, Routes, useLocation } from "react-router-dom";

import { Dashboarddata as data } from "../../../utilities/dashboard";
import DashboardComponent from "../Dashboarddd";
import {
  Box,
  Container,
  Wrapper,
  activeStyle,
  notActive,
  Icons,
} from "./style";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        {data.map(({ title, Icon, id, path }) => (
          <NavLink
            key={id}
            to={path}
            style={({ isActive }) => (isActive ? activeStyle : notActive)}
          >
            <Box active={location?.path === path}>
              <Icons active={location?.path === path}>
                <Icon className="hoverable" />
              </Icons>
              {title}
            </Box>
          </NavLink>
        ))}
      </Container>{" "}
      {location?.pathname === "/sell/dashboard" ? (
        <DashboardComponent />
      ) : (
        <Outlet />
      )}
    </Wrapper>
  );
};

export default Sidebar;

// {location?.pathname === "/sell/dashboard" ? (
//   <DashboardComponent />
// ) : (
//   <Outlet />
// )}
