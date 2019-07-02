import React, { useEffect, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
import restaurantsService from "../../services/restaurant.service";
import { Coordinate } from "../../shared/interfaces/Corrdinate";
import Restaurant from "../../shared/interfaces/Restaurant";
import SearchParams from "../../shared/interfaces/SearchParams";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import MapWithMarker from "./MapWithMarker";
import "./RestaurantMap.css";

const RestaurantMap: React.FC<RestaurantMapProps> = ({
  restaurants,
  setRestaurants
}) => {
  useEffect(() => {
    debug("Rendering RestaurantMap Component");
    restaurantsService.restaurantsChanged$.subscribe((data: Restaurant[]) => {
      debug("Setting restaurants");
      setRestaurants(data);
    });
  }, [setRestaurants]);

  const initialMapPoint: Coordinate = { lat: "0", lng: "0" };
  const [currentPoint, setCurrentPoint] = useState(initialMapPoint);
  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          debug("Geocolation", position);
          setCurrentPoint({
            lat: `${position.coords.latitude}`,
            lng: `${position.coords.longitude}`
          });
        });
      }
    };
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (currentPoint.lat !== "0" && currentPoint.lng !== "0") {
      const params: SearchParams = {
        search: {
          lat: currentPoint.lat,
          lng: currentPoint.lng,
          country: "1"
        }
      };
      restaurantsService.getRestaurants(params);
    }
  }, [currentPoint]);

  let mapClicked$ = new Subject();
  useEffect(() => {
    const subs = mapClicked$
      .pipe(
        tap(() => debug("Point changed!")),
        debounceTime(500)
      )
      .subscribe((point: any) => {
        setCurrentPoint(point);
      });
    return () => {
      subs.unsubscribe();
    };
  });

  const [loading, setLoading] = useState(false);
  const loadingComponent = <div>Loading...</div>;
  useEffect(() => {
    debug("Set loading true on point change");
    setLoading(true);

    debug("Set loading false on set restaurants");
    restaurantsService.restaurantsChanged$.subscribe(() => setLoading(false));
  }, [currentPoint]);

  const onClickOnMapHandler = (point: any) => {
    mapClicked$.next(point);
  };

  return (
    <div className="RestaurantMap">
      <div className="map-container">
        current_point: [{currentPoint.lat}, {currentPoint.lng}]
        <button
          id="marker"
          onClick={() => {
            onClickOnMapHandler({ lat: "-34.9156000", lng: "-56.1922000" });
          }}
        >
          Run Test Search ({loading}) {loading && loadingComponent}
        </button>
        <MapWithMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_MAPS_API_KEY
          }&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          currentPoint={currentPoint}
          restaurants={restaurants}
          searchHandler={onClickOnMapHandler}
        />
      </div>
    </div>
  );
};

export default RestaurantMap;
