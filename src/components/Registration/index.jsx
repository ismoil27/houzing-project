import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  Input,
  ButtonWrapper,
  Button,
  SignIn,
} from "../Login/style";

const { REACT_APP_BASE_URL: url } = process.env;
console.log(process.env);

const Registration = () => {
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    roleIdSet: "",
    password: "",
    rePassword: "",
  });

  const navigate = useNavigate();

  const Register = () => {
    fetch(`${url}/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data);
        if (res?.succes && res?.data) {
          navigate("/");
        }
      });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <Container style={{ marginBottom: "300px" }}>
      <SignIn>
        <form action="#" className="login__form">
          <p className="sign__in">Registration</p>
          <Wrapper className="login__inputs">
            <Input
              className="inputs"
              type="text"
              name="firstname"
              // value={inputValue?.firstname}
              placeholder="First name"
              required
              onChange={onChange}
            />
            <Input
              className="inputs"
              type="text"
              name="lastname"
              // value={inputValue?.lastname}
              placeholder="Last name"
              required
              onChange={onChange}
            />
            <Input
              className="inputs"
              type="email"
              name="email"
              // value={inputValue.email}
              placeholder="Email"
              required
              onChange={onChange}
            />
            <Input
              className="inputs"
              type="text"
              name="roleIdSet"
              // value={inputValue.userrole}
              placeholder="User role"
              required
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              // value={inputValue.password}
              placeholder="Password"
              autoComplete="on"
              required
              onChange={onChange}
            />
            {/* <Input
              type="password"
              name="rePassword"
              value={inputValue.rePassword}
              placeholder="Re-enter Password"
              autoComplete="on"
              required
              onChange={onChange}
              margin
            /> */}
          </Wrapper>

          <ButtonWrapper>
            <Button className="btn" margin color onClick={Register}>
              Register
            </Button>
          </ButtonWrapper>
        </form>
      </SignIn>
    </Container>
  );
};

export default Registration;
