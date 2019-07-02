import { UserInfo } from "./user_info";

export interface SessionResponse {
  token: string;
  user_info: UserInfo;
}
