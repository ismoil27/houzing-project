import React from "react";
import {
  CardTexts,
  Container,
  Heart,
  Message,
  Property,
  Title,
  View,
  Wrapper,
} from "./style";

const Dashboarddd = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Howdy, Darrell!</Title>
        <Title.Des>Ready to jump back in?</Title.Des>
      </Wrapper>
      <Wrapper.Boxes>
        <Wrapper.Cards>
          <Wrapper.Circle>
            <Property />
          </Wrapper.Circle>
          <CardTexts>
            <CardTexts.Number>15</CardTexts.Number>
            <CardTexts.Des>My Properties</CardTexts.Des>
          </CardTexts>
        </Wrapper.Cards>

        <Wrapper.Cards>
          <Wrapper.Circle>
            <View />
          </Wrapper.Circle>
          <CardTexts>
            <CardTexts.Number>22</CardTexts.Number>
            <CardTexts.Des>Total Views</CardTexts.Des>
          </CardTexts>
        </Wrapper.Cards>

        <Wrapper.Cards>
          <Wrapper.Circle>
            <Message />
          </Wrapper.Circle>
          <CardTexts>
            <CardTexts.Number>921</CardTexts.Number>
            <CardTexts.Des>Inbox</CardTexts.Des>
          </CardTexts>
        </Wrapper.Cards>

        <Wrapper.Cards>
          <Wrapper.Circle>
            <Heart />
          </Wrapper.Circle>
          <CardTexts>
            <CardTexts.Number>148</CardTexts.Number>
            <CardTexts.Des>Total Favorites</CardTexts.Des>
          </CardTexts>
        </Wrapper.Cards>
      </Wrapper.Boxes>
    </Container>
  );
};

export default Dashboarddd;
