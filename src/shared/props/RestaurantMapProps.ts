import Restaurant from "../interfaces/restaurant";

export default interface RestaurantMapProps {
  restaurants: Restaurant[];
  setRestaurants: (data: Restaurant[]) => void;
}
