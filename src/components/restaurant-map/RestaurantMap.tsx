import React from "react";
import "./RestaurantMap.css";
import RestaurantsProps from "../../shared/props/RestaurantsProps";
import RestaurantMarker from "../restaurant-marker/RestaurantMarker";

const RestaurantMap: React.FC<RestaurantsProps> = ({ restaurants }) => {
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
