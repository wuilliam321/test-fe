import React, { useEffect, useState } from "react";
import Restaurant from "../../shared/interfaces/Restaurant";
import { LoginProps } from "../../shared/props/LoginProps";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { CurrentUserState } from "../../shared/states/CurrentUserState";
import { debug } from "../../shared/utils";
import Login from "../login/Login";
import RestaurantContainer from "../restaurant-container/RestaurantContainer";
import "./App.css";

const App: React.FC = () => {
  debug("Rendering App Component");
  const initialState: Restaurant[] = [];
  const [restaurants, setRestaurants] = useState(initialState);
  const restaurantMapProps: RestaurantMapProps = {
    restaurants: restaurants,
    setRestaurants: setRestaurants
  };
  const authorizedComponent = <RestaurantContainer {...restaurantMapProps} />;

  const initialUserState: CurrentUserState = { loggedIn: false };
  const [userState, setUserState] = useState(initialUserState);
  const loginProps: LoginProps = {
    setLoggedIn: setUserState
  };
  const loginComponent = <Login {...loginProps} />;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = JSON.parse(`${localStorage.getItem("user_info")}`);
    const currentUserStateData: CurrentUserState = {
      loggedIn: !!token,
      userInfo: userInfo
    };
    token && setUserState(currentUserStateData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants App</h1>
        {userState.loggedIn ? authorizedComponent : loginComponent}
      </header>
    </div>
  );
};

export default App;
