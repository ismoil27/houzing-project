import styled from "styled-components";

import card from "../../assets/images/card2.jpeg";

import { ReactComponent as Bed } from "../../assets/icons/bed.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as ReSize } from "../../assets/icons/resize.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 40px 0;
  width: ${({ width }) => (width ? width : "345px")};
  height: ${({ height }) => (height ? height : "428px")};
  border: 1px solid #e6e9ec;
  box-sizing: border-box;
  border-radius: 3px;
`;

Wrapper.Image = styled.div`
  flex: 1;
  position: relative;
  background: url(${card});
  /* background: url("https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

Wrapper.Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  left: ${({ left }) => (left ? left : "")};
  top: ${({ top }) => (top ? top : "")};
  right: ${({ right }) => (right ? right : "")};
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  background: ${({ background }) => (background ? background : "#0D263B")};
  width: ${({ width }) => (width ? width : "73px")};
  height: ${({ height }) => (height ? height : "23px")};
  border-radius: 3px;
  padding: 5px 12px;
  font-weight: 600;
  font-size: 10px;
  cursor: pointer;
`;

Wrapper.SmallImg = styled.div`
  position: absolute;
  width: 43px;
  height: 42px;
  border-radius: 50%;
  bottom: -20px;
  right: 20px;
  z-index: 1;
  background: url("https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

Wrapper.Details = styled.div`
  flex: 1;
  /* padding: 20px; */
`;

Wrapper.DetailsTop = styled.div`
  padding: 20px;
`;

Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--color-black);
`;

Wrapper.Address = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  padding: 9px 0 20px 0;
`;

Wrapper.Features = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-right: 20px; */
`;

Wrapper.Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`;

Wrapper.Bed = styled(Bed)`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
Wrapper.Bath = styled(Bath)`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
Wrapper.Car = styled(Car)`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
Wrapper.Ruler = styled(Ruler)`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
Wrapper.ReSize = styled(ReSize)`
  width: 15px;
  height: 15px;
  margin-right: 20px;
  cursor: pointer;
  transition: var(--transition);
  :hover {
    path {
      fill: var(--color-blue);
    }
  }
`;
Wrapper.Plus = styled(Plus)`
  width: 15px;
  height: 15px;
  margin-right: 20px;
  cursor: pointer;
  transition: var(--transition);
  :hover {
    path {
      fill: var(--color-blue);
    }
  }
`;

Wrapper.Heart = styled(Heart)`
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: var(--transition);
  :hover {
    path {
      fill: var(--color-blue);
    }
  }
`;

Wrapper.AmountText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;

Wrapper.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #e6e9ec;
  padding: 20px;
`;

export { Wrapper };
