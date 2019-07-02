import React, { useEffect, useState } from "react";
import Restaurant from "../../shared/interfaces/Restaurant";
import { LoginProps } from "../../shared/props/LoginProps";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import Login from "../login/Login";
import RestaurantContainer from "../restaurant-container/RestaurantContainer";
import "./App.css";
import Header from "../header/Header";
import { Session } from "../../shared/interfaces/Session";

const App: React.FC = () => {
  debug("Rendering App Component");
  const initialState: Restaurant[] = [];
  const [restaurants, setRestaurants] = useState(initialState);
  const restaurantMapProps: RestaurantMapProps = {
    restaurants: restaurants,
    setRestaurants: setRestaurants
  };
  const authorizedComponent = <RestaurantContainer {...restaurantMapProps} />;

  const initialUser: Session = { loggedIn: false };
  const [currentUser, setCurrentUser] = useState(initialUser);
  const loginProps: LoginProps = {
    setLoggedIn: setCurrentUser,
    currentUser: currentUser
  };
  const loginComponent = <Login {...loginProps} />;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !currentUser.loggedIn) {
      debug("Restoring session from local storage");
      const userInfo = JSON.parse(`${localStorage.getItem("user_info")}`);
      const loggedInUser: Session = {
        loggedIn: !!token,
        userInfo: userInfo
      };
      setCurrentUser(loggedInUser);
    }
  }, [currentUser.loggedIn]);

  return (
    <div className="App">
      <header className="App-header">
        <Header {...loginProps} />
        <h2>Restaurants App</h2>
        <p>Click on the map to search for restaurants</p>
        {currentUser.loggedIn ? authorizedComponent : loginComponent}
      </header>
    </div>
  );
};

export default App;
