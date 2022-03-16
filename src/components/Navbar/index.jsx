import React from "react";
import { navbar } from "../../utilities/navbar";
import { Container, Logo, Wrapper } from "./style";
import logo from "../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import Header from "../Header";

const Navbar = () => {
  return (
    <div className="header">
      <Container>
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
      <Header />
    </div>
  );
};

export default Navbar;
