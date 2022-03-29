import styled from "styled-components";

import { ReactComponent as trash } from "../../../assets/icons/trash.svg";
import { ReactComponent as pen } from "../../../assets/icons/pen.svg";
// import { Drawer } from "antd";

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

Container.Tr = styled.tr`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 20px 0;
`;

Container.Td = styled.td`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;

  .date {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #696969;
  }
  .pending {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #cc5040;
  }
  .view {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #696969;
  }
`;

Container.BtnImg = styled.div`
  position: absolute;
  top: 12px;
  left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73px;
  height: 23px;
  background: #0061df;
  border-radius: 3px;
  margin: 0px 10px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  color: #ffffff;
  transform: uppercase;
`;

Container.Image = styled.img`
  width: 160px;
  height: 140px;
  border: 1px solid red;
`;

Container.Details = styled.div`
  margin: 20px;
  .fsale {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: line-through;
    color: #696969;
  }
  .sale {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0d263b;
  }
`;

Container.DetailsTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 71px;
    height: 23px;
    background: #0d263b;
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    color: #ffffff;
    border-radius: 3px;
    margin: 0px 10px;
  }
`;

Container.TBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

Container.Desc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  span {
    margin-left: 4px;
  }
`;

// Container.Drawer = styled(Drawer)``;

Container.Pen = styled(pen)`
  width: 16px;
  cursor: pointer;
  height: 16px;
`;
Container.Trash = styled(trash)`
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 50%;
  padding: 9px;
  margin-left: 20px;
  cursor: pointer;
`;

Container.Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-pagination-item-link {
    border: none;
  }
  .ant-pagination li {
    border: none !important;
  }
  .ant-pagination li:hover:not(.ant-pagination-item-active) {
    border-radius: 50%;
    background-color: #f6f8f9;
    a {
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .ant-pagination-item-active {
    background: #0061df;
    border-radius: 50%;
    a {
      color: #fff !important;
    }
  }
`;

export { Container, Body, Label, Wrap, Search };
