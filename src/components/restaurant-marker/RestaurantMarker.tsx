import React from "react";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";
import { debug } from "../../shared/utils";
import "./RestaurantMarker.css";

const RestaurantMarker: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  debug("Rendering RestaurantMap Component");
  return <div className="RestaurantMarker">Marker: {restaurant.name}</div>;
};

export default RestaurantMarker;
