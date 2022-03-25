import React, { useState } from "react";
import {
  Button,
  ButtonWrapper,
  Container,
  FormWrapper,
  ImageWrapper,
  Input,
  MainContainer,
  SignIn,
  Texts,
  Wrapper,
} from "./style";
import "./login.css";
import { useNavigate } from "react-router-dom";

import Registration from "../Registration";

const { REACT_APP_BASE_URL: url } = process.env;
// console.log(url);

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const logIn = () => {
    fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data);
        if (res?.success && res?.data) {
          navigate("/");
        }
      });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    // <div >  className="login__page"
    <div>
      <MainContainer>
        <ImageWrapper>
          <Texts>
            <h1>My Account</h1>
            <p>Home / My Account</p>
          </Texts>
        </ImageWrapper>

        <Container>
          <FormWrapper>
            <SignIn>
              <form action="#" className="login__form">
                <p className="sign__in">Sign in</p>
                <p></p>
                <Wrapper>
                  <Input
                    className="inputs"
                    type="email"
                    name="email"
                    value={state.email}
                    placeholder="Username"
                    required
                    autoComplete="on"
                    onChange={onChange}
                  />
                  <Input
                    type="password"
                    name="password"
                    value={state.password}
                    placeholder="Password"
                    required
                    autoComplete="on"
                    onChange={onChange}
                  />
                </Wrapper>
                <div className="remember__me">
                  <label>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <p>Forgot password?</p>
                </div>
                <ButtonWrapper>
                  <Button className="btn" onClick={logIn}>
                    SIGN IN
                  </Button>
                </ButtonWrapper>
              </form>
            </SignIn>
            <Registration />
          </FormWrapper>
        </Container>
      </MainContainer>
    </div>
  );
};

export default Login;
