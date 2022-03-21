import styled from "styled-components";

import background from "../../assets/images/landing.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 51em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 85vh;
  overflow: hidden;
`;

const Title = styled.div`
  color: var(--color-white);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
`;

Title.Text = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 76px;
  text-align: center;
  margin: 15px 0 60px 0s;
  color: var(--color-white);
`;

export { Container, Title };
