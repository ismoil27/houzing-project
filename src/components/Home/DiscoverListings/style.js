import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
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
  padding: 50px 80px 0 80px;
`;

Container.Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

Container.Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ background }) =>
    background ? background : "var(--color-blue)"};
  margin-right: 10px;
  border: ${({ border }) => border && "1px solid #0061DF"};
`;

export { Container, Text };
