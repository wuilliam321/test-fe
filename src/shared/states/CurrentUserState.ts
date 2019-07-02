import { UserInfo } from "../interfaces/UserInfo";

export interface CurrentUserState {
  loggedIn: boolean;
  userInfo?: UserInfo;
}
