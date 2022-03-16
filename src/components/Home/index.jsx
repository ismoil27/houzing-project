import React from "react";
// import Navbar from "../Navbar";
import "./home.css";
import { Container, SearchMenu } from "./style";

const Home = () => {
  return (
    <section>
      <div className="header">
        <Container className="search__section">
          <p>It's great to be home!</p>
          <h1>Find Your Perfect Home</h1>
          <SearchMenu>
            <h4>Buy</h4>
            <h4>Rent</h4>
            <h4>Sold</h4>
          </SearchMenu>
        </Container>
      </div>
    </section>
  );
};

export default Home;
