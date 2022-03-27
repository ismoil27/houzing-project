import React from "react";
import { Container, Title, Wrapper } from "./style";

const Dashboarddd = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Howdy, Darrell!</Title>
        <Title.Des>Ready to jump back in?</Title.Des>
      </Wrapper>
      <Wrapper.Boxes>
        <Wrapper.Cards></Wrapper.Cards>
        <Wrapper.Cards></Wrapper.Cards>
        <Wrapper.Cards></Wrapper.Cards>
        <Wrapper.Cards></Wrapper.Cards>
      </Wrapper.Boxes>
    </Container>
  );
};

export default Dashboarddd;
