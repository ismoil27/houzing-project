import React from "react";
import HomeLists from "../HomeLists";
import Login from "../Login";
import Registration from "../Registration";
// import Navbar from "../Navbar";
import "./home.css";
import { Container, SearchMenu } from "./style";

const Home = () => {
  return (
    <section>
      <div className="header">
        <Container className="search__section">
          <p className="header__p">It's great to be home!</p>
          <h1>Find Your Perfect Home</h1>
          <SearchMenu>
            <h4>Buy</h4>
            <h4>Rent</h4>
            <h4>Sold</h4>
          </SearchMenu>
        </Container>
      </div>
      <HomeLists />
      <Login />
      <Registration />
    </section>
  );
};

export default Home;
