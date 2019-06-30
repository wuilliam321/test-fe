import React from "react";
import "./RestaurantItem.css";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <div className="RestaurantItem">
      <h2>{restaurant.name}</h2>
    </div>
  );
};

export default RestaurantItem;
