import React, { useEffect, useState } from "react";
import sessionService from "../../services/session.service";
import { SessionParams } from "../../shared/interfaces/session_params";
import { UserForm } from "../../shared/interfaces/user_form";
import { UserInfo } from "../../shared/interfaces/user_info";
import { LoginProps } from "../../shared/props/LoginProps";
import { debug } from "../../shared/utils";
import "./Login.css";

const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const initialState: UserForm = { email: "", password: "" };
  const [userForm, setUserForm] = useState(initialState);
  const [formSubmited, setFormSubmited] = useState(false);

  useEffect(() => {
    debug("Rendering Login Component");
    sessionService.sessionChanged$.subscribe((data: UserInfo) => {
      debug("Setting session");
      setLoggedIn(true);
    });

    const params: SessionParams = {
      session: {
        email: userForm.email,
        password: userForm.password
      }
    };
    formSubmited && sessionService.login(params);
  }, [formSubmited]);

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
