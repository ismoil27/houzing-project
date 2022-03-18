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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-bottom: 40px;
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

export { Container, Button, ButtonWrapper, Wrapper, Input };
