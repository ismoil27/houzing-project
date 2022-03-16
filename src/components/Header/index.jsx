import React from "react";
import "./header.css";
import { Container, SearchMenu } from "./style";

const Header = () => {
  return (
    <section>
      <Container className="search__section">
        <p>It's great to be home!</p>
        <h1>Find Your Perfect Home</h1>
        <SearchMenu>
          <h4>Buy</h4>
          <h4>Rent</h4>
          <h4>Sold</h4>
        </SearchMenu>
      </Container>
    </section>
  );
};

export default Header;
