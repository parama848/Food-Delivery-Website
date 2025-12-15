import React from "react";
import Title from "../components/Title";
import FoodItem from "../components/FoodItem";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <div>
          <FoodItem />
        </div>
      </div>
    </>
  );
};

export default Home;
