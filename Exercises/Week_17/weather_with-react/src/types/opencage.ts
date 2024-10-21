export interface IResult {
  bounds: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
  components: {
    "ISO_3166-1_alpha-2": string;
    "ISO_3166-1_alpha-3": string;
    continent: string;
    city?: string;
    country_code: string;
    country: string;
    _category: string;
    _type: string;
  };
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  };
}
