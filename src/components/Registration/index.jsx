import React from "react";
import {
  Container,
  Wrapper,
  Input,
  ButtonWrapper,
  Button,
  SignIn,
} from "../Login/style";

const Registration = () => {
  // const Register = () => {
  //   fetch(
  //     "https://houzing-app.herokuapp.com/api/public/auth/login?fieldError.rejectedValue=%7B%7D&fieldErrors%5B0%5D.rejectedValue=%7B%7D",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(state),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", res?.data);
  //     });
  // };

  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };

  return (
    <Container>
      <SignIn>
        <form action="#" className="login__form">
          <p className="sign__in">Registration</p>
          <Wrapper className="login__inputs">
            <Input
              className="inputs"
              type="text"
              name="firstname"
              placeholder="First name"
              required
            />
            <Input
              className="inputs"
              type="text"
              name="lastname"
              placeholder="Last name"
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
              autoComplete="on"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Re-enter Password"
              autoComplete="on"
              required
              margin
            />
          </Wrapper>

          <ButtonWrapper>
            <Button className="btn" margin color>
              Register
            </Button>
          </ButtonWrapper>
        </form>
      </SignIn>
    </Container>
  );
};

export default Registration;
