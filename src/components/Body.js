import { restarauntList } from "../utils/mockData";
import RestrauntCard from "./RestaurantCard";
import React from "react";
import { useState } from "react";

const Body = () => {
  const [listofrestaurants, setListOfRestaurants] = useState(restarauntList);
  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofrestaurants.filter((ele) => {
              return parseInt(ele.data.avgRating) < 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {listofrestaurants.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Body;
