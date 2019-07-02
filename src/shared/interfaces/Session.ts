import { UserInfo } from "./UserInfo";

export interface Session {
  loggedIn: boolean;
  userInfo?: UserInfo;
}
