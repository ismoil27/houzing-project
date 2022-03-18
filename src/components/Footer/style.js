import styled from "styled-components";

import { ReactComponent as facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../assets/icons/linkedin.svg";

import { ReactComponent as telegram } from "../assets/icons/telegram.svg";
// import { ReactComponent as logo } from "../assets/icons/logoonly.svg";

const MainContainer = styled.div`
  background: var(--color-bg);
  color: var(--color-white);
  position: relative;
`;

// const Logo = styled.img`
//   background-repeat: no-repeat;
//   background-position: 0%;
//   background-size: cover;
//   width: 432px;
//   height: 520px;
//   position: absolute;
//   left: 2.6%;
//   right: 74.9%;
//   top: 5%;
//   bottom: 6.94%;
//   opacity: 0.2;
//   /* opacity: 0.015; */
//   path {
//     fill: #fff;
//   }
// `;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 200px 30px 200px;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 30px;
  width: ${({ width }) => width && "256px"};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const Icons = styled.img`
  height: 18px;
  margin-right: 30px;
  margin-left: 5px;
`;

Icons.Facebook = styled(facebook)``;
Icons.Twitter = styled(twitter)``;
Icons.Instagram = styled(instagram)``;
Icons.Linkedin = styled(linkedin)``;

const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  text-decoration: none;
  color: var(--color-white);

  ::after {
    content: "";
    /* position: absolute; */
    height: 2px;
    width: 46px;
    border-bottom: 1px solid var(--color-white);
    opacity: 0;
    display: block;
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
`;

const IconLinks = styled.a`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 3px;
  :hover {
    background: var(--color-hover-icons);
  }
`;

const Input = styled.input`
  background: var(--color-white);
  border-radius: 3px;
  width: 469px;
  height: 60px;
  position: relative;
  outline: none;
  padding-left: 20px;
  border-style: none;
  font-size: 14px;
`;

const Telegram = styled(telegram)`
  position: absolute;
  margin-left: -50px;
  margin-top: 10px;
  padding: 12px;
  box-sizing: initial;
  border-radius: 3px;
  /* margin-right: 5px; */
  background-color: #0061df;
`;

export {
  MainContainer,
  Container,
  Wrap,
  Flex,
  Title,
  Icons,
  Text,
  IconLinks,
  Link,
  Input,
  Telegram,
};
