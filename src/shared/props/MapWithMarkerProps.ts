import { Coordinate } from "../interfaces/Corrdinate";
import Restaurant from "../interfaces/Restaurant";

export interface MapWithMarkerProps {
  currentPoint: Coordinate;
  restaurants: Restaurant[];
  searchHandler: (point: Coordinate) => void;
}
