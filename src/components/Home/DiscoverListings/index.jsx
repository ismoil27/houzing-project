import React from "react";
import GenericCard from "../../Generic/Card";
import { Container, Text } from "./style";

const DiscoverListings = () => {
  return (
    <Container>
      <Container.TextWrapper>
        <Text>Discover Our Featured Listings</Text>
        <Text.Small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Text.Small>
      </Container.TextWrapper>

      <Container.CardWrapper>
        <GenericCard />
        <GenericCard />
        <GenericCard />
        <GenericCard />
      </Container.CardWrapper>

      <Container.Buttons>
        <Container.Circle />
        <Container.Circle background="none" border />
        <Container.Circle />
        <Container.Circle />
        <Container.Circle />
      </Container.Buttons>
    </Container>
  );
};

export default DiscoverListings;
