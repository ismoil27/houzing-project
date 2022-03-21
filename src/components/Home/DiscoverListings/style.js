import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

Container.TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
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

Container.CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 225px;
`;

export { Container, Text };
