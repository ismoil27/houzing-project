import React, { useEffect, useState } from "react";
import { Container, Label, Body, Wrap, Search } from "./style";

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
        <div>
          {houses.map((value) => {
            return (
              <div key={value.id}>
                <h1>
                  {value?.city} - {value?.country}
                </h1>
                <h3>{value?.desccription}</h3>
              </div>
            );
          })}
        </div>
      </Body>
    </Container>
  );
};

export default MyProperties;
