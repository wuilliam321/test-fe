import React from "react";
import { debug } from "../../shared/utils";
import "./Header.css";
import { LoginProps } from "../../shared/props/LoginProps";

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
  return (
    <div className="Header">
      Welcome <strong>{userName}</strong>
      {currentUser.loggedIn && (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
