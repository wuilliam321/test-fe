import Restaurant from "../interfaces/Restaurant";

export default interface RestaurantContainerProps {
  restaurants: Restaurant[];
  setRestaurants: (data: Restaurant[]) => void;
}
