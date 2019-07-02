import React, { useEffect, useState } from "react";
import sessionService from "../../services/session.service";
import { SessionParams } from "../../shared/interfaces/SessionParams";
import { UserForm } from "../../shared/interfaces/UserForm";
import { UserInfo } from "../../shared/interfaces/UserInfo";
import { LoginProps } from "../../shared/props/LoginProps";
import { debug } from "../../shared/utils";
import "./Login.css";

const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const initialState: UserForm = { email: "", password: "" };
  const [userForm, setUserForm] = useState(initialState);
  const [formSubmited, setFormSubmited] = useState(false);

  useEffect(() => {
    debug("useEffect Rendering Login Component");
    if (formSubmited && userForm.email && userForm.password) {
      debug("useEffect Form changed in some way");
      sessionService.sessionChanged$.subscribe((data: UserInfo) => {
        debug("useEffect Setting session");
        localStorage.setItem("user_info", JSON.stringify(data));
        setLoggedIn({ loggedIn: true, userInfo: data });
      });

      const params: SessionParams = {
        session: {
          email: userForm.email,
          password: userForm.password
        }
      };
      sessionService.login(params);
    }
  }, [formSubmited, userForm.email, userForm.password, setLoggedIn]);

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmited(true);
  };

  const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setUserForm(prevState => ({ ...prevState, email: e.target.value }));
  };

  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setUserForm(prevState => ({ ...prevState, password: e.target.value }));
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <form onSubmit={submitHandler}>
          <label>
            Email:
            <input
              type="text"
              value={userForm.email}
              onChange={changeEmailHandler}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={userForm.password}
              onChange={changePasswordHandler}
            />
          </label>
          <div className="actions">
            <button type="submit" disabled={formSubmited}>
              Let me in!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
