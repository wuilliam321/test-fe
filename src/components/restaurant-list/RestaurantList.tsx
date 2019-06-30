import React from "react";
import "./RestaurantList.css";
import RestaurantsProps from "../../shared/props/restaurantsProps";

const RestaurantList: React.FC<RestaurantsProps> = ({ restaurants }) => {
  const restaurantList = restaurants.map(restaurant => (
    <li>{restaurant.id}</li>
  ));
  return (
    <div className="RestaurantList">
      <h1>Restaurants</h1>
      <ul>{restaurantList}</ul>
    </div>
  );
};

export default RestaurantList;
