import React from "react";
import "./RestaurantList.css";
import RestaurantsProps from "../../shared/props/RestaurantsProps";
import RestaurantItem from "../restaurant-item/RestaurantItem";
import { debug } from "../../shared/utils";

const RestaurantList: React.FC<RestaurantsProps> = ({ restaurants }) => {
  debug("Rendering RestaurantList Component");
  const restaurantList = restaurants.map(restaurant => (
    <RestaurantItem key={restaurant.id} restaurant={restaurant} />
  ));
  return (
    <div className="RestaurantList">
      <h1>Restaurants</h1>
      {restaurantList}
    </div>
  );
};

export default RestaurantList;
