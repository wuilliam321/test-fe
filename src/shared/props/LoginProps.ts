import { CurrentUserState } from "../states/CurrentUserState";

export interface LoginProps {
  setLoggedIn: (data: CurrentUserState) => void;
}
