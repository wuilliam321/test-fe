import React from "react";
import "./RestaurantMarker.css";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";

const RestaurantMarker: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <div className="RestaurantMarker">
      Marker: {restaurant.name}
    </div>
  );
};

export default RestaurantMarker;
