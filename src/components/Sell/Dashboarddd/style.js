import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(246, 248, 249);
  padding: 60px 0px 50px 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: var(--color-bg);
`;

Title.Des = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin-top: 4px;
`;

Wrapper.Boxes = styled.div`
  display: flex;
  margin-top: 60px;
  /* flex-wrap: wrap; */
`;

Wrapper.Cards = styled.div`
  width: 280px;
  height: 150px;
  background-color: var(--color-white);
  display: flex;
  margin: 0 5px;
`;

export { Container, Wrapper, Title };
