import React from "react";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";
import { debug } from "../../shared/utils";
import "./RestaurantItem.css";

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  debug("Rendering RestaurantItem Component");
  return (
    <div className="RestaurantItem">
      <h2>{restaurant.name}</h2>
    </div>
  );
};

export default RestaurantItem;
