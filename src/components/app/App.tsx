import React, { useState } from 'react';
import './App.css';
import RestaurantMap from '../restaurant-map/RestaurantMap';
import RestaurantList from '../restaurant-list/RestaurantList';
import RestaurantsProps from '../../shared/props/restaurantsProps';

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState([])
  
  const restaurantsProps: RestaurantsProps = {
    restaurants: restaurants
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants App</h1>
        <RestaurantMap {...restaurantsProps} />
        <RestaurantList {...restaurantsProps} />
      </header>
    </div>
  );
}

export default App;
