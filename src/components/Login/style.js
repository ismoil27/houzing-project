import styled from "styled-components";

import landing from "../assets/images/landing.jpg";

const MainContainer = styled.div`
  margin-bottom: 400px;
  /* background: #e5e5e5; */
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  background: url(${landing}),
    linear-gradient(180deg, rgba(0, 0, 0, 0.7) 99.51%, rgba(34, 24, 24, 0) 100%);
`;

const Texts = styled.div`
  text-align: center;
  padding-top: 100px;
  h1 {
    margin-bottom: 15px;
    color: var(--color-white);
    font-size: 30px;
  }
  p {
    color: var(--color-white);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

const Container = styled.div`
  /* width: 720px; */
  /* height: 510px; */
  /* margin: 0px auto; */
  display: flex;
  /* flex-direction: column; */

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #0d263b;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
  justify-content: center;
`;

const SignIn = styled.div`
  width: 600px;
  height: 508px;
  margin-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;
const Input = styled.input`
  margin-bottom: ${({ margin }) => (margin ? "0px" : "40px")};
  padding: 20px;
  outline: none;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  :focus {
    border-color: #0061df;
  }
`;

const Button = styled.div`
  width: 90%;
  margin: 10px auto;
  color: #fff;
  background: ${({ color }) => (color ? "#0D263B" : "#0061df")};
  padding: 20px 0;
  text-align: center;
  outline: none;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
`;

export {
  Container,
  Button,
  ButtonWrapper,
  Wrapper,
  Input,
  MainContainer,
  ImageWrapper,
  Texts,
  FormWrapper,
  SignIn,
};
