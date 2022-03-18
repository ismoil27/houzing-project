import React, { useState } from "react";
import { Button, ButtonWrapper, Container, Input, Wrapper } from "./style";
import "./login.css";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  // const { REACT_APP_BASE_URL: url } = process.env;

  // const [navigate, setNavigate] = useNavigate("");

  const logIn = () => {
    fetch(
      "https://houzing-app.herokuapp.com/api/public/auth/login?fieldError.rejectedValue=%7B%7D&fieldErrors%5B0%5D.rejectedValue=%7B%7D",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data);
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
      <Container>
        <form action="#" className="login__form">
          <p className="sign__in">Sign in</p>
          <Wrapper className="login__inputs">
            <Input
              className="inputs"
              type="email"
              name="email"
              value={state.email}
              placeholder="Username"
              required
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              value={state.password}
              placeholder="Password"
              required
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
