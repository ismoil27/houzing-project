import React from "react";
import { navbar } from "../../utilities/navbar";
import { Container, Wrapper } from "./style";

import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <Container.LogoWrap>
          <Container.NavLink to="/">
            <Container.Logo /> <span> Houzing </span>
          </Container.NavLink>
        </Container.LogoWrap>
        <Wrapper>
          {navbar.map((parent) => (
            <Wrapper.Lists key={parent?.id}>
              <Container.NavLink
                // style={({ isActive }) => {
                //   console.log(isActive);
                //   return {
                //     color: isActive ? "#0061DF" : "#fff",
                //   };
                // }}
                to={parent?.path}
                key={parent.id}
                className="navlinks"
              >
                {parent.title}
              </Container.NavLink>
            </Wrapper.Lists>
          ))}
        </Wrapper>
      </Container>

      <Outlet />
    </>
  );
};

export default Navbar;
