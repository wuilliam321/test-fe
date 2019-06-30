import React, { useState } from "react";
import "./App.css";
import RestaurantMap from "../restaurant-map/RestaurantMap";
import RestaurantList from "../restaurant-list/RestaurantList";
import RestaurantsProps from "../../shared/props/RestaurantsProps";
import Restaurant from "../../shared/interfaces/restaurants";

const App: React.FC = () => {
  const initialState: Restaurant[] = [
    {
      id: 1,
      logo: "Logo url",
      ratingScore: "1",
      deliveryTimeMaxMinutes: "45",
      link: "http://something",
      name: "Restaurant One",
      coordinates: "-30",
      topCategories: "56"
    }
  ];
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
