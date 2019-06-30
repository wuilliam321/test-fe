import React from 'react';
import './RestaurantMap.css'
import RestaurantsProps from '../../shared/props/restaurantsProps';

const RestaurantMap: React.FC<RestaurantsProps> = ({ restaurants }) => {
  const restaurantList = restaurants.map(restaurant => (
    <li>{restaurant.id}</li>
  ));
  return (
    <div className="RestaurantMap">
      <div className="map-container">
          Map placeholder
          <ul>{restaurantList}</ul>
      </div>
    </div>
  );
}

export default RestaurantMap;
