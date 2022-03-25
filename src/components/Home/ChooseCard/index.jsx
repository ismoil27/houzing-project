import React from "react";
import {
  Calculator,
  Card,
  CardsWrapper,
  Circle,
  Container,
  MainContainer,
  Map,
  Property,
  Smile,
  Text,
  TextWrapper,
  Wrap,
} from "./style";

const ChooseCard = () => {
  return (
    <MainContainer>
      <Container>
        <TextWrapper>
          <Text>Why Choose Us</Text>
          <Text.Small>We provide full service at every step</Text.Small>
        </TextWrapper>
        <CardsWrapper>
          <Card>
            <Wrap>
              <Circle>
                <Smile />
              </Circle>
              <Text.Card>Trusted By Thousands</Text.Card>
              <Text.Cardsmall>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text.Cardsmall>
            </Wrap>
          </Card>
          <Card>
            <Wrap>
              <Circle>
                <Property />
              </Circle>
              <Text.Card>Wide Renge Of Properties</Text.Card>
              <Text.Cardsmall>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text.Cardsmall>
            </Wrap>
          </Card>
          <Card>
            <Wrap>
              <Circle>
                <Calculator />
              </Circle>

              <Text.Card>Financing Made Easy</Text.Card>
              <Text.Cardsmall>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text.Cardsmall>
            </Wrap>
          </Card>
          <Card>
            <Wrap>
              <Circle>
                <Map />
              </Circle>
              <Text.Card>See Neighborhoods</Text.Card>
              <Text.Cardsmall>
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house you will want to call home.
              </Text.Cardsmall>
            </Wrap>
          </Card>
        </CardsWrapper>
      </Container>
    </MainContainer>
  );
};

export default ChooseCard;
