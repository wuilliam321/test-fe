import { UserInfo } from "./UserInfo";

export interface SessionResponse {
  token: string;
  user_info: UserInfo;
}
