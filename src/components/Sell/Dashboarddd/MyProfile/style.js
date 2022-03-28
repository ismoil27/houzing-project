import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  width: 100%;
  padding: 60px;
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
  margin-bottom: 60px;
`;

const Body = styled.div`
  display: flex;
`;

Container.Content = styled.div`
  flex: 3;
`;

Container.Contact = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin-bottom: 30px;
`;

Container.ContentTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-bg);
  margin-bottom: 45px;
`;

const Items = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: center;
`;

Container.Input = styled.input`
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  padding-bottom: 8px;
  margin-left: ${({ margin }) => (margin === "true" ? "30px" : "")};
  :focus {
    border-color: #0061df;
    ::placeholder {
      color: #000;
    }
  }
`;

Container.TextArea = styled.textarea`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  border: none;
  outline: none;
  margin-bottom: 30px;
  border-bottom: 2px solid #e6e9ec;
  :focus {
    border-color: #0061df;
    ::placeholder {
      color: #000;
    }
  }
`;

Container.Button = styled.div`
  width: 220px;
  height: 55px;
  background: var(--color-blue);
  border-radius: 3px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;

const ChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
`;

Container.Img = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  flex: 1;
  max-width: 330px;
  height: fit-content;
  margin-left: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  img {
    min-width: 269px;
    min-height: 320px;
    border-radius: 3px;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0d263b;
    margin-bottom: 20px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #696969;
    text-align: center;
    margin-top: 10px;
  }
`;

Container.Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #0061df;
  box-sizing: border-box;
  border-radius: 3px;
  transform: uppercase;
  cursor: pointer;
  width: 100%;
  height: 55px;
  margin-top: 20px;
  color: #0061df;
  font-weight: 600;
  line-height: 17px;
`;

export { Container, Body, Items, ChangePassword };
