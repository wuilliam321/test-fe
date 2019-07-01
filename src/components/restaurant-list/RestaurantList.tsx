import React from "react";
import RestaurantListProps from "../../shared/props/RestaurantListProps";
import { debug } from "../../shared/utils";
import RestaurantItem from "../restaurant-item/RestaurantItem";
import "./RestaurantList.css";

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
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
