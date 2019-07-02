export default interface SearchParams {
  search: {
    lat: string;
    lng: string;
    country: string;
    max?: number;
    offset?: number;
  };
}
