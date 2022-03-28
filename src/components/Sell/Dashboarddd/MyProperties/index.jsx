import React from "react";
import { Container, Label, Body, Wrap, Search } from "./style";

const MyProperties = () => {
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
      </Body>
    </Container>
  );
};

export default MyProperties;
