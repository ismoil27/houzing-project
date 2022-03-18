import React, { useState } from "react";
import { Button, ButtonWrapper, Container, Input, Wrapper } from "./style";
import "./login.css";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
// console.log(process.env);

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // https://houzing-app.herokuapp.com/api/public/auth/login
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
    <div className="login__page">
      <div>
        <img src="" alt="" />
      </div>

      <Container>
        <form action="#" className="login__form">
          <p className="sign__in">Sign in</p>
          <p></p>
          <Wrapper className="login__inputs">
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
      </Container>
    </div>
  );
};

export default Login;
