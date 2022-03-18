import React from "react";
import {
  Container,
  Wrapper,
  Input,
  ButtonWrapper,
  Button,
} from "../Login/style";

const Registration = () => {
  return (
    <div className="login__page">
      <Container>
        <form action="#" className="login__form">
          <p className="sign__in">Registration</p>
          <Wrapper className="login__inputs">
            <Input
              className="inputs"
              type="text"
              name="firstname"
              placeholder="Firstname"
              required
            />
            <Input
              className="inputs"
              type="text"
              name="lastname"
              placeholder="Lastname"
              required
            />
            <Input
              className="inputs"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <Input
              className="inputs"
              type="text"
              name="userrole"
              placeholder="User role"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Re-enter Password"
              required
            />
          </Wrapper>

          <ButtonWrapper>
            <Button className="btn" color>
              Register
            </Button>
          </ButtonWrapper>
        </form>
      </Container>
    </div>
  );
};

export default Registration;
