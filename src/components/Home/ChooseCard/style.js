import styled from "styled-components";

import { ReactComponent as smile } from "../../assets/icons/smile.svg";
import { ReactComponent as property } from "../../assets/icons/property.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";

const MainContainer = styled.div`
  width: 100%;
  background-color: var(--color-background);
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 50px auto;
  justify-content: center;
`;
const Text = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: var(--color-bg);
`;

Text.Small = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #696969;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 100px;
  /* padding: 100px 225px; */
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  border-radius: 50%;
`;

const Card = styled.div`
  width: 300px;
  height: 336px;
  margin: 10px 30px 10px 0;
  background-color: var(--color-white);
  border-radius: 3px;
  :hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  }
  &:hover ${Circle} {
    background-color: var(--color-blue);
  }
`;

const Smile = styled(smile)`
  path {
    fill: var(--color-blue);
  }
  ${Card}:hover & {
    path {
      fill: var(--color-white);
    }
  }
`;

const Property = styled(property)`
  ${Card}:hover & {
    path {
      fill: var(--color-white);
    }
  }
`;
const Calculator = styled(calculator)`
  ${Card}:hover & {
    path {
      fill: var(--color-white);
    }
  }
`;
const Map = styled(map)`
  ${Card}:hover & {
    path {
      fill: var(--color-white);
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;

Text.Card = styled.div`
  color: var(--color-bg);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-top: 26px;
`;
Text.Cardsmall = styled.div`
  font-style: normal;
  text-align: center;

  width: 90%;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #696969;
  margin-top: 17px;
  margin-bottom: 45px;
  /* padding: 0 20px 10px 20px; */
`;

export {
  Container,
  MainContainer,
  TextWrapper,
  Text,
  CardsWrapper,
  Card,
  Wrap,
  Smile,
  Property,
  Calculator,
  Map,
  Circle,
};

/* :hover ${Smile} {
    path {
      fill: var(--color-white);
    }
  }
  :hover ${Property} {
    path {
      fill: var(--color-white);
    }
  }
  :hover ${Calculator} {
    path {
      fill: var(--color-white);
    }
  }
  :hover ${Map} {
    path {
      fill: var(--color-white);
    }
  } */
