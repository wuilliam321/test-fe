import axios, { AxiosResponse } from "axios";
import { Observable, Subject } from "rxjs";
import { SessionParams } from "../shared/interfaces/session_params";
import { debug } from "../shared/utils";
import { SessionResponse } from "../shared/interfaces/session_response";
import { UserInfo } from "../shared/interfaces/user_info";

class SessionService {
  private API_URL = process.env.REACT_APP_API_URL;
  private paramsSubject$: Subject<UserInfo> = new Subject();
  sessionChanged$: Observable<UserInfo> = this.paramsSubject$.asObservable();

  login(params: SessionParams) {
    debug("Trying to login", params);
    axios
      .post(this.API_URL + "/login.json", params)
      .then((res: AxiosResponse<SessionResponse>) => {
        debug(res);
        if (res && res.data && res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_info", JSON.stringify(res.data.user_info));
          this.paramsSubject$.next(res.data.user_info);
        }
      })
      .catch(err => {
        debug(err);
      });
  }
}
export default new SessionService();
