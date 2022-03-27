import styled from "styled-components";

import { ReactComponent as property } from "../../assets/icons/prty.svg";
import { ReactComponent as view } from "../../assets/icons/view.svg";
import { ReactComponent as message } from "../../assets/icons/message.svg";
import { ReactComponent as heart } from "../../assets/icons/hrt.svg";

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
  align-items: center;
`;

Wrapper.Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: rgb(238, 244, 252);
  margin-left: 30px;
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

CardTexts.Number = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #0061df;
`;

CardTexts.Des = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: var(--color-bg);
`;

const Property = styled(property)``;
const View = styled(view)``;
const Message = styled(message)``;
const Heart = styled(heart)``;

export { Container, Wrapper, Title, Property, CardTexts, View, Message, Heart };
