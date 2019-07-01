import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import React from "react";
import Restaurant from "../../shared/interfaces/restaurant";
import { debug } from "../../shared/utils";

const MapWithMarker: React.FC<any> = ({
  currentPoint,
  restaurants,
  searchHandler
}) => {
  debug("Rendering MapWithMarker Component");
  debug(currentPoint, restaurants);
  const setCurrentPointHandler = (data: any) => {
    debug("Going to change current point", data);
    searchHandler({ lat: `${data.latLng.lat()}`, lng: `${data.latLng.lng()}` });
  };
  const restaurantMarkers = restaurants.map((restaurant: Restaurant) => (
    <Marker
      key={restaurant.id}
      position={{
        lat: parseFloat(restaurant.coordinates.split(",")[0]),
        lng: parseFloat(restaurant.coordinates.split(",")[1])
      }}
    />
  ));
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: -34.901733690594014,
        lng: -56.164186371121616
      }}
      onClick={setCurrentPointHandler}
    >
      {restaurantMarkers}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MapWithMarker));
