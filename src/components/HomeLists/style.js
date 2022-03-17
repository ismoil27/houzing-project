import styled from "styled-components";

const Container = styled.div`
  color: black;
  margin-top: 50px;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  margin: 54px 225px;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

const Card = styled.div`
  width: 345px;
  height: 428px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: red;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

export { Container, TextWrapper, Cards, Card };
