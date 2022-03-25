import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Dashboard as data } from "../../../utilities/dashboard";
import DashboardComponent from "../Dashboard";
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
        {data.map(({ title, Icon, id, pathname }) => (
          <NavLink
            key={id}
            to={pathname}
            style={({ isActive }) => (isActive ? activeStyle : notActive)}
          >
            <Box active={location.pathname === pathname}>
              <Icons active={location.pathname === pathname}>
                <Icon className="hoverable" />
              </Icons>
              {title}
            </Box>
          </NavLink>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
