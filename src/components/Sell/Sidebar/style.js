import styled from "styled-components";

export const notActive = {
  width: "225px",
  height: "58px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  margin: "8px 0",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#6B6B6B",
  paddingLeft: "15px",
  textDecoration: "none",
};

export const activeStyle = {
  width: "225px",
  height: "58px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  margin: "8px 0",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#fff",
  paddingLeft: "15px",
  textDecoration: "none",
  background: "linear-gradient(265.31deg, #6FE5FF -26.99%, #EBFBFF 106.34%)",
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: 30%; */
  /* position: sticky;
  left: 0; */
`;

const Icons = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  & path {
    stroke: ${({ active }) => (active ? "#fff" : "#6B6B6B")};
  }
`;
const Box = styled.div`
  width: 225px;
  height: 58px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${({ active }) => (active ? "#fff" : "#6b6b6b")};
  transition: all 0.5s;
  ${({ active }) =>
    active
      ? ""
      : `:hover {
      background: #EBFBFF;
      color: #00BFEA;
      padding-left: 15px;

  }`}
  :hover {
    ${Icons} {
      ${({ active }) =>
        active
          ? ""
          : `path{
  transition: all 0.5s;
  stroke: #00BFEA;
          }`}
    }
  }
`;

// export const activeStyle = {
//   width: "225px",
//   height: "58px",
//   borderRadius: "10px",
//   display: "flex",
//   alignItems: "center",
//   cursor: "pointer",
//   margin: "8px 0",
//   fontStyle: "normal",
//   fontWeight: "500",
//   fontSize: "16px",
//   lineHeight: "26px",
//   color: "#fff",
//   paddingLeft: "15px",
//   textDecoration: "none",
//   background: "linear-gradient(265.31deg, #6FE5FF -26.99%, #EBFBFF 106.34%)",
// };

// background: #0061DF
// color: #00BFEA
// background: #EBFBFF;

// export const notActive = {
//   width: "225px",
//   height: "58px",
//   borderRadius: "10px",
//   display: "flex",
//   alignItems: "center",
//   cursor: "pointer",
//   margin: "8px 0",
//   fontStyle: "normal",
//   fontWeight: "500",
//   fontSize: "16px",
//   lineHeight: "26px",
//   color: "#6B6B6B",
//   paddingLeft: "15px",
//   textDecoration: "none",
// };

// const Icons = styled.div`
//   width: 24px;
//   height: 24px;
//   margin-right: 12px;
//   & path {
//     stroke: ${({ active }) => (active ? "#fff" : "#6B6B6B")};
//   }
// `;

// 6B6B6B

export { Wrapper, Container, Box, Icons };
