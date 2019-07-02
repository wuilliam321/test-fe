import { Session } from "../interfaces/Session";

export interface LoginProps {
  setLoggedIn: (data: Session) => void;
  currentUser: Session
}
