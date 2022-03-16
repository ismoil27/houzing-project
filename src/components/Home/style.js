import styled from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;

const SearchMenu = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 60px;

  h4 {
    font-weight: 600;
    line-height: 20px;
    color: #fff;
    margin: 0 21px;
  }
`;

export { Container, SearchMenu };
