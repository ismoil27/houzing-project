import React from "react";
import { navbar } from "../../utilities/navbar";
import { Container, Logo, Wrapper } from "./style";
import logo from "../assets/icons/logo.svg";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container className="navbar">
        <Logo src={logo} alt="" />
        <Wrapper>
          {navbar.map((parent) => {
            return (
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0061DF" : "#fff",
                  };
                }}
                to={parent.path}
                key={parent.id}
                className="navlinks"
              >
                {parent.title}
              </NavLink>
            );
          })}
        </Wrapper>
      </Container>

      <Outlet />
    </>
  );
};

export default Navbar;
