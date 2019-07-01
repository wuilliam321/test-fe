import React, { useState } from "react";
import Restaurant from "../../shared/interfaces/restaurant";
import RestaurantListProps from "../../shared/props/RestaurantListProps";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import RestaurantList from "../restaurant-list/RestaurantList";
import RestaurantMap from "../restaurant-map/RestaurantMap";
import "./App.css";

const App: React.FC = () => {
  debug("Rendering App Component");
  const initialState: Restaurant[] = [];
  const [restaurants, setRestaurants] = useState(initialState);
  const restaurantMapProps: RestaurantMapProps = {
    restaurants: restaurants,
    setRestaurants: setRestaurants
  };
  const restaurantListProps: RestaurantListProps = { restaurants: restaurants };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants App</h1>
        <div className="half-size">
          <RestaurantMap {...restaurantMapProps} />
        </div>
        <div className="half-size">
          <RestaurantList {...restaurantListProps} />
        </div>
      </header>
    </div>
  );
};

export default App;
