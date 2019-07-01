import React, { useEffect, useState } from "react";
import restaurantsService from "../../services/restaurant.service";
import { Coordinate } from "../../shared/interfaces/coordinate";
import Restaurant from "../../shared/interfaces/restaurant";
import SearchParams from "../../shared/interfaces/search_params";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import RestaurantMarker from "../restaurant-marker/RestaurantMarker";
import "./RestaurantMap.css";

const RestaurantMap: React.FC<RestaurantMapProps> = ({
  restaurants,
  setRestaurants
}) => {
  debug("Rendering RestaurantMap Component");
  useEffect(() => {
    const handleStatusChange = (data: Restaurant[]) => setRestaurants(data);
    const subscription = restaurantsService.restaurantsChanged$.subscribe(
      handleStatusChange
    );
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [setRestaurants]);

  const initialMapPoint: Coordinate = { lat: "0", lng: "0" };
  const [currentPoint, setCurrentPoint] = useState(initialMapPoint);
  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        debug("Geo location");
        navigator.geolocation.getCurrentPosition(function(position) {
          debug("Position", position);
          setCurrentPoint({
            lat: `${position.coords.latitude}`,
            lng: `${position.coords.longitude}`
          });
        });
      }
    };
    getCurrentPosition();
  }, []);

  useEffect(() => {
    const params: SearchParams = {
      search: {
        lat: currentPoint.lat,
        lng: currentPoint.lng,
        country: "1"
      }
    };
    restaurantsService.getRestaurants(params);
  }, [currentPoint]);

  const searchHandler = () =>
    setCurrentPoint({ lat: "-34.9158592", lng: "-56.1923705" });
  const markerList = restaurants.map(restaurant => (
    <RestaurantMarker key={restaurant.id} restaurant={restaurant} />
  ));

  return (
    <div className="RestaurantMap">
      <div className="map-container">
        Map placeholder current_point: [{currentPoint.lat}, {currentPoint.lng}]
        <button id="marker" onClick={searchHandler}>
          Run Test Search
        </button>
        {markerList}
      </div>
    </div>
  );
};

export default React.memo(RestaurantMap);
