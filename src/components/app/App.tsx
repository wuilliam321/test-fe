import React, { useState, useEffect } from "react";
import Restaurant from "../../shared/interfaces/restaurant";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import RestaurantContainer from "../restaurant-container/RestaurantContainer";
import "./App.css";
import Login from "../login/Login";
import { LoginProps } from "../../shared/props/LoginProps";

const App: React.FC = () => {
  debug("Rendering App Component");
  const initialState: Restaurant[] = [];
  const [restaurants, setRestaurants] = useState(initialState);
  const restaurantMapProps: RestaurantMapProps = {
    restaurants: restaurants,
    setRestaurants: setRestaurants
  };
  const authorizedComponent = <RestaurantContainer {...restaurantMapProps} />;

  const [loggedIn, setLoggedIn] = useState(false);
  const loginProps: LoginProps = {
    setLoggedIn: setLoggedIn
  };
  const loginComponent = <Login {...loginProps} />;

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants App</h1>
        {loggedIn ? authorizedComponent : loginComponent}
      </header>
    </div>
  );
};

export default App;
