import React from "react";
import RestaurantsProps from "../../shared/props/RestaurantsProps";
import { debug } from "../../shared/utils";
import RestaurantMarker from "../restaurant-marker/RestaurantMarker";
import "./RestaurantMap.css";

const RestaurantMap: React.FC<RestaurantsProps> = ({ restaurants }) => {
  debug("Rendering RestaurantMap Component");
  const markerList = restaurants.map(restaurant => (
    <RestaurantMarker key={restaurant.id} restaurant={restaurant} />
  ));
  return (
    <div className="RestaurantMap">
      <div className="map-container">
        Map placeholder
        {markerList}
      </div>
    </div>
  );
};

export default RestaurantMap;
