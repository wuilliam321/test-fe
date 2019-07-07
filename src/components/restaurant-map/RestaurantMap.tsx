import React, { useEffect, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import restaurantsService from "../../services/restaurant.service";
import { Coordinate } from "../../shared/interfaces/Corrdinate";
import Restaurant from "../../shared/interfaces/Restaurant";
import SearchParams from "../../shared/interfaces/SearchParams";
import { MapWithMarkerProps } from "../../shared/props/MapWithMarkerProps";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";
import { debug } from "../../shared/utils";
import MapWithMarker from "../map-with-marker/MapWithMarker";
import "./RestaurantMap.css";

const RestaurantMap: React.FC<RestaurantMapProps> = ({
  restaurants,
  setRestaurants,
  loading,
  setLoading
}) => {
  debug("Rendering RestaurantMap Component");

  useEffect(() => {
    const subs = restaurantsService.restaurantsChanged$.subscribe(
      (data: Restaurant[]) => setRestaurants(data)
    );
    return () => subs.unsubscribe();
  });

  const initialMapPoint: Coordinate = { lat: "0", lng: "0" };
  const [currentPoint, setCurrentPoint] = useState(initialMapPoint);
  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator && navigator.geolocation) {
        debug("Getting Geolocation Coordinates");
        navigator.geolocation.getCurrentPosition(function(position) {
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
      debug("Trying getting restaurants on currentPosition changed");
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

  const mapClicked$: Subject<Coordinate> = new Subject();
  useEffect(() => {
    const subs = mapClicked$
      .pipe(debounceTime(500))
      .subscribe((point: Coordinate) => {
        setLoading(true);
        setCurrentPoint(point);
      });
    return () => {
      subs.unsubscribe();
    };
  });

  const onClickOnMapHandler = (point: Coordinate) => {
    mapClicked$.next(point);
  };

  const loadingComponent = <div>Loading...</div>;

  const mapWithMarkerProps: MapWithMarkerProps = {
    currentPoint,
    restaurants,
    searchHandler: onClickOnMapHandler
  };

  return (
    <div className="RestaurantMap">
      {loading && loadingComponent}

      <div className="map-container">
        current_point: [{currentPoint.lat}, {currentPoint.lng}]
        <button
          id="marker"
          onClick={() =>
            onClickOnMapHandler({ lat: "-34.9156000", lng: "-56.1922000" })
          }
        >
          Run Test Search
        </button>
        <MapWithMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_MAPS_API_KEY
          }&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          {...mapWithMarkerProps}
        />
      </div>
    </div>
  );
};

export default RestaurantMap;
