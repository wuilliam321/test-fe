import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import Restaurant from "../../shared/interfaces/Restaurant";
import { MapWithMarkerProps } from "../../shared/props/MapWithMarkerProps";
import { debug } from "../../shared/utils";

const MapWithMarker: React.FC<MapWithMarkerProps> = ({
  currentPoint,
  restaurants,
  searchHandler
}) => {
  debug("Rendering MapWithMarker Component");

  const setCurrentPointHandler = (data: google.maps.MouseEvent) => {
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
      center={{
        lat: parseFloat(currentPoint.lat),
        lng: parseFloat(currentPoint.lng)
      }}
      onClick={setCurrentPointHandler}
    >
      {restaurantMarkers}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MapWithMarker));
