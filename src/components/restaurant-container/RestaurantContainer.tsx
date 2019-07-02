import React from "react";
import { debug } from "../../shared/utils";
import RestaurantList from "../restaurant-list/RestaurantList";
import RestaurantMap from "../restaurant-map/RestaurantMap";
import "./RestaurantContainer.css";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import RestaurantListProps from "../../shared/props/RestaurantListProps";

const RestaurantContainer: React.FC<
  RestaurantMapProps
> = restaurantMapProps => {
  const { restaurants } = restaurantMapProps;
  const restaurantListProps: RestaurantListProps = { restaurants: restaurants };
  debug("Rendering RestaurantContainer Component");
  return (
    <div className="RestaurantContainer">
      <div className="half-size">
        <RestaurantMap {...restaurantMapProps} />
      </div>
      <div className="half-size">
        <RestaurantList {...restaurantListProps} />
      </div>
    </div>
  );
};

export default RestaurantContainer;
