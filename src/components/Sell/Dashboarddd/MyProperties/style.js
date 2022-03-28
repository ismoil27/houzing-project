import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--dashbg);
  padding: 60px 60px 50px 90px;
`;

Container.Title = styled.div`
  h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: var(--color-bg);
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #696969;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-white);
  margin-top: 60px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  margin-right: 30px;
  border-bottom: 2px solid #e6e9ec;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #0d263b;
    margin-right: 3px;
  }
`;

Wrap.Options = styled.select`
  border: none;
  font-weight: 400;
  font-size: 14px;
  outline: none;
  line-height: 18px;
  color: #696969;
`;

const Search = styled.input`
  min-width: 100px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  outline: none;
  padding-bottom: 8px;
  border-bottom: 1px solid #e6e9ec;
  margin-left: auto;
`;

Container.Table = styled.table`
  margin-top: 30px;
`;

Container.Thead = styled.thead`
  background-color: #e6e9ec;
  border-radius: 3px;
`;
Container.Tr = styled.tr`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 20px 0;
`;

Container.Td = styled.td`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-bg);
  padding-left: ${({ padding }) => padding && "20px"};
`;

export { Container, Body, Label, Wrap, Search };
