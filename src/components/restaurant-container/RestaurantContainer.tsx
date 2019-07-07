import React, { useEffect, useState } from "react";
import restaurantsService from "../../services/restaurant.service";
import RestaurantContainerProps from "../../shared/props/RestaurantContainerProps";
import RestaurantListProps from "../../shared/props/RestaurantListProps";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import RestaurantList from "../restaurant-list/RestaurantList";
import RestaurantMap from "../restaurant-map/RestaurantMap";
import "./RestaurantContainer.css";

const RestaurantContainer: React.FC<
  RestaurantContainerProps
> = restaurantContainerProps => {
  debug("Rendering RestaurantContainer Component");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    debug("useEffect Setting loading false when restaurnt changed");
    const subs = restaurantsService.restaurantsChanged$.subscribe(() =>
      setLoading(false)
    );
    return () => subs.unsubscribe();
  });

  const { restaurants } = restaurantContainerProps;
  const restaurantListProps: RestaurantListProps = { restaurants, loading };

  const restaurantMapProps: RestaurantMapProps = {
    ...restaurantContainerProps,
    loading,
    setLoading
  };

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
