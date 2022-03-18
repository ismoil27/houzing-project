import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  display: flex;
  color: red;
  height: 80px;
  align-items: center;
  margin: 0 20px;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const Logo = styled.img`
  cursor: pointer;
  :hover {
    color: #0061df;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

export { Container, Logo, Wrapper };
