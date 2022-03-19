import React from "react";
import contact, {
  discover,
  listsbycategory,
  quicklines,
  subscribe,
} from "../../utilities/data/footerData";
import {
  Container,
  Flex,
  Icons,
  MainContainer,
  Title,
  Wrap,
  Text,
  IconLinks,
  Link,
  Input,
  Telegram,
  Wrapper,
  LogoImage,
  BottomContainer,
  ArrowIcon,
} from "./style";

import logoimage from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <MainContainer>
      {/* <Logo /> */}
      <Container>
        <Wrap width>
          <Title>Contact Us</Title>
          {contact.map((value) => (
            <Flex key={value.id}>
              <Icons src={value?.icon} alt="" />
              <Link href={value?.link}>{value?.text}</Link>
            </Flex>
          ))}
          <Flex>
            <IconLinks href="https://www.facebook.com/">
              <Icons.Facebook />
            </IconLinks>
            <IconLinks href="https://www.twitter.com/">
              <Icons.Twitter />
            </IconLinks>
            <IconLinks href="https://www.instagram.com/">
              <Icons.Instagram />
            </IconLinks>
            <IconLinks href="https://www.linkedin.com/">
              <Icons.Linkedin />
            </IconLinks>
          </Flex>
        </Wrap>
        <Wrap>
          <Title>Discover</Title>
          {discover.map((value) => (
            <Flex key={value.id}>
              <Link href={value?.link}>{value?.text}</Link>
            </Flex>
          ))}
        </Wrap>
        <Wrap>
          <Title>Lists by Category</Title>
          {listsbycategory.map((value) => (
            <Flex key={value.id}>
              <Link href={value?.link}>{value?.text}</Link>
            </Flex>
          ))}
        </Wrap>
        <Wrap>
          <Title>Quick Links</Title>
          {quicklines.map((value) => (
            <Flex key={value.id}>
              <Link href={value?.link}>{value?.text}</Link>
            </Flex>
          ))}
        </Wrap>
        <Wrap>
          <Title>Subscribe</Title>
          {subscribe.map((value) => (
            <Flex key={value.id}>
              <Link href={value?.link}>{value?.text}</Link>
            </Flex>
          ))}
          <div>
            <Input type="email" placeholder="Enter your email" />
            <Telegram />
          </div>
        </Wrap>
      </Container>
      <BottomContainer>
        <Wrapper>
          <Text>Copyright © 2021 CreativeLayers. All Right Reserved.</Text>
          <LogoImage src={logoimage} />
          <Flex>
            <Link marginright href="#">
              Home
            </Link>
            <Link marginright href="#">
              Site Map
            </Link>
            <Link marginright href="#">
              Privacy Policy
            </Link>
            <Link marginright href="#">
              Cookie Policy
            </Link>
          </Flex>
          <ArrowIcon />
        </Wrapper>
      </BottomContainer>
    </MainContainer>
  );
};

export default Footer;
