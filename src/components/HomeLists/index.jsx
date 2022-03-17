import React from "react";
import { Card, Cards, Container, TextWrapper } from "./style";

export const HomeLists = () => {
  return (
    <Container>
      <TextWrapper>
        <h1 className="homelists__h1">Discover Our Featured Listings</h1>
        <p className="homelists__p">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
      </TextWrapper>
      <Cards>
        <Card></Card>
        <Card></Card>
      </Cards>
    </Container>
  );
};

export default HomeLists;
