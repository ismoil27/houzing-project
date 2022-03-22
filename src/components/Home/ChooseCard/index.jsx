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
            </Wrap>
          </Card>
          <Card>
            <Wrap>
              <Circle>
                <Property />
              </Circle>
            </Wrap>
          </Card>
          <Card>
            <Wrap>
              <Circle>
                <Calculator />
              </Circle>
            </Wrap>
          </Card>
          <Card>
            <Wrap>
              <Circle>
                <Map />
              </Circle>
              <p>Hello</p>
              <p>Hello</p>
            </Wrap>
          </Card>
        </CardsWrapper>
      </Container>
    </MainContainer>
  );
};

export default ChooseCard;
