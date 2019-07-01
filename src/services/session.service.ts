import axios from "axios";
import { Observable, Subject } from "rxjs";
import { Session } from "../shared/interfaces/session";
import { SessionParams } from "../shared/interfaces/session_params";
import { debug } from "../shared/utils";

class SessionService {
  private API_URL = "http://localhost:3000";
  private TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNTYyMDA1NjgwfQ.xh-sfuEdeOoSnO4iIx-sXYcFjUEF1WZZlR8diJUOy3U";
  // private TOKEN = "";
  private paramsSubject$: Subject<Session> = new Subject();
  private headers = {
    Authorization: localStorage.getItem('token')
  };
  sessionChanged$: Observable<Session> = this.paramsSubject$.asObservable();

  login(params: SessionParams) {
    debug("Doing login", params);
    const data: Session = {
      email: "a@a.com",
      token: "123",
      name: "Test",
      country: "1"
    };
    localStorage.setItem("token", this.TOKEN);
    this.paramsSubject$.next(data);

    // axios
    //   .post(this.API_URL + "/login.json", params, { headers: this.headers })
    //   .then(res => {
    //     debug(res);
    //     this.paramsSubject$.next(data);
    //   })
    //   .catch(err => {
    //     debug(err);
    //   });
  }
}
export default new SessionService();
