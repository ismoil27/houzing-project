import React from "react";
import { Button, ButtonWrapper, Container } from "./style";
import "./login.css";

const Login = () => {
  return (
    <div className="login__page">
      <Container>
        <form action="#" className="login__form">
          <p className="sign__in">Sign in</p>
          <div className="login__inputs">
            <input
              className="inputs"
              type="text"
              placeholder="Username"
              required
            />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember__me">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <p>Forgot password?</p>
          </div>
          <ButtonWrapper>
            <Button className="btn">SIGN IN</Button>
          </ButtonWrapper>
        </form>
      </Container>
    </div>
  );
};

export default Login;
