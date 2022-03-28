import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/icons/logoonly.svg";

import background from "../assets/images/landing.jpg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px 15px 25px;
  background-color: #7a8691;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

Container.NavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--color-white);
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 10px;
  :hover {
    color: var(--color-blue);
  }
`;

Container.Logo = styled(Logo)`
  width: 40px;
  height: 48px;
  path {
    fill: #fff;
  }
`;

Container.LogoWrap = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 32px;
  color: #fff;
  span {
    margin-left: 13px;
    :hover {
      color: var(--color-blue);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
`;
Wrapper.Lists = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
  /* padding-right: 40px; */
`;

export { Container, Wrapper };
