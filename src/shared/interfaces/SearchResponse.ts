export interface RestaurantResponse {
  id: number;
  logo: string;
  ratingScore: string;
  deliveryTimeMaxMinutes: string;
  link: string;
  name: string;
  coordinates: string;
  topCategories: string;
}

export interface SearchResponse {
  id: number;
  lat: string;
  lng: string;
  total: number;
  max: number;
  sort: string;
  count: number;
  data: RestaurantResponse[];
}
