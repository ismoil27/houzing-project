import styled from "styled-components";

const Container = styled.div`
  width: 720px;
  height: 510px;
  margin: 0px auto;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #0d263b;
  }
`;

const Button = styled.div`
  width: 90%;

  margin: 10px auto;
  color: #fff;
  background: #0061df;
  padding: 20px 0;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
`;

export { Container, Button, ButtonWrapper };
