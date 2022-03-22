import React from "react";
import ChooseCard from "./ChooseCard";
import DiscoverListings from "./DiscoverListings";
import Hero from "./Hero";

// import "./home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <DiscoverListings />
      <ChooseCard />
    </div>
  );
};

export default Home;
