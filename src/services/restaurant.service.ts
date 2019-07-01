import axios, { AxiosResponse } from "axios";
import { Observable, Subject } from "rxjs";
import Restaurant from "../shared/interfaces/restaurant";
import SearchParams from "../shared/interfaces/search_params";
import { SearchResponse } from "../shared/interfaces/search_response";
import { debug } from "../shared/utils";

class RestaurantService {
  private API_URL = "http://localhost:3000";
  private paramsSubject$: Subject<Restaurant[]> = new Subject();
  private headers = {
    Authorization: localStorage.getItem("token")
  };
  restaurantsChanged$: Observable<
    Restaurant[]
  > = this.paramsSubject$.asObservable();

  getRestaurants(params: SearchParams) {
    debug("Getting estaurants", params);
    axios
      .post(this.API_URL + "/searches.json", params, { headers: this.headers })
      .then((res: AxiosResponse<SearchResponse>) => {
        debug(res);
        let data: Restaurant[] = [];
        data = this.prepareDataForTeamplate(res);
        this.paramsSubject$.next(data);
      })
      .catch(err => {
        debug(err);
      });
  }

  prepareDataForTeamplate(
    response: AxiosResponse<SearchResponse>
  ): Restaurant[] {
    return response.data.data;
  }
}
export default new RestaurantService();
