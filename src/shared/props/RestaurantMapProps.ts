import Restaurant from "../interfaces/Restaurant";

export default interface RestaurantMapProps {
  restaurants: Restaurant[];
  setRestaurants: (data: Restaurant[]) => void;
  setLoading: (data: boolean) => void;
  loading: boolean;
}
