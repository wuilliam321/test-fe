import React, { useState } from "react";
import Restaurant from "../../shared/interfaces/restaurants";
import RestaurantsProps from "../../shared/props/RestaurantsProps";
import { debug } from "../../shared/utils";
import RestaurantList from "../restaurant-list/RestaurantList";
import RestaurantMap from "../restaurant-map/RestaurantMap";
import "./App.css";

const App: React.FC = () => {
  debug("Rendering App Component");
  const initialState: Restaurant[] = [];
  const [restaurants, setRestaurants] = useState(initialState);

  const restaurantsProps: RestaurantsProps = {
    restaurants: restaurants
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants App</h1>
        <RestaurantMap {...restaurantsProps} />
        <RestaurantList {...restaurantsProps} />
      </header>
    </div>
  );
};

export default App;
