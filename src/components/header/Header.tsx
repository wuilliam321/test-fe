import React from "react";
import { LoginProps } from "../../shared/props/LoginProps";
import { debug } from "../../shared/utils";
import "./Header.css";

const Header: React.FC<LoginProps> = ({ setLoggedIn, currentUser }) => {
  debug("Rendering Header Component");
  const userName =
    (currentUser &&
      currentUser.loggedIn &&
      currentUser.userInfo &&
      `${currentUser.userInfo.name} ${currentUser.userInfo.lastName}`) ||
    "Guess";

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn({ loggedIn: false, userInfo: undefined });
  };

  const logoutButton = (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );

  return (
    <div className="Header">
      Welcome <strong>{userName}</strong>
      {currentUser.loggedIn && logoutButton}
    </div>
  );
};

export default Header;
