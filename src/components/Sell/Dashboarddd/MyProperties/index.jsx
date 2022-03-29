import React, { useEffect, useState } from "react";
import { Container, Label, Body, Wrap, Search } from "./style";
import img from "../../../assets/images/img.png";

const { REACT_APP_BASE_URL: url } = process.env;

const MyProperties = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch(`${url}/v1/houses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setHouses(res?.dataList[0]);
      });
  }, []);

  // const house = () => {
  //   fetch(`${url}/v1/house_details`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", res?.data);
  //     });
  // };

  return (
    <Container>
      <Container.Title>
        <h1>My Properties</h1>
        <span>Ready to jump back in?</span>
      </Container.Title>

      <Body>
        <Label>
          <Wrap>
            <span>Order by: </span>
            <Wrap.Options>
              <option> New to Old </option>
              <option value="">new</option>
              <option value="">new</option>
              <option value="">new</option>
              <option value="">new</option>
            </Wrap.Options>
          </Wrap>

          <Wrap>
            <span>Filter By Status: </span>
            <Wrap.Options>
              <option> All </option>
              <option value="">new</option>
              <option value="">new</option>
              <option value="">new</option>
              <option value="">new</option>
            </Wrap.Options>
          </Wrap>
          {/* <Search /> */}
          <Search type="search" placeholder="Search a Listing" />
        </Label>
        <Container.Table>
          <Container.Thead>
            <Container.Tr>
              <Container.Td padding>Listing Title</Container.Td>
              <Container.Td>Date Published</Container.Td>
              <Container.Td>Status</Container.Td>
              <Container.Td>View</Container.Td>
              <Container.Td>Action</Container.Td>
            </Container.Tr>
          </Container.Thead>
        </Container.Table>
        <Container.TBody>
          {houses.map((value) => (
            <Container.Tr key={value.id}>
              <Container.Td>
                <Container.BtnImg>Featured</Container.BtnImg>
                <Container.Image src={img} />
                <Container.Details>
                  <Container.DetailsTitle>
                    {value.title || "not given"}
                    <span> FOR SALE </span>
                  </Container.DetailsTitle>
                  <Container.Desc>
                    {value?.address || " address "} , {value?.city || " city "}
                    {value?.country || " country "}
                  </Container.Desc>
                  <div className="fsale">
                    $ {value?.price || "not given"}/mo
                  </div>
                  <div className="sale">
                    $ {value?.SalePrice || "not given"}/mo
                  </div>
                </Container.Details>
              </Container.Td>
              <Container.Td>
                <div className="date">{value?.published || "not given"}</div>
              </Container.Td>

              <Container.Td>
                <div className="pending">Pending</div>
              </Container.Td>

              <Container.Td>
                <div className="view">5.933</div>
              </Container.Td>
            </Container.Tr>
          ))}
        </Container.TBody>
      </Body>
    </Container>
  );
};

export default MyProperties;
